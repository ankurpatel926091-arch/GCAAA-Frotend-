import { useState, useMemo, useEffect } from "react";
import {
  Search,
  GraduationCap,
  Calendar,
  RefreshCw,
  ChevronDown,
  ArrowUpDown,
  Download,
  AlertCircle,
  HeartHandshake,
  Loader2,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { fetchBatches, fetchBatchFilterOptions } from "../Api/batchesApi";
import buildingHeroImg from "../assets/images/GCAAA_college_building.jpg";

// Helper: Extract numeric year or batch label
const extractYear = (yearStr) => {
  if (!yearStr) return "";
  const str = yearStr.toString().trim();
  if (/faculty/i.test(str)) return "Faculty";
  const matches = str.match(/\d{4}/g);
  if (matches && matches.length > 1) return str;
  if (matches && matches.length === 1) return matches[0];
  return str
    .replace(/prior\s*to\s*/gi, "")
    .replace(/before\s*/gi, "")
    .trim();
};

export const AlumniDataListPage = () => {
  // Mene yahan hook hata kar direct 3 kar diya hai, ab kabhi 1 nahi hoga
  const responsiveCols = 3; 

  // Active filter states
  const [activeTab, setActiveTab] = useState("all");
  const [selectedYear, setSelectedYear] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("createdAt-desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);

  // Filter panel visibility (closed by default)
  const [showFilters, setShowFilters] = useState(false);

  // Server-side paginated data state
  const [records, setRecords] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const [cohorts, setCohorts] = useState([]);
  const [cohortCounts, setCohortCounts] = useState({});
  const [years, setYears] = useState([]);
  const [totalBatchCount, setTotalBatchCount] = useState(0);
  const [loadError, setLoadError] = useState("");

  // Load the available cohort and year filters from the batches collection.
  useEffect(() => {
    let isMounted = true;

    const loadFilterOptions = async () => {
      try {
        const res = await fetchBatchFilterOptions();
        if (isMounted && res.success && res.data) {
          setCohorts(res.data.cohorts || []);
          setYears(res.data.years || []);
          setTotalBatchCount(res.data.total || 0);
          setCohortCounts(
            Object.fromEntries(
              (res.data.cohortCounts || []).map(({ _id, count }) => [
                _id,
                count,
              ])
            )
          );
        }
      } catch (err) {
        console.error("Failed to load batch filters from backend:", err);
        if (isMounted)
          setLoadError("Batch filters could not be loaded. Please try again.");
      }
    };

    loadFilterOptions();
    return () => {
      isMounted = false;
    };
  }, []);

  // Fetch paginated records directly from the MongoDB batches collection.
  useEffect(() => {
    let isMounted = true;

    const loadRecords = async () => {
      setLoading(true);
      setLoadError("");
      try {
        const params = {
          page: currentPage,
          limit: itemsPerPage,
        };

        if (activeTab !== "all") params.cohort = activeTab;
        if (selectedYear !== "ALL") {
          params.batch = selectedYear;
        }

        if (searchQuery.trim()) {
          params.search = searchQuery.trim();
        }

        const [sortField, order] = sortBy.split("-");
        params.sortBy = sortField;
        params.order = order;

        const res = await fetchBatches(params);

        if (isMounted && res.success) {
          setRecords(res.data || []);
          setTotalItems(res.total || 0);
          setTotalPages(res.totalPages || 1);
        } else if (isMounted) {
          setRecords([]);
          setTotalItems(0);
          setTotalPages(1);
          setLoadError(res.message || "Batch records could not be loaded.");
        }
      } catch (err) {
        console.error(
          "Failed to fetch records from the batches collection:",
          err
        );
        if (isMounted) {
          setRecords([]);
          setTotalItems(0);
          setTotalPages(1);
          setLoadError(
            err.friendlyMessage ||
              "Batch records could not be loaded. Please try again."
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    const debounceTimer = setTimeout(
      () => {
        loadRecords();
      },
      searchQuery ? 250 : 0
    );

    return () => {
      isMounted = false;
      clearTimeout(debounceTimer);
    };
  }, [activeTab, selectedYear, searchQuery, sortBy, currentPage, itemsPerPage]);

  const cohortTabs = [
    { id: "all", label: "ALL BATCHES" },
    ...cohorts.map((cohort) => ({ id: cohort, label: cohort })),
  ];
  const currentCohortCount =
    activeTab === "all" ? totalBatchCount : cohortCounts[activeTab];

  // Distribute the fetched records across responsive columns (Always 3)
  const columnsData = useMemo(() => {
    const numCols = responsiveCols;
    const total = records.length;
    if (total === 0) return Array.from({ length: numCols }, () => []);

    const baseSize = Math.floor(total / numCols);
    const remainder = total % numCols;
    const cols = [];
    let startIndex = 0;

    for (let i = 0; i < numCols; i++) {
      const size = baseSize + (i < remainder ? 1 : 0);
      cols.push(records.slice(startIndex, startIndex + size));
      startIndex += size;
    }
    return cols;
  }, [records, responsiveCols]);

  // Dynamic pagination range window
  const paginationRange = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const range = [];
    if (currentPage <= 4) {
      range.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      range.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      range.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }
    return range;
  }, [currentPage, totalPages]);

  // Export to CSV directly
  const handleExportCSV = async () => {
    try {
      const params = {
        limit: 200,
      };
      if (activeTab !== "all") params.cohort = activeTab;
      if (selectedYear !== "ALL") params.batch = selectedYear;
      if (searchQuery.trim()) params.search = searchQuery.trim();

      const firstPage = await fetchBatches({ ...params, page: 1 });
      const dataToExport = [...(firstPage.data || [])];
      for (let page = 2; page <= (firstPage.totalPages || 1); page += 1) {
        const res = await fetchBatches({ ...params, page });
        dataToExport.push(...(res.data || []));
      }

      if (!dataToExport.length) return;
      const headers = [
        "Sr No.",
        "Year",
        "Name",
        "Course",
        "Cohort",
        "Payment Status",
      ];
      const rows = dataToExport.map((d, index) => [
        index + 1,
        `"${extractYear(d.year)}"`,
        `"${(d.name || "").replace(/"/g, '""')}"`,
        `"${(d.course || "").replace(/"/g, '""')}"`,
        `"${(d.cohort || "").replace(/"/g, '""')}"`,
        d.isPaid ? "Paid" : "Pending",
      ]);
      const csvContent =
        "data:text/csv;charset=utf-8," +
        [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute(
        "download",
        `GCAAA_Batches_${activeTab}_${selectedYear}_${Date.now()}.csv`
      );
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Batch CSV export failed:", err);
      setLoadError(
        err.friendlyMessage || "Batch CSV export failed. Please try again."
      );
    }
  };

  const numFont = {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontVariantNumeric: "lining-nums tabular-nums",
  };

  // Shared pagination renderer
  const renderPagination = () => (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2 flex-wrap justify-center text-xs text-neutral-600">
        <span>Show per page:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
          style={numFont}
          className="border border-neutral-300 rounded px-2 py-1 bg-white font-semibold text-neutral-800 cursor-pointer"
        >
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
        </select>
        <span className="text-neutral-400">|</span>
        <span style={numFont}>
          Showing{" "}
          {totalItems > 0
            ? Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)
            : 0}{" "}
          to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
          batches
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-2.5 py-1 border border-neutral-300 rounded hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-xs cursor-pointer"
        >
          Prev
        </button>
        {paginationRange.map((p, idx) => {
          if (p === "...") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="px-1.5 text-neutral-400 text-xs"
              >
                ...
              </span>
            );
          }
          return (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`w-7 h-7 rounded text-xs font-bold transition-colors cursor-pointer ${
                currentPage === p
                  ? "bg-[#B70D2B] text-white"
                  : "border border-neutral-300 hover:bg-neutral-100 text-neutral-700"
              }`}
            >
              {p}
            </button>
          );
        })}
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-2.5 py-1 border border-neutral-300 rounded hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-xs cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-20 font-sans">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-12 sm:py-16 flex items-center justify-center border-b border-neutral-200">
        <img
          src={buildingHeroImg}
          alt="Government College of Architecture Campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 text-center text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold backdrop-blur-sm mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-red-400" />
            <span>GCA Alumni Association</span>
            <span className="text-white/40">•</span>
            <span className="text-red-300">Official Archives</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase font-serif drop-shadow-md">
            All Batches of GCAAA
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-neutral-300 mt-2.5 font-semibold">
            <Link to="/" className="hover:text-red-400 transition-colors">
              HOME
            </Link>
            <span className="text-red-500 font-bold">—</span>
            <span className="text-red-400">ALUMNI DIRECTORY</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-14 pt-6 sm:pt-8">
        {/* Tabs Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
    {cohortTabs.map((tab) => {
      const isActive = activeTab === tab.id;

      // YAHAN FIX HAI: 'all' tab ke liye totalBatchCount use karein
      const count = tab.id === "all" ? totalBatchCount : cohortCounts[tab.id];

      return (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            setSelectedYear("ALL");
            setSearchQuery("");
            setCurrentPage(1);
          }}
          className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            isActive
              ? "bg-[#B70D2B] text-white shadow-sm"
              : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200/80"
          }`}
        >
          <span>{tab.label}</span>
          <span
            style={numFont}
            className={`text-[11px] px-2 py-0.5 rounded-full font-black ${
              isActive
                ? "bg-white/20 text-white"
                : "bg-neutral-200 text-neutral-700"
            }`}
          >
            {count !== undefined && count !== null ? count : "..."}
          </span>
        </button>
      );
    })}
  </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setShowFilters((v) => !v)}
              className={`inline-flex items-center justify-center p-2.5 rounded-lg transition-all cursor-pointer shadow-sm active:scale-95 border ${
                showFilters
                  ? "bg-[#B70D2B] text-white border-[#B70D2B]"
                  : "bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-100"
              }`}
              title={showFilters ? "Hide filters" : "Show filters"}
            >
              {showFilters ? (
                <X className="w-4 h-4" />
              ) : (
                <SlidersHorizontal className="w-4 h-4" />
              )}
            </button>

            {/* <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <Download className="w-4 h-4 text-red-400" />
              <span>Export CSV</span>
            </button> */}
          </div>
        </div>

        {/* Collapsible Filters Card */}
        {showFilters && (
          <div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-5 shadow-xs mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-2 lg:col-span-5 relative">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  style={numFont}
                  placeholder="Search batch name, year, course, or cohort..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:border-[#B70D2B] focus:ring-1 focus:ring-[#B70D2B] bg-white"
                />
              </div>

              <div className="sm:col-span-1 lg:col-span-3">
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#B70D2B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={selectedYear}
                    onChange={(e) => {
                      setSelectedYear(e.target.value);
                      setCurrentPage(1);
                    }}
                    style={numFont}
                    className="w-full pl-9 pr-8 py-2.5 rounded-lg border border-neutral-300 text-xs sm:text-sm font-semibold text-neutral-800 focus:outline-none focus:border-[#B70D2B] bg-white appearance-none cursor-pointer"
                  >
                    <option value="ALL">
                      All Batches ({currentCohortCount || 0} records)
                    </option>
                    {years.map((yr) => (
                      <option key={yr} value={yr}>
                        {extractYear(yr)} ({yr})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="sm:col-span-1 lg:col-span-3">
                <div className="relative">
                  <ArrowUpDown className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-9 pr-8 py-2.5 rounded-lg border border-neutral-300 text-xs sm:text-sm font-semibold text-neutral-800 focus:outline-none focus:border-[#B70D2B] bg-white appearance-none cursor-pointer"
                  >
                    <option value="createdAt-desc">Sort: Recently Added</option>
                    <option value="year-asc">Sort: Year (Oldest First)</option>
                    <option value="year-desc">Sort: Year (Newest First)</option>
                    <option value="name-asc">Sort: Name (A → Z)</option>
                    <option value="name-desc">Sort: Name (Z → A)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="sm:col-span-2 lg:col-span-1 flex items-center justify-end">
                <button
                  onClick={() => {
                    setSelectedYear("ALL");
                    setSearchQuery("");
                    setSortBy("createdAt-desc");
                    setCurrentPage(1);
                  }}
                  title="Reset all filters"
                  className="w-full lg:w-auto p-2.5 rounded-lg border border-neutral-300 hover:bg-neutral-100 text-neutral-600 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <RefreshCw
                    className={`w-4 h-4 ${loading ? "animate-spin text-[#B70D2B]" : ""}`}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 mt-3 border-t border-neutral-100 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-neutral-500 font-semibold">Active:</span>
                <span className="px-2.5 py-0.5 rounded-md bg-neutral-900 text-white font-bold text-[11px]">
                  {selectedYear === "ALL"
                    ? "All Batches"
                    : extractYear(selectedYear) || selectedYear}
                </span>
                {searchQuery && (
                  <span className="px-2.5 py-0.5 rounded-md bg-red-100 text-red-800 font-bold text-[11px]">
                    &quot;{searchQuery}&quot;
                  </span>
                )}
              </div>
              <div className="text-neutral-500 font-medium text-xs">
                Showing{" "}
                <strong className="text-neutral-900 font-bold">
                  {records.length}
                </strong>{" "}
                of{" "}
                <strong className="text-neutral-900 font-bold">
                  {totalItems}
                </strong>{" "}
                batches
              </div>
            </div>
          </div>
        )}

        {/* Data Tables */}
        <div className="space-y-4">
          {loading ? (
            <div className="bg-white rounded-xl border border-neutral-200 py-16 text-center text-neutral-500 shadow-xs">
              <Loader2 className="w-8 h-8 text-[#B70D2B] animate-spin mx-auto mb-2" />
              <p className="font-semibold text-sm">
                Loading batch records from MongoDB...
              </p>
            </div>
          ) : records.length > 0 ? (
            /* Force 3 columns grid layout */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {columnsData.map((colItems, colIdx) => (
                <div
                  key={`col-${responsiveCols}-${colIdx}`}
                  className="bg-white rounded-xl border border-neutral-200 shadow-xs overflow-hidden flex flex-col"
                >
                  <div className="overflow-x-auto w-full">
                    <table className="w-full table-fixed min-w-[320px] text-xs sm:text-sm border-collapse">
                      <thead className="bg-[#111827] text-white uppercase font-black text-[11px] tracking-wider border-b border-neutral-800">
                        <tr>
                          <th className="py-3.5 px-3 w-[15%] text-left whitespace-nowrap">
                            SR NO.
                          </th>
                          <th className="py-3.5 px-3 w-[25%] text-left whitespace-nowrap">
                            YEAR
                          </th>
                          <th className="py-3.5 px-3 w-[60%] text-left whitespace-nowrap">
                            NAME
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 text-neutral-800">
                        {colItems.map((batch, idx) => {
                          const globalIndex =
                            (currentPage - 1) * itemsPerPage +
                            (colIdx === 0 ? 0 : columnsData[0].length * colIdx) +
                            idx +
                            1;
                          const displayYear = extractYear(batch.year);

                          return (
                            <tr
                              key={
                                batch._id || `${batch.name}-${batch.year}-${idx}`
                              }
                              className="hover:bg-red-50/40 transition-colors"
                            >
                              <td
                                style={numFont}
                                className="py-2.5 px-3 text-left font-bold text-neutral-400 whitespace-nowrap"
                              >
                                {globalIndex}
                              </td>

                              <td className="py-2.5 px-3 text-left whitespace-nowrap">
                                {displayYear ? (
                                  <span
                                    style={numFont}
                                    className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-black bg-neutral-100 border border-neutral-200 text-neutral-900 whitespace-nowrap"
                                  >
                                    {displayYear}
                                  </span>
                                ) : null}
                              </td>

                              <td className="py-2.5 px-3 font-bold text-neutral-900 text-left">
                                <span
                                  className="block truncate"
                                  title={batch.name}
                                >
                                  {batch.name}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-neutral-200 py-12 text-center text-neutral-500 shadow-xs">
              <AlertCircle className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
              <p className="font-semibold text-sm">
                {loadError || "No batches found matching the selected filters."}
              </p>
              {!loadError && (
                <p className="text-xs text-neutral-400 mt-1">
                  Try changing the cohort/year filter or clear the search box.
                </p>
              )}
            </div>
          )}

          {/* Bottom Pagination Bar */}
          {totalItems > 0 && totalPages > 1 && (
            <div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-5 shadow-xs">
              {renderPagination()}
            </div>
          )}

          {/* Bottom Status Note */}
          <div className="rounded-xl p-3.5 bg-neutral-900 text-neutral-300 text-center text-xs flex items-center justify-center gap-2 shadow-xs">
            <HeartHandshake className="w-4 h-4 text-red-500 shrink-0" />
            <span>
              <strong>{totalItems} Batch Records</strong> loaded from the
              MongoDB batches collection.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
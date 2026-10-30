import { useState, useEffect } from 'react';
import {
  ClipboardList,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  X,
  Loader2,
} from 'lucide-react';
import electionBannerImg from '@/assets/images/election_notice_banner.webp';
import electionNoticeImg from '@/assets/images/election_notice_banner1.webp';
import { createWithdrawal } from '@/api/withdrawal.api';

const electionDocuments = {
  electionNotice: {
    title: 'Election Notice',
    type: 'image',
    url: electionNoticeImg,
    downloadName: 'election_notice_banner1.webp',
  },
  participationList: {
    title: 'Participation List',
    type: 'pdf',
    url: `${import.meta.env.BASE_URL}final nomination 25.pdf`,
    downloadName: 'final nomination 25.pdf',
  },
  scrutinyList: {
    title: 'Scrutiny List',
    type: 'pdf',
    url: `${import.meta.env.BASE_URL}Nomination list after Scrutiny.pdf`,
    downloadName: 'Nomination list after Scrutiny.pdf',
  },
  finalNominationsList: {
    title: 'Final Nominations List',
    type: 'pdf',
    url: `${import.meta.env.BASE_URL}final Nominations 28 oct2026.pdf`,
    downloadName: 'final Nominations 28 oct2026.pdf',
  },
  voterDirectory: {
    title: 'Voter-Directory',
    type: 'pdf',
    url: `${import.meta.env.BASE_URL}Voter-Directory (3).pdf`,
    downloadName: 'Voter-Directory (3).pdf',
  },
};

const electionPosts = [
  'President ',
  'Vice President ',
  'General Secretary',
  'Joint Secretary ',
  'Treasurer ',
  'Executive Member (i) ',
  'Executive Member (ii) ',
  'Executive Member (iii) ',
];

export const ElectionNominationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [withdrawalSubmitted, setWithdrawalSubmitted] = useState(false);

  // --- New states for withdrawal form ---
  const [signatureFile, setSignatureFile] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Show popup automatically whenever the page loads or refreshes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const scrollY = window.scrollY;
    const previousBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      Object.assign(document.body.style, previousBodyStyles);
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedDocument) {
        setSelectedDocument(null);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedDocument]);

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setIsOpen(false);
  };

  const openElectionDocument = (document) => {
    if (document.type === 'pdf' && window.matchMedia('(max-width: 767px)').matches) {
      const pdfWindow = window.open(document.url, '_blank');
      if (pdfWindow) {
        pdfWindow.opener = null;
        return;
      }
    }

    setSelectedDocument(document);
  };

  // --- Signature file → base64 preview ---
  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setSignatureFile(null);
      setSignaturePreview('');
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file for signature.');
      e.target.value = '';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Signature image size must be less than 5MB.');
      e.target.value = '';
      return;
    }

    setSignatureFile(file);

    const reader = new FileReader();
    reader.onloadend = () => setSignaturePreview(reader.result);
    reader.readAsDataURL(file);
  };

  // --- Withdrawal form submit with API ---
  const handleWithdrawalSubmit = async (event) => {
    event.preventDefault();
    setSubmitError('');

    if (!signaturePreview) {
      setSubmitError('Please upload your signature image.');
      return;
    }

    setIsSubmitting(true);

    try {
      const form = event.target;
      const payload = {
        candidateName: form.candidateName.value.trim(),
        postNominated: form.postNominated.value.trim(),
        proposerName: form.proposerName.value.trim(),
        seconderName: form.seconderName.value.trim(),
        candidateAddress: form.candidateAddress.value.trim(),
        signature: signaturePreview, // base64 data URI
      };

      const data = await createWithdrawal(payload);

      if (data.success) {
        setWithdrawalSubmitted(true);
        form.reset();
        setSignatureFile(null);
        setSignaturePreview('');
      } else {
        setSubmitError(data.message || 'Failed to submit withdrawal.');
      }
    } catch (err) {
      console.error('Withdrawal submit error:', err);
      setSubmitError(
        err?.response?.data?.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form state when user closes the form modal
  const closeFormModal = () => {
    setSelectedDocument(null);
    setSignatureFile(null);
    setSignaturePreview('');
    setSubmitError('');
    setWithdrawalSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/55 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Card Container */}
      <div
        className="relative w-auto max-w-[min(94vw,500px)] bg-neutral-950 text-white rounded-2xl shadow-2xl border border-neutral-700/90 overflow-hidden flex flex-col max-h-[96vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Header Band */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-red-600 to-[#1A365D] shrink-0" />

        {/* Modal Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 z-30 w-8 h-8 rounded-full bg-black/80 hover:bg-red-600 text-neutral-200 hover:text-white flex items-center justify-center transition-all shadow-xl backdrop-blur-md border border-white/20 hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Close Pop-up"
          title="Close Popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Banner Image Area */}
        <div className="relative w-full bg-white p-0 m-0 overflow-hidden flex items-center justify-center shrink min-h-0">
          <img
            src={electionBannerImg}
            alt="GCAAA Executive Body Election 2026-2028 Official Notice & Schedule"
            className="w-auto h-auto max-h-[calc(94vh-190px)] max-w-full object-contain block select-none mx-auto"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 p-3 sm:p-3.5 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-t border-neutral-800 shrink-0">
          <button
            onClick={() => setSelectedDocument(electionDocuments.electionNotice)}
            className="flex items-center justify-center gap-2 rounded-lg border border-blue-400/40 bg-blue-950/60 px-2 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-blue-900/70"
          >
            <ImageIcon className="h-4 w-4 shrink-0" />
            Election Notice
          </button>
          <button
            onClick={() => openElectionDocument(electionDocuments.participationList)}
            className="flex items-center justify-center gap-2 rounded-lg border border-red-400/40 bg-red-950/60 px-2 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-red-900/70"
          >
            <FileText className="h-4 w-4 shrink-0" />
            Participation List
          </button>
          <button
            onClick={() => openElectionDocument(electionDocuments.scrutinyList)}
            className="flex items-center justify-center gap-2 rounded-lg border border-red-400/40 bg-red-950/60 px-2 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-red-900/70"
          >
            <ClipboardList className="h-4 w-4 shrink-0" />
            Scrutiny List
          </button>
          <button
            onClick={() => setSelectedDocument({ type: 'form', title: 'Withdrawal Form' })}
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-500/60 bg-neutral-800 px-2 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-neutral-700"
          >
            <FileText className="h-4 w-4 shrink-0" />
            Withdrawal Form
          </button>
          <button
            onClick={() => openElectionDocument(electionDocuments.finalNominationsList)}
            className="flex items-center justify-center gap-2 rounded-lg border border-red-400/40 bg-red-950/60 px-2 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-red-900/70"
          >
            <FileText className="h-4 w-4 shrink-0" />
            Final Nominations List
          </button>
          <button
            onClick={() => openElectionDocument(electionDocuments.voterDirectory)}
            className="flex items-center justify-center gap-2 rounded-lg border border-red-400/40 bg-red-950/60 px-2 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-red-900/70"
          >
            <FileText className="h-4 w-4 shrink-0" />
            Voter-Directory
          </button>
        </div>
      </div>

      {selectedDocument && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6"
          onClick={(event) => {
            event.stopPropagation();
            closeFormModal();
          }}
          aria-modal="true"
          role="dialog"
          aria-label={selectedDocument.title}
        >
          <div
            className={`flex w-full max-w-5xl flex-col overflow-hidden rounded-xl border shadow-2xl ${
              selectedDocument.type === 'pdf' ? 'h-[95vh]' : 'max-h-[92vh]'
            } ${
              selectedDocument.type === 'form'
                ? 'border-neutral-300 bg-white text-neutral-900'
                : 'border-neutral-700 bg-neutral-950 text-white'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`flex shrink-0 items-center justify-between gap-3 border-b px-4 py-3 ${
                selectedDocument.type === 'form' ? 'border-neutral-200' : 'border-neutral-800'
              }`}
            >
              <h2 className="text-sm font-bold sm:text-base">{selectedDocument.title}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={closeFormModal}
                  className={`rounded-lg border p-2 transition-colors ${
                    selectedDocument.type === 'form'
                      ? 'border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                      : 'border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white'
                  }`}
                  aria-label="Close document"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {selectedDocument.type === 'image' && (
              <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-neutral-900 p-3">
                <img
                  src={electionNoticeImg}
                  alt="GCAAA Election Notice"
                  className="max-h-[calc(92vh-110px)] max-w-full object-contain"
                />
              </div>
            )}

            {selectedDocument.type === 'pdf' && (
              <>
                <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-white p-6 text-center text-neutral-800 sm:hidden">
                  <p className="text-sm">
                    PDF preview is not supported in this mobile browser.
                  </p>
                  <a
                    href={selectedDocument.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open PDF
                  </a>
                </div>
                <iframe
                  src={selectedDocument.url}
                  title={selectedDocument.title}
                  className="hidden min-h-[65vh] w-full flex-1 bg-white sm:block"
                />
              </>
            )}

            {selectedDocument.type === 'form' && (
              <form
                onSubmit={handleWithdrawalSubmit}
                onChange={() => {
                  setWithdrawalSubmitted(false);
                  setSubmitError('');
                }}
                className="overflow-y-auto bg-white p-4 text-neutral-900 sm:p-6"
              >
                <p className="mb-4 text-sm text-neutral-600">
                  Fill in the withdrawal form details.
                </p>

                {withdrawalSubmitted && (
                  <p
                    className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-800"
                    role="status"
                    aria-live="polite"
                  >
                    Form Submitted Successfully! Thank you for your submission.
                  </p>
                )}

                {submitError && (
                  <p
                    className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-800"
                    role="alert"
                  >
                    {submitError}
                  </p>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-neutral-700">
                    Candidate Name *
                    <input
                      name="candidateName"
                      required
                      className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none focus:border-red-500"
                    />
                  </label>
                  <label className="text-xs font-semibold text-neutral-700">
                    Post Nominated *
                    <select
                      name="postNominated"
                      required
                      className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none focus:border-red-500"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        -- Select Post --
                      </option>
                      {electionPosts.map((post) => (
                        <option key={post} value={post}>
                          {post}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="text-xs font-semibold text-neutral-700">
                    Proposer Name *
                    <input
                      name="proposerName"
                      required
                      className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none focus:border-red-500"
                    />
                  </label>
                  <label className="text-xs font-semibold text-neutral-700">
                    Seconder Name *
                    <input
                      name="seconderName"
                      required
                      className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none focus:border-red-500"
                    />
                  </label>
                  <label className="text-xs font-semibold text-neutral-700 sm:col-span-2">
                    Address of Candidate *
                    <textarea
                      name="candidateAddress"
                      required
                      rows="2"
                      className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none focus:border-red-500"
                    />
                  </label>

                  {/* Signature image upload */}
                  <label className="text-xs font-semibold text-neutral-700 sm:col-span-2">
                    Signature (Upload Image) *
                    <input
                      name="signature"
                      type="file"
                      accept="image/png, image/jpeg, image/jpg, image/webp"
                      required
                      onChange={handleSignatureChange}
                      className="mt-1.5 w-full cursor-pointer rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none file:mr-3 file:rounded file:border-0 file:bg-red-50 file:px-3 file:py-1 file:text-red-700 focus:border-red-500"
                    />
                    {signaturePreview && (
                      <div className="mt-2 flex items-center gap-3">
                        <img
                          src={signaturePreview}
                          alt="Signature preview"
                          className="h-16 w-auto rounded border border-neutral-200 object-contain bg-neutral-50 p-1"
                        />
                        <span className="text-[11px] font-normal text-neutral-500">
                          {signatureFile?.name}
                        </span>
                      </div>
                    )}
                  </label>
                </div>

                <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-sm leading-relaxed text-neutral-700">
                  <input
                    type="checkbox"
                    name="confirmWithdrawal"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-red-600"
                  />
                  <span>
                    I am withdrawing my above mentioned candidate from GCAAA election-26.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
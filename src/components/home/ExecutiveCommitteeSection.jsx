import { Phone, Mail, UserCheck, Shield } from 'lucide-react';

export const ExecutiveCommitteeSection = () => {
  const officeBearers = [
    { role: 'President', name: 'Ar. Anupam Mittal', phone: '9415010301', email: 'anupam@arinem.com' },
    { role: 'General Secretary', name: 'Ar. Vishal Gulati', phone: '9415025946', email: 'sakaar10@yahoo.co.in' },
    { role: 'Treasurer', name: 'Ar. Avnish Gangwar', phone: '9415089038', email: 'avanisharchi@gmail.com' },
    { role: 'Joint Secretary', name: 'Ar. Shashank Misra', phone: '8588869222', email: 'shashankmisra222@gmail.com' },
  ];

  const executiveMembers = [
    { name: 'Ar. Harish Tripathi', phone: '9811045628', email: 'htji@gmail.com' },
    { name: 'Ar. Anurag Khandelwal', phone: '9927092009', email: 'anuragkhandelwal@yahoo.com' },
    { name: 'Ar. Arun Rana', phone: '9454994522', email: 'arunrana_kumar@yahoo.com' },
    { name: 'Ar. Prashant Pal Singh', phone: '9838805222', email: 'abhikarms@gmail.com' },
    { name: 'Ar. Vishal Mittal', phone: '9811070399', email: 'vishal@spacedi.com' },
    { name: 'Ar. Pawan Bhatt', phone: '9837059454', email: 'bhattpawan00@yahoo.co.in' },
    { name: 'Ar. Mohit Agarwal', phone: '8090091487', email: 'agarwalmohitk@gmail.com' },
    { name: 'Ar. Devesh Mani Tripathi', phone: '9335210024', email: 'thinkdevesh@gmail.com' },
    { name: 'Ar. Anjaneya Sharma', phone: '9452907110', email: 'sharma.anjaneya@foaaktu.ac.in' },
    { name: 'Ar. Anupam', phone: '9721373056', email: 'Anupam0688@gmail.com' },
  ];

  const convenors = [
    { role: 'Convenor', name: 'Ar. Repunjay Kumar Patel', phone: '9919828111', email: 'rkpatel.ar@gmail.com' },
    { role: 'Convenor', name: 'Ar. Smita Nigam', phone: '6307450136', email: 'smita.bhasker@gmail.com' },
  ];

  const pastPresident = {
    role: 'Immediate Past President',
    name: 'Ar. Atul Gupta',
    phone: '9811623694',
    email: 'architectatul@gmail.com',
  };

  return (
    <section id="committee" className="bg-white text-neutral-900 py-16 sm:py-24 border-b border-neutral-200">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="mb-12 max-w-4xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#B70D2B] mb-2">
            Governance &amp; Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight">
            Executive Committee <span className="text-[#B70D2B]">of GCAAA</span>
          </h2>
          <div className="mt-3.5 h-1 w-16 bg-[#B70D2B]" />
        </div>

        {/* 1. Office Bearers Cards */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-neutral-800 uppercase tracking-wider mb-5 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#B70D2B]" /> Office Bearers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeBearers.map((person, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 border-t-4 border-[#B70D2B] border border-neutral-200 p-6 rounded-b shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-[11px] font-bold text-[#B70D2B] uppercase tracking-wider block mb-1">
                  {person.role}
                </span>
                <h4 className="text-base font-extrabold text-neutral-900 mb-4">{person.name}</h4>
                <div className="space-y-2 text-xs text-neutral-600">
                  <a href={`tel:${person.phone}`} className="flex items-center gap-2 hover:text-[#B70D2B] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-neutral-400" /> {person.phone}
                  </a>
                  <a href={`mailto:${person.email}`} className="flex items-center gap-2 hover:text-[#B70D2B] transition-colors truncate">
                    <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" /> {person.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Executive Members Grid */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-neutral-800 uppercase tracking-wider mb-5 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#B70D2B]" /> Executive Members
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {executiveMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 p-4 rounded hover:border-[#B70D2B]/60 transition-colors shadow-2xs"
              >
                <h5 className="text-sm font-bold text-neutral-900 mb-2 truncate">{member.name}</h5>
                <div className="space-y-1.5 text-xs text-neutral-600">
                  <a href={`tel:${member.phone}`} className="flex items-center gap-1.5 hover:text-[#B70D2B] transition-colors">
                    <Phone className="w-3 h-3 text-neutral-400" /> {member.phone}
                  </a>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 hover:text-[#B70D2B] transition-colors truncate">
                    <Mail className="w-3 h-3 text-neutral-400 shrink-0" /> {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Convenors & Past President */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
          {convenors.map((c, idx) => (
            <div key={idx} className="bg-neutral-50 border border-neutral-200 p-5 rounded">
              <span className="text-[10px] font-bold text-[#B70D2B] uppercase tracking-wider block mb-1">
                {c.role}
              </span>
              <h4 className="text-sm font-extrabold text-neutral-900 mb-2">{c.name}</h4>
              <div className="space-y-1 text-xs text-neutral-600">
                <p className="flex items-center gap-2"><Phone className="w-3 h-3 text-neutral-400" /> {c.phone}</p>
                <p className="flex items-center gap-2 truncate"><Mail className="w-3 h-3 text-neutral-400 shrink-0" /> {c.email}</p>
              </div>
            </div>
          ))}

          {/* Past President */}
          <div className="bg-neutral-50 border border-neutral-200 p-5 rounded">
            <span className="text-[10px] font-bold text-[#B70D2B] uppercase tracking-wider block mb-1">
              {pastPresident.role}
            </span>
            <h4 className="text-sm font-extrabold text-neutral-900 mb-2">{pastPresident.name}</h4>
            <div className="space-y-1 text-xs text-neutral-600">
              <p className="flex items-center gap-2"><Phone className="w-3 h-3 text-neutral-400" /> {pastPresident.phone}</p>
              <p className="flex items-center gap-2 truncate"><Mail className="w-3 h-3 text-neutral-400 shrink-0" /> {pastPresident.email}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

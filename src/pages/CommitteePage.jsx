import { WelcomeMessagesSection } from '@/components/home/WelcomeMessagesSection';
import { ExecutiveCommitteeSection } from '@/components/home/ExecutiveCommitteeSection';

export const CommitteePage = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-14 sm:py-16 bg-neutral-950 text-white text-center border-b border-neutral-900">
        <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#B70D2B] mb-2">Association Governance</p>
        <h1 className="text-4xl sm:text-5xl font-black">Team &amp; Executive Committee</h1>
        <p className="text-sm text-neutral-400 mt-3 max-w-xl mx-auto px-4">
          Meet the office bearers, leadership patrons, and executive members driving the GCAAA fraternity.
        </p>
      </div>
      <WelcomeMessagesSection />
      <ExecutiveCommitteeSection />
    </div>
  );
};

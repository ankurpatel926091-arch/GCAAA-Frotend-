import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { FloatingSidePills } from '@/components/common/FloatingSidePills';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 selection:bg-red-600 selection:text-white relative">
      <Navbar />
      <FloatingSidePills />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

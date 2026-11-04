import React from 'react';
import { Outlet } from 'react-router-dom';
import DemoTopBanner from '../../common/DemoTopBanner';
import SchoolNav from './SchoolNav';
import SchoolFooter from './SchoolFooter';
import ScrollToTop from '../../../components/ScrollToTop';

export default function SchoolLayout() {
  React.useEffect(() => {
    document.title = "School Website — Webex_Flow Demo";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#172B4D] font-sans selection:bg-[#172B4D] selection:text-white">
      <ScrollToTop />
      <DemoTopBanner demoName="School Website" industry="School & Education" />
      <SchoolNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <SchoolFooter />
    </div>
  );
}

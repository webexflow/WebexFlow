import React from 'react';
import { Outlet } from 'react-router-dom';
import DemoTopBanner from '../../common/DemoTopBanner';
import PhotographyNav from './PhotographyNav';
import PhotographyFooter from './PhotographyFooter';
import ScrollToTop from '../../../components/ScrollToTop';

export default function PhotographyLayout() {
  React.useEffect(() => {
    document.title = "Photography Website — Webex_Flow Demo";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#171717] font-sans selection:bg-[#171717] selection:text-[#F7F5F0]">
      <ScrollToTop />
      <DemoTopBanner demoName="Photography Website" industry="Photography" />
      <PhotographyNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <PhotographyFooter />
    </div>
  );
}

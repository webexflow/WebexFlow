import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DemoTopBanner from '../../common/DemoTopBanner';
import RestaurantNav from './RestaurantNav';
import RestaurantFooter from './RestaurantFooter';
import ReservationModal from './ReservationModal';
import ScrollToTop from '../../../components/ScrollToTop';

export default function RestaurantLayout() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);

  React.useEffect(() => {
    document.title = "Restaurant Website — Webex_Flow Demo";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#29241F] font-sans selection:bg-[#48523A] selection:text-white">
      <ScrollToTop />
      <DemoTopBanner demoName="Restaurant Website" industry="Fine Dining & Hospitality" />
      <RestaurantNav onOpenReserve={() => setIsReserveOpen(true)} />
      
      <main className="flex-grow">
        <Outlet context={{ openReserveModal: () => setIsReserveOpen(true) }} />
      </main>

      <RestaurantFooter onOpenReserve={() => setIsReserveOpen(true)} />

      <ReservationModal
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
      />
    </div>
  );
}

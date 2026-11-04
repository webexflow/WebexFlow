import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DemoTopBanner from '../../common/DemoTopBanner';
import RealEstateNav from './RealEstateNav';
import RealEstateFooter from './RealEstateFooter';
import PropertyModal from './PropertyModal';

function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function RealEstateLayout() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    document.title = "Real Estate Website — Webex_Flow Demo";
  }, []);

  const openPropertyModal = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closePropertyModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F0] font-sans">
      <DemoTopBanner demoName="Real Estate Website" industry="Luxury Real Estate" />
      <ScrollToTop />
      <RealEstateNav />
      <main className="flex-1">
        <Outlet context={{ openPropertyModal }} />
      </main>
      <RealEstateFooter />
      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={closePropertyModal}
      />
    </div>
  );
}

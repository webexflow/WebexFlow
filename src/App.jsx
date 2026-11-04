import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Main Agency
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Demos from './pages/Demos';
import About from './pages/About';
import Contact from './pages/Contact';

// Demo 01 — Photography (Photography Website)
import PhotographyLayout from './demos/photography/components/PhotographyLayout';
import PhotographyHome from './demos/photography/pages/PhotographyHome';
import PhotographyPortfolio from './demos/photography/pages/PhotographyPortfolio';

// Demo 02 — School (School Website)
import SchoolLayout from './demos/school/components/SchoolLayout';
import SchoolHome from './demos/school/pages/SchoolHome';
import SchoolAdmissions from './demos/school/pages/SchoolAdmissions';

// Demo 03 — Hospital Website
import HospitalLayout from './demos/hospital/components/HospitalLayout';
import HospitalHome from './demos/hospital/pages/HospitalHome';
import HospitalDepartments from './demos/hospital/pages/HospitalDepartments';

// Demo 04 — E-commerce Website
import EcommerceLayout from './demos/ecommerce/components/EcommerceLayout';
import EcommerceHome from './demos/ecommerce/pages/EcommerceHome';
import EcommerceShop from './demos/ecommerce/pages/EcommerceShop';

// Demo 05 — Restaurant Website
import RestaurantLayout from './demos/restaurant/components/RestaurantLayout';
import RestaurantHome from './demos/restaurant/pages/RestaurantHome';
import RestaurantMenu from './demos/restaurant/pages/RestaurantMenu';

// Demo 06 — Real Estate Website
import RealEstateLayout from './demos/real-estate/components/RealEstateLayout';
import RealEstateHome from './demos/real-estate/pages/RealEstateHome';
import RealEstateProperties from './demos/real-estate/pages/RealEstateProperties';

export default function App() {
  return (
    <Routes>
      {/* Main Agency Site */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="work" element={<Work />} />
        <Route path="demos" element={<Demos />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* Demo 01 — Photography Website */}
      <Route path="/demos/photography" element={<PhotographyLayout />}>
        <Route index element={<PhotographyHome />} />
        <Route path="portfolio" element={<PhotographyPortfolio />} />
      </Route>

      {/* Demo 02 — School Website */}
      <Route path="/demos/school" element={<SchoolLayout />}>
        <Route index element={<SchoolHome />} />
        <Route path="admissions" element={<SchoolAdmissions />} />
      </Route>

      {/* Demo 03 — Hospital Website */}
      <Route path="/demos/hospital" element={<HospitalLayout />}>
        <Route index element={<HospitalHome />} />
        <Route path="departments" element={<HospitalDepartments />} />
      </Route>

      {/* Demo 04 — E-commerce Website */}
      <Route path="/demos/ecommerce" element={<EcommerceLayout />}>
        <Route index element={<EcommerceHome />} />
        <Route path="shop" element={<EcommerceShop />} />
      </Route>

      {/* Demo 05 — Restaurant Website */}
      <Route path="/demos/restaurant" element={<RestaurantLayout />}>
        <Route index element={<RestaurantHome />} />
        <Route path="menu" element={<RestaurantMenu />} />
      </Route>

      {/* Demo 06 — Real Estate Website */}
      <Route path="/demos/real-estate" element={<RealEstateLayout />}>
        <Route index element={<RealEstateHome />} />
        <Route path="properties" element={<RealEstateProperties />} />
      </Route>
    </Routes>
  );
}

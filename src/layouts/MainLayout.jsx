import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/webexflow-theme.css';

export default function MainLayout() {
  return (
    <div className="webexflow-site min-h-screen flex flex-col bg-wf-aubergine text-white selection:bg-wf-violet selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import DemoTopBanner from '../../common/DemoTopBanner';
import HospitalNav from './HospitalNav';
import HospitalFooter from './HospitalFooter';
import ScrollToTop from '../../../components/ScrollToTop';
import { hospitalData } from '../data/hospitalData';

export default function HospitalLayout() {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDept, setSelectedDept] = useState('General Medicine');
  const [booked, setBooked] = useState(false);
  const [patient, setPatient] = useState({ name: '', phone: '', date: '', time: 'Morning (09:00 - 12:00)' });

  React.useEffect(() => {
    document.title = "Hospital Website — Webex_Flow Demo";
  }, []);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!patient.name || !patient.phone) return;
    setBooked(true);
  };

  const closeBooking = () => {
    setShowBooking(false);
    setBooked(false);
    setPatient({ name: '', phone: '', date: '', time: 'Morning (09:00 - 12:00)' });
  };

  const openWithDept = (deptTitle) => {
    if (deptTitle) setSelectedDept(deptTitle);
    setShowBooking(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#263238] font-sans selection:bg-[#126B68] selection:text-white">
      <ScrollToTop />
      <DemoTopBanner demoName="Hospital Website" industry="Healthcare & Clinical Services" />
      <HospitalNav onOpenBooking={() => setShowBooking(true)} />
      <main className="flex-grow">
        <Outlet context={{ openBookingModal: openWithDept }} />
      </main>
      <HospitalFooter />

      {/* Appointment Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 z-50 bg-[#263238]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#E6F3EF]">
            <button
              onClick={closeBooking}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {booked ? (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#126B68] mx-auto" />
                <h3 className="font-display text-2xl font-bold text-[#126B68]">
                  Appointment Request Logged
                </h3>
                <div className="p-4 rounded-xl bg-[#E6F3EF] text-xs space-y-1 text-left">
                  <p><strong>Patient:</strong> {patient.name}</p>
                  <p><strong>Department:</strong> {selectedDept}</p>
                  <p><strong>Contact:</strong> {patient.phone}</p>
                  <p><strong>Slot:</strong> {patient.time}</p>
                </div>
                <p className="text-xs text-slate-500">
                  This is a demonstrative healthcare prototype. In a live production system, confirmation would be dispatched via SMS & Email.
                </p>
                <button
                  onClick={closeBooking}
                  className="px-6 py-2.5 rounded-lg bg-[#126B68] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="border-b border-[#E6F3EF] pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#126B68] font-bold">
                    Schedule Consultation
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#263238]">
                    Book a Doctor's Appointment
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#263238] mb-1">Select Department</label>
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#E6F3EF]/50 border border-slate-200 text-xs text-[#263238]"
                  >
                    {hospitalData.departments.map(d => (
                      <option key={d.id} value={d.title}>{d.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#263238] mb-1">Patient Full Name *</label>
                  <input
                    type="text"
                    required
                    value={patient.name}
                    onChange={(e) => setPatient({ ...patient, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#263238] mb-1">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={patient.phone}
                    onChange={(e) => setPatient({ ...patient, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#263238] mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={patient.date}
                      onChange={(e) => setPatient({ ...patient, date: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#263238] mb-1">Preferred Time</label>
                    <select
                      value={patient.time}
                      onChange={(e) => setPatient({ ...patient, time: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs"
                    >
                      <option>Morning (09:00 - 12:00)</option>
                      <option>Afternoon (13:00 - 16:00)</option>
                      <option>Evening (17:00 - 20:00)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#126B68] hover:bg-[#0e5553] text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Confirm Appointment Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

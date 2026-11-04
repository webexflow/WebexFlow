import React, { useState } from 'react';
import { X, CheckCircle2, Utensils, Calendar, Users, Clock } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function ReservationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [resData, setResData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: '',
    time: '19:30',
    seating: 'Indoor Hearth Dining Room'
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resData.name || !resData.phone) return;
    setConfirmed(true);
  };

  const handleDone = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-[#29241F]/80 backdrop-blur-sm" />

      <div className="relative bg-[#F5F0E6] text-[#29241F] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 border border-[#B99A61]/40">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#B99A61]/20 text-[#29241F] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#48523A] mx-auto" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B99A61] font-bold block">
              Reservation Demo
            </span>
            <h3 className="font-playfair text-2xl font-bold text-[#29241F]">
              Table Reserved for {resData.name}
            </h3>
            <div className="p-4 rounded-xl bg-white border border-[#B99A61]/30 text-xs text-left space-y-1 font-mono">
              <p><strong>Party:</strong> {resData.guests}</p>
              <p><strong>Area:</strong> {resData.seating}</p>
              <p><strong>Date & Time:</strong> {resData.date || 'Today'} at {resData.time}</p>
              <p><strong>Contact:</strong> {resData.phone}</p>
            </div>
            <p className="text-xs text-[#29241F]/70">
              This is an interactive restaurant website demonstration. No real table holding or SMS notifications are sent.
            </p>
            <button
              onClick={handleDone}
              className="px-6 py-2.5 rounded-lg bg-[#48523A] text-white text-xs font-bold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-[#B99A61]/30 pb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B99A61] font-bold block">
                {restaurantData.name}
              </span>
              <h3 className="font-playfair text-2xl font-bold text-[#29241F]">
                Reserve a Table
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">Guests</label>
                <select
                  value={resData.guests}
                  onChange={(e) => setResData({ ...resData, guests: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-white border border-[#B99A61]/30 text-xs text-[#29241F]"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5-6 Guests</option>
                  <option>Private Dining (7+)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">Seating Area</label>
                <select
                  value={resData.seating}
                  onChange={(e) => setResData({ ...resData, seating: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-white border border-[#B99A61]/30 text-xs text-[#29241F]"
                >
                  <option>Indoor Hearth Dining Room</option>
                  <option>The Olive Garden Terrace</option>
                  <option>The Sommelier's Vault</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={resData.date}
                  onChange={(e) => setResData({ ...resData, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#B99A61]/30 text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">Time</label>
                <select
                  value={resData.time}
                  onChange={(e) => setResData({ ...resData, time: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#B99A61]/30 text-xs"
                >
                  <option>17:30</option>
                  <option>18:30</option>
                  <option>19:30</option>
                  <option>20:30</option>
                  <option>21:30</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={resData.name}
                onChange={(e) => setResData({ ...resData, name: e.target.value })}
                placeholder="e.g. Marcus Aurelius"
                className="w-full px-3 py-2.5 rounded-lg bg-white border border-[#B99A61]/30 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                value={resData.phone}
                onChange={(e) => setResData({ ...resData, phone: e.target.value })}
                placeholder="(555) 789-0000"
                className="w-full px-3 py-2.5 rounded-lg bg-white border border-[#B99A61]/30 text-xs"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-[#48523A] hover:bg-[#3b432f] text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md"
            >
              Confirm Reservation Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

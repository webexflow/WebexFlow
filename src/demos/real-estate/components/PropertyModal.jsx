import React, { useState } from 'react';
import { X, CheckCircle2, Bed, Bath, Maximize, MapPin, Calendar, Send } from 'lucide-react';
import { realEstateData } from '../data/realEstateData';

export default function PropertyModal({ property, isOpen, onClose }) {
  if (!isOpen || !property) return null;

  const [viewingForm, setViewingForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
  });
  const [scheduled, setScheduled] = useState(false);

  const handleViewingSubmit = (e) => {
    e.preventDefault();
    if (!viewingForm.name || !viewingForm.phone) return;
    setScheduled(true);
  };

  const handleDone = () => {
    setScheduled(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-[#242424]/80 backdrop-blur-sm" />

      <div className="relative bg-[#F6F5F0] text-[#242424] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 border border-[#DAD7CE] max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#242424] z-20 cursor-pointer shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1">
          {/* Main Image Header */}
          <div className="h-72 sm:h-96 relative">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 sm:left-6 px-3 py-1.5 rounded-lg bg-[#183D35] text-white text-xs font-mono font-bold">
              {property.type}
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Title & Price */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#DAD7CE] pb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#183D35] font-semibold flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{property.location}</span>
                </span>
                <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#242424]">
                  {property.title}
                </h2>
              </div>
              <p className="font-outfit text-2xl sm:text-3xl font-bold text-[#183D35]">
                {property.formattedPrice}
              </p>
            </div>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-3 gap-4 text-center p-4 rounded-xl bg-white border border-[#DAD7CE]">
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase">Bedrooms</p>
                <p className="font-outfit text-lg font-bold text-[#242424] mt-0.5">{property.beds} Beds</p>
              </div>
              <div className="border-x border-[#DAD7CE]">
                <p className="text-xs font-mono text-slate-500 uppercase">Bathrooms</p>
                <p className="font-outfit text-lg font-bold text-[#242424] mt-0.5">{property.baths} Baths</p>
              </div>
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase">Interior Living</p>
                <p className="font-outfit text-lg font-bold text-[#242424] mt-0.5">{property.sqft}</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-outfit text-base font-bold uppercase tracking-wider text-[#242424]">
                Architectural Overview
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {/* Schedule Private Viewing Form */}
            <div className="p-6 rounded-2xl bg-white border border-[#DAD7CE] space-y-4">
              <div className="border-b border-[#DAD7CE] pb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#183D35] font-bold block">
                  Private Acquisition Services
                </span>
                <h4 className="font-outfit text-lg font-bold text-[#242424]">
                  Schedule a Discreet Viewing
                </h4>
              </div>

              {scheduled ? (
                <div className="text-center py-6 space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#183D35] mx-auto" />
                  <p className="font-outfit font-bold text-base text-[#183D35]">
                    Viewing Request Recorded (Demo Mode)
                  </p>
                  <p className="text-xs text-slate-600">
                    Thank you, {viewingForm.name}. A private broker has received your demonstration inquiry for {property.title}.
                  </p>
                  <button
                    onClick={handleDone}
                    className="mt-3 px-6 py-2 rounded-lg bg-[#183D35] text-white text-xs font-bold uppercase"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleViewingSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={viewingForm.name}
                      onChange={(e) => setViewingForm({ ...viewingForm, name: e.target.value })}
                      className="px-3 py-2.5 rounded-lg border border-[#DAD7CE] text-xs bg-[#F6F5F0]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Direct Phone Number *"
                      value={viewingForm.phone}
                      onChange={(e) => setViewingForm({ ...viewingForm, phone: e.target.value })}
                      className="px-3 py-2.5 rounded-lg border border-[#DAD7CE] text-xs bg-[#F6F5F0]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={viewingForm.email}
                      onChange={(e) => setViewingForm({ ...viewingForm, email: e.target.value })}
                      className="px-3 py-2.5 rounded-lg border border-[#DAD7CE] text-xs bg-[#F6F5F0]"
                    />
                    <input
                      type="date"
                      value={viewingForm.date}
                      onChange={(e) => setViewingForm({ ...viewingForm, date: e.target.value })}
                      className="px-3 py-2.5 rounded-lg border border-[#DAD7CE] text-xs bg-[#F6F5F0]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#183D35] hover:bg-[#122e28] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Request Confidential Tour</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  Send, 
  ChevronDown, 
  AlertCircle,
  Calendar,
  Sparkles
} from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function SchoolAdmissions() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formState, setFormState] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    applyingGrade: 'Grade 1-5 (Elementary)',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formState.parentName.trim()) newErrors.parentName = 'Parent / Guardian name is required';
    if (!formState.email.trim()) newErrors.email = 'Email is required';
    if (!formState.phone.trim()) newErrors.phone = 'Contact number is required';
    if (!formState.studentName.trim()) newErrors.studentName = 'Student name is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 py-12 sm:py-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-[#DCEAF4] text-[#172B4D] font-bold">
          Enrollment & Application
        </span>
        <h1 className="font-outfit text-4xl sm:text-6xl font-extrabold text-[#172B4D] tracking-tight">
          Admissions & Enrollment
        </h1>
        <p className="text-base text-[#172B4D]/75 max-w-2xl mx-auto leading-relaxed">
          We welcome inquisitive, motivated students eager to participate in a vibrant academic and co-curricular community.
        </p>
      </section>

      {/* 4-Step Process Timeline */}
      <section id="process" className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#172B4D]/70 font-semibold block mb-1">
            Step-by-Step
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#172B4D]">
            The 4-Step Admissions Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolData.admissionsSteps.map((st) => (
            <div
              key={st.step}
              className="p-6 rounded-2xl bg-white border border-[#172B4D]/15 shadow-sm space-y-4 relative"
            >
              <div className="w-10 h-10 rounded-xl bg-[#172B4D] text-[#C9A45C] flex items-center justify-center font-bold font-mono text-sm">
                {st.step}
              </div>
              <h3 className="font-outfit text-lg font-bold text-[#172B4D]">
                {st.title}
              </h3>
              <p className="text-xs text-[#172B4D]/75 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility & Required Documents Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Eligibility Information */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
              Eligibility & Grade Placement
            </h2>
            <div className="space-y-3">
              {[
                { level: "Early Childhood (Pre-K / Kindergarten)", age: "Must be 3 to 5 years old by September 1st of the entry year." },
                { level: "Elementary School (Grades 1 through 5)", age: "Satisfactory completion of preceding grade and foundation assessment." },
                { level: "Middle School (Grades 6 through 8)", age: "Academic transcripts, teacher recommendation, and writing sample." },
                { level: "Senior Academy (Grades 9 through 12)", age: "Prior academic standing, diagnostic evaluation, and personal interview." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-[#172B4D]/10 space-y-1">
                  <h4 className="font-outfit font-bold text-sm text-[#172B4D]">{item.level}</h4>
                  <p className="text-xs text-[#172B4D]/75">{item.age}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Required Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
              Required Documents Checklist
            </h2>
            <div className="p-6 rounded-2xl bg-white border border-[#172B4D]/15 shadow-sm space-y-3">
              {[
                "Official Birth Certificate or Passport copy",
                "Past two consecutive academic school report cards",
                "Standardized immunization and wellness clearance records",
                "One confidential teacher recommendation letter",
                "Completed Student Interest Statement (Grades 6-12)",
                "Passport-size student photographs (recent)",
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-[#172B4D]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A45C] flex-shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Admission Enquiry Form */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-white border border-[#172B4D]/15 shadow-lg">
          <div className="border-b border-[#172B4D]/10 pb-6 mb-8 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9A45C] font-bold block mb-1">
              Direct Application Inquiry
            </span>
            <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
              Online Admission Inquiry Form
            </h2>
            <p className="text-xs text-[#172B4D]/70 mt-1">
              Complete this demo form to request our digital prospectus and enrollment calendar.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-[#DCEAF4] text-[#172B4D] space-y-3 text-center">
              <CheckCircle2 className="w-10 h-10 text-[#172B4D] mx-auto" />
              <h3 className="font-outfit text-xl font-bold">Inquiry Prepared (Demonstration Mode)</h3>
              <p className="text-xs leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{formState.parentName}</strong>. Your inquiry for <strong>{formState.studentName}</strong> ({formState.applyingGrade}) has been prepared in this interactive preview.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-mono underline text-[#172B4D] cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    value={formState.parentName}
                    onChange={(e) => setFormState({ ...formState, parentName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#172B4D]/20 text-xs text-[#172B4D] focus:outline-none focus:border-[#C9A45C]"
                  />
                  {errors.parentName && <p className="text-[11px] text-rose-500 mt-1">{errors.parentName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                    Parent Email Address *
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="parent@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#172B4D]/20 text-xs text-[#172B4D] focus:outline-none focus:border-[#C9A45C]"
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#172B4D]/20 text-xs text-[#172B4D] focus:outline-none focus:border-[#C9A45C]"
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    value={formState.studentName}
                    onChange={(e) => setFormState({ ...formState, studentName: e.target.value })}
                    placeholder="e.g. Leo Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#172B4D]/20 text-xs text-[#172B4D] focus:outline-none focus:border-[#C9A45C]"
                  />
                  {errors.studentName && <p className="text-[11px] text-rose-500 mt-1">{errors.studentName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                  Academic Level Applying For
                </label>
                <select
                  value={formState.applyingGrade}
                  onChange={(e) => setFormState({ ...formState, applyingGrade: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#172B4D]/20 text-xs text-[#172B4D] focus:outline-none focus:border-[#C9A45C]"
                >
                  <option>Pre-K / Kindergarten (Early Childhood)</option>
                  <option>Grade 1-5 (Elementary)</option>
                  <option>Grade 6-8 (Middle Years)</option>
                  <option>Grade 9-12 (Senior High Academy)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                  Specific Inquiries or Interests
                </label>
                <textarea
                  rows={3}
                  value={formState.notes}
                  onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                  placeholder="Tell us about special academic interests, sports, arts, or relocation plans..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#172B4D]/20 text-xs text-[#172B4D] focus:outline-none focus:border-[#C9A45C]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#172B4D] hover:bg-[#172B4D]/90 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#C9A45C]" />
                <span>Submit Admissions Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Admissions FAQ Accordions */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#172B4D]/70 font-semibold block mb-1">
            Questions
          </span>
          <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
            Frequently Asked Admissions Questions
          </h2>
        </div>

        <div className="space-y-3">
          {schoolData.faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-[#172B4D]/15 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-outfit font-bold text-sm text-[#172B4D] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#C9A45C] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#172B4D]/75 leading-relaxed border-t border-[#172B4D]/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

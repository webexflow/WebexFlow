import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, CheckCircle2, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const SERVICE_OPTIONS = [
  "Website Development",
  "E-commerce Development",
  "Application Development",
  "AI & Business Automation",
  "Other"
];

const BUDGET_OPTIONS = [
  "Under ₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "Above ₹1,00,000",
  "Not sure yet"
];

// Predefined options present in the linked Google Form
const GOOGLE_FORM_PREDEFINED_SERVICES = [
  "E-commerce Development",
  "Application Development",
  "AI & Business Automation"
];

export default function ContactForm({ theme = 'dark' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    serviceRequired: 'Website Development',
    estimatedBudget: '₹25,000–₹50,000',
    projectDescription: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const isLight = theme === 'light';

  const validate = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(cleanPhone) && cleanPhone.length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Business Name (Required in Google Form)
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business or Brand Name is required';
    }

    // Project Description
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project';
    } else if (formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = 'Description should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (submissionStatus === 'error') {
      setSubmissionStatus(null);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);
    setErrorMessage('');

    try {
      const { submissionEndpoint, entries } = siteConfig.googleForm;

      // Construct Google Form Payload
      const params = new URLSearchParams();
      params.append(entries.fullName, formData.fullName.trim());
      params.append(entries.email, formData.email.trim());
      params.append(entries.phone, formData.phone.trim());
      params.append(entries.businessName, formData.businessName.trim());

      // Service Required mapping
      if (GOOGLE_FORM_PREDEFINED_SERVICES.includes(formData.serviceRequired)) {
        params.append(entries.serviceRequired, formData.serviceRequired);
      } else {
        params.append(entries.serviceRequired, '__other_option__');
        params.append(`${entries.serviceRequired}.other_option_response`, formData.serviceRequired);
      }

      params.append(entries.estimatedBudget, formData.estimatedBudget);
      params.append(entries.projectDescription, formData.projectDescription.trim());
      params.append('fvv', '1');
      params.append('pageHistory', '0');

      // Submit via no-cors fetch to Google Forms formResponse endpoint
      await fetch(submissionEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });

      // Save submitted data snapshot
      setSubmittedData({ ...formData });
      setSubmissionStatus('success');
    } catch (err) {
      console.error('Submission error:', err);
      setSubmissionStatus('error');
      setErrorMessage('Unable to submit your enquiry. Please try again or contact us directly at webexflow@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionStatus(null);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      businessName: '',
      serviceRequired: 'Website Development',
      estimatedBudget: '₹25,000–₹50,000',
      projectDescription: ''
    });
  };

  const generateMailto = () => {
    const target = submittedData || formData;
    const subject = encodeURIComponent(`Project Enquiry: ${target.serviceRequired} - ${target.fullName}`);
    const body = encodeURIComponent(
      `Hello Webex_Flow Team,\n\nI recently submitted my project enquiry:\n` +
      `• Name: ${target.fullName}\n` +
      `• Email: ${target.email}\n` +
      `• Phone: ${target.phone}\n` +
      `• Business: ${target.businessName || 'N/A'}\n` +
      `• Service: ${target.serviceRequired}\n` +
      `• Budget: ${target.estimatedBudget}\n` +
      `• Project Details:\n${target.projectDescription}\n\nLooking forward to hearing from you.`
    );
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {submissionStatus === 'success' && submittedData ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`p-8 sm:p-10 rounded-2xl border ${
              isLight
                ? 'bg-white border-wf-borderSubtle shadow-xl'
                : 'bg-wf-plum border-wf-borderDark shadow-2xl'
            }`}
          >
            <div className="flex items-center gap-3 text-wf-teal mb-4">
              <CheckCircle2 className="w-7 h-7" />
              <h3 className={`text-2xl font-bold font-display ${isLight ? 'text-wf-darkText' : 'text-white'}`}>
                Enquiry Submitted Successfully
              </h3>
            </div>

            {/* Official Success Message */}
            <div className="p-4 rounded-xl bg-wf-teal/15 border border-wf-teal/30 text-wf-teal text-sm leading-relaxed mb-6 font-medium">
              Thank you for contacting Webex_Flow! Your enquiry has been submitted. We'll get back to you soon.
            </div>

            {/* Submitted Data Summary */}
            <div
              className={`p-5 rounded-xl border space-y-2 mb-8 text-xs font-mono ${
                isLight
                  ? 'bg-wf-lavender border-wf-borderSubtle text-wf-darkText'
                  : 'bg-wf-aubergine border-wf-borderDark text-wf-mutedText'
              }`}
            >
              <div className="flex justify-between border-b border-inherit pb-2">
                <span>Full Name:</span>
                <span className="font-semibold text-white">{submittedData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-inherit pb-2">
                <span>Email Address:</span>
                <span>{submittedData.email}</span>
              </div>
              <div className="flex justify-between border-b border-inherit pb-2">
                <span>Phone:</span>
                <span>{submittedData.phone}</span>
              </div>
              <div className="flex justify-between border-b border-inherit pb-2">
                <span>Business / Brand:</span>
                <span>{submittedData.businessName}</span>
              </div>
              <div className="flex justify-between border-b border-inherit pb-2">
                <span>Service:</span>
                <span className="text-wf-violet font-semibold">{submittedData.serviceRequired}</span>
              </div>
              <div className="flex justify-between border-b border-inherit pb-2">
                <span>Estimated Budget:</span>
                <span>{submittedData.estimatedBudget}</span>
              </div>
              <div className="pt-1">
                <span className="block text-wf-mutedText/70 mb-1">Project Details:</span>
                <p className="italic">"{submittedData.projectDescription}"</p>
              </div>
            </div>

            {/* Quick Follow-up Channels */}
            <div className="space-y-4">
              <p className={`text-xs font-mono uppercase tracking-widest ${isLight ? 'text-wf-mutedLight' : 'text-wf-mutedText'}`}>
                Need an immediate reply? Send directly to:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={generateMailto()}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-wf-violet hover:bg-wf-violet-hover text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-sm hover:shadow-wf-violet"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Copy via Email</span>
                </a>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold border transition-all ${
                    isLight
                      ? 'bg-wf-darkText text-white hover:bg-wf-plum'
                      : 'bg-wf-aubergine text-white border-wf-borderDark hover:border-wf-violet'
                  }`}
                >
                  <Instagram className="w-4 h-4" />
                  <span>Message on Instagram</span>
                </a>
              </div>

              <div className="pt-4 flex justify-between items-center text-xs font-mono text-wf-mutedText">
                <button
                  type="button"
                  onClick={handleReset}
                  className="underline hover:text-white transition-colors cursor-pointer"
                >
                  ← Submit Another Enquiry
                </button>
                <span>Direct: {siteConfig.email}</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            noValidate
            className={`p-6 sm:p-10 rounded-2xl border space-y-6 ${
              isLight
                ? 'bg-white border-wf-borderSubtle shadow-xl'
                : 'bg-wf-plum border-wf-borderDark shadow-2xl'
            }`}
          >
            <div className="border-b border-inherit pb-4">
              <h3 className={`text-xl font-bold font-display ${isLight ? 'text-wf-darkText' : 'text-white'}`}>
                Project Scoping Form
              </h3>
              <p className={`text-xs mt-1 ${isLight ? 'text-wf-mutedLight' : 'text-wf-mutedText'}`}>
                Complete your details below to submit your brief directly to our team.
              </p>
            </div>

            {/* Error banner if submission failed */}
            {submissionStatus === 'error' && (
              <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-mono leading-relaxed flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{errorMessage || 'Unable to submit your enquiry. Please try again or contact us directly at webexflow@gmail.com.'}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isLight ? 'text-wf-darkText' : 'text-wf-mutedText'}`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  disabled={isSubmitting}
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none disabled:opacity-60 ${
                    isLight
                      ? 'bg-wf-lavender border border-wf-borderSubtle text-wf-darkText focus:border-wf-violet'
                      : 'bg-wf-aubergine border border-wf-borderDark text-white focus:border-wf-violet'
                  } ${errors.fullName ? 'border-rose-500' : ''}`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isLight ? 'text-wf-darkText' : 'text-wf-mutedText'}`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@business.com"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none disabled:opacity-60 ${
                    isLight
                      ? 'bg-wf-lavender border border-wf-borderSubtle text-wf-darkText focus:border-wf-violet'
                      : 'bg-wf-aubergine border border-wf-borderDark text-white focus:border-wf-violet'
                  } ${errors.email ? 'border-rose-500' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isLight ? 'text-wf-darkText' : 'text-wf-mutedText'}`}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  disabled={isSubmitting}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none disabled:opacity-60 ${
                    isLight
                      ? 'bg-wf-lavender border border-wf-borderSubtle text-wf-darkText focus:border-wf-violet'
                      : 'bg-wf-aubergine border border-wf-borderDark text-white focus:border-wf-violet'
                  } ${errors.phone ? 'border-rose-500' : ''}`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Business Name */}
              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isLight ? 'text-wf-darkText' : 'text-wf-mutedText'}`}>
                  Business / Brand Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  disabled={isSubmitting}
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Studio"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none disabled:opacity-60 ${
                    isLight
                      ? 'bg-wf-lavender border border-wf-borderSubtle text-wf-darkText focus:border-wf-violet'
                      : 'bg-wf-aubergine border border-wf-borderDark text-white focus:border-wf-violet'
                  } ${errors.businessName ? 'border-rose-500' : ''}`}
                />
                {errors.businessName && (
                  <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.businessName}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Service Dropdown */}
              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isLight ? 'text-wf-darkText' : 'text-wf-mutedText'}`}>
                  Service Required
                </label>
                <select
                  name="serviceRequired"
                  disabled={isSubmitting}
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none disabled:opacity-60 ${
                    isLight
                      ? 'bg-wf-lavender border border-wf-borderSubtle text-wf-darkText focus:border-wf-violet'
                      : 'bg-wf-aubergine border border-wf-borderDark text-white focus:border-wf-violet'
                  }`}
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-wf-aubergine text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Dropdown */}
              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isLight ? 'text-wf-darkText' : 'text-wf-mutedText'}`}>
                  Estimated Budget
                </label>
                <select
                  name="estimatedBudget"
                  disabled={isSubmitting}
                  value={formData.estimatedBudget}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none disabled:opacity-60 ${
                    isLight
                      ? 'bg-wf-lavender border border-wf-borderSubtle text-wf-darkText focus:border-wf-violet'
                      : 'bg-wf-aubergine border border-wf-borderDark text-white focus:border-wf-violet'
                  }`}
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-wf-aubergine text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className={`block text-xs font-mono uppercase tracking-wider ${isLight ? 'text-wf-darkText' : 'text-wf-mutedText'}`}>
                  Project Description *
                </label>
                <span className="text-[10px] font-mono text-wf-mutedText/70">
                  {formData.projectDescription.length} / 500
                </span>
              </div>
              <textarea
                name="projectDescription"
                disabled={isSubmitting}
                rows={4}
                maxLength={500}
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Outline your project scope, target timeline, or reference links..."
                className={`w-full px-4 py-3 rounded-xl text-sm transition-all resize-none focus:outline-none disabled:opacity-60 ${
                  isLight
                    ? 'bg-wf-lavender border border-wf-borderSubtle text-wf-darkText focus:border-wf-violet'
                    : 'bg-wf-aubergine border border-wf-borderDark text-white focus:border-wf-violet'
                } ${errors.projectDescription ? 'border-rose-500' : ''}`}
              />
              {errors.projectDescription && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.projectDescription}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-white bg-wf-violet hover:bg-wf-violet-hover transition-all duration-200 shadow-sm hover:shadow-wf-violet flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
              <p className="text-[11px] font-mono text-wf-mutedText mt-3">
                Secure frontend submission to connected Google Form & Sheets.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Direct conversation block */}
      <div
        className={`mt-8 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-5 ${
          isLight
            ? 'bg-wf-lavender border-wf-borderSubtle'
            : 'bg-wf-plum border-wf-borderDark'
        }`}
      >
        <div>
          <p className={`text-sm font-bold font-display ${isLight ? 'text-wf-darkText' : 'text-white'}`}>
            Prefer a direct conversation?
          </p>
          <p className={`text-xs mt-0.5 ${isLight ? 'text-wf-mutedLight' : 'text-wf-mutedText'}`}>
            Reach us immediately on email or Instagram direct message.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href={siteConfig.emailLink}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-medium text-white bg-wf-aubergine hover:bg-wf-plum transition-colors border border-wf-borderDark"
          >
            <Mail className="w-3.5 h-3.5 text-wf-violet" />
            <span>Email Us</span>
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-medium text-white bg-wf-aubergine hover:bg-wf-plum transition-colors border border-wf-borderDark"
          >
            <Instagram className="w-3.5 h-3.5 text-wf-violet" />
            <span>Instagram DM</span>
          </a>
        </div>
      </div>
    </div>
  );
}

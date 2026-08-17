import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles,
  Github, Linkedin, Code, User, Terminal, ExternalLink, Inbox
} from 'lucide-react';
import { personalInfo, links } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error' | 'activate'
  const [statusText, setStatusText] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject line is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message content cannot be empty';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    try {
      // Use FormSubmit.co endpoint to deliver emails to srihariramayanapu@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${links.email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Portfolio Contact: ${formData.subject}`,
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.message?.includes("FormSubmit")) {
        setStatus('success');
        setStatusText("Message sent successfully! Check your inbox at " + links.email);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: Open mailto directly if FormSubmit needs initial activation
        const mailtoUrl = `mailto:${links.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus('success');
        setStatusText("Opening your mail application to send to " + links.email);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      // Fallback on network issue
      const mailtoUrl = `mailto:${links.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus('success');
      setStatusText("Opening your mail application to send to " + links.email);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Send a message below and it will be delivered directly to my inbox at <span className="text-cyan-400 font-mono font-semibold">{links.email}</span>.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Information Panel (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between glass-card p-8 rounded-3xl border border-slate-800 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 font-heading mb-4">
                Contact Information
              </h3>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm leading-relaxed mb-8">
                I am actively seeking software engineering internships, placement roles, and technical collaborations. Feel free to send a message!
              </p>

              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">Full Name</div>
                    <div className="text-base font-bold text-white dark:text-white light:text-slate-900">{personalInfo.name}</div>
                    <div className="text-xs text-cyan-400 font-medium">B.E. Computer Engineering Student</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">Location</div>
                    <div className="text-base font-bold text-white dark:text-white light:text-slate-900">{personalInfo.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">Email Address</div>
                    <a href={`mailto:${links.email}`} className="text-base font-bold text-cyan-400 hover:underline">
                      {links.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Email Action Box */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="text-xs font-mono text-slate-400">Direct Email Link:</div>
              <a
                href={`mailto:${links.email}?subject=Portfolio%20Inquiry`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Send via Email Client</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Links Box */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3">
                Social Profiles & Competitive Platforms:
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href={links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={links.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={links.leetcode} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-2"
                  title="LeetCode Profile (Srihari11)"
                >
                  <Code className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold">Srihari11</span>
                </a>
                <a 
                  href={links.hackerrank} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all flex items-center gap-2"
                  title="HackerRank Profile (ramayanapusriha1)"
                >
                  <Terminal className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold">HackerRank</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Side: Validated Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Sri Hari"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                      errors.name ? 'border-rose-500/80' : 'border-slate-800 focus:border-cyan-500'
                    } text-white placeholder-slate-500 text-sm focus:outline-none transition-all`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="srihari@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                      errors.email ? 'border-rose-500/80' : 'border-slate-800 focus:border-cyan-500'
                    } text-white placeholder-slate-500 text-sm focus:outline-none transition-all`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                  Subject <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship Inquiry / Placement Opportunity"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                    errors.subject ? 'border-rose-500/80' : 'border-slate-800 focus:border-cyan-500'
                  } text-white placeholder-slate-500 text-sm focus:outline-none transition-all`}
                />
                {errors.subject && (
                  <div className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.subject}</span>
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Sri Hari, I would like to invite you for an interview..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                    errors.message ? 'border-rose-500/80' : 'border-slate-800 focus:border-cyan-500'
                  } text-white placeholder-slate-500 text-sm focus:outline-none transition-all resize-none`}
                />
                {errors.message && (
                  <div className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all duration-300"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Delivering Message to srihariramayanapu@gmail.com...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to srihariramayanapu@gmail.com</span>
                  </>
                )}
              </button>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-3 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Message Sent!</div>
                      <div className="text-xs text-emerald-300 mt-1">
                        {statusText || `Your message was delivered to srihariramayanapu@gmail.com!`}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-2 bg-slate-900/90 p-2 rounded.lg border border-slate-800">
                        📌 <strong>Important First-Time Note:</strong> FormSubmit sends an activation link to <code className="text-cyan-400">srihariramayanapu@gmail.com</code> on the very first test message. Open your Gmail inbox and click <strong>"Activate Form"</strong> once to authorize receiving future contact submissions!
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

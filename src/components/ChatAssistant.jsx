import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { personalInfo, links, projectsData, certifications, skillCategories, educationList } from '../data/portfolioData';

const presetQuestions = [
  "What technologies does Sri Hari know?",
  "Tell me about Sri Hari's projects",
  "What certifications does Sri Hari have?",
  "Is Sri Hari available for internships?",
  "How can I contact Sri Hari?"
];

const getBotResponse = (query) => {
  const q = query.toLowerCase();

  if (q.includes("technolog") || q.includes("skill") || q.includes("know") || q.includes("stack")) {
    return `Sri Hari is proficient in Java, Python, JavaScript, C, React.js, React Native, HTML/CSS, SQL, Docker, Jenkins, Git, GitHub, Expo, and VS Code. He is also certified in Java SE 11 & Oracle Database SQL!`;
  }
  
  if (q.includes("project") || q.includes("disaster") || q.includes("smile")) {
    return `Sri Hari has built two major engineered systems:
1. AI-Based Disaster Preparedness & Emergency Response System (React Native, Firebase, Google Gemini AI) featuring emergency mapping & AI chatbot.
2. Smile App Dental Management System (DevOps CI/CD with Jenkins, GitHub, Docker Compose).`;
  }

  if (q.includes("certif") || q.includes("oracle")) {
    return `Sri Hari holds two official Oracle certifications:
1. Oracle Database SQL Certified Specialist
2. Oracle Certified Professional - Java SE 11 Developer`;
  }

  if (q.includes("intern") || q.includes("available") || q.includes("job") || q.includes("placement")) {
    return `Yes! Sri Hari is currently available for Full Stack, Software Developer, and Java Engineering Internships & Placement opportunities. He previously completed a Full Stack Developer Internship at Edu-Versity (Bangalore).`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("phone")) {
    return `You can reach Sri Hari directly via email at srihariramayanapu@gmail.com, via phone at (+91) 7093103017, or connect on LinkedIn (ramayanapu-srihari-88549131a) and LeetCode (Srihari11).`;
  }

  if (q.includes("college") || q.includes("education") || q.includes("gpa") || q.includes("cgpa")) {
    return `Sri Hari is pursuing B.E. in Computer Science and Engineering (Artificial Intelligence) at Saveetha School of Engineering, Chennai (Graduation 2027) with an 8.7/10 GPA. He completed Intermediate at Vagdevi Junior College with 97.2%.`;
  }

  return `Sri Hari is a Computer Engineering student (B.E. CSE AI, GPA 8.7) at Saveetha School of Engineering, Chennai. He specializes in Java, Full Stack Development, React.js, Python, Docker, and Jenkins CI/CD pipelines. Ask me about his skills, projects, certifications, or internships!`;
};

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm Sri Hari's portfolio assistant. Ask me about his skills, projects, certifications, education, or experience."
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    const botMsg = { sender: 'bot', text: getBotResponse(text) };

    setMessages(prev => [...prev, userMsg, botMsg]);
    if (!textToSend) setInput('');
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Sri Hari AI Assistant"
        className={`fixed bottom-6 left-6 z-40 p-3.5 rounded-full glass-card border border-cyan-500/40 text-cyan-400 hover:text-white hover:bg-cyan-500/20 shadow-2xl shadow-cyan-500/20 backdrop-blur-md transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
          isOpen ? 'hidden' : 'flex'
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold">
          <Bot className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold pr-1 text-slate-100 hidden sm:inline">Sri Hari AI</span>
      </button>

      {/* Chat Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 w-[90vw] sm:w-[380px] h-[520px] glass-card rounded-3xl border border-slate-700 bg-[#0B0F1B] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-cyan-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm font-heading">Sri Hari AI</h4>
                  <p className="text-[10px] text-cyan-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Portfolio Resume Assistant</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-black/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Log Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-tr-none'
                        : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Preset Questions Chips */}
            <div className="px-3 py-2 bg-slate-950/80 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[10px]">
              {presetQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 whitespace-nowrap transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Sri Hari's resume..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-950 text-white placeholder-slate-500 text-xs border border-slate-800 focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 transition-opacity"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;

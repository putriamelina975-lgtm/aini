import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, X, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function AiniAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Halo! Saya Aini AI. Ada yang bisa saya bantu dengan masakan Anda hari ini?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim() || loading) return;

    const userMessage = prompt;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setPrompt('');
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "Anda adalah Aini, seorang ahli masak ramah yang membantu pengguna menemukan resep, memberikan tips memasak, dan saran pengganti bahan makanan. Balaslah dalam bahasa Indonesia yang hangat dan membantu."
        }
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || 'Maaf, saya sedang kesulitan berpikir.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: 'Ups, ada masalah koneksi. Silakan coba lagi.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 group overflow-hidden"
        id="aini-ai-trigger"
      >
        <Bot size={24} />
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 overflow-hidden whitespace-nowrap font-medium">
          Tanya Aini AI
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-end p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="w-full max-w-md h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col pointer-events-auto overflow-hidden border border-gray-100"
            >
              {/* Header */}
              <div className="bg-natural-brand p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-xl">
                        <Sparkles size={24} className="text-natural-accent" />
                    </div>
                  <div>
                    <h3 className="font-serif font-bold italic">Asisten Masak Aini</h3>
                    <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest leading-none">Online & Siap Membantu</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-natural-bg/50">
                {messages.map((m, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: m.role === 'bot' ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-2xl text-xs font-medium leading-relaxed ${
                      m.role === 'user' 
                        ? 'bg-natural-accent text-white rounded-br-none shadow-md' 
                        : 'bg-white text-natural-text rounded-bl-none border border-natural-border shadow-sm'
                    }`}>
                      {m.text}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-natural-border shadow-sm flex items-center gap-2 text-gray-400">
                            <Loader2 className="animate-spin" size={16} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Aini Berpikir...</span>
                        </div>
                    </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 bg-white border-t border-natural-border">
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Tanya resep atau tips masak..."
                    className="flex-1 bg-natural-bg border-none rounded-2xl px-5 py-3 text-xs font-medium focus:ring-2 focus:ring-natural-accent outline-none transition-all placeholder:text-gray-400"
                  />
                  <button
                    onClick={handleSend}
                    disabled={loading || !prompt.trim()}
                    className="bg-natural-brand text-white p-3 rounded-2xl hover:bg-natural-brand/90 disabled:opacity-50 transition-all shadow-md"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <p className="text-[9px] text-gray-400 text-center mt-3 uppercase tracking-[0.2em] font-bold">
                    Aini AI Assistant &bull; Natural Tones
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

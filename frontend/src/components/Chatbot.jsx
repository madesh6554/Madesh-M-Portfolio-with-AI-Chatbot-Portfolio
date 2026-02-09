import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Send, Minimize2, MessageSquare, Loader2 } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isSleeping, setIsSleeping] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Greetings! I am Madesh's variant. How can I assist you in this timeline?", isBot: true }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const idleTimerRef = useRef(null);
    const messagesEndRef = useRef(null);
    const chatbotRef = useRef(null);
    const controls = useAnimation();

    // --- IDLE / SLEEP LOGIC ---
    const resetIdleTimer = useCallback(() => {
        setIsSleeping((prev) => {
            if (prev) {
                controls.start("awake");
                return false;
            }
            return prev;
        });
        if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
        idleTimerRef.current = setTimeout(() => {
            setIsSleeping(true);
            controls.start("sleeping");
        }, 10000); // 10 seconds to sleep
    }, [controls]);

    useEffect(() => {
        resetIdleTimer();
        window.addEventListener('mousemove', resetIdleTimer);
        window.addEventListener('keydown', resetIdleTimer);
        return () => {
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
            window.removeEventListener('mousemove', resetIdleTimer);
            window.removeEventListener('keydown', resetIdleTimer);
        };
    }, [resetIdleTimer]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // --- CLICK OUTSIDE TO CLOSE ---
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (chatbotRef.current && !chatbotRef.current.contains(event.target) && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // --- API CALL ---
    const sendMessage = async (text) => {
        if (!text.trim() || isLoading) return;

        setMessages(prev => [...prev, { text: text, isBot: false }]);
        setIsLoading(true);
        resetIdleTimer();

        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/chatbot`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text }),
            });
            const data = await response.json();
            setMessages(prev => [...prev, { text: data.reply, isBot: true }]);
        } catch (error) {
            setMessages(prev => [...prev, { text: "Nexus event detected. Connection lost.", isBot: true }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const messageToSend = inputValue;
        setInputValue(""); // Clear immediately
        await sendMessage(messageToSend);
    };

    // --- EMOTION LOGIC ---
    const [emotion, setEmotion] = useState('happy'); // neutral, happy, joy, excited, inspired

    // Random mood changes when awake to simulate "aliveness"
    useEffect(() => {
        if (isSleeping) return;
        const moods = ['neutral', 'happy', 'joy', 'excited', 'inspired']; // Strictly positive vibes
        const moodInterval = setInterval(() => {
            const randomMood = moods[Math.floor(Math.random() * moods.length)];
            setEmotion(randomMood);
        }, 5000);
        return () => clearInterval(moodInterval);
    }, [isSleeping]);

    // Reset to happy on interaction
    useEffect(() => {
        if (isOpen) setEmotion('happy');
    }, [isOpen]);

    // --- MASCOT VARIANTS ---
    const mascotVariants = {
        initial: { scale: 0, opacity: 0, y: 50 },
        enter: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 260, damping: 20 }
        },
        hover: {
            scale: 1.1,
            y: -5,
            transition: { y: { yoyo: Infinity, duration: 1.5, ease: "easeInOut" } }
        },
        sleeping: {
            scale: 0.9,
            opacity: 0.8,
            y: 10,
            transition: { duration: 1 }
        }
    };

    // Helper to render eyes based on state
    const renderEyes = () => {
        if (isSleeping) {
            return (
                <div className="flex gap-4 opacity-70">
                    {/* Sleeping Lines */}
                    <div className="w-4 h-1 bg-white rounded-full" />
                    <div className="w-4 h-1 bg-white rounded-full" />
                </div>
            );
        }

        // Custom Shapes based on Emotion
        if (['happy', 'joy', 'excited'].includes(emotion)) {
            return (
                <div className="flex gap-4">
                    {/* Happy Arches ^ ^ */}
                    <div className="w-3 h-3 border-t-4 border-r-4 border-white transform rotate-[-45deg] rounded-sm" />
                    <div className="w-3 h-3 border-t-4 border-l-4 border-white transform rotate-[45deg] rounded-sm" />
                </div>
            );
        }

        if (emotion === 'inspired') {
            return (
                <div className="flex gap-4">
                    {/* Starry/Wide Eyes O O */}
                    <div className="w-3 h-4 bg-white rounded-full animate-pulse" />
                    <div className="w-3 h-4 bg-white rounded-full animate-pulse" />
                </div>
            );
        }

        // Neutral / Default
        return (
            <div className="flex gap-4">
                <motion.div
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ repeat: Infinity, repeatDelay: 3.5, duration: 0.2 }}
                    className="w-3 h-5 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                />
                <motion.div
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ repeat: Infinity, repeatDelay: 3.5, duration: 0.2 }}
                    className="w-3 h-5 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                />
            </div>
        );
    };

    const renderMouth = () => {
        if (isSleeping) return <div className="w-2 h-2 bg-white/50 rounded-full mt-2" />; // Small dot mouth

        switch (emotion) {
            case 'happy':
            case 'joy':
                return <div className="w-6 h-3 border-b-4 border-white rounded-b-full mt-1" />; // Big Smile
            case 'excited':
                return <div className="w-6 h-4 border-2 border-white rounded-b-full mt-1 bg-white/20" />; // Open Smile
            case 'inspired': // O mouth
                return <div className="w-4 h-4 border-2 border-white rounded-full mt-1 bg-transparent" />;
            default: // neutral
                return <div className="w-6 h-1 bg-white rounded-full mt-2" />; // Straight line
        }
    };

    return (
        // Changed "right-6" to "right-24" to move it leftwards away from the sidebar
        <div ref={chatbotRef} className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:right-24 z-50 flex flex-col items-end gap-4 font-sans">

            {/* ... Chat Window Logic (Same as before) ... */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        // Shifted the chat window to align with the new button position
                        className="w-[calc(100vw-2rem)] max-w-[380px] md:w-96 rounded-2xl overflow-hidden shadow-2xl border border-[#3B82F6]/30 backdrop-blur-lg bg-black/80 flex flex-col h-[85vh] max-h-[500px] origin-bottom-right"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] flex justify-between items-center shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="bg-black/20 p-1.5 rounded-full">
                                    <MessageSquare size={18} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white tracking-wide text-sm">TVA ASSISTANT</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[10px] text-white/90 font-medium h-4 overflow-hidden flex items-center">
                                            {/* Animated Status Text */}
                                            <motion.span
                                                key={emotion}
                                                initial={{ y: 10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="uppercase"
                                            >
                                                STATUS: {emotion}
                                            </motion.span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all"
                            >
                                <Minimize2 size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#3B82F6]/20 scrollbar-track-transparent">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.isBot
                                        ? 'bg-white/10 text-white rounded-tl-sm border border-white/5'
                                        : 'bg-[#3B82F6] text-white rounded-tr-sm shadow-[0_4px_12px_rgba(59,130,246,0.3)]'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {messages.length === 1 && (
                                <div className="grid grid-cols-2 gap-2 mt-4 px-2">
                                    <button
                                        onClick={() => sendMessage("Tell me about Madesh.")}
                                        className="text-xs bg-[#3B82F6]/20 border border-[#3B82F6]/50 text-[#3B82F6] px-3 py-1.5 rounded-full hover:bg-[#3B82F6] hover:text-white transition-colors"
                                    >
                                        About Madesh
                                    </button>
                                    <button
                                        onClick={() => sendMessage("What are his skills?")}
                                        className="text-xs bg-[#3B82F6]/20 border border-[#3B82F6]/50 text-[#3B82F6] px-3 py-1.5 rounded-full hover:bg-[#3B82F6] hover:text-white transition-colors"
                                    >
                                        Skills
                                    </button>
                                    <button
                                        onClick={() => sendMessage("What is his professional experience?")}
                                        className="text-xs bg-[#3B82F6]/20 border border-[#3B82F6]/50 text-[#3B82F6] px-3 py-1.5 rounded-full hover:bg-[#3B82F6] hover:text-white transition-colors"
                                    >
                                        Experience
                                    </button>
                                    <button
                                        onClick={() => sendMessage("What projects has he worked on?")}
                                        className="text-xs bg-[#3B82F6]/20 border border-[#3B82F6]/50 text-[#3B82F6] px-3 py-1.5 rounded-full hover:bg-[#3B82F6] hover:text-white transition-colors"
                                    >
                                        Projects
                                    </button>
                                    <button
                                        onClick={() => sendMessage("What is his education background?")}
                                        className="text-xs bg-[#3B82F6]/20 border border-[#3B82F6]/50 text-[#3B82F6] px-3 py-1.5 rounded-full hover:bg-[#3B82F6] hover:text-white transition-colors"
                                    >
                                        Education
                                    </button>
                                    <button
                                        onClick={() => sendMessage("What certifications does he have?")}
                                        className="text-xs bg-[#3B82F6]/20 border border-[#3B82F6]/50 text-[#3B82F6] px-3 py-1.5 rounded-full hover:bg-[#3B82F6] hover:text-white transition-colors"
                                    >
                                        Certifications
                                    </button>
                                </div>
                            )}

                            {isLoading && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-sm flex items-center gap-2 border border-white/5">
                                        <Loader2 className="w-4 h-4 animate-spin text-[#3B82F6]" />
                                        <span className="text-xs text-white/60">Processing timeline...</span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 bg-black/40 border-t border-white/10 backdrop-blur-md">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask the variant..."
                                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isLoading}
                                    className="absolute right-2 p-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-[#3B82F6]/20"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- FLOATING MASCOT --- */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        variants={mascotVariants}
                        initial="initial"
                        animate={isSleeping ? "sleeping" : isHovered ? "hover" : "enter"}
                        onHoverStart={() => {
                            setIsHovered(true);
                            resetIdleTimer();
                            if (!isSleeping) setEmotion('surprised'); // Reaction to hover
                        }}
                        onHoverEnd={() => {
                            setIsHovered(false);
                            if (!isSleeping) setEmotion('neutral');
                        }}
                        onClick={() => {
                            setIsOpen(true);
                            setEmotion('happy');
                            resetIdleTimer();
                        }}
                        className="cursor-pointer group relative"
                    >
                        {/* Tooltip */}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 text-[#3B82F6] px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap border border-[#3B82F6]/30 backdrop-blur-md pointer-events-none"
                        >
                            <span className="hidden md:block">
                                {isSleeping ? "Zzz..." : emotion === 'crying' ? "I'm sad..." : "Need assistance?"}
                            </span>
                            {/* Arrow */}
                            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-black/80 border-t border-r border-[#3B82F6]/30 transform rotate-45" />
                        </motion.div>

                        {/* --- MASCOT BODY (Miss Minutes Style) --- */}
                        <motion.div
                            className="relative w-20 h-20 md:w-28 md:h-28 drop-shadow-2xl translate-x-4"
                            animate={['happy', 'joy', 'excited'].includes(emotion) ? { rotate: [0, -5, 5, -5, 0] } : {}}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >

                            {/* Legs - Longer & Visible */}
                            <div className="absolute -bottom-6 w-full flex justify-center gap-3 z-0">
                                {/* Left Leg */}
                                <motion.div
                                    className="relative w-2 h-14 bg-[#1E293B] origin-top rounded-full"
                                    animate={['excited', 'joy'].includes(emotion) ? { rotate: [0, -15, 0], y: [0, -3, 0] } : { rotate: -8 }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                >
                                    <div className="absolute -bottom-2 -left-2 w-8 h-5 bg-[#3B82F6] rounded-full border-2 border-[#1E293B]" /> {/* Shoe */}
                                </motion.div>

                                {/* Right Leg */}
                                <motion.div
                                    className="relative w-2 h-14 bg-[#1E293B] origin-top rounded-full"
                                    animate={['excited', 'joy'].includes(emotion) ? { rotate: [0, 15, 0], y: [0, -5, 0] } : { rotate: 8 }}
                                    transition={{ repeat: Infinity, duration: 1, delay: 0.1 }}
                                >
                                    <div className="absolute -bottom-2 -left-1 w-8 h-5 bg-[#3B82F6] rounded-full border-2 border-[#1E293B]" /> {/* Shoe */}
                                </motion.div>
                            </div>

                            {/* Arms */}
                            <div className="absolute top-[45%] w-full z-0 pointer-events-none px-0">
                                {/* Left Arm */}
                                <motion.div
                                    className="absolute -left-5 w-10 h-2 bg-[#1E293B] rounded-full origin-right"
                                    animate={emotion === 'excited' ? { rotate: [0, -40, -10, -40, 0] } : { rotate: 20 }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <div className="absolute -left-3 -top-2 w-6 h-6 bg-white rounded-full border-2 border-[#1E293B]" /> {/* Glove */}
                                </motion.div>

                                {/* Right Arm */}
                                <motion.div
                                    className="absolute -right-5 w-10 h-2 bg-[#1E293B] rounded-full origin-left"
                                    animate={['happy', 'excited'].includes(emotion) ? { rotate: [0, 40, 10, 40, 0] } : { rotate: -20 }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <div className="absolute -right-3 -top-2 w-6 h-6 bg-white rounded-full border-2 border-[#1E293B]" /> {/* Glove */}
                                </motion.div>
                            </div>

                            {/* Clock Face Body (Solid) */}
                            <div className="absolute inset-1 z-10 rounded-full border-[4px] border-[#1D4ED8] bg-[#60A5FA] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden">

                                {/* Clock Ticks */}
                                <div className="absolute inset-0">
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-1 h-3 bg-[#1E293B] rounded-full"
                                            style={{
                                                top: '0',
                                                left: '50%',
                                                height: '100%',
                                                width: '4px',
                                                background: 'transparent',
                                                transform: `translateX(-50%) rotate(${i * 30}deg)`
                                            }}
                                        >
                                            <div className="w-1.5 h-2.5 bg-[#1E293B] rounded-full mx-auto mt-1" />
                                        </div>
                                    ))}
                                </div>

                                {/* Face Container */}
                                <div className="relative w-full h-full flex flex-col items-center justify-center z-20">

                                    {/* Dynamic Eyes */}
                                    <div className="absolute top-[28%] w-full flex justify-center gap-2">
                                        {renderEyes()}
                                    </div>

                                    {/* Nose */}
                                    <div className="w-1.5 h-1.5 bg-[#1E293B] rounded-full mt-2" />

                                    {/* Dynamic Mouth */}
                                    <div className="absolute bottom-[20%] w-full flex justify-center">
                                        {renderMouth()}
                                    </div>
                                </div>

                                {/* Shine */}
                                <div className="absolute top-[15%] right-[20%] w-4 h-2 bg-white/30 rounded-full -rotate-12 blur-[1px]" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;

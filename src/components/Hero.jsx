import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

// ScrambleText: hover-activated scrambling animation for headlines
function ScrambleText({ text, className }) {
  const [display, setDisplay] = useState(text);
  const animRef = useRef(null);
  const frame = useRef(0);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const run = () => {
    const target = text;
    const total = 16; // duration in frames
    const progress = Math.min(1, frame.current / total);
    const revealed = Math.floor(progress * target.length);

    let next = '';
    for (let i = 0; i < target.length; i++) {
      if (i < revealed) next += target[i];
      else if (target[i] === ' ') next += ' ';
      else next += letters[Math.floor(Math.random() * letters.length)];
    }
    setDisplay(next);
    frame.current += 1;
    if (frame.current <= total) animRef.current = requestAnimationFrame(run);
  };

  const handleEnter = () => {
    cancelAnimationFrame(animRef.current || 0);
    frame.current = 0;
    animRef.current = requestAnimationFrame(run);
  };

  useEffect(() => () => cancelAnimationFrame(animRef.current || 0), []);

  return (
    <span onMouseEnter={handleEnter} className={className} aria-label={text}>
      {display}
    </span>
  );
}

export default function Hero() {
  // Cursor tracking glow (no parallax, no grain)
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const raf = useRef(0);

  const onMove = (e) => {
    const { clientX, clientY } = e;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => setPos({ x: clientX, y: clientY }));
  };

  useEffect(() => () => cancelAnimationFrame(raf.current || 0), []);

  return (
    <section id="home" onMouseMove={onMove} className="relative w-full min-h-[92vh] pt-16 overflow-hidden bg-[#0b0e14]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/XuAg4PYWfzmy0iW1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 sm:py-32">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white"
            >
              <ScrambleText text="Hillsinai University" className="cursor-pointer" />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
              className="mt-4 text-base sm:text-lg text-white/80 max-w-xl"
            >
              Learn real-world skills in AI, engineering, health, and civic tech. Hands-on projects, global mentors, and industry-ready pathways.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#programs" className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">
                Explore Tracks
              </a>
              <a href="#teaching" className="inline-flex items-center rounded-md bg-black/50 border border-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-black/60">
                See How We Teach
              </a>
              <a href="#apply" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-500">
                Apply Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cursor-following glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(180px 180px at ${pos.x}px ${pos.y}px, rgba(79,70,229,0.22), transparent 60%)`,
        }}
      />

      {/* Top-to-bottom gradient to ensure readable content; non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent" />
    </section>
  );
}

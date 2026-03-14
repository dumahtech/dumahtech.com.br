/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#3345B9] flex flex-col font-sans selection:bg-white/20">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center text-white pt-20 pb-10">
        {/* Logo Section */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-60 h-20">
            <img
              src="/logo-dumah.svg"
              alt="Dumah Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Hero Text */}

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-thin leading-[1.15] tracking-tight"
          >
            <span className="text-[#ADB1FF]">Inteligência de marketing </span>
            <span className="font-thin">
              para quem leva seu negócio a sério.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-thin opacity-90"
          >
            Em breve um sistema de marketing completo para sua empresa....
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 mb-20"
        >
          <motion.a
            href="https://api.whatsapp.com/send?phone=5584996578558"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg text-xs font-bold hover:bg-zinc-900 transition-all shadow-lg"
          >
            Fale conosco e saiba mais!
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Circular Graphic (Abstract Loader) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative w-40 h-40"
        >
          {/* Outer ring */}
          <div className="absolute inset-0 border-[16px] border-white/5 rounded-full" />
          {/* Animated highlight */}
          <div className="absolute inset-0 border-[16px] border-transparent border-t-blue-300/40 border-r-blue-300/40 rounded-full animate-[spin_3s_linear_infinite]" />
          {/* Inner glow */}
          <div className="absolute inset-4 bg-blue-400/10 rounded-full blur-xl" />
        </motion.div>
      </main>

      {/* Copyright Footer */}
      <footer className="bg-black py-12 px-6 text-center border-t border-white/5">
        <p className="text-[11px] text-zinc-500 uppercase tracking-[0.2em] font-medium">
          DUMAH TECH 2026 © All right reserved
        </p>
      </footer>

      {/* Floating Badge */}
    </div>
  );
}

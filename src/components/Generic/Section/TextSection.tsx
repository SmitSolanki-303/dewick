"use client";

import { motion } from "framer-motion";

export default function TextSection() {
  return (
    <section className="relative w-full bg-black min-h-screen flex items-center">
      <div className="container">
        <p
          className="text-xl sm:text-2xl font-normal text-white text-center leading-relaxed"
        >
          At Vence, we excel in creating captivating content that not only
          captures attention but also drives meaningful engagement. We leverages
          cutting-edge technology and innovative storytelling techniques to
          produce visually stunning commercials.
        </p>
      </div>
    </section>
  );
}

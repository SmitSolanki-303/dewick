"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerStagger, fadeUp } from "@/animations/motionVariants";

type Props = {
  images: string[];
};

export default function WorkGallery({ images }: Props) {
  return (
    <section aria-labelledby="project-images" className="space-y-10">
      <h2 id="project-images" className="sr-only">
        Project images
      </h2>

      <motion.div
        className="grid grid-cols-1 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={containerStagger}
      >
        {images.map((src, idx) => (
          <motion.figure
            // ensure unique key even when src values repeat
            key={`${src ?? "image"}-${idx}`}
            className="w-full overflow-hidden rounded-2xl bg-neutral-900"
            variants={fadeUp as any}
          >
            <div className="relative w-full h-full max-h-[500px] overflow-hidden">
              <img
                src={src}
                alt={`Project image ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
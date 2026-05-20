"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, containerStagger } from "@/animations/motionVariants";
import { workItems } from "@/lib/work";

export default function OurWorkSection() {
  return (
    <section id="our-work" className="bg-black text-white" aria-labelledby="our-work-title">
      <div className="container">
        <h2 id="our-work-title" className="text-3xl md:text-4xl font-semibold mb-8">
          Selected Work
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerStagger}
        >
          {workItems.map((it, idx) => {
            const colSpan = it.fullWidth ? "md:col-span-2" : "";
            return (
              <motion.article
                key={it.id}
                className={`${colSpan} group`}
                variants={fadeUp as any}
                custom={idx * 0.02}
                role="article"
                aria-labelledby={`work-title-${it.id}`}
              >
                <Link
                  href={`/work/${it.id}`}
                  className="block overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/30"
                >
                  <div className="relative w-full bg-neutral-900 overflow-hidden rounded-t-2xl max-h-[450px]">
                    <div className="w-full h-full">
                      <img
                        src={it.image}
                        alt={it.title}
                        loading="lazy"
                        className="w-full h-full object-cover transform transition-transform duration-500 will-change-transform group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="mt-4 relative z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-medium rounded-2xl bg-neutral-900/60 border border-white/10 text-white px-2 py-1">
                        {it.year}
                      </span>
                      <span className="text-xs font-medium rounded-2xl bg-neutral-900/60 border border-white/10 text-white px-2 py-1">
                        {it.category}
                      </span>
                    </div>

                    <h3 id={`work-title-${it.id}`} className="text-lg md:text-xl font-semibold leading-tight">
                      {it.title}
                    </h3>

                    <p className="mt-2 text-sm text-neutral-400 max-w-3xl">
                      {it.shortDesc}
                    </p>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

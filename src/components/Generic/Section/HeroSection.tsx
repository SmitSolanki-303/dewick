"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motionVariants";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="container bg-black text-white flex items-center">
      <div className="w-full flex flex-col lg:flex-row">
        {/* Mobile Image - Only visible on mobile/tablet, shown at top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block lg:hidden w-full h-[50vh] md:h-[60vh] relative"
        >
          <Image
            src="/images/hero-image.avif"
            alt="Creative workspace"
            fill
            className="object-cover object-center grayscale object-top"
            priority
            quality={85}
            sizes="100vw"
          />
          {/* Gradient overlay for smooth transition to content */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black" />
        </motion.div>

        {/* Left Content - Takes about 45% on desktop, full width on mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[45%] flex flex-col justify-between py-12 md:py-16 lg:py-20 lg:min-h-screen"
        >
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center space-y-8 md:space-y-10 lg:space-y-12">
            {/* Hero Heading */}
            <motion.div variants={fadeUp} className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight leading-none">
                We don't follow trends.
                <br />
                We create them.
              </h1>
            </motion.div>

            {/* Body Text */}
            <motion.div variants={fadeUp} className="space-y-4 md:space-y-6 max-w-xl">
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                We are driven by an unwavering commitment to excellence and a
                passion for innovation. Our approach blends meticulous
                craftsmanship with a bold vision, allowing us to create content
                that stands out in a crowded marketplace. Our work is defined by
                its sophistication, creativity, and ability to push the
                boundaries of what's possible.
              </p>

              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Beyond client-driven projects, we invest in experimental work
                that challenges the status quo and explores the limitless
                possibilities of digital media. By constantly pushing the limits
                of technology and creativity, we not only enhance our skills but
                also inspire new trends and set new standards in the industry.
              </p>
            </motion.div>
          </div>

          {/* Author Info - Bottom Left */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 md:gap-4 mt-8 md:mt-12"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-zinc-800 border border-white/10 shrink-0">
              <div className="w-full h-full flex items-center justify-center text-zinc-400 text-sm md:text-base font-medium">
                DP
              </div>
            </div>
            <div>
              <p className="text-sm md:text-base font-medium text-white">Dewick Patel</p>
              <p className="text-xs md:text-sm text-zinc-500">Creative Director</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image - Takes about 55% on desktop, hidden on mobile/tablet */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hidden lg:block lg:w-[55%] relative"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-black/40 z-10" />

          {/* Image Container */}
          <div className="relative w-full h-full max-w-[700px] ml-auto">
            <Image
              src="/images/hero-image.avif"
              alt="Creative workspace"
              fill
              className="object-cover object-center grayscale"
              priority
              quality={90}
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}

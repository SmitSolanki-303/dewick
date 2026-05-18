"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motionVariants";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      <div className="w-full min-h-screen flex flex-col lg:flex-row">
        {/* Left Content - Takes about 45% on desktop, full width on mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[45%] flex flex-col justify-between px-4 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20 min-h-screen"
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
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-zinc-800 border border-white/10 flex-shrink-0">
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

        {/* Mobile Background Image - Only visible on mobile/tablet */}
        <div className="absolute inset-0 lg:hidden -z-10">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-image.avif"
              alt="Creative workspace background"
              fill
              className="object-cover object-center grayscale opacity-20"
              priority
              quality={60}
              sizes="100vw"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        </div>
      </div>
    </section>
  );
}

import HeroSection from "@/components/Generic/Section/HeroSection";
import TextSection from "@/components/Generic/Section/TextSection";
import OurWorkSection from "@/components/Generic/Section/OurWorkSection";
import Separator from "@/components/ui/Separator/Separator";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <Separator />

      {/* Text Section */}
      <TextSection />

      <Separator />

      {/* Our Work */}
      <OurWorkSection />

      <Separator />

      {/* Additional sections for scroll testing */}
      <section
        id="work"
        className="min-h-screen flex items-center justify-center bg-neutral-900"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Work (anchor)
          </h2>
          <p className="text-lg text-neutral-400 max-w-3xl">
            Explore our portfolio of innovative projects and creative solutions.
          </p>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-neutral-950"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Us
          </h2>
          <p className="text-lg text-neutral-400 max-w-3xl">
            We are driven by excellence and passion for innovation. Our team
            creates trends and delivers exceptional results.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-neutral-900"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-neutral-400 max-w-3xl">
            Get in touch with us to discuss your next project.
          </p>
        </div>
      </section>
    </main>
  );
}

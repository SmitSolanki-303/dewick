import Link from "next/link";
import { notFound } from "next/navigation";
import { findWorkById, workItems } from "@/lib/work";
import WorkGallery from "@/components/Work/WorkGallery";

type Props = {
  params: { id: string } | Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return workItems.map((item) => ({ id: item.id }));
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;
  const item = findWorkById(id);
  if (!item) return notFound();

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="container">
        <Link href="/" className="inline-block text-sm text-neutral-400 hover:text-white mb-8">
          ← Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left: Title + Badges */}
          <div className="lg:col-span-6">
            <div className="border-t border-white/6 pt-6">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-medium rounded-2xl bg-neutral-900/60 border border-white/10 text-white px-2 py-1">
                  {item.year}
                </span>
                <span className="text-xs font-medium rounded-2xl bg-neutral-900/60 border border-white/10 text-white px-2 py-1">
                  {item.category}
                </span>
                {item.href && (
                  <span className="text-xs font-medium rounded-2xl bg-neutral-900/60 border border-white/10 text-white px-2 py-1">
                    External
                  </span>
                )}
              </div>

              <h1 id="work-title" className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                {item.title}
              </h1>
            </div>
          </div>

          {/* Right: Detailed description */}
          <div className="lg:col-span-6">
            <div className="pt-6 lg:pt-6">
              <p className="text-lg text-neutral-400 max-w-prose leading-relaxed">
                {item.detailDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Client-side gallery (framer-motion inside client component) */}
        <WorkGallery images={item.images ?? []} />
      </section>
    </main>
  );
}
export type WorkItem = {
  id: string;
  title: string;
  desc: string;
  year: string;
  category: string;
  image: string;
  fullWidth?: boolean;
  href?: string;
};

export const workItems: WorkItem[] = [
  {
    id: "shaping-urban-icons",
    title: "Shaping Urban Icons",
    desc: "Capturing iconic structures that redefine cityscapes.",
    year: "2024",
    category: "Architecture",
    image: "/images/hero-image.avif",
  },
  {
    id: "windows-to-the-world",
    title: "Windows to the World",
    desc: "Merging technology with nature for a modern campaign.",
    year: "2024",
    category: "Campaign",
    image: "/images/hero-image.avif",
  },
  {
    id: "bridge-of-light",
    title: "Bridge of Light",
    desc: "A study in minimal forms and ambient lighting.",
    year: "2023",
    category: "Design",
    image: "/images/hero-image.avif",
    fullWidth: true,
  },
  {
    id: "city-grid",
    title: "City Grid",
    desc: "Architecture that responds to human rhythm.",
    year: "2024",
    category: "Architecture",
    image: "/images/hero-image.avif",
  },
  {
    id: "studio-moments",
    title: "Studio Moments",
    desc: "Intimate portraits of creative practice.",
    year: "2024",
    category: "Campaign",
    image: "/images/hero-image.avif",
  },
  {
    id: "harbor-lines",
    title: "Harbor Lines",
    desc: "Compositional studies of waterfront structures.",
    year: "2023",
    category: "Photography",
    image: "/images/hero-image.avif",
    fullWidth: true,
  },
];

export function findWorkById(id?: string) {
  if (!id) return undefined;
  return workItems.find((w) => w.id === id);
}
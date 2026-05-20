export type WorkItem = {
  id: string;
  title: string;
  // short description shown on index / collection cards
  shortDesc: string;
  // detailed description shown on the work detail page
  detailDesc: string;
  // legacy/compat field kept for backward compatibility (maps to shortDesc)
  desc?: string;
  year: string;
  category: string;
  image: string;
  images: string[]; // multiple images for detail page
  fullWidth?: boolean;
  href?: string;
};

export const workItems: WorkItem[] = [
  {
    id: "shaping-urban-icons",
    title: "Shaping Urban Icons",
    shortDesc: "Capturing iconic structures that redefine cityscapes.",
    detailDesc:
      "A focused study of urban forms exploring balance, scale and materiality. The project documents civic and infrastructural landmarks, emphasizing minimalist composition and atmospheric lighting to highlight how architecture shapes public perception.",
    desc: "Capturing iconic structures that redefine cityscapes.",
    year: "2024",
    category: "Architecture",
    image: "/images/hero-image.avif",
    images: ["/images/hero-image.avif", "/images/hero-image.avif", "/images/hero-image.avif"],
  },
  {
    id: "windows-to-the-world",
    title: "Windows to the World",
    shortDesc: "Merging technology with nature for a modern campaign.",
    detailDesc:
      "An editorial campaign blending interior environments with subtle technological touches. The work focuses on human scale, natural light and tactile details to create approachable imagery that bridges lifestyle and product storytelling.",
    desc: "Merging technology with nature for a modern campaign.",
    year: "2024",
    category: "Campaign",
    image: "/images/hero-image.avif",
    images: ["/images/hero-image.avif", "/images/hero-image.avif"],
  },
  {
    id: "bridge-of-light",
    title: "Bridge of Light",
    shortDesc: "A study in minimal forms and ambient lighting.",
    detailDesc:
      "An experimental series investigating how light transforms structural geometry. Through dusk and dawn shoots, this project captures subtle tonal shifts and the interplay between engineered elements and natural atmosphere.",
    desc: "A study in minimal forms and ambient lighting.",
    year: "2023",
    category: "Design",
    image: "/images/hero-image.avif",
    images: ["/images/hero-image.avif", "/images/hero-image.avif"],
    fullWidth: true,
  },
  {
    id: "city-grid",
    title: "City Grid",
    shortDesc: "Architecture that responds to human rhythm.",
    detailDesc:
      "Documenting urban systems and the everyday choreography of public spaces. The series highlights how modular systems and human activity coexist, using tight compositions and rhythmic patterns to tell a cohesive visual story.",
    desc: "Architecture that responds to human rhythm.",
    year: "2024",
    category: "Architecture",
    image: "/images/hero-image.avif",
    images: ["/images/hero-image.avif"],
  },
  {
    id: "studio-moments",
    title: "Studio Moments",
    shortDesc: "Intimate portraits of creative practice.",
    detailDesc:
      "A portrait-driven exploration of studios and makers. Images focus on process, tools and fleeting gestures, creating a visual archive that celebrates craft and the quiet complexity of making.",
    desc: "Intimate portraits of creative practice.",
    year: "2024",
    category: "Campaign",
    image: "/images/hero-image.avif",
    images: ["/images/hero-image.avif", "/images/hero-image.avif"],
  },
  {
    id: "harbor-lines",
    title: "Harbor Lines",
    shortDesc: "Compositional studies of waterfront structures.",
    detailDesc:
      "A visual examination of harbors and docks, emphasizing line, reflection and negative space. The project seeks to reveal the formal qualities of maritime infrastructure through disciplined framing and tonal restraint.",
    desc: "Compositional studies of waterfront structures.",
    year: "2023",
    category: "Photography",
    image: "/images/hero-image.avif",
    images: ["/images/hero-image.avif", "/images/hero-image.avif"],
    fullWidth: true,
  },
];

export function findWorkById(id?: string) {
  if (!id) return undefined;
  return workItems.find((w) => w.id === id);
}
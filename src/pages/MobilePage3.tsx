import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageLightbox, { type GalleryImage } from "./components/ImageLightbox";

export default function MobilePage3() {
  const images: GalleryImage[] = [
    { src: "/WebP/sketches/Graphite portrait 1.webp", label: "Graphite Portrait (2022)" },
    { src: "/WebP/sketches/Graphite portrait 2.webp", label: "Graphite Portrait 2 (2022)" },
    { src: "/WebP/sketches/Portrait sketches.webp", label: "Assorted Graphite Portraits (2024)" },
    { src: "/WebP/sketches/Figure study.webp", label: "Figure study with live model (2025)" },
    { src: "/WebP/sketches/Figure study 2.webp", label: "Figure study 2 with live model (2025)" },
    { src: "/WebP/sketches/Figure study 3.webp", label: "Figure study 3 with live model (2025)" },
    { src: "/WebP/sketches/Cowboy.webp", label: "Cowboy Sketch (2025)" },
    { src: "/WebP/sketches/Building.webp", label: "Architecture Practice (2022)" },
    { src: "/WebP/sketches/Travel sketch 1.webp", label: "Travel Sketch 1 (Kyoto, 2023)" },
    { src: "/WebP/sketches/Travel sketch 2.webp", label: "Travel Sketch 2 (Nishinippori, 2022)" },
    { src: "/WebP/sketches/Skeletons.webp", label: "Skeletons (2024)" },
    { src: "/WebP/sketches/Animal sketch practice.webp", label: "Animal Sketch Practice (2024)" },
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="flex min-h-screen flex-col text-md">
      <div
        className="min-h-screen"
        style={{ backgroundImage: "var(--page-background-image)" }}
      >
        <Navbar />

        <div className="flex justify-center px-4 pt-6 rounded-sm">
          <div className="w-[calc(100vw-16px)] max-w-[min(100%,_1000px)] overflow-hidden rounded-sm bg-gray-200 p-2 shadow-2xl outline-white outline-2">
            <div
              className="rounded-sm border-2 border-slate-500 bg-gray-400 bg-no-repeat bg-size-[auto_110px] outline-2 outline-slate-500"
              style={{ backgroundImage: "url('/WebP/tags/sketches.webp')" }}
            >
              <div className="flex h-130 w-full justify-between overflow-hidden scroll-smooth scrollbar-thumb-white">
                <section className="images-slider w-full">
                  {images.map((image) => (
                    <button
                      key={image.label}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className="group cursor-pointer bg-transparent p-0 text-left"
                    >
                      <img
                        src={image.src}
                        alt={image.label}
                        className="rounded-sm shadow-2xl transition-all duration-300 hover:-translate-y-4 hover:scale-102 hover:drop-shadow-2xl"
                      />
                      <div className="flex justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p>{image.label}</p>
                      </div>
                    </button>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageLightbox isOpen={Boolean(selectedImage)} image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

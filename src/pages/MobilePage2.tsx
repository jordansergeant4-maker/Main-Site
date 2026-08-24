import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageLightbox, { type GalleryImage } from "./components/ImageLightbox";

export default function MobilePage2() {
  const images: GalleryImage[] = [
    { src: "/WebP/digital/Travel design 1.webp", label: "Travel Design (Tokyo, 2024)" },
    { src: "/WebP/digital/jenna png.webp", label: "Commissioned Digital Painting (2026)" },
    { src: "/WebP/digital/ms45.webp", label: "Film Study (2026) 'Ms. 45' Dir. Abel Ferrara (1981)" },
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
              className="rounded-sm border-2 border-slate-500 bg-gray-400 bg-no-repeat bg-size-[auto_105px] outline-2 outline-slate-500"
              style={{ backgroundImage: "url('/WebP/tags/DIGITAL ART.webp')" }}
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

import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageLightbox, { type GalleryImage } from "./components/ImageLightbox";

export default function MobilePage1() {
  const images: GalleryImage[] = [
    { src: "/WebP/adv/grimm.webp", label: "Grimm Auto Commission (2026)" },
    { src: "/WebP/adv/Gion Festival.webp", label: "Gion Festival Advert (2026)" },
    { src: "/WebP/adv/vsbevbar.webp", label: "V's BevBar Branding Kit (2025)", description: "In 2025, I was commissioned by a small local business called V's BevBar to create their logos and brand's image. This business operates a mobile beverage bar that services parties, graduations, weddings, etc. The design for this logo highlights the energetic and charismatic presence that their service offers through prominent bright colors and a lively font. Designs made for this business have been printed on stickers, flyers, menus, business cards, etc." },
    { src: "/WebP/adv/Kiyoshi Soba.webp", label: "Kiyoshi Soba Advert (2026)" },
    { src: "/WebP/adv/Sakura Festival.webp", label: "Sakura Festival Advert (2026)" },
    
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
              className="rounded-sm border-2 border-slate-500 bg-gray-400 bg-no-repeat bg-size-[auto_100px] outline-2 outline-slate-500"
              style={{ backgroundImage: "url('/WebP/tags/adv logos.webp')" }}
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

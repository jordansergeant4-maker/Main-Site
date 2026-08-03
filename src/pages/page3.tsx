import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageLightbox, { type GalleryImage } from "./components/ImageLightbox";

export function Page3() {
    const images: GalleryImage[] = [
        { src: "/WebP/sketches/Graphite portrait 1.webp", label: "Graphite Portrait (2022)", description: "" },
        { src: "/WebP/sketches/Graphite portrait 2.webp", label: "Graphite Portrait 2 (2022)", description: "" },
        { src: "/WebP/sketches/Portrait sketches.webp", label: "Assorted Graphite Portraits (2024)", description: "" },
        { src: "/WebP/sketches/Figure study.webp", label: "Figure study with live model (2025)", description: "" },
        { src: "/WebP/sketches/Figure study 2.webp", label: "Figure study 2 with live model (2025)", description: "" },
        { src: "/WebP/sketches/Figure study 3.webp", label: "Figure study 3 with live model (2025)", description: "" },
        { src: "/WebP/sketches/Cowboy.webp", label: "Cowboy Sketch (2025)", description: "" },
        { src: "/WebP/sketches/Building.webp", label: "Architecture Practice (2022)", description: "" },
        { src: "/WebP/sketches/Travel sketch 1.webp", label: "Travel Sketch 1 (Kyoto, 2023)", description: "" },
        { src: "/WebP/sketches/Travel sketch 2.webp", label: "Travel Sketch 2 (Nishinippori, 2022)", description: "" },
        { src: "/WebP/sketches/Skeletons.webp", label: "Skeletons (2024)", description: "" },
        { src: "/WebP/sketches/Animal sketch practice.webp", label: "Animal Sketch Practice (2024)", description: "" },
    ];

    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    return(
         <div className="min-h-screen flex flex-col text-md">  
            

          <div className="min-h-screen"
                  style={{
                         backgroundImage: "var(--page-background-image)" }}>   
        
                    <div className="">
                        <Navbar />
                    </div>

         <div className="flex justify-center px-2 pt-4 rounded-sm sm:px-0 sm:pt-10">
            <div className="bg-gray-200 shadow-2xl p-2 max-h-[78svh] w-[calc(100vw-16px)] max-w-[min(100%,_1000px)] overflow-hidden rounded-sm outline-white outline-2 sm:p-8 sm:max-h-180 sm:w-auto">

                <div className="bg-gray-400 outline-slate-500 outline-2 min-w-0 rounded-sm bg-no-repeat bg-size-[auto_200px] sm:min-w-120"
                 style={{
                 backgroundImage: "url('/WebP/tags/sketches.webp')" }}>

                    <div className="flex h-full w-full justify-between overflow-hidden scroll-smooth scrollbar-thumb-white sm:max-w-195 sm:max-h-180">

                        <section className="images-container images-slider w-full sm:w-auto" >
                            {images.map((image) => (
                                <button
                                    key={image.label}
                                    type="button"
                                    onClick={() => setSelectedImage(image)}
                                    className="group cursor-pointer bg-transparent p-0 text-left"
                                >
                                    <img src={image.src} alt={image.label} className="rounded-sm hover-3d shadow-2xl hover:-translate-y-4 hover:drop-shadow-2xl hover:scale-102 transition-all duration-300" />
                                    <div className="flex text-white justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    )
}
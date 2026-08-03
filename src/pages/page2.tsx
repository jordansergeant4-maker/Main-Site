import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageLightbox, { type GalleryImage } from "./components/ImageLightbox";

export function Page2(){
    const images: GalleryImage[] = [
        {
            src: "/WebP/digital/Travel design 1.webp",
            label: "Travel Design (Tokyo, 2024)",
            description: "",
        },
        {
            src: "/WebP/digital/jenna png.webp",
            label: "Commissioned Digital Painting (2026)",
            description: "",
        },
    ];

    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    return(

            <div className="min-h-screen flex flex-col text-md">
                <div>

                     <div className="justify-center min-h-screen"
                             style={{
                                    backgroundImage: "var(--page-background-image)" }}>   
                   
                               <div className="">
                                   <Navbar />
                               </div>
        
                 
        
                 <div className="flex justify-center pt-10 rounded-sm">
                    <div className="bg-gray-200  shadow-2xl max-w-6xl p-8  max-h-180 outline-white outline-2 rounded-sm">
        
                        <div className="bg-gray-400 outline-slate-500 outline-2 rounded-sm min-w-40 bg-no-repeat bg-size-[auto_180px]"
                        style={{
                         backgroundImage: "url('/WebP/tags/DIGITAL ART.webp')" }}>
        
                            <div className="flex justify-between scroll-smooth scrollbar-thumb-white overflow-hidden max-w-195 max-h-180 w-full overflow-hidden">
        
                                <section className="images-container" >
                                    {images.map((image) => (
                                        <button
                                            key={image.label}
                                            type="button"
                                            onClick={() => setSelectedImage(image)}
                                            className="group cursor-pointer bg-transparent p-0 text-left"
                                        >
                                            <img src={image.src} alt={image.label} className="rounded-lg shadow-2xl hover:-translate-y-4 hover:scale-102 transition-all duration-300" />
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
                </div>

                <ImageLightbox isOpen={Boolean(selectedImage)} image={selectedImage} onClose={() => setSelectedImage(null)} />
                </div>
    )
}

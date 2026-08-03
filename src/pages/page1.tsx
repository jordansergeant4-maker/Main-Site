import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageLightbox, { type GalleryImage } from "./components/ImageLightbox";

export function Page1(){
    const images: GalleryImage[] = [
        {
            src: "/WebP/adv/grimm.webp",
            label: "Grimm Auto Commission (2026)",
            description: "",
        },
        {
            src: "/WebP/adv/Gion Festival.webp",
            label: "Gion Festival Advert (2026)",
            description: "",
        },
        {
            src: "/WebP/adv/vsbevbar.webp",
            label: "V's BevBar Branding Kit (2025)" , 
            description: "In 2025, I was commissioned by a small local business called V's BevBar to create their logos and brand's image. This business operates a mobile beverage bar that services parties, graduations, weddings, etc. The design for this logo highlights the energetic and charismatic presence that their service offers through prominent bright colors and a lively font. Designs made for this business have been printed on stickers, flyers, menus, business cards, etc.",
        },
        {
            src: "/WebP/adv/Kiyoshi Soba.webp",
            label: "Kiyoshi Soba Advert (2026)",
            description: "",
        },
        {
            src: "/WebP/adv/Sakura Festival.webp",
            label: "Sakura Festival Advert (2026)",
            description: "",
        },
    ];

    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    return (

        <div className="min-h-screen flex flex-col text-md">
            

            
           

         <div className="justify-center min-h-screen"
          style={{
                 backgroundImage: "var(--page-background-image)" }}>   

            <div className="">
                <Navbar />
            </div>

         

         <div className="flex pt-10 rounded-sm justify-center ">
            <div className="bg-gray-200  shadow-2xl max-w-6xl p-8  h-177 outline-white outline-2 rounded-sm">

                <div className="bg-gray-400 outline-slate-500 outline-2 rounded-sm min-w-40 bg-no-repeat bg-size-[auto_180px]"
                style={{
                 backgroundImage: "url('/WebP/tags/adv logos.webp')" }}>

                    <div className="flex justify-between scroll-smooth scrollbar-thumb-white overflow-hidden w-100 md:w-195  w-full overflow-hidden">

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

        <ImageLightbox isOpen={Boolean(selectedImage)} image={selectedImage} onClose={() => setSelectedImage(null)} />
        </div>
    )
}
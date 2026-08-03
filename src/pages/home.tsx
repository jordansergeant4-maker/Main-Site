import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

export function Home(){

    return(
         <div
            className="min-h-screen flex flex-col text-md bg-"
            style={{
                 backgroundImage: "var(--page-background-image)" }}
        >
            <Navbar />

            <main className="flex-1 flex overflow-hidden">

            <section className="flex flex-col pt-20 min-w-300 gap-10 items-center">

                <div className="">
                    <Hero />
                </div>

                <div className="flex gap-15 ">

                    <a href="#Page1">
                        <div className="bg-gray-300 pt-2 outline-4 outline-white shadow-2xl w-50 min-h-30 rounded-lg hover:bg-gray-400 hover:scale-120 hover:w-70 duration-300">
                            <div className="h-30 border-2 border-gray-400 overflow-hidden m-2 rounded-lg grayscale-100 hover:grayscale-0">
                                <img
                                    src="/WebP/adv/Kiyoshi Soba.webp"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-center pb-2 tracking-[0.2em]">ADVERT / LOGOS</p>
                        </div>    
                    </a>

                    <a href="#Page2">
                        <div className="bg-gray-300 pt-2 outline-4 outline-white shadow-2xl w-50 hover:scale-120 hover:bg-gray-400 rounded-lg hover:w-70 duration-300">
                            <div className="h-30 border-2 border-gray-400 overflow-hidden m-2 rounded-lg grayscale-100 hover:grayscale-0">
                                <img
                                    src="/WebP/digital/Travel design 1.webp"
                                    className="w-full h-full object-cover "
                                />
                            </div>
                            <p className="text-center pb-2 tracking-[0.2em]">DIGITAL ART</p>
                        </div>
                    </a>    

                    <a href="#Page3">
                         <div className="bg-gray-300 pt-2 outline-4 outline-white shadow-2xl w-50 hover:scale-120 hover:bg-gray-400 hover:c1 rounded-lg hover:w-70 duration-300 ">
                            <div className="h-30 border-2 border-gray-400 overflow-hidden m-2 rounded-lg grayscale-100 hover:grayscale-0">
                                <img
                                    src="/WebP/sketches/Graphite portrait 1.webp"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                           <p className="text-center pb-2 tracking-[0.2em]">SKETCHES</p>
                        </div>   
                    </a>

                </div>   

            </section>

        



            </main>
        </div>
    )
}
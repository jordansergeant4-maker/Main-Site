import Navbar from "./components/Navbar"

export function Info1() {

    return(
        <div className="min-h-screen  text-md">  
                    
        
                  <div className="min-h-screen"
                          style={{
                                 backgroundImage: "var(--page-background-image)" }}>   
                
                            <div className="">
                                <Navbar />
                            </div>


                <div className="md:flex md:justify-center gap-5 md:gap-15 pt-15 md:pt-25">
                    <div className="flex justify-center items-center size-100 md:size-150 bg-gray-300 rounded-sm outline-4 outline-white p-5">
                            <div className="flex justify-center items-center bg-gray-500 border-2 border-gray-400 size-90 md:size-140 rounded-md">
                                <img src="/WebP/adv/vsbevbar.webp" className=" h-50 md:h-80 rounded-sm max-w-120 hover:shadow-2xl hover:scale-102 transition-all duration-300"/>
                            </div>
                    </div>

                    <div className="flex justify-center items-center size-40 size-105 bg-gray-300 rounded-sm outline-4 outline-white p-5">
                        <div className="text-center bg-gray-500 border-2 border-gray-400 size-95 rounded-md p-5 text-white">
                            <p className="break-all pb-5 text-lg font-bold">"V's BevBar" Branding</p>
                            <p className="text-wrap ">In 2025, I was commissioned by a small local business called "V's BevBar" to create their logos and brand's image. This business operates a mobile beverage bar that services parties, graduations, weddings, etc. The design for this logo highlights the energetic and charismatic presence that their service offers through prominent bright colors and a lively font. Designs made for this business have been printed on stickers, flyers, menus, business cards, etc.</p>
                        </div>
                    </div>
                 </div>


                 </div>
        </div>
    )
}
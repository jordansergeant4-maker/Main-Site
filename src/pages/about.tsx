import Navbar from "./components/Navbar"

export function About(){
    return (
        <div className="overflow-x-hidden">
            <div className="min-h-screen"
                              style={{backgroundImage: "var(--page-background-image)" }}>   
                    
            <div className="">
                <Navbar />
            </div>


            <section className="flex justify-center px-2 sm:px-4">

           

            


                <div className="grid grid-cols-1 w-full max-w-5xl md:h-160 md:w-220 transition-all ">

                 

                <div className=" p-2 pt-5 md:pt-20">

                    <div>
                       
                    </div>  

                    <div className=" px-5 py-2 mb-10 bg-gray-300 text-white text-2xl rounded-sm   drop-shadow-xl ">
                        <div className="text-lg text-center pt-10 bg-gray-400 text-slate-900 w-full max-w-full md:w-180 lg:w-200 block rounded-lg p-4 sm:p-5 border my-3 border-gray-400 inline-block bg-size-[auto_120px] bg-no-repeat"
                                                                                                    style={{backgroundImage: "" }}>
                            <p className="pb-15 pt-5 font-bold text-2xl">     Thank you for visiting my site.  </p>
                                <p className="pb-10">I am a recent graduate of the University of North Texas where I earned my Bachelor's of Arts in Interdisciplinary Art and Design. I was introduced to art at a very young age and it has remained a key aspect of my life ever since. 
                                Due to this, I have experience in many different mediums. Primarily, I focus on creating digital design for advertising and brand identity. 
                                </p>
                           
                            <p className="pb-5"></p>
                            <p> I am proficient in Adobe Suite programs such as <p className="font-bold">Illustrator, Photoshop, After Effects, Premiere Pro, and InDesign.</p></p>
                            <p className="pb-15"> In addition, I am proficient in other programs such as <p className="font-bold">Procreate, Davinci Resolve, and Affinity</p></p>
                            <p className="pb font-bold"> Contact me: </p><p className="pb-15">Jordansergeant4@gmail.com</p> 

                             <p className="text-sm text-gray-600">This website was coded myself using Vite and Tailwindcss. </p>
                             <p className="text-sm text-gray-600">Being my first website, this will be continuously updated and refined with new work and additions.</p>
                        </div>
                    </div>
                </div>

            
                

               
                </div>


            </section>
        </div>
        </div>

    );
}
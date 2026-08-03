export default function Hero() {
    return (
        <div className="flex w-300 h-120 gap-20 pl-10">
            
            <div className="flex flex-col w-160 items-center pt-5 justify-center h-full outline-4 outline-white bg-gray-300 rounded-lg text-xl bg-no-repeat bg-size-[auto_75px]"
             style={{
                 backgroundImage: "url('/WebP/tags/WELCOME.webp')" }}>
                <div className=" text-white w-150 h-100 items-center justify-center text-center border-2 border-gray-400 rounded-sm bg-no-repeat bg-size-[auto_500px]"
                  style={{
                 backgroundImage: "url('/WebP/bg/hero bg.webp')" }}>
                    <p className="text-3xl font-bold pt-25"></p>
                    <p className="pb-5 text-4xl font-bold">Graphic Designer <p></p>Branding and Advertising</p>
                    <p className="pt-5 font-bold">University of North Texas Graduate</p>
                    <p className="pb-10">Bachelor's of Art in Interdisciplinary Art and Design</p>
                    <a href="#About" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors duration-300">
                        About Me
                    </a>
                </div>
            </div>
            <div className=" bg-gray-300 rounded-lg outline-4 outline-white w-100 flex flex-col items-center justify-center  h-full text-center gap-4 bg-no-repeat bg-size-[auto_90px]"
            style={{
                 backgroundImage: "url('/WebP/tags/RECENT.webp')" }}>
                <p className=""> </p>
                <div className=" bg-gray-500 border-2 border-gray-400 hover-3d rounded-sm w-90 h-100 flex items-center justify-center inner ">
                    <a href="#Page1">
                    <img src="/WebP/adv/grimm.webp" className=" max-h-85 rounded-sm max-w-80 hover:shadow-2xl hover:scale-102 transition-all duration-300"/>
                    </a>
                </div>
            </div>
    
        </div>
    );
}
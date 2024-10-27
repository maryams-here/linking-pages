import link from "next/link"

const About= ()=> {
    return(
        <div className=" bg-white-200 flex justify-center flex-col items-center">
        
            
            
            <div className="min-h-screen relative">
    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("/about.jpg")' }} />
    <div className="relative text-black flex items-center  justify-center flex-col space-y-7 pt-40 ">
        <h1 className="font-bold text-4xl underline underline-offset-2 ">ABOUT US</h1>
        <p className="text-lg font-mono w-full max-w-3xl text-center">  Therefore, flowers are an essential part of our lives. They are responsible for bringing happiness in our lives and making our surrounding environment a prettier place to live in. Thus, we must all plant flowers at homes and in our neighbourhood to beautify the place and bring happiness and joy for everyone passing by. .</p>
        
    </div>
</div>
        </div>
    )
}
export default About
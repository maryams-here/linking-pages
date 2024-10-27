import link from "next/link"

const Contactus= ()=> {
    return(
        <div className=" bg-purple-300 flex justify-center flex-col items-center ">
        
            
           
            <div className="min-h-screen relative">
    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("/cont.jpg")' }} />
    <div className="relative text-black flex items-center  justify-center flex-col space-y-7 pt-40 ">
        <h1 className="font-bold text-4xl underline underline-offset-2 ">CONTACT US ON</h1>
        <p className="text-lg font-mono w-full max-w-3xl text-center"> instagram: marrys_florals <br/> gmail: marryflorals12@gmail.com</p>
        
    </div>
</div>
        </div>
    )
}
export default Contactus
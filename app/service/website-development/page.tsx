import link from "next/link";
const page = () => {
    return(
        <div className="bg-green-300 flex justify-center flex-col items-center">
            <h1 className="font-bold"> WEBSITE-DEVELOPMENT</h1>
           
            <div className="min-h-screen relative">
    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("/green.jpg")' }} />
    <div className="relative text-black flex items-center  justify-center flex-col space-y-7 pt-40 ">
        
        <p className="text-lg font-mono w-full max-w-3xl text-center">
        Web development is the work involved in developing 
            a website for the Internet or an intranet. <br/>
            Web development can range from developing a
             simple single static page of plain text to complex <br/>
             web applications, electronic businesses, and social
              network services
             .</p>
        
</div>
        </div>
        </div>
    )
}
export default page
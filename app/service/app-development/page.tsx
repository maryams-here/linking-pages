import link from "next/link";
const page = () => {
    return(
        <div className="bg-orange-100 flex justify-center flex-col items-center">
            <h1 className="font-bold"> APP-DEVELOPMENT</h1>
            
            <div className="min-h-screen relative">
    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("/green.jpg")' }} />
    <div className="relative text-black flex items-center  justify-center flex-col space-y-7 pt-40 ">
        
        <p className="text-lg font-mono w-full max-w-3xl text-center">Application development, or app development,
             is the process of planning, designing, creating,<br/>
              testing, and deploying an application to perform 
              various business operations. It can be done by<br/>
               massive organizations with large teams working 
               on projects or by a single freelance developer
             .</p>
        
    </div>
</div>
        </div>
    )
}
export default page
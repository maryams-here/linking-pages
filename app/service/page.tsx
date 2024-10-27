import link from "next/link"

const Service= ()=> {
    return(
        <div className=" bg-blue-100 flex justify-center flex-col items-center">
             <h1 className="font-bold"> OUR SERVICE PAGE</h1><br/><br/>
            
           
            <div className="min-h-screen relative">
    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("/serve.jpg")' }} />
    <div className="relative text-black flex items-center  justify-center flex-col space-y-7 pt-40 ">
        <h1 className="font-bold text-4xl underline underline-offset-2 "></h1>
        <p className="text-lg font-mono w-full max-w-3xl text-center"> although this is flower shop but u can also explore <br/> other things like: </p>
        <nav className="">
               <li> <a className="hover:bg-blue-800" href="/service/app-development"> APP-DEVELOPMENT</a></li>
              <li>  <a  className="hover:bg-blue-800" href="/service/website-development"> WEBSITE-DEVELOPMENT</a></li>
            
            </nav>
    </div>
</div>
        </div>
    )
}
export default Service
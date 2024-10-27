import Image from "next/image";
import link from "next/link";

export default function Home() {
  return (
    <div className="p-3 bg-yellow-100 px-7">
      
      <nav className= "space-x-7 text-lg font-semibold  ">
      <a className="hover:text-white" href="/about">  ABOUT </a> 
      
      <a className="hover:text-white" href="/contactus">  CONTACT US </a>
      
      <a className="hover:text-white" href="/service">  SERVICE </a>
      </nav>
      




      <div className="min-h-screen relative">
    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("/shop.jpg")' }} />
    <div className="relative text-black flex items-center  justify-center flex-col space-y-7 pt-40 ">
        <h1 className="font-bold text-4xl underline underline-offset-2 ">WELCOME TO MARY'S FLORAL SHOP</h1>
        <p className="text-lg font-mono w-full max-w-3xl text-center"> Floristry is the production, commerce, and trade in flowers. It encompasses flower care and handling, floral design and arrangement, merchandising, production, display and flower delivery. Wholesale florists sell bulk flowers and related supplies to professionals in the trade.  .</p>
        <button className="bg-pink-200 p-2 px-9 hover:bg-purple-400 rounded-full text-semibold text-xl">Learn more</button>
    </div>
</div>







    </div>
           
  );
}

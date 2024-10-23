
import Footer from "./components/Footer/footer"
import Header from "./components/Header/header"
import Herosection from "./components/Herosection/herosection"
import Link from "next/link"


const Homepage = () => {
  return (
    <div >
      <div style={{  backgroundImage:"url('/image.avif')", width:"100%" ,height: "700px" ,backgroundPosition:"cover",backgroundSize:"center"}}>
      
      <ul>
      <Header></Header>
      <Herosection></Herosection>
      <li><Link href="/"></Link></li>
      
    <li><Link href="/about" className="bg-slate-300 text-center  mx-96 mt-30 mb-80 border-double border-8 rounded-1 border-blue-950 font-serif font-semibold  italic text-3xl text-emerald-95 rounded-lg">   THIS IS OUR ABOUT PAGE</Link></li>
      <li><Link href="/"></Link></li>
    -
      </ul>
  

      <h1 className="bg-zinc-400 text-center mx-80 my-3 border-double border-cyan-900 border-8 font-serif font-semibold text-3xl  ">THIS IS OUR HOME PAGE</h1>
      <ul>
        <li><Link href="/project" className="bg-neutral-300 text-slate-800 mx-96 my-48 font-serifn font-serif text-3xl text-center italic font-bold border-double rounded-lg border-slate-800 border-8"> THIS IS OUR PROJECT PAGE</Link>
      </li>
      </ul>
      <Footer></Footer>


      </div>
    
    
    </div>
  )
}

export default Homepage



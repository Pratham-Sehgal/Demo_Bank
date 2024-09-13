import Block from "./components/Block"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className=" " >
      <div className='fixed top-0 left-0 w-full z-50'> <Navbar/></div>
      
      <div className="pt-14"> <Block/></div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

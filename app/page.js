import Maincarousel from "./maincarousel";
import Shortcut from "./shortcut";
import Justdrop from "./justdrop";


export default function Home() {
  return (
    <>
      <div className="homeSection">
        <div className="carouselCon">    
          <Maincarousel/>
        </div>
          <Shortcut/>
          <Justdrop/>
      </div>
    </>
  );
}

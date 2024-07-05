'use client'
import { usePathname } from "next/navigation";
import Styleheader from "./header/styleheader";
import Shopheader from "./header/shopheader";
import Searchmodal from "./searchmodal";
export default function Header() {
    const path = usePathname();
    const searchModal=()=>{
      return <Searchmodal/>;
    }
    return (
      <>
        <div className="headerCon">
          <div className="topHeader">
            <div className="topInner">
              <ul>
                <li><a href="#">고객센터</a></li>
                <li><a href="/login">마이페이지</a></li>
                <li><a href="/login">관심</a></li>
                <li><a href="/login">알림</a></li>
                <li><a href="/login">로그인</a></li>        
              </ul>
            </div>
          </div>
          <div className="mainHeader">
            <div className="mainInner">
              <div className="mainLogo">
              <a href="/"><img src="logo.png"></img></a>
              </div>
              <div className="mainCenter">
              <a><img src="bell.svg" className="hiddenIcon" width={28} height={28}></img></a>
              </div>
              <div className="mainRight">
                <a href="/">HOME</a>
                <a href="/style">STYLE</a>
                <a href="/shop">SHOP</a>
                <button onClick={(searchModal)}><img src="searchIcon.svg" width={28} height={28}></img></button>              
              </div>
              
            </div>
          </div>
          <div className="headerMenu">
            {
              path==="/login"
            ? <></>            
            : 
              path==="/style"
              ?<Styleheader/>             
              :
              path==="/shop"
              ?<Shopheader/>

            :<div className="menuInner">
                <ul>
                  <li><a href="#" className="menu1">24SS 패션위크</a></li>
                  <li><a href="/" className="reco">추천</a></li>
                  <li><a href="#">랭킹</a></li>
                  <li><a href="#">럭셔리</a></li>
                  <li><a href="#">남성</a></li>
                  <li><a href="#">여성</a></li>
                  <li><a href="#">발견</a></li>  
                </ul>
              </div>             
            }
          </div>      
        </div>
      </>
    );
  }

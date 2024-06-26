import React, { useState }        from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate,Link}         from 'react-router-dom';
import { RootState }              from '../../../store/Reducer';
import {BUTTON,IMAGE,TEXT}        from "../elements";
import { AiOutlineClose }         from 'react-icons/ai';
import { resetAll }               from '../../../store/Actions';

const Navbar: React.FC = () => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About Us" },
    { href: "property", label: "Properties" },
    { href: "service", label: "Services" }
  ];
  const navigate = useNavigate();
  const logoutAction=()=>{
    dispatch(resetAll())
    navigate("/login")
  }
  return (
    <>
      <header className="px-[16px] md:px-[60px] lg:px-[80px] xl:px-[160px] py-[20px] md:py-[14px] lg:py-[20px] z-10 w-full bg-gray-1">
        <nav className="flex justify-between items-center max-container">
          <Link to="/" className="text-2xl font-bold text-white flex justify-center items-center gap-4">
            <IMAGE path="image/logo.svg" responsive="set5" activeBorder={false} />
            Estatein
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-x-[20px] md:gap-x-[24px] lg:gap-x-[30px] max-md:hidden">
            {navLinks.map((item) => 
                <li key={item.label}>
                  <Link to={item.href} className="">
                    <TEXT responsive="set2" fontWeight={500} text={item.label} />

                  </Link>
                </li>
            )
            }
            {(() => {
                let authNav = isAuthenticated?"Logout":"Login"
                if (authNav==="Login"){
                  return <li key={authNav}>
                    <Link to={authNav.toLocaleLowerCase()} className="leading-normal text-lg text-slate-gray text-white">{authNav}</Link>
                  </li>
                }else{
                  return <li key={authNav} onClick={logoutAction} className="leading-normal text-lg text-slate-gray text-white cursor-pointer">
                    {authNav}
                  </li>
                }
                
            })()}
            
          </ul>
          <div className="max-md:hidden">
            <BUTTON url="/contact" text="Contact Us" /> 
          </div>
          <div className="hidden max-md:block cursor-pointer" onClick={() => {setIsMenuOpen(!isMenuOpen);}}>
            <IMAGE path="image/general/navbar.svg" width={28} height={28} activeBorder={false} />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
          <nav className="fixed top-0 left-0 w-full h-30 lg:bottom-auto bg-gray-1 z-50">
            <div className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer" onClick={() => {setIsMenuOpen(!isMenuOpen);}}>
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className="lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label} className="py-[10px]">
                  <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray block p-4 hover:bg-blue-50 hover:text-blue-600 rounded">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
      )}
    </>
  );
};
export default Navbar;
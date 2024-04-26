import React, { useState }        from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate,Link}         from 'react-router-dom';

import { logout }                 from '../../../store/slice/login';

import { RootState }              from '../../../store/Reducer';
import BUTTON                     from "../elements/BUTTON";
import IMG                        from "../elements/IMAGE";


import { resetAll,showNotification, hideNotification } from '../../../store/Actions';

const Navbar: React.FC = () => {

  //<AppDispatch>
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
      <header className="sm:px-8 px-4 py-2 z-10 w-full bg-gray-1">
        <nav className="flex justify-between items-center max-container">
          <Link to="/" className="text-2xl font-bold text-white flex justify-center items-center gap-4">
            <IMG path="image/logo.svg" width={40} height={40} activeBorder={false} />
            Estatein
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => 
                <li key={item.label}>
                  <Link to={item.href} className="leading-normal text-lg text-slate-gray text-white">{item.label}</Link>
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
          <div className="flex gap-2 text-lg leading-normal font-medium max-lg:hidden wide:mr-24 text-white">
            <BUTTON url="/contact" text="Contact Us" /> 
          </div>
          {/* <div className="hidden max-lg:block cursor-pointer" onClick={() => {setIsMenuOpen(!isMenuOpen);}}>
                              <RxHamburgerMenu className="text-4xl" />
                          </div> */}
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {/* <AiOutlineClose className="text-4xl" /> */}
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;

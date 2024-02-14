import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex border-2  bg-amber-950  font-mono " >
        <Link>
          
          <img src="Images\Untitled_design-removebg-preview.png" alt="logo" className="h-20" />
        </Link>

        {/* search bar */}
        <div className="ml-60  from-neutral-950" >
        {/* <i class="fa-solid fa-magnifying-glass" >  </i> */}
          <input className="w-96  h-10 mt-5 "

          
            type="text"
            
            placeholder=  "  search for products ,categories,etc"
          />
        
        </div>

        {/* {/link block/} */}

        <div className="mt-5  text-fuchsia-100">
          {/* login */}

          <Link className="ml-24 text-2xl" to={"/"}> Login </Link>

          {/* {/become seller option/} */}

          <Link className="ml-24 text-2xl" to={"/"}> become a seller </Link>
       

        {/* {/cart/} */}

        <Link className="ml-24 text-2xl" to={"/"}> Cart</Link>

        <Link className="ml-24 text-2xl"><i class="fa-solid fa-bars"></i></Link>

        </div>
      </nav>
    </header>
  );
};

export default Header;

"use client"
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./ThemeButton";
import { useEffect, useState} from "react";
import { Button } from "./ui/button";

const handleSearch:string = (search?: string) => {}


const Navbar = () => {

  const [ searchBox, setSearchBox ] = useState("closed" ,);
  const navLinks: any[]= []


  return (
    <nav>
      <div className="container max-w-full flex items-center justify-between bg-black py-3 px-4 ">
        <Link
          href={`/`}
        >
          <p
            className="text-3xl font-serif text-white"
          >
            Mods
            <span className="text-red-600 ">Hub</span>
          </p>
        </Link>
        <div>
          { searchBox === "active" ? (
            <div>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search..." >
                  <Button>
                    <i className="bx bx-search"></i>
                  </Button>
              </input>
              <Button
                onClick={()=>setSearchBox("closed")}
              >
                <i className="bx bx-x"></i>
              </Button>
            </div>
          ):(
          <Button
                onClick={ () => setSearchBox( "active" ) }
                className=""
          >
            <i className="bx bx-search" />
          </Button>
          )};
        </div>
        <div>
          <ul>
            { navLinks.map( ( link:string ) => (
              <Link
                href={ `/${ link.url }` }
                key={ link }
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

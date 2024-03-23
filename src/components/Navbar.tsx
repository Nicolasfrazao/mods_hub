import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const searchParams = {}

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between bg-black py-3 px-4 ">
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

        </div>
        <div>
          <ul>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

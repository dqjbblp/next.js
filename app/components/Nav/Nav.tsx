import Image from "next/image";
import { nav_list } from "./constant";
import logo from "@/public/logo.png";
import NavItem from "./NavItem";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image src={logo} alt="logo" className={"w-40"} />
      </Link>
      <ul className={"space-y-4 mt-4"}>
        {nav_list.map((item, index) => {
          return (
            <NavItem
              key={index}
              path={item.category}
              src={item.src}
              alt={item.alt}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;

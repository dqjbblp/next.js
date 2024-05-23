"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = (props: {
  path: string;
  alt: string;
  src: StaticImageData;
}) => {
  const { path, alt, src } = props;
  const pathname = usePathname()
  const isActive = "/articles/category/" + path === pathname
  return (
    <Link
      className={
        `flex items-center h-12 gap-2 p-3 hover:bg-slate-100 transform transition hover:scale-105 rounded-xl false ${isActive&&'bg-orange-50'}`
      }
      href={"/articles/category/" + path}
    >
      <div
        className={
          "flex justify-center items-center rounded-full border border-[#BBC2CC] size-10"
        }
      >
        <Image className={"size-5"} src={src} alt={alt} />
      </div>
      <div className={'font-bold capitalize'}>{path}</div>
    </Link>
  );
};

export default NavItem;

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/imageIcon2.jpeg"
          // src="/gallery_icon.png"
          className="sm:w-18 sm:h-18 w-16 h-16"
          width={36}
          height={36}
        />
        <h1 className="sm:text-5xl text-3xl font-bold ml-2 tracking-tight flex justify-center items-center">
          Recovered Moments
        </h1>
        
      </Link>
    </header>
  );
}

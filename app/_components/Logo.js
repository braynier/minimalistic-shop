import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Logo.svg";

function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        width={100}
        height={100}
        alt="Logo of L.Kelly Limited"
      />
    </Link>
  );
}

export default Logo;

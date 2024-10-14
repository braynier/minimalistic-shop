import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { useCart } from "../_contexts/CartContext";

function Navigation() {
  const { isOpen, setIsOpen } = useCart();

  return (
    <nav>
      <ul className="flex items-center gap-x-5">
        <li className="text-base font-semibold uppercase">
          <Link href="/products">Products</Link>
        </li>
        <li className="text-base font-semibold uppercase">
          <Link href="/">Product Page</Link>
        </li>
        <li
          className="flex cursor-pointer items-center justify-center text-[30px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoBagOutline />
          <span className="text-sm font-bold">(0)</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

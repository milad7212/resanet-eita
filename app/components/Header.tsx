import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <Link href="/">عالیس</Link>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">خانه</Link>
          </li>
          <li>
            <Link href="/products">محصولات</Link>
          </li>
          <li>
            <Link href="/cart">سبد خرید</Link>
          </li>
          <li>
            <Link href="/login">ورود</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

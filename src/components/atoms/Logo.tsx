import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="text-2xl text-blue-300">
      GITHUB
      <span className="text-4xl text-blue-600 font-extrabold">FINDER</span>
    </Link>
  );
}

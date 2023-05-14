import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 font-semibold font-mono bg-black px-8 h-20 flex items-center sm:px-20 lg:px-40">
      <Link href="/blog">
        <h1 className="w-72 text-3xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
          Papaya's Memory
        </h1>
      </Link>
    </div>
  );
};

export default Header
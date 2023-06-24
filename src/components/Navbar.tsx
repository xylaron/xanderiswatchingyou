import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="z-20 min-w-full bg-neutral-900 px-2 py-3 shadow-xl">
      <div className="text-xl font-bold text-white">
        <div className="flex items-center justify-between">
          <ul className="flex">
            <li>
              <Link
                href="/"
                className="px-3 text-center transition-colors  hover:text-white/80 active:text-white/60"
              >
                ABC Company
              </Link>
            </li>
          </ul>
          <ul className="flex">
            <li>
              <Link
                href="/contact"
                className="px-3 text-center transition-colors  hover:text-white/80 active:text-white/60"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/employee"
                className="px-3 text-center transition-colors  hover:text-white/80 active:text-white/60"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="https://dev.xanderiswatchingyou.online/"
                className="px-3 text-center transition-colors  hover:text-white/80 active:text-white/60"
              >
                Staff Portal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-neutral-900 px-16 py-10 text-white">
      <div className="flex flex-wrap justify-between border-t border-gray-700 pt-5">
        <div className="mb-8">
          <h3 className="mb-3 text-xl font-bold">XanderIsWatchingYou</h3>
        </div>
        <div>
          <h3 className="mb-3 font-bold">Navigation</h3>
          <ul>
            <li>
              <Link href="/" className="transition-colors hover:text-white/50 ">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-white/50 "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="transition-colors hover:text-white/50 "
              >
                Staff Portal
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-bold">Legal</h3>
          <ul>
            <li className="transition-colors hover:text-white/50">
              Terms of Service
            </li>
            <li className="transition-colors hover:text-white/50 ">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-5">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} XanderIsWatchingYou. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

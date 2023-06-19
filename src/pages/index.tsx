import MapContainer from "components/MapContainer";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - XanderIsWatchingYou</title>
      </Head>
      <main className="flex flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16 ">
          <h1 className="text-6xl font-extrabold text-white">
            <span>Xander</span>IsWatchingYou
          </h1>
          <div className="text-3xl font-bold">
            Discover new possibilites with us in providing market-leading web
            solutions.
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-2 text-xl font-semibold text-purple-900 transition-colors hover:bg-white/60"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <div className="bg-neutral-900 p-16">
        <h2 className="mb-6 text-4xl font-bold">About Our Company</h2>
        <p className="mb-6 text-xl">
          We are a leading provider of innovative web solutions. With years of
          experience in the industry, we specialize in turning your ideas into
          beautiful, responsive, and user-friendly websites. Our services range
          from custom website design and development, mobile application
          development, eCommerce solutions, to SEO and digital marketing
          strategies. Whatever your business needs, our dedicated team is here
          to deliver. Our services range from custom website design and
          development, mobile application development, eCommerce solutions, to
          SEO and digital marketing strategies. Whatever your business needs,
          our dedicated team is here to deliver. Ready to take your business to
          the next level? Contact us today for a free consultation!
        </p>
        <h2 className="mb-6 text-4xl font-bold">Our Location</h2>
        <p className="mb-6 text-xl">8 Finance St, Central, Hong Kong</p>
        <MapContainer />
      </div>
    </>
  );
};

export default Home;

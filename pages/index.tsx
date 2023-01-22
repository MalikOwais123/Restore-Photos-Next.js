import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Face Photo Restorer</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Restoring old photos{" "}
          <span className="relative whitespace-nowrap text-[#EDB129]">
            <SquigglyLines />
            <span className="relative">using AI</span>
            &nbsp;
          </span>
          for everyone.
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Have old and blurry face photos? Let our AI restore them so those
          memories can live on. Now - restore your photos today.
        </p>
        <Link
          className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
          href="/restore"
        >
          Restore your photos &rarr;
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="Original photo of my bro"
                  src="/blurBefore.jpeg"
                  className="w-90 h-102 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="Restored photo of my bro"
                  src="/blurAfter.jpeg"
                  className="w-90 h-102 rounded-2xl sm:mt-0 mt-2"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Home;

import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
      <>
      <div className="flex flex-row gap-8 items-center justify-center">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left">
          <p className="w-full text-4xl font-bold">
          Keep your dreams aroused with a cup of coffee
          </p>
          <p className="mb-4">Save and see your changes instantly.</p>
          <Link href="/contact" className="rounded bg-orange-600 hover:bg-orange-400 text-white font-bold px-4 py-2">CONTACT US</Link>
        </ol>
        <div className="flex w-full justify-center items-center">
          <Image alt="coffee_header" src="/images/coffee_with_light.jpeg" width={300} height={300}></Image>
        </div>
      </div>
      <div className="font-bold text-2xl mt-10">
        The best cafe in Thailand
      </div>
      <p className="text-center">
      Welcome to the best coffee shop in Thailand, where every cup is brewed to perfection. Experience cozy vibes, modern vintage decor, and the finest locally sourced beans. Whether you're here to relax or catch up with friends, our space offers the perfect atmosphere for all coffee lovers.
      </p>
      <Gallery title='IG GALLERY' rootUrl={'/images/gallery'}/>
    </>

  );
}

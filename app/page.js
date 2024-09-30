import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row gap-8 items-center justify-center">
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <p className="w-1/2 text-2xl">
        Keep your dreams aroused with a cup of coffee
        </p>
        <p>Save and see your changes instantly.</p>
      </ol>
      <div className="w-full"> 
        <Image src="/images/coffee_with_light.jpeg" width={300} height={300}></Image>
      </div>
    </main>

  );
}

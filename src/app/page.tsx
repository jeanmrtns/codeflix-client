import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative h-full lg:h-[140vh]">
      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
        <div className="group flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute left-0 top-0 -z-10 flex h-[95vh]  w-full flex-col overflow-hidden bg-cover">
            <Image
              src="/banners/witcher-banner.jpg"
              alt="Witcher"
              className="h-full w-full scale-100 transform object-cover object-top transition duration-1000 hover:scale-105 group-hover:scale-105"
              fill
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
              The Witcher
            </h1>

            <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              blanditiis, animi doloremque eos esse aut quidem dicta!
            </p>
          </div>

          <div className="ml-0 flex gap-3">
            <button className="flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl">
              Play
            </button>
            <button className="flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl">
              More Info
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

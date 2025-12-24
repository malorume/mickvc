const data = {
  projects: [
    { href: "#", name: "######", desc: "******" },
    { href: "#", name: "######", desc: "******" },
    { href: "#", name: "######", desc: "******" },
  ],
};

export default function Page() {
  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start gap-20">
      {/* <div className="w-full h-screen bg-amber-700"></div> */}
      <div className="relative w-full min-h-dvh container flex flex-col justify-end pb-10">
        <div className="w-full h-full absolute inset-0 z-10">
          <div className="absolute inset-0 z-20 opacity-50 bg-background"></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/video-preview.webp"
            className="z-10 w-full h-full object-cover"
          >
            <source src="/video.webm" type="video/webm" />
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="z-20">
          <h1 className="sm:text-4xl text-3xl font-bold">
            next-level b2b solutions.
          </h1>
          <p className="pt-4 sm:text-lg text-base font-light">
            solving niche business problems in a bold way.
          </p>
        </div>
      </div>

      {/* <div className="w-full container flex flex-col justify-start items-start gap-6">
        {data.projects.map((project, key) => (
          <div
            key={key}
            className="border-2 border-solid h-[240px] w-full border-white/50"
          ></div>
        ))}
      </div> */}
    </main>
  );
}

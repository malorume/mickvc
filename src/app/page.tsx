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
      <div className="w-full min-h-dvh container flex flex-col justify-end pb-10">
        <h1 className="sm:text-4xl text-3xl font-semibold">
          next-level b2b solutions.
        </h1>
        <p className="pt-6 sm:text-lg text-base text-white/70">
          solving niche business problems in a bold way.
        </p>
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

export default function Page() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      {/* <div className="w-full h-screen bg-amber-700"></div> */}
      <div className="w-full min-h-screen container flex flex-col justify-end pb-20">
        <h1 className="sm:text-6xl text-5xl font-semibold">
          next-level b2b solutions.
        </h1>
        <p className="pt-6 sm:text-2xl text-xl text-white/70">
          solving business problems in a bold way.
        </p>
      </div>
    </main>
  );
}

import Navbar from "./components/Navbar";

export default function MobileHome() {
  const cards = [
    {
      id: "Page1",
      title: "ADVERT / LOGOS",
      image: "/WebP/adv/Kiyoshi Soba.webp",
      href: "#Page1",
    },
    {
      id: "Page2",
      title: "DIGITAL ART",
      image: "/WebP/digital/Travel design 1.webp",
      href: "#Page2",
    },
    {
      id: "Page3",
      title: "SKETCHES",
      image: "/WebP/sketches/Graphite portrait 1.webp",
      href: "#Page3",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col text-md bg-cover bg-center"
      style={{ backgroundImage: "var(--page-background-image)" }}
    >
      <Navbar />

      <main className="flex-1 px-2 py-5 flex justify-center overflow-x-hidden">
        <section className="w-full max-w-sm flex flex-col items-center gap-4">
          <div className="w-full rounded-2xl border-4 border-white bg-gray-300 p-3 shadow-2xl pt-15 bg-no-repeat bg-size-[auto_80px]"
          style={{ backgroundImage: "url('/WebP/tags/WELCOME.webp')" }}>
            <div
              className="rounded-xl border-2 border-gray-400 bg-cover bg-center p-8 text-center text-white"
              style={{ backgroundImage: "url('/WebP/bg/hero bg.webp')" }}
            >
              <p className="text-2xl font-bold"></p>
              <p className="mt-2 text-xl font-bold">Digital Designer <p></p>Branding and Advertising</p>
              <p className="mt-3 text-sm font-semibold">University of North Texas</p>
              <p className="mt-2 text-sm">Bachelor's of Art in Interdisciplinary Art and Design</p>
              
              <a
                href="#About"
                className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-700"
              >
                About Me
              </a>
            </div>
          </div>

          <div className="w-full rounded-2xl border-4 border-white bg-gray-300 p-3 shadow-2xl pt-15 bg-no-repeat bg-size-[auto_105px]"
          style={{ backgroundImage: "url('/WebP/tags/RECENT.webp')" }}>
            <div className="rounded-xl border-2 border-gray-400 bg-gray-500 p-3 text-center text-white">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide"></p>
              <a href="#Page1">
                <img
                  src="/WebP/adv/grimm.webp"
                  alt="Recent"
                  className="mx-auto h-44 w-full max-w-full rounded-sm object-cover"
                />
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3">
            {cards.map((card) => (
              <a key={card.id} href={card.href} className="w-full">
                <div className="rounded-xl border-4 border-white bg-gray-300 p-2 shadow-xl transition-transform duration-300 hover:scale-[1.01]">
                  <div className="overflow-hidden rounded-lg border-2 border-gray-400">
                    <img src={card.image} alt={card.title} className="h-32 w-full object-cover" />
                  </div>
                  <p className="py-2 text-center text-sm font-semibold tracking-[0.2em] text-white">{card.title}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

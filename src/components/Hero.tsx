import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/works/forest-of-fading-time-aga2025.png"
        alt="Forest Of Fading Time by Dokyun Lim"
        fill
        priority
        className="object-cover object-center brightness-[0.4]"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-accent-light text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in opacity-0">
          Aquascaper
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight animate-fade-in-up opacity-0 animation-delay-200">
          Dokyun Lim
        </h1>
        <p className="text-lg md:text-xl text-white/60 mt-4 max-w-xl animate-fade-in-up opacity-0 animation-delay-400">
          자연을 담은 수중 세계를 창조합니다
        </p>
        <a
          href="#works"
          className="mt-12 animate-fade-in-up opacity-0 animation-delay-600"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}

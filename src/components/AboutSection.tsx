import Image from "next/image";

export default function AboutSection() {
  const stats = [
    { number: "10+", label: "국제대회 수상" },
    { number: "4", label: "대표 작품" },
    { number: "7+", label: "참가 국가 대회" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            임도균
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Profile photo */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/works/profile.jpg"
              alt="임도균 - 아쿠아스케이퍼"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
          </div>

          {/* Text + Stats */}
          <div>
            <p className="text-muted text-sm mb-6">
              Dokyun Lim &middot; 경기도 남양주시, 대한민국
            </p>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                한국의 젊은 아쿠아스케이퍼로서, 자연의 아름다움을 수조 안에
                재현하는 작업을 하고 있습니다. 유목과 수초를 활용한 자연스러운
                구도, 그리고 최소한의 식물 종으로 최대한의 자연미를 끌어내는 것이
                특징입니다.
              </p>
              <p>
                2023년 첫 국제대회 참가에서 KIAC 한국인 1위(전체 7위)를 기록하며
                주목받았고, 이후 IAPLC(일본), AGA(미국), CIAC(중국),
                ITAC(이탈리아), IIAC, AIAC 등 전 세계 주요 대회에서 꾸준히
                성과를 거두고 있습니다.
              </p>
              <p>
                2025년에는 AGA 90~220L 부문에서 세계 1위를 달성하며, 글로벌
                아쿠아스케이핑 신에서 입지를 확고히 했습니다.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-5 bg-card-bg border border-card-border rounded-xl"
                >
                  <p className="text-2xl md:text-3xl font-bold text-accent-light">
                    {stat.number}
                  </p>
                  <p className="text-muted text-xs mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { works, type Work } from "@/data/works";

function WorkDetail({ work }: { work: Work }) {
  return (
    <div className="mt-6 space-y-6 animate-fade-in-up">
      {/* Description */}
      <p className="text-white/70 leading-relaxed text-sm md:text-base">
        {work.description}
      </p>

      {/* Specs */}
      {work.specs && (
        <div className="bg-card-bg border border-card-border rounded-xl p-5">
          <h4 className="text-xs text-accent tracking-[0.15em] uppercase mb-4 font-semibold">
            Specifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {work.specs.dimensions && (
              <div>
                <span className="text-muted">수조 크기</span>
                <p className="text-white mt-0.5">{work.specs.dimensions}</p>
              </div>
            )}
            {work.specs.volume && (
              <div>
                <span className="text-muted">수량</span>
                <p className="text-white mt-0.5">{work.specs.volume}</p>
              </div>
            )}
            {work.specs.lighting && (
              <div>
                <span className="text-muted">조명</span>
                <p className="text-white mt-0.5">{work.specs.lighting}</p>
              </div>
            )}
            {work.specs.filtration && (
              <div>
                <span className="text-muted">여과기</span>
                <p className="text-white mt-0.5">{work.specs.filtration}</p>
              </div>
            )}
            {work.specs.substrate && (
              <div>
                <span className="text-muted">소일</span>
                <p className="text-white mt-0.5">{work.specs.substrate}</p>
              </div>
            )}
            {work.specs.co2 && (
              <div>
                <span className="text-muted">CO₂</span>
                <p className="text-white mt-0.5">{work.specs.co2}</p>
              </div>
            )}
            {work.specs.hardscape && (
              <div>
                <span className="text-muted">하드스케이프</span>
                <p className="text-white mt-0.5">
                  {work.specs.hardscape.join(", ")}
                </p>
              </div>
            )}
            {work.specs.fish && (
              <div>
                <span className="text-muted">생체</span>
                <p className="text-white mt-0.5">
                  {work.specs.fish.join(", ")}
                </p>
              </div>
            )}
          </div>

          {/* Plants - full width */}
          {work.specs.plants && (
            <div className="mt-4 pt-4 border-t border-card-border">
              <span className="text-muted text-sm">수초</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {work.specs.plants.map((plant) => (
                  <span
                    key={plant}
                    className="text-xs bg-accent/10 text-accent-light px-2.5 py-1 rounded-full"
                  >
                    {plant}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Judge Comments */}
      {work.judgeComments && work.judgeComments.length > 0 && (
        <div className="bg-card-bg border border-card-border rounded-xl p-5">
          <h4 className="text-xs text-accent tracking-[0.15em] uppercase mb-4 font-semibold">
            심사평
          </h4>
          <div className="space-y-3">
            {work.judgeComments.map((comment, i) => (
              <p
                key={i}
                className="text-white/70 text-sm italic border-l-2 border-accent/30 pl-4"
              >
                {comment}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Awards */}
      <div className="space-y-3">
        <h4 className="text-xs text-accent tracking-[0.15em] uppercase font-semibold">
          수상 내역
        </h4>
        {work.awards.map((award, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-card-bg border border-card-border rounded-lg p-4"
          >
            <span className="text-accent font-mono text-sm font-bold shrink-0">
              {award.year}
            </span>
            <div>
              <p className="text-white text-sm font-medium">{award.contest}</p>
              <p className="text-muted text-xs mt-0.5">{award.contestFull}</p>
              <p className="text-accent-light text-sm mt-1 font-medium">
                {award.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorksSection() {
  const [selectedWork, setSelectedWork] = useState<string | null>(null);

  return (
    <section id="works" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Works</h2>
        </div>

        {/* Works grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {works.map((work) => (
            <div
              key={work.id}
              className="group cursor-pointer"
              onClick={() =>
                setSelectedWork(selectedWork === work.id ? null : work.id)
              }
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-card-bg">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Year badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white/80 text-xs px-3 py-1 rounded-full">
                  {work.year}
                </div>
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-accent-light transition-colors">
                  {work.title}
                </h3>
                <p className="text-muted text-sm mt-1">
                  {work.awards.length}개 국제대회 수상 &middot;{" "}
                  {selectedWork === work.id ? "접기" : "자세히 보기"}
                </p>
              </div>

              {/* Expanded detail */}
              {selectedWork === work.id && <WorkDetail work={work} />}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

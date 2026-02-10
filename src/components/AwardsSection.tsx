import { works } from "@/data/works";

export default function AwardsSection() {
  // Flatten all awards and group by year
  const allAwards = works.flatMap((work) =>
    work.awards.map((award) => ({ ...award, workTitle: work.title }))
  );

  const years = [...new Set(allAwards.map((a) => a.year))].sort(
    (a, b) => b - a
  );

  return (
    <section id="awards" className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">
            Achievements
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Awards</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-[11px] top-0 bottom-0 w-px bg-card-border" />

          <div className="space-y-12">
            {years.map((year) => (
              <div key={year}>
                {/* Year header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-accent shrink-0 relative z-10" />
                  <span className="text-2xl md:text-3xl font-bold text-white">
                    {year}
                  </span>
                </div>

                {/* Awards for this year */}
                <div className="ml-8 md:ml-12 space-y-4">
                  {allAwards
                    .filter((a) => a.year === year)
                    .map((award, i) => (
                      <div
                        key={i}
                        className="bg-card-bg border border-card-border rounded-lg p-5 hover:border-accent/30 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <span className="text-accent font-semibold text-sm">
                              {award.contest}
                            </span>
                            <p className="text-muted text-xs mt-0.5">
                              {award.contestFull}
                            </p>
                          </div>
                          <span className="text-white/50 text-xs shrink-0">
                            {award.workTitle}
                          </span>
                        </div>
                        <p className="text-white font-medium mt-2">
                          {award.result}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

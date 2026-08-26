import { useInView } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useInView();

  const focusAreas = [
    'Mergers & Acquisitions',
    'Buy-side & Sell-side M&A',
    'Cross-Border Transactions',
    'Financial Modelling & Valuation',
    'Transaction Structuring',
    'Strategic Financial Advisory',
  ];

  return (
    <section id="about" className="section-padding bg-offwhite">
      <div className="container-narrow">
        <div ref={ref} className="reveal">

          {/* Section Header */}
          <div className="mb-16">
            <span className="heading-sub block mb-4">
              About
            </span>

            <h2 className="heading-section">
              Perspective
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Main Text */}
            <div className="lg:col-span-7">
              <div className="space-y-6">

                <p className="text-lg leading-relaxed text-charcoal/80">
                  Lupo Datossi is a London-based investment banking professional
                  specialising in mergers and acquisitions, cross-border
                  transactions and strategic financial advisory.
                </p>

                <p className="text-base leading-relaxed text-grey-muted">
                  As a Vice President in Mergers & Acquisitions, he advises
                  corporate and financial sponsor clients on complex buy-side
                  and sell-side transactions, with a focus on rigorous analysis,
                  thoughtful transaction structuring and disciplined execution.
                </p>

                <p className="text-base leading-relaxed text-grey-muted">
                  His approach is grounded in analytical precision and strategic
                  clarity — combining detailed financial analysis with the
                  judgement required to navigate complex, high-stakes transaction
                  environments.
                </p>

              </div>
            </div>

            {/* Key Focus Areas */}
            <div className="lg:col-span-5">

              <div className="border-t border-grey-light pt-8">

                <h3 className="text-xs font-semibold tracking-widest uppercase text-grey-muted mb-8">
                  Core Focus
                </h3>

                <div className="space-y-5">
                  {focusAreas.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-6 h-px bg-navy/30 group-hover:w-10 transition-all duration-300" />

                      <span className="text-sm font-medium text-charcoal/70 group-hover:text-navy transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Location */}
              <div className="mt-12 pt-8 border-t border-grey-light">

                <div className="flex items-start gap-3">

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mt-0.5 text-grey-muted"
                  >
                    <path
                      d="M8 1C5.24 1 3 3.24 3 6C3 9.75 8 15 8 15C8 15 13 9.75 13 6C13 3.24 10.76 1 8 1Z"
                      stroke="currentColor"
                      strokeWidth="1"
                    />

                    <circle
                      cx="8"
                      cy="6"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </svg>

                  <div>
                    <p className="text-sm font-medium text-charcoal">
                      London, United Kingdom
                    </p>

                    <p className="text-xs text-grey-muted mt-0.5">
                      Mergers & Acquisitions
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
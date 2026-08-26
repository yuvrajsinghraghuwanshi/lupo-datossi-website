import { useInView } from '../hooks/useScrollReveal';

export default function Philosophy() {
  const ref = useInView();

  return (
    <section className="section-padding bg-navy">
      <div className="container-narrow">
        <div ref={ref} className="reveal">

          {/* Section Header */}
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-offwhite/40 block mb-4">
              Perspective
            </span>

            <h2 className="heading-section !text-offwhite">
              Professional Perspective
            </h2>
          </div>

          {/* Main Statement */}
          <div className="max-w-4xl">
            <p className="font-serif text-2xl md:text-3xl font-light leading-snug text-offwhite/90">
              Complex transactions require a combination of rigorous analysis,
              strategic judgement and disciplined execution.
            </p>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-offwhite/60 max-w-3xl">
              Lupo's approach combines detailed financial analysis with a
              broader strategic perspective, helping navigate complex
              transaction environments while maintaining clarity across
              stakeholders, objectives and execution priorities.
            </p>
          </div>

          {/* Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-offwhite/10">

            <div>
              <span className="block text-xs font-semibold tracking-widest uppercase text-offwhite/40 mb-3">
                Strategic Thinking
              </span>

              <p className="text-sm leading-relaxed text-offwhite/60">
                Understanding the strategic rationale behind transactions and
                the broader objectives driving financial decisions.
              </p>
            </div>

            <div>
              <span className="block text-xs font-semibold tracking-widest uppercase text-offwhite/40 mb-3">
                Rigorous Analysis
              </span>

              <p className="text-sm leading-relaxed text-offwhite/60">
                Applying detailed financial analysis, valuation and modelling
                to support informed transaction decisions.
              </p>
            </div>

            <div>
              <span className="block text-xs font-semibold tracking-widest uppercase text-offwhite/40 mb-3">
                Disciplined Execution
              </span>

              <p className="text-sm leading-relaxed text-offwhite/60">
                Maintaining precision, coordination and accountability
                throughout complex and time-sensitive deal processes.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
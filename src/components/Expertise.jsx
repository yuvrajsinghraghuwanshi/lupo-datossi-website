import { useInView } from '../hooks/useScrollReveal';

const expertiseAreas = [
  {
    title: 'Mergers & Acquisitions',
    description:
      'Buy-side and sell-side M&A advisory across complex domestic and cross-border transactions, from strategic assessment through execution.',
  },
  {
    title: 'Valuation & Financial Modelling',
    description:
      'DCF, comparable-company and precedent-transaction analysis supported by detailed financial modelling and rigorous financial analysis.',
  },
  {
    title: 'Transaction Structuring',
    description:
      'Analysis and structuring of transactions with consideration of strategic objectives, valuation, deal dynamics and execution requirements.',
  },
  {
    title: 'Due Diligence & Execution',
    description:
      'Management of transaction workstreams across due diligence, process coordination, transaction materials and execution through completion.',
  },
  {
    title: 'Cross-Border Transactions',
    description:
      'Experience coordinating complex international mandates involving multiple jurisdictions, stakeholders and multidisciplinary advisers.',
  },
  {
    title: 'Client Advisory & Leadership',
    description:
      'Strategic financial advisory, senior stakeholder management and leadership of junior deal teams across complex and time-sensitive transactions.',
  },
];

export default function Expertise() {
  const ref = useInView();

  return (
    <section id="expertise" className="section-padding bg-white">
      <div className="container-narrow">
        <div ref={ref} className="reveal">

          {/* Section Header */}
          <div className="mb-16">
            <span className="heading-sub block mb-4">
              Capabilities
            </span>

            <h2 className="heading-section">
              Areas of Expertise
            </h2>
          </div>

          {/* Expertise Grid */}
          <div className="space-y-0">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="group py-8 border-t border-grey-light last:border-b"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 items-start">

                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="text-xs font-medium text-grey-muted/50 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-xl font-medium text-navy group-hover:translate-x-1 transition-transform duration-300">
                      {area.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-7">
                    <p className="text-sm leading-relaxed text-grey-muted">
                      {area.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
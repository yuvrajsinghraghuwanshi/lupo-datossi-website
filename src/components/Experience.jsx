import { useInView } from '../hooks/useScrollReveal';

const experiences = [
  {
    period: 'Feb 2025 – Present',
    role: 'Vice President — Mergers & Acquisitions',
    organization: 'Goldman Sachs',
    location: 'London, United Kingdom',
    description:
      'Advises corporate and financial sponsor clients on complex buy-side and sell-side M&A transactions, including cross-border mandates.',
    responsibilities: [
      'Lead transaction execution across valuation, financial analysis, transaction structuring, due diligence and deal process management',
      'Coordinate senior management teams, internal stakeholders and multidisciplinary external advisers across complex and time-sensitive transactions',
      'Review valuation analyses, financial models and transaction materials supporting strategic and financial decision-making',
      'Lead and develop junior deal teams while maintaining high standards of analytical quality and execution',
    ],
  },
  {
    period: '2020 – Jan 2025',
    role: 'Associate — Investment Banking / M&A',
    organization: 'Goldman Sachs',
    location: 'London, United Kingdom',
    description:
      'Executed buy-side and sell-side M&A mandates for corporate and financial sponsor clients across complex transaction processes.',
    responsibilities: [
      'Performed DCF, comparable-company and precedent-transaction valuation analyses and developed detailed financial models',
      'Supported transaction structuring, due diligence, process management and preparation of senior-level client materials',
      'Coordinated execution workstreams across internal teams, clients and external advisers throughout the transaction lifecycle',
    ],
  },
];

export default function Experience() {
  const ref = useInView();

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-narrow">
        <div ref={ref} className="reveal">

          {/* Section Header */}
          <div className="mb-16">
            <span className="heading-sub block mb-4">
              Career
            </span>

            <h2 className="heading-section">
              Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Vertical line */}
            <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px bg-grey-light hidden md:block" />

            <div>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12 ${
                    index === 0 ? 'pb-12' : 'py-12'
                  }`}
                >

                  {/* Period */}
                  <div className="md:text-right md:pr-12">
                    <span className="text-xs font-semibold tracking-widest uppercase text-grey-muted">
                      {exp.period}
                    </span>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[140px] -translate-x-1/2 hidden md:block ${
                      index === 0 ? 'top-1' : 'top-[3.25rem]'
                    }`}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-navy border-2 border-white" />
                  </div>

                  {/* Content */}
                  <div className="pl-4 md:pl-12 border-l-2 border-grey-light md:border-l-0">

                    <h3 className="font-serif text-xl font-medium text-navy mb-1">
                      {exp.role}
                    </h3>

                    <p className="text-sm font-medium text-charcoal mb-1">
                      {exp.organization}
                    </p>

                    <p className="text-xs text-grey-muted/70 mb-4">
                      {exp.location}
                    </p>

                    <p className="text-sm leading-relaxed text-charcoal/70 mb-5">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-grey-muted"
                        >
                          <span className="w-1 h-1 rounded-full bg-navy/30 mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {/* Divider */}
                    {index < experiences.length - 1 && (
                      <div className="divider mt-12 hidden md:block" />
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
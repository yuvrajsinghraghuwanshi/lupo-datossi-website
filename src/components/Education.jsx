import { useInView } from '../hooks/useScrollReveal';

const education = [
  {
    period: '2020 – 2021',
    institution: 'The London School of Economics and Political Science',
    degree: 'MSc Finance',
    result: 'Distinction',
    details:
      'Full-time programme with academic focus on Corporate Finance, Financial Markets, Valuation, Mergers & Acquisitions and applied financial analysis.',
  },
  {
    period: '2017 – 2020',
    institution: 'The London School of Economics and Political Science',
    degree: 'BSc Finance',
    result: 'First Class Honours',
    details:
      'Academic focus included Corporate Finance, Financial Economics, Valuation, Accounting, Quantitative Methods and Capital Markets.',
  },
  {
    period: '2012 – 2017',
    institution: 'TASIS The American School in Switzerland',
    degree: 'International Baccalaureate Diploma Programme',
    result: '',
    details:
      'Academic programme included Theory of Knowledge (TOK), with emphasis on critical thinking, argumentation, research and evaluation of different perspectives. Activities included Debate & Public Speaking, Golf, Skiing and Water Polo.',
  },
];

export default function Education() {
  const ref = useInView();

  return (
    <section id="education" className="section-padding bg-offwhite">
      <div className="container-narrow">
        <div ref={ref} className="reveal">

          {/* Section Header */}
          <div className="mb-16">
            <span className="heading-sub block mb-4">
              Academic Background
            </span>

            <h2 className="heading-section">
              Education
            </h2>
          </div>

          {/* Education List */}
          <div className="space-y-0">

            {education.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12 py-10 border-t border-grey-light last:border-b"
              >

                {/* Period */}
                <div className="md:text-right md:pr-12">
                  <span className="text-xs font-semibold tracking-widest uppercase text-grey-muted">
                    {item.period}
                  </span>
                </div>

                {/* Content */}
                <div>

                  <h3 className="font-serif text-xl md:text-2xl font-medium text-navy mb-2">
                    {item.degree}
                  </h3>

                  <p className="text-sm font-medium text-charcoal mb-2">
                    {item.institution}
                  </p>

                  {item.result && (
                    <p className="text-xs font-semibold tracking-wide uppercase text-grey-muted mb-5">
                      {item.result}
                    </p>
                  )}

                  <p className="text-sm leading-relaxed text-grey-muted max-w-3xl">
                    {item.details}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
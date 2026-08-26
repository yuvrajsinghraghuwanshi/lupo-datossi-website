import { useInView } from '../hooks/useScrollReveal';

const transactions = [
  {
    number: '01',
    title: 'Cross-Border M&A',
    description:
      'Advisory experience across complex international transactions involving multiple jurisdictions, stakeholders and execution workstreams.',
    role:
      'Transaction leadership, strategic analysis, valuation, coordination and execution.',
    areas:
      'Cross-border M&A, valuation, due diligence, transaction structuring, stakeholder management.',
  },
  {
    number: '02',
    title: 'Buy-Side Advisory',
    description:
      'Advisory work supporting corporate and financial sponsor clients in evaluating and executing strategic acquisition opportunities.',
    role:
      'Financial analysis, valuation, transaction assessment, process coordination and execution.',
    areas:
      'Acquisition analysis, valuation, financial modelling, due diligence and transaction execution.',
  },
  {
    number: '03',
    title: 'Sell-Side Advisory',
    description:
      'Experience supporting clients throughout complex divestiture and sale processes from initial strategic assessment through execution.',
    role:
      'Transaction positioning, valuation, process management, financial analysis and stakeholder coordination.',
    areas:
      'Sell-side M&A, valuation, transaction materials, due diligence and process execution.',
  },
];

export default function Transactions() {
  const ref = useInView();

  return (
    <section id="transactions" className="section-padding bg-offwhite">
      <div className="container-narrow">
        <div ref={ref} className="reveal">

          {/* Section Header */}
          <div className="mb-16">
            <span className="heading-sub block mb-4">
              Professional Focus
            </span>

            <h2 className="heading-section">
              Selected Work
            </h2>

            <p className="body-large mt-6 max-w-2xl">
              Representative areas of transaction experience. Given the
              confidential nature of investment banking mandates, client names,
              transaction values and non-public deal details are not disclosed.
            </p>
          </div>

          {/* Transaction Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-grey-light">

            {transactions.map((transaction) => (
              <article
                key={transaction.number}
                className="bg-offwhite p-8 md:p-10 group hover:bg-white transition-colors duration-300"
              >

                {/* Number */}
                <div className="mb-12">
                  <span className="text-xs font-medium tracking-widest text-grey-muted/60">
                    {transaction.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-medium text-navy mb-5 group-hover:translate-x-1 transition-transform duration-300">
                  {transaction.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-charcoal/70 mb-8">
                  {transaction.description}
                </p>

                {/* Role */}
                <div className="pt-6 border-t border-grey-light">
                  <span className="block text-[11px] font-semibold tracking-widest uppercase text-grey-muted mb-3">
                    Role
                  </span>

                  <p className="text-sm leading-relaxed text-charcoal/70">
                    {transaction.role}
                  </p>
                </div>

                {/* Key Areas */}
                <div className="mt-6">
                  <span className="block text-[11px] font-semibold tracking-widest uppercase text-grey-muted mb-3">
                    Key Areas
                  </span>

                  <p className="text-sm leading-relaxed text-grey-muted">
                    {transaction.areas}
                  </p>
                </div>

              </article>
            ))}

          </div>

          {/* Confidentiality Note */}
          <div className="mt-8 pt-6 border-t border-grey-light">
            <p className="text-xs text-grey-muted italic">
              Transaction experience is presented at a high level due to
              professional confidentiality. No client names, transaction
              values, confidential materials or non-public deal information
              are disclosed.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
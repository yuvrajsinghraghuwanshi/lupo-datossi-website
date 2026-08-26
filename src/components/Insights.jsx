import { useInView } from '../hooks/useScrollReveal';

const articles = [
  {
    category: 'M&A',
    title: 'What Makes a Cross-Border Transaction Work?',
    excerpt:
      'The structural, cultural and regulatory factors that determine whether international M&A creates lasting value.',
    date: 'Placeholder',
  },
  {
    category: 'Corporate Strategy',
    title: 'The Strategic Logic Behind Successful M&A',
    excerpt:
      'Why some acquisitions transform businesses while others destroy value — and the strategic frameworks that make the difference.',
    date: 'Placeholder',
  },
  {
    category: 'Valuation',
    title: 'Valuation Beyond the Spreadsheet',
    excerpt:
      'How qualitative strategic insight complements quantitative analysis in complex transaction environments.',
    date: 'Placeholder',
  },
  {
    category: 'Transaction Execution',
    title: 'Execution Risk in Complex Transactions',
    excerpt:
      'Managing the gap between strategic intent and transaction completion in multi-party, cross-border deals.',
    date: 'Placeholder',
  },
];

export default function Insights() {
  const ref = useInView();

  return (
    <section id="insights" className="section-padding bg-offwhite">
      <div className="container-narrow">
        <div ref={ref} className="reveal">
          {/* Section Header */}
          <div className="mb-16">
            <span className="heading-sub block mb-4">Thinking</span>
            <h2 className="heading-section">Insights</h2>
            <p className="body-large mt-6 max-w-2xl">
              Perspectives on M&amp;A, corporate strategy, valuation and transaction execution.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group py-8 border-t border-grey-light cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-grey-muted">
                    {article.category}
                  </span>
                  <span className="w-px h-3 bg-grey-light" />
                  <span className="text-xs text-grey-muted/60">
                    {article.date}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-navy mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-grey-muted">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-navy/60 group-hover:text-navy transition-colors duration-300">
                  <span>Read more</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </article>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 pt-6 border-t border-grey-light">
            <p className="text-xs text-grey-muted italic">
              Placeholder articles shown above. Actual content to be provided.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

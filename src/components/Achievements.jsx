import { useInView } from '../hooks/useScrollReveal';

const achievements = [
  {
    category: 'Career',
    title: 'Vice President — M&A',
    description:
      'Promoted to Vice President in the Goldman Sachs Mergers & Acquisitions team in February 2025.',
  },
  {
    category: 'Transaction Experience',
    title: 'Complex M&A Mandates',
    description:
      'Experience across buy-side, sell-side and cross-border M&A transactions involving corporate and financial sponsor clients.',
  },
  {
    category: 'Academic',
    title: 'MSc Finance — Distinction',
    description:
      'The London School of Economics and Political Science.',
  },
  {
    category: 'Academic',
    title: 'BSc Finance — First Class Honours',
    description:
      'The London School of Economics and Political Science.',
  },
  {
    category: 'International',
    title: 'International Background',
    description:
      'Academic and professional experience spanning Switzerland and the United Kingdom.',
  },
  {
    category: 'Languages',
    title: 'Multilingual',
    description:
      'Native Italian and English, with professional proficiency in French and Spanish.',
  },
];

export default function Achievements() {
  const ref = useInView();

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="container-narrow">
        <div ref={ref} className="reveal">

          {/* Section Header */}
          <div className="mb-16">
            <span className="heading-sub block mb-4">
              Highlights
            </span>

            <h2 className="heading-section">
              Professional Highlights
            </h2>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">

            {achievements.map((achievement, index) => (
              <article
                key={index}
                className="py-8 border-t border-grey-light"
              >
                <span className="block text-[11px] font-semibold tracking-widest uppercase text-grey-muted mb-3">
                  {achievement.category}
                </span>

                <h3 className="font-serif text-xl font-medium text-navy mb-3">
                  {achievement.title}
                </h3>

                <p className="text-sm leading-relaxed text-grey-muted">
                  {achievement.description}
                </p>
              </article>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
import lupoPortrait from '../assets/lupo-portrait.jpg';
import resume from '../assets/Lupo-Datossi-CV.pdf';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      const offset = 80;

      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-offwhite overflow-hidden">

      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-grey-light/20 to-transparent" />
      </div>

      {/* Main Hero Container */}
      <div className="container-narrow relative z-10 w-full pt-24 pb-16 md:pt-32 md:pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-7 space-y-8">

            {/* Overline */}
            <div className="animate-fade-in-up opacity-0">
              <span className="heading-sub">
                Vice President &mdash; Mergers &amp; Acquisitions
              </span>
            </div>

            {/* Name */}
            <h1 className="animate-fade-in-up opacity-0 delay-100">
              <span className="heading-display block">
                Lupo
              </span>

              <span className="heading-display block">
                Datossi
              </span>
            </h1>

            {/* Description */}
            <p className="body-large max-w-xl animate-fade-in-up opacity-0 delay-200">
              London-based investment banking professional focused on complex
              M&amp;A, cross-border transactions and strategic financial advisory.
            </p>

            {/* Tagline */}
            <p className="text-sm font-medium tracking-widest uppercase text-navy/70 animate-fade-in-up opacity-0 delay-300">
              Strategic thinking. Rigorous analysis. Disciplined execution.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up opacity-0 delay-400">

              {/* View Experience */}
              <button
                onClick={() => scrollTo('experience')}
                className="px-7 py-3 bg-navy text-offwhite text-sm font-medium tracking-wide hover:bg-navy-dark transition-colors duration-200"
              >
                View Experience
              </button>

              {/* Download Resume */}
              <a
                href={resume}
                download
                className="px-7 py-3 border border-navy/20 text-navy text-sm font-medium tracking-wide hover:border-navy/50 transition-colors duration-200"
              >
                Download Resume
              </a>

              {/* Get in Touch */}
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3 border border-navy/20 text-navy text-sm font-medium tracking-wide hover:border-navy/50 hover:bg-navy/5 transition-all duration-200"
              >
                Get in Touch
              </button>

            </div>
          </div>


          {/* ================= RIGHT VISUAL ================= */}
          <div className="lg:col-span-5 hidden lg:block animate-fade-in opacity-0 delay-500">

            <div className="relative">

              <div className="aspect-[3/4] overflow-hidden bg-grey-light">

                <img
                  src={lupoPortrait}
                  alt="Lupo Datossi"
                  className="w-full h-full object-cover object-center"
                />

              </div>

              {/* Accent lines */}
              <div className="absolute -bottom-4 -left-4 w-24 h-px bg-navy/20" />

              <div className="absolute -bottom-4 -left-4 w-px h-24 bg-navy/20" />

            </div>

          </div>

        </div>


        {/* ================= MOBILE SCROLL INDICATOR ================= */}
        <div className="lg:hidden flex justify-center mt-12 animate-fade-in opacity-0 delay-600">

          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-grey-muted hover:text-navy transition-colors"
            aria-label="Scroll to about section"
          >

            <span className="text-[11px] tracking-widest uppercase">
              Scroll
            </span>

            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="animate-bounce"
              style={{ animationDuration: '2s' }}
            >
              <path
                d="M8 4L8 20M8 20L2 14M8 20L14 14"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

          </button>

        </div>

      </div>


      {/* ================= DESKTOP SCROLL INDICATOR ================= */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-600">

        <button
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center gap-2 text-grey-muted hover:text-navy transition-colors"
          aria-label="Scroll to about section"
        >

          <span className="text-[11px] tracking-widest uppercase">
            Scroll
          </span>

          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="animate-bounce"
            style={{ animationDuration: '2s' }}
          >
            <path
              d="M8 4L8 20M8 20L2 14M8 20L14 14"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>

        </button>

      </div>

    </section>
  );
}
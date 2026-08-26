const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Transactions', href: '#transactions' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark">
      <div className="container-narrow py-16">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Identity */}
          <div className="md:col-span-5">
            <h2 className="font-serif text-xl font-medium text-offwhite mb-2">
              Lupo Datossi
            </h2>

            <p className="text-sm text-offwhite/40">
              Vice President | Mergers &amp; Acquisitions
            </p>

            <p className="text-sm text-offwhite/30 mt-1">
              London, United Kingdom
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-offwhite/30 mb-5">
              Navigation
            </h3>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-offwhite/50 hover:text-offwhite transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-offwhite/30 mb-5">
              Connect
            </h3>

            <ul className="space-y-3">

              {/* Email */}
              {/* <li>
                <a
                  href="mailto:email@example.com"
                  className="text-sm text-offwhite/50 hover:text-offwhite transition-colors duration-200"
                >
                  email@example.com
                </a>
              </li> */}

              {/* LinkedIn */}
              <li>
                <a
                  href="#"
                  className="text-sm text-offwhite/50 hover:text-offwhite transition-colors duration-200"
                >
                  LinkedIn Profile
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-offwhite/8 pt-8 mt-12">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

            <p className="text-xs text-offwhite/30">
              &copy; {currentYear} Lupo Datossi. All rights reserved.
            </p>

            <p className="text-xs text-offwhite/20">
              Personal professional website. Not affiliated with any institution.
            </p>

          </div>

          {/* Developer Credit */}
          <div className="mt-8 pt-6 border-t border-offwhite/5 text-center">

            <a
              href="https://instagram.com/yuvinsync"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-offwhite/30 hover:text-offwhite/70 transition-colors duration-200"
            >
              Made with love by Yuvraj Singh Raghuwanshi
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}
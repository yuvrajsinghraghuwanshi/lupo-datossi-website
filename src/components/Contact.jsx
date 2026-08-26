import { useInView } from '../hooks/useScrollReveal';
import { useState } from 'react';

export default function Contact() {
  const ref = useInView();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('sending');

    try {
      const data = new FormData();

      data.append(
        'access_key',
        '1a176df4-5e24-4301-bcd5-cc99e277ab4f'
      );

      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('organisation', formData.organisation);
      data.append('message', formData.message);

      // Optional subject shown in your email
      data.append(
        'subject',
        `New enquiry from ${formData.name}`
      );

      // Helps Web3Forms identify where the submission came from
      data.append('from_name', 'Lupo Datossi Website');

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: data,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus('success');

        setFormData({
          name: '',
          email: '',
          organisation: '',
          message: '',
        });
      } else {
        console.error(result);
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-narrow">
        <div ref={ref} className="reveal">

          {/* Section Header */}
          <div className="mb-16">
            <span className="heading-sub block mb-4">
              Connect
            </span>

            <h2 className="heading-section">
              Get in Touch
            </h2>

            <p className="body-large mt-6 max-w-2xl">
              For professional enquiries, transaction discussions and
              strategic financial conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Contact Details */}
            <div>
              <div className="space-y-0">

                {/* Email */}
                <div className="py-6 border-t border-grey-light">
                  <span className="text-xs font-semibold tracking-widest uppercase text-grey-muted block mb-2">
                    Email
                  </span>

                  <a
                    href="mailto:lupodatossi8@gmail.com"
                    className="text-base font-medium text-navy hover:text-charcoal transition-colors duration-200"
                  >
                    lupodatossi8@gmail.com
                  </a>
                </div>

                {/* Location */}
                <div className="py-6 border-t border-b border-grey-light">
                  <span className="text-xs font-semibold tracking-widest uppercase text-grey-muted block mb-2">
                    Location
                  </span>

                  <p className="text-base font-medium text-navy">
                    London, United Kingdom
                  </p>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                className="space-y-8"
                onSubmit={handleSubmit}
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold tracking-widest uppercase text-grey-muted mb-3"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-transparent border-b border-grey-light py-3 text-navy placeholder-grey-muted/40 focus:outline-none focus:border-navy transition-colors duration-200 disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold tracking-widest uppercase text-grey-muted mb-3"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-transparent border-b border-grey-light py-3 text-navy placeholder-grey-muted/40 focus:outline-none focus:border-navy transition-colors duration-200 disabled:opacity-50"
                    placeholder="Your email address"
                  />
                </div>

                {/* Organisation */}
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-xs font-semibold tracking-widest uppercase text-grey-muted mb-3"
                  >
                    Organisation
                  </label>

                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full bg-transparent border-b border-grey-light py-3 text-navy placeholder-grey-muted/40 focus:outline-none focus:border-navy transition-colors duration-200 disabled:opacity-50"
                    placeholder="Your organisation"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold tracking-widest uppercase text-grey-muted mb-3"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-transparent border-b border-grey-light py-3 text-navy placeholder-grey-muted/40 focus:outline-none focus:border-navy transition-colors duration-200 resize-none disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-8 py-3.5 bg-navy text-offwhite text-sm font-medium tracking-wide hover:bg-navy-dark transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending'
                    ? 'Sending...'
                    : 'Send Message'}
                </button>

                {/* Success */}
                {status === 'success' && (
                  <div className="pt-2">
                    <p className="text-sm text-green-700">
                      Thank you. Your message has been sent successfully.
                    </p>
                  </div>
                )}

                {/* Error */}
                {status === 'error' && (
                  <div className="pt-2">
                    <p className="text-sm text-red-700">
                      Something went wrong. Please try again or email
                      Lupo directly at{' '}
                      <a
                        href="mailto:lupodatossi8@gmail.com"
                        className="underline"
                      >
                        lupodatossi8@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                )}

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDiscord, FaYoutube, FaTwitter } from 'react-icons/fa';

const MENUS = {
  footer: [
    {
      heading: 'Company',
      links: [
        { text: 'About us', to: '/about-us' },
        { text: 'Careers', to: '/careers' },
        { text: 'Partners', to: '/partners' },
        { text: 'Case Studies', to: '/case-studies' },
        { text: 'Trust', to: '/trust' },
        { text: 'Pricing', to: '/pricing' },
        { text: 'Contact Sales', to: '/contact-sales' },
        { text: 'Early Access', to: '/early-access' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { text: 'AI', to: '/ai' },
        { text: 'Blog', to: '/blog' },
        { text: 'Docs', to: '/docs' },
        { text: 'Community Guides', to: '/guides' },
        { text: 'Changelog', to: '/changelog' },
        { text: 'Demos', to: '/demos' },
        { text: 'Support', to: '/support' },
        { text: 'Security', to: '/security' },
      ],
    },
    {
      heading: 'Community',
      links: [
        { text: 'Twitter', to: 'https://x.com', icon: FaTwitter },
        { text: 'LinkedIn', to: 'https://linkedin.com', icon: FaLinkedin },
        { text: 'GitHub', to: 'https://github.com', icon: FaGithub },
        { text: 'Discord', to: 'https://discord.com', icon: FaDiscord },
        { text: 'YouTube', to: 'https://youtube.com', icon: FaYoutube },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { text: 'Privacy Policy', to: '/privacy' },
        { text: 'Terms of Service', to: '/terms' },
        { text: 'DPA', to: '/dpa' },
        { text: 'Subprocessors List', to: '/subprocessors' },
        { text: 'Privacy Guide', to: '/privacy-guide' },
        { text: 'Cookie Policy', to: '/cookie-policy' },
        { text: 'Business Information', to: '/business-information' },
      ],
    },
  ],
};

function Footer() {
  return (
    <footer className="bg-black text-white p-10 ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
        
        {/* Left Section: Logo and Info */}
        <div className="mb-6 lg:mb-0 lg:w-1/3">
          <Link to="/" className="text-xl font-bold">
            Neon
          </Link>
          <p className="mt-4 text-sm">
            Made in SF and the World
          </p>
          <p className="text-sm">Ⓒ 2022 – 2024 Neon, Inc.</p>
        </div>

        {/* Menu Links */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {MENUS.footer.map(({ heading, links }, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="font-semibold uppercase mb-3 text-white">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map(({ to, text, icon: Icon }, linkIdx) => (
                  <li key={linkIdx}>
                    <Link to={to} className="flex items-center hover:text-green-500">
                      {Icon && <Icon className="mr-2" />}
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;

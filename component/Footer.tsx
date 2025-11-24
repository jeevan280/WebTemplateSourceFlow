'use client';
import { FC } from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

interface NavColumn {
  title: string;
  links: string[];
}

const Footer: FC = () => {
  const exploreLinks = [
    'Homepage',
    'For jobseekers',
    'For clients',
    'Our sectors',
    'Resources',
    'Contact us',
  ];

  const sectorLinks = [
    'Software engineering',
    'DevOps',
    'Cloud',
    'Infrastructure',
    'Testing',
    'Security',
  ];

  const serviceLinks = [
    'Permanent Placement',
    'Contract Staffing',
    'Executive Search',
    'Tech Consulting',
  ];

  const navColumns: NavColumn[] = [
    { title: 'Explore', links: exploreLinks },
    { title: 'Sectors', links: sectorLinks },
    { title: 'Services', links: serviceLinks },
  ];

  const iconStyle = 'h-6 w-6 cursor-pointer opacity-80 transition hover:opacity-100';

  const linkStyle = 'cursor-pointer text-white/80 transition-colors hover:text-white';

  return (
    <footer className="bg-[#064EA4] py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4 md:gap-16 lg:px-0">
        <div>
          <h3 className="mb-6 font-[Consolas] text-2xl font-bold">Software Recruitment co.</h3>

          <div className="flex gap-4 text-sm">
            <FaLinkedinIn className={iconStyle} />
            <FaFacebook className={iconStyle} />
            <FaInstagram className={iconStyle} />
            <FaTwitter className={iconStyle} />
          </div>
        </div>

        {navColumns.map((column) => (
          <div key={column.title}>
            <h4 className="mb-4 text-xl font-bold md:text-2xl">{column.title}</h4>
            <ul className="space-y-3 text-base font-light">
              {column.links.map((link) => (
                <li key={link} className={linkStyle}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

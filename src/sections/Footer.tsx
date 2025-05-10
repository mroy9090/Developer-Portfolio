import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/mroy9090/"
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/mridul-roy-064408183/"
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/mridul.roy.881391"
  },
];

export const Footer = () => {
  return (
    <footer className='relative -overflow-x-clip'>
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between'>
          <div className='text-white/40'>Mridul Roy &copy; 2025. All rights reserved.</div>
          <nav className='flex flex-col items-center gap-8 md:flex-row'>
            {footerLinks.map((link) => (
              <a href={link.href} key={link.title} className='inline-flex items-center' rel="noopener noreferrer">
                <span className='font-semibold'>{link.title}</span>
                < ArrowUpRightIcon className="w-4 h-4 ml-1 pointer-events-none" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
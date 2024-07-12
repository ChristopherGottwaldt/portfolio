import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center gap-4 text-sm lg:gap-6">
      <a className="transition-colors hover:text-foreground/80 text-foreground" href="/">Home</a>
      <a className="transition-colors hover:text-foreground/80 text-foreground" href="/Projects">Projects</a>
      <a className="transition-colors hover:text-foreground/80 text-foreground" href="/Resume">Resume</a>
      <a className="transition-colors hover:text-foreground/80 text-foreground" href="/Blog">Blog</a>
      <a className="transition-colors hover:text-foreground/80 text-foreground" href="/Misc">Misc</a>
      <a className="transition-colors hover:text-foreground/80 text-foreground" href="/Art">Art</a> 
      <a className="transition-colors hover:text-foreground/80 text-foreground" href="/Source">Source</a> 
    </nav>
  );
};

export default Navbar;

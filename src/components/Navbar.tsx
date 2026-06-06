import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const NAV = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Education',      href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [progress, setProgress]   = useState(0);
  const [active,   setActive]     = useState('');
  const [open,     setOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrolled(sy > 40);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (sy / total) * 100 : 0);
      const ids = NAV.map(n => n.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && sy >= el.offsetTop - 130) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const S: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    transition: 'background .3s, border-color .3s, padding .3s',
    background: scrolled ? 'rgba(11,17,32,0.85)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    padding: scrolled ? '10px 0' : '18px 0',
  };

  return (
    <>
      {/* Scroll progress */}
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 200,
        height: 2, width: `${progress}%`,
        background: 'linear-gradient(90deg,#6366F1,#06B6D4)',
        transition: 'width .1s',
      }} />

      <motion.nav style={S} initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: .55, ease: 'easeOut' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#hero" style={{ textDecoration: 'none', fontSize: 20, fontWeight: 800, fontFamily: 'var(--font-head)', letterSpacing: '-0.03em' }}>
            <span className="g-text">Dev</span>
            <span style={{ color: '#F1F5F9' }}>Portfolio</span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: 2, listStyle: 'none', margin: 0, padding: 0 }}
              className="desktop-nav">
            {NAV.map(n => {
              const isActive = active === n.href.slice(1);
              return (
                <li key={n.label}>
                  <a href={n.href} style={{
                    position: 'relative', display: 'block',
                    padding: '6px 14px', borderRadius: 8,
                    fontSize: 13.5, fontWeight: 500, textDecoration: 'none',
                    color: isActive ? '#fff' : '#94A3B8',
                    background: isActive ? 'rgba(99,102,241,0.15)' : 'transparent',
                    border: isActive ? '1px solid rgba(99,102,241,0.28)' : '1px solid transparent',
                    transition: 'color .2s, background .2s',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#e2e8f0'; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#94A3B8'; }}
                  >
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a href="#contact" className="grad-btn desktop-cta" style={{ padding: '9px 22px', fontSize: 13 }}>
            Hire Me
          </a>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)}
            style={{ display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 6 }}
            className="mobile-menu-btn">
            {open ? <HiX size={24}/> : <HiMenuAlt3 size={24}/>}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(11,17,32,0.97)' }}
            >
              <div className="container" style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {NAV.map(n => (
                  <a key={n.label} href={n.href} onClick={() => setOpen(false)} style={{
                    padding: '10px 0', fontSize: 15, fontWeight: 500,
                    color: '#94A3B8', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.04)',
                    transition: 'color .2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>
                    {n.label}
                  </a>
                ))}
                <a href="#contact" className="grad-btn" style={{ marginTop: 12, justifyContent: 'center' }}>Hire Me</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

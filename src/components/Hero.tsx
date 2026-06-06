import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import { siLeetcode } from 'simple-icons';
import { SiLeetcode } from 'react-icons/si';

const ROLES = ['Full Stack Developer','Java Developer','AI Enthusiast','Problem Solver','Open Source Contributor'];

function Typer({ texts }: { texts: string[] }) {
  const [idx, setIdx]         = useState(0);
  const [display, setDisplay] = useState('');
  const [del, setDel]         = useState(false);

  useEffect(() => {
    const cur = texts[idx];
    const t = setTimeout(() => {
      if (!del) {
        const next = cur.slice(0, display.length + 1);
        setDisplay(next);
        if (next === cur) setTimeout(() => setDel(true), 1800);
      } else {
        const next = cur.slice(0, display.length - 1);
        setDisplay(next);
        if (next === '') { setDel(false); setIdx(i => (i + 1) % texts.length); }
      }
    }, del ? 36 : 78);
    return () => clearTimeout(t);
  }, [display, del, idx, texts]);

  return (
    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
      <span className="g-text">{display}</span>
      <span className="blink" style={{ color: '#818CF8', WebkitTextFillColor: '#818CF8' }}>|</span>
    </span>
  );
}

const SOCIALS = [
  { icon: FiGithub,   href: 'https://github.com/Ganesh-Jana',            label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ganesh-chandra-jana-07a86a269/',          label: 'LinkedIn' },
  { icon: SiLeetcode,  href: 'https://leetcode.com/u/Ganesh_Jana/',           label: 'Twitter'  },
  { icon: FiMail,     href: 'mailto:janaganesh810@email.com', label: 'Email'    },
];

const chip: React.CSSProperties = {
  position: 'absolute',
  padding: '8px 16px', borderRadius: 12,
  fontSize: 13, fontWeight: 700, color: '#fff',
  backdropFilter: 'blur(10px)', whiteSpace: 'nowrap',
};

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Ambient glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position:'absolute', top:'-20%', left:'-10%', width:640, height:640, borderRadius:'50%', background:'#6366F1', opacity:.09, filter:'blur(110px)' }}/>
        <div style={{ position:'absolute', bottom:'-15%', right:'-5%', width:500, height:500, borderRadius:'50%', background:'#06B6D4', opacity:.07, filter:'blur(90px)' }}/>
      </div>

      <div className="container" style={{
        position:'relative', zIndex:1, width:'100%',
        paddingTop: 120, paddingBottom: 80,
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center',
      }} id="hero-grid">

        {/* ── TEXT ── */}
        <div>
          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.5}}
            className="badge" style={{ marginBottom: 28 }}>
            <span style={{ width:7, height:7, borderRadius:'50%', background:'#34D399', display:'inline-block', marginRight:8, animation:'pulse2 2s ease-in-out infinite' }}/>
            Available for opportunities
          </motion.div>

          <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.55,delay:.1}}
            style={{ fontSize:'clamp(2.6rem,4.8vw,4.8rem)', fontWeight:800, marginBottom:14, color:'#F1F5F9', letterSpacing:'-0.03em', lineHeight:1.05 }}>
            Hi, I'm{' '}
            <span className="g-text">Ganesh<br/></span>
          </motion.h1>

          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.2}}
            style={{ fontSize:'clamp(1.05rem,1.8vw,1.35rem)', marginBottom:18, minHeight:34 }}>
            <Typer texts={ROLES} />
          </motion.div>

          <motion.p initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.3}}
            style={{ color:'#64748B', fontSize:16, lineHeight:1.8, marginBottom:36, maxWidth:470 }}>
            CSE undergrad Student passionate about building scalable backend
            systems and intelligent full-stack products. I love clean architecture and fast code.
          </motion.p>

          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.4}}
            style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:36 }}>
            <a href="#contact" className="grad-btn">Let's Talk →</a>
            <a href="/My_Resume3.pdf" target="_blank" rel="noreferrer" className="outline-btn">
  View CV
</a>
          </motion.div>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5,delay:.55}}
            style={{ display:'flex', gap:10 }}>
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                style={{ width:40, height:40, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center',
                  background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', color:'#64748B', textDecoration:'none',
                  transition:'transform .18s, color .18s, background .18s' }}
                onMouseEnter={e=>{ e.currentTarget.style.color='#fff'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.background='rgba(99,102,241,0.15)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.color='#64748B'; e.currentTarget.style.transform='none'; e.currentTarget.style.background='rgba(255,255,255,0.04)'; }}>
                <Icon size={17}/>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── IMAGE ── */}
        <motion.div initial={{opacity:0,scale:.88}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.15,ease:'easeOut'}}
          style={{ display:'flex', justifyContent:'center' }}>
          <div style={{ position:'relative' }}>
            {/* Glow ring */}
            <div style={{ position:'absolute', inset:-18, borderRadius:'50%', background:'conic-gradient(from 90deg,#6366F1,#06B6D4,#8B5CF6,#6366F1)', filter:'blur(26px)', opacity:.32 }}/>
            {/* Photo */}
            <div className="float" style={{ position:'relative', width:300, height:300, borderRadius:'50%', overflow:'hidden', border:'2px solid rgba(99,102,241,0.3)' }}>
              <img src="/profile_Image.jpg" alt="Ganesh Jana" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            </div>
            {/* Chips */}
            <motion.div animate={{y:[0,-7,0]}} transition={{duration:3.5,repeat:Infinity,ease:'easeInOut'}}
              style={{ ...chip, left:-56, top:44, background:'rgba(99,102,241,0.92)', boxShadow:'0 8px 24px rgba(99,102,241,0.4)' }}>
              🏆 7.69 CGPA
            </motion.div>
            <motion.div animate={{y:[0,7,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut',delay:.8}}
              style={{ ...chip, right:-50, bottom:60, background:'rgba(6,182,212,0.88)', boxShadow:'0 8px 24px rgba(6,182,212,0.35)' }}>
              🚀 6 Projects
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a href="#about" animate={{y:[0,6,0]}} transition={{duration:2.5,repeat:Infinity}}
        style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', color:'#334155', textDecoration:'none', transition:'color .2s' }}
        onMouseEnter={e=>e.currentTarget.style.color='#94A3B8'} onMouseLeave={e=>e.currentTarget.style.color='#334155'}>
        <FiArrowDown size={20}/>
      </motion.a>

      <style>{`
        @keyframes pulse2 { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.25)} }
        @media (max-width:900px) {
          #hero-grid { grid-template-columns:1fr !important; padding-top:110px !important; gap:48px !important; }
          #hero-grid > div:last-child { display:none; }
        }
      `}</style>
    </section>
  );
}

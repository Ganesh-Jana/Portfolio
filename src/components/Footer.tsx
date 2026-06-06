import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

const LINKS = ['About','Skills','Projects','Experience','Contact'].map(l => ({ label:l, href:`#${l.toLowerCase()}` }));
const SOCIALS = [
  { icon:FiGithub,   href:'https://github.com/Ganesh-Jana',  label:'GitHub'   },
  { icon:FiLinkedin, href:'https://www.linkedin.com/in/ganesh-chandra-jana-07a86a269/', label:'LinkedIn' },
  { icon:FiTwitter,  href:'https://x.com/GaneshJ49895311',  label:'Twitter'  },
  { icon:FiMail,     href:'mailto:janaganesh810@gmail.com',label:'Email'   },
];

export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:48, paddingBottom:32 }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', gap:40, marginBottom:40 }} id="footer-grid">

          <div>
            <div style={{ fontSize:20, fontWeight:800, fontFamily:'var(--font-head)', letterSpacing:'-0.03em', marginBottom:12 }}>
              <span className="g-text">Dev</span><span style={{ color:'#F1F5F9' }}>Portfolio</span>
            </div>
            <p style={{ color:'#475569', fontSize:14, lineHeight:1.75, maxWidth:260 }}>
               Final-year Computer Science student passionate about Java development, scalable web applications, and solving real-world problems through technology.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize:11, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'#64748B', marginBottom:16 }}>Quick Links</h4>
            <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:8 }}>
              {LINKS.map(l => (
                <li key={l.label}>
                  <a href={l.href} style={{ color:'#475569', textDecoration:'none', fontSize:14, transition:'color .2s' }}
                    onMouseEnter={e=>e.currentTarget.style.color='#F1F5F9'}
                    onMouseLeave={e=>e.currentTarget.style.color='#475569'}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize:11, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'#64748B', marginBottom:16 }}>Connect</h4>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              {SOCIALS.map(({ icon:Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  style={{ width:38, height:38, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center',
                    background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', color:'#64748B', textDecoration:'none',
                    transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.color='#fff'; e.currentTarget.style.background='rgba(99,102,241,0.14)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.color='#64748B'; e.currentTarget.style.background='rgba(255,255,255,0.04)'; }}>
                  <Icon size={16}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.05)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <p style={{ color:'#334155', fontSize:13 }}>
            © {new Date().getFullYear()} Arjun Sharma · Built with React + Vite + Tailwind
          </p>
          <motion.button whileHover={{ scale:1.1, y:-2 }} onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            style={{ width:36, height:36, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center',
              background:'rgba(99,102,241,0.1)', border:'1px solid rgba(99,102,241,0.2)', color:'#6366F1', cursor:'pointer' }}>
            <FiArrowUp size={16}/>
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width:680px) { #footer-grid { grid-template-columns:1fr 1fr !important; } }
        @media (max-width:400px) { #footer-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </footer>
  );
}

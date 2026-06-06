import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCode, FiBookOpen, FiTarget } from 'react-icons/fi';

const STATS = [
  { label: 'CGPA',          val: 7.69,  suffix: '',  icon: FiAward,    color: '#6366F1' },
  { label: 'Projects',      val: 6,    suffix: '+', icon: FiCode,     color: '#06B6D4' },
  { label: 'Certifications',val: 4,    suffix: '',  icon: FiBookOpen, color: '#8B5CF6' },
  { label: 'DSA Problems',  val: 250,  suffix: '+', icon: FiTarget,   color: '#10B981' },
];

const BIO = [
  { label: 'Who I Am',        text: "I'm Ganesh, a final-year Computer Science student and aspiring Software Engineer with a strong foundation in Java, Spring Boot, SQL, and web development. I enjoy building scalable applications and solving real-world problems through technology." },
  { label: 'Career Objective',text: "Seeking a Software Development Engineer or Associate Software Engineer role where I can contribute to impactful projects, strengthen my technical expertise, and grow as a full-stack developer in a collaborative environment." },
  { label: 'What Drives Me',  text: "I am motivated by creating efficient, user-friendly applications, learning new technologies, and continuously improving my problem-solving skills. Writing clean code and delivering reliable solutions gives me the greatest satisfaction." },
];

const TAGS = ['Problem Solver','Team Player','Fast Learner','Self-Motivated','Detail-Oriented'];

function CountUp({ to, suffix, run }: { to: number; suffix: string; run: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let cur = 0; const steps = 55; const inc = to / steps;
    const t = setInterval(() => {
      cur = Math.min(cur + inc, to);
      setV(to % 1 !== 0 ? parseFloat(cur.toFixed(1)) : Math.floor(cur));
      if (cur >= to) clearInterval(t);
    }, 1400 / steps);
    return () => clearInterval(t);
  }, [run, to]);
  return <>{v}{suffix}</>;
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: .55, delay } },
});

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setRun(true); }, { threshold: .25 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">

        {/* Header */}
        <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={{once:true}}
          style={{ marginBottom: 60 }}>
          <span className="section-label">Get to know me</span>
          <h2 className="section-heading">About <span className="g-text">Me</span></h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'start' }} id="about-grid">

          {/* Bio */}
          <div>
            {BIO.map(({ label, text }, i) => (
              <motion.div key={label} variants={fadeUp(i*.1)} initial="hidden" whileInView="show" viewport={{once:true}}
                style={{ marginBottom: i < BIO.length-1 ? 28 : 0 }}>
                <h3 style={{ fontSize:15, fontWeight:700, color:'var(--primary)', marginBottom:8 }}>{label}</h3>
                <p style={{ color:'#64748B', lineHeight:1.8, fontSize:15 }}>{text}</p>
              </motion.div>
            ))}

            <motion.div variants={fadeUp(.35)} initial="hidden" whileInView="show" viewport={{once:true}}
              style={{ display:'flex', flexWrap:'wrap', gap:10, marginTop:28 }}>
              {TAGS.map(t => (
                <span key={t} style={{ padding:'5px 14px', borderRadius:999, fontSize:13, fontWeight:600,
                  background:'rgba(99,102,241,0.09)', border:'1px solid rgba(99,102,241,0.22)', color:'#a5b4fc' }}>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <div ref={ref}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
              {STATS.map(({ label, val, suffix, icon: Icon, color }, i) => (
                <motion.div key={label} variants={fadeUp(i*.08)} initial="hidden" whileInView="show" viewport={{once:true}}
                  whileHover={{ y:-4 }} className="card"
                  style={{ padding:24, textAlign:'center', cursor:'default' }}>
                  <div style={{ width:48, height:48, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center',
                    background:`${color}18`, border:`1px solid ${color}35`, margin:'0 auto 14px' }}>
                    <Icon size={22} style={{ color }}/>
                  </div>
                  <div style={{ fontSize:32, fontWeight:800, fontFamily:'var(--font-head)', color, lineHeight:1 }}>
                    <CountUp to={val} suffix={suffix} run={run}/>
                  </div>
                  <div style={{ fontSize:13, color:'#64748B', fontWeight:500, marginTop:6 }}>{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Education card */}
            <motion.div variants={fadeUp(.4)} initial="hidden" whileInView="show" viewport={{once:true}}
              className="card" style={{ padding:22, display:'flex', alignItems:'center', gap:16 }}>
              <span style={{ fontSize:32 }}>🎓</span>
              <div>
                <p style={{ fontWeight:700, color:'#F1F5F9', marginBottom:4 }}>DIATM  Durgapur</p>
                <p style={{ color:'#64748B', fontSize:14 }}>B.Tech CSE · 2022–2026 · 7.69 CGPA</p>
                <p style={{ color:'#475569', fontSize:12, marginTop:2 }}>West Bengal, India</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:768px) {
          #about-grid { grid-template-columns:1fr !important; gap:40px !important; }
        }
      `}</style>
    </section>
  );
}

import { motion } from 'framer-motion';
import { experience, education } from '../data/education';

const fadeUp = (delay = 0) => ({
  hidden: { opacity:0, x:-24 },
  show:   { opacity:1, x:0, transition:{ duration:.5, delay } },
});

function Timeline({ children }: { children: React.ReactNode }) {
  return <div style={{ position:'relative', paddingLeft:32 }}>{children}</div>;
}

function TimelineItem({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <motion.div variants={fadeUp(index*.1)} initial="hidden" whileInView="show" viewport={{once:true}}
      style={{ position:'relative', paddingBottom:index === 0 ? 36 : 0 }}>
      <div className="timeline-line"/>
      <div className="timeline-dot"/>
      {children}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <>
      {/* ── Experience ── */}
      <section id="experience" className="section" style={{ background:'rgba(17,24,39,0.4)' }}>
        <div className="container">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55}}
            style={{ marginBottom:52 }}>
            <span className="section-label">Work history</span>
            <h2 className="section-heading"><span className="g-text">Experience</span></h2>
          </motion.div>

          <div style={{ maxWidth:780 }}>
            <Timeline>
              {experience.map((exp, i) => (
                <TimelineItem key={exp.company} index={i}>
                  <div className="card" style={{ padding:28, marginBottom: i < experience.length-1 ? 24 : 0 }}>
                    <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:12, marginBottom:16 }}>
                      <div>
                        <span style={{ fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--primary)', display:'block', marginBottom:4 }}>
                          {exp.type}
                        </span>
                        <h3 style={{ fontSize:18, fontWeight:800, color:'#F1F5F9', marginBottom:2 }}>{exp.role}</h3>
                        <p style={{ color:'#94A3B8', fontWeight:500 }}>{exp.company}</p>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <span style={{ display:'inline-block', padding:'4px 12px', borderRadius:999, fontSize:12, fontWeight:600,
                          background:'rgba(6,182,212,0.1)', border:'1px solid rgba(6,182,212,0.25)', color:'#67e8f9' }}>
                          {exp.duration}
                        </span>
                        <p style={{ color:'#475569', fontSize:12, marginTop:4 }}>{exp.location}</p>
                      </div>
                    </div>

                    <ul style={{ listStyle:'none', padding:0, marginBottom:16 }}>
                      {exp.responsibilities.map(r => (
                        <li key={r} style={{ display:'flex', gap:8, color:'#64748B', fontSize:14, marginBottom:7, lineHeight:1.65 }}>
                          <span style={{ color:'var(--accent)', marginTop:3, flexShrink:0 }}>▸</span> {r}
                        </li>
                      ))}
                    </ul>

                    <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                      {exp.tech.map(t => (
                        <span key={t} style={{ padding:'4px 12px', borderRadius:999, fontSize:12, fontWeight:600,
                          background:'rgba(99,102,241,0.09)', border:'1px solid rgba(99,102,241,0.2)', color:'#c7d2fe' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="section">
        <div className="container">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55}}
            style={{ marginBottom:52 }}>
            <span className="section-label">Academic background</span>
            <h2 className="section-heading"><span className="g-text">Education</span></h2>
          </motion.div>

          <div style={{ maxWidth:780 }}>
            <Timeline>
              {education.map((edu, i) => (
                <TimelineItem key={edu.institution} index={i}>
                  <motion.div whileHover={{ x:4 }} className="card"
                    style={{ padding:24, marginBottom: i < education.length-1 ? 20 : 0 }}>
                    <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:12, alignItems:'flex-start' }}>
                      <div style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
                        <span style={{ fontSize:28, lineHeight:1 }}>🎓</span>
                        <div>
                          <h3 style={{ fontSize:16, fontWeight:700, color:'#F1F5F9', marginBottom:3 }}>{edu.degree}</h3>
                          <p style={{ color:'#64748B', fontSize:14 }}>{edu.institution}</p>
                        </div>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <span style={{ display:'inline-block', padding:'3px 12px', borderRadius:999, fontSize:12, fontWeight:700,
                          background:'rgba(99,102,241,0.1)', color:'#a5b4fc', marginBottom:4 }}>
                          {edu.grade}
                        </span>
                        <p style={{ color:'#475569', fontSize:12 }}>{edu.year}</p>
                      </div>
                    </div>
                    <p style={{ color:'#64748B', fontSize:13.5, lineHeight:1.7, marginTop:14 }}>{edu.description}</p>
                  </motion.div>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </section>
    </>
  );
}

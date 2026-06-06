import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import { certifications } from '../data/education';

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ background:'rgba(17,24,39,0.4)' }}>
      <div className="container">

        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55}}
          style={{ marginBottom:52 }}>
          <span className="section-label">Verified credentials</span>
          <h2 className="section-heading"><span className="g-text">Certifications</span></h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }} id="cert-grid">
          {certifications.map((c, i) => (
            <motion.a key={c.name} href={c.link} target="_blank" rel="noreferrer"
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{duration:.45,delay:i*.07}}
              whileHover={{ y:-6 }}
              className="card" style={{ padding:24, textDecoration:'none', display:'block', transition:'border-color .2s' }}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.borderColor=`${c.color}40`}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.07)'}>

              <div style={{ width:46, height:46, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center',
                background:`${c.color}15`, border:`1px solid ${c.color}30`, marginBottom:16 }}>
                <FiAward size={22} style={{ color:c.color }}/>
              </div>

              <h3 style={{ fontSize:14, fontWeight:700, color:'#F1F5F9', lineHeight:1.45, marginBottom:8 }}>{c.name}</h3>
              <p style={{ color:'#475569', fontSize:12.5, marginBottom:16 }}>{c.org}</p>

              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <span style={{ fontSize:12, fontWeight:600, padding:'3px 10px', borderRadius:999,
                  background:`${c.color}14`, color:c.color }}>{c.date}</span>
                <FiExternalLink size={13} style={{ color:'#475569' }}/>
              </div>

              {c.credentialId && (
                <p style={{ color:'#334155', fontSize:11, fontFamily:'monospace', marginTop:10, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                  {c.credentialId}
                </p>
              )}
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width:900px) { #cert-grid { grid-template-columns:repeat(2,1fr) !important; } }
        @media (max-width:480px) { #cert-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}

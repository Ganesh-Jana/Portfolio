import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

type Filter = 'All' | 'Full Stack' | 'AI' | 'Web Development';
const FILTERS: Filter[] = ['All','Full Stack','AI','Web Development'];

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
      style={{ position:'fixed', inset:0, zIndex:300, display:'flex', alignItems:'center', justifyContent:'center', padding:20,
        background:'rgba(0,0,0,0.75)', backdropFilter:'blur(8px)' }}
      onClick={onClose}>
      <motion.div initial={{scale:.85,opacity:0,y:30}} animate={{scale:1,opacity:1,y:0}} exit={{scale:.9,opacity:0}}
        transition={{type:'spring',stiffness:280,damping:24}}
        style={{ background:'#111827', border:'1px solid rgba(255,255,255,0.09)', borderRadius:20, maxWidth:640, width:'100%', overflow:'hidden' }}
        onClick={e => e.stopPropagation()}>

        <div style={{ position:'relative' }}>
          <img src={p.image} alt={p.title} style={{ width:'100%', height:200, objectFit:'cover', display:'block' }}/>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(17,24,39,.9), transparent)' }}/>
          <button onClick={onClose} style={{ position:'absolute', top:12, right:12, width:32, height:32, borderRadius:'50%',
            background:'rgba(0,0,0,0.6)', border:'none', color:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <FiX size={16}/>
          </button>
          <span style={{ position:'absolute', bottom:12, left:16, padding:'3px 12px', borderRadius:999, fontSize:12, fontWeight:600,
            background:'rgba(99,102,241,0.3)', border:'1px solid rgba(99,102,241,0.4)', color:'#a5b4fc' }}>
            {p.category}
          </span>
        </div>

        <div style={{ padding:28 }}>
          <h3 style={{ fontSize:22, fontWeight:800, color:'#F1F5F9', marginBottom:8 }}>{p.title}</h3>
          <p style={{ color:'#64748B', lineHeight:1.75, marginBottom:20, fontSize:14 }}>{p.description}</p>

          <p style={{ fontSize:11, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--accent)', marginBottom:10 }}>Key Features</p>
          <ul style={{ listStyle:'none', padding:0, marginBottom:20 }}>
            {p.features.map(f => (
              <li key={f} style={{ display:'flex', gap:8, color:'#64748B', fontSize:14, marginBottom:6 }}>
                <span style={{ color:'#6366F1', marginTop:2 }}>▸</span> {f}
              </li>
            ))}
          </ul>

          <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:24 }}>
            {p.tech.map(t => (
              <span key={t} style={{ padding:'4px 12px', borderRadius:999, fontSize:12, fontWeight:600,
                background:'rgba(99,102,241,0.1)', border:'1px solid rgba(99,102,241,0.2)', color:'#c7d2fe' }}>{t}</span>
            ))}
          </div>

          <div style={{ display:'flex', gap:12 }}>
            <a href={p.github} target="_blank" rel="noreferrer" className="outline-btn" style={{ padding:'10px 20px', fontSize:13 }}>
              <FiGithub size={15}/> GitHub
            </a>
            <a href={p.demo} target="_blank" rel="noreferrer" className="grad-btn" style={{ padding:'10px 20px', fontSize:13 }}>
              <FiExternalLink size={15}/> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Card({ p, onClick }: { p: Project; onClick: () => void }) {
  return (
    <motion.div layout initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.92}}
      whileHover={{ y:-6 }} transition={{ duration:.3 }}
      className="card" style={{ overflow:'hidden', cursor:'pointer' }} onClick={onClick}>

      <div style={{ position:'relative', overflow:'hidden' }}>
        <img src={p.image} alt={p.title} style={{ width:'100%', height:180, objectFit:'cover', display:'block', transition:'transform .5s' }}
          onMouseEnter={e=>e.currentTarget.style.transform='scale(1.05)'}
          onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}/>
        <span style={{ position:'absolute', top:12, left:12, padding:'3px 11px', borderRadius:999, fontSize:11, fontWeight:600,
          background:'rgba(11,17,32,0.85)', border:'1px solid rgba(99,102,241,0.3)', color:'#a5b4fc' }}>
          {p.category}
        </span>
      </div>

      <div style={{ padding:20 }}>
        <h3 style={{ fontSize:17, fontWeight:700, color:'#F1F5F9', marginBottom:8, transition:'color .2s' }}
          onMouseEnter={e=>(e.currentTarget.style.color='#818CF8')}
          onMouseLeave={e=>(e.currentTarget.style.color='#F1F5F9')}>
          {p.title}
        </h3>
        <p style={{ color:'#64748B', fontSize:13.5, lineHeight:1.7, marginBottom:16,
          display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>
          {p.description}
        </p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
          {p.tech.slice(0,4).map(t => (
            <span key={t} style={{ padding:'3px 10px', borderRadius:6, fontSize:11.5, fontWeight:600,
              background:'rgba(99,102,241,0.09)', color:'#c7d2fe' }}>{t}</span>
          ))}
          {p.tech.length > 4 && <span style={{ fontSize:11.5, color:'#475569', padding:'3px 0' }}>+{p.tech.length-4}</span>}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const [modal, setModal]   = useState<Project|null>(null);
  const shown = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">

        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55}}
          style={{ marginBottom:48 }}>
          <span className="section-label">What I've built</span>
          <h2 className="section-heading">Featured <span className="g-text">Projects</span></h2>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:40 }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ padding:'8px 20px', borderRadius:999, fontSize:13, fontWeight:600, cursor:'pointer', border:'none',
                transition:'all .2s',
                background: filter === f ? 'linear-gradient(135deg,#6366F1,#8B5CF6)' : 'rgba(255,255,255,0.04)',
                color: filter === f ? '#fff' : '#94A3B8',
                boxShadow: filter === f ? '0 0 20px rgba(99,102,241,0.3)' : 'none',
              }}
              onMouseEnter={e=>{ if(filter!==f) (e.currentTarget as HTMLButtonElement).style.color='#fff'; }}
              onMouseLeave={e=>{ if(filter!==f) (e.currentTarget as HTMLButtonElement).style.color='#94A3B8'; }}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }} id="proj-grid">
          <AnimatePresence mode="popLayout">
            {shown.map(p => <Card key={p.id} p={p} onClick={() => setModal(p)}/>)}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {modal && <Modal p={modal} onClose={() => setModal(null)}/>}
      </AnimatePresence>

      <style>{`
        @media (max-width:900px)  { #proj-grid { grid-template-columns:repeat(2,1fr) !important; } }
        @media (max-width:580px)  { #proj-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}

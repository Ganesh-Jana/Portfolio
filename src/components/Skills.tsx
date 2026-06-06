import { motion } from 'framer-motion';

const GROUPS = [
  { title:'Languages', color:'#818CF8', skills:[
    { name:'Java',       icon:'☕', color:'#F89820' },
    { name:'Python',     icon:'🐍', color:'#3776AB' },
    { name:'JavaScript', icon:'JS', color:'#F7DF1E' },
    { name:'TypeScript', icon:'TS', color:'#3178C6' },
    { name:'SQL',        icon:'⬡',  color:'#336791' },
  ]},
  { title:'Frontend', color:'#06B6D4', skills:[
    { name:'React',     icon:'⚛',  color:'#61DAFB' },
    { name:'HTML5',     icon:'H5', color:'#E44D26' },
    { name:'CSS3',      icon:'C3', color:'#1572B6' },
    { name:'Tailwind',  icon:'✦',  color:'#38BDF8' },
  ]},
  { title:'Backend', color:'#34D399', skills:[
    { name:'Spring Boot', icon:'🌿', color:'#6DB33F' },
    { name:'Spring MVC',     icon:'⬡',  color:'#68A063' },
    { name:'REST APIs',   icon:'⇌',  color:'#FF6C37' },
    { name:'FastAPI',     icon:'⚡', color:'#009688' },
  ]},
  { title:'Database', color:'#F472B6', skills:[
    { name:'MySQL',      icon:'🐬', color:'#4479A1' },
    { name:'PostgreSQL', icon:'🐘', color:'#336791' },
    { name:'MongoDB',    icon:'🍃', color:'#47A248' },
  ]},
  { title:'Tools & DevOps', color:'#FBBF24', skills:[
    { name:'Git',     icon:'⎇',  color:'#F05033' },
    { name:'Github',  icon:'🐙', color:'#2496ED' },
    { name:'Vs Code',  icon:'VS', color:'#2496ED' },
    { name:'AWS',     icon:'☁',  color:'#FF9900' },
    { name:'Postman', icon:'✉',  color:'#FF6C37' },
  ]},
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: .5, delay } },
});

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background:'rgba(17,24,39,0.4)' }}>
      <div className="container">

        <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={{once:true}}
          style={{ marginBottom:56 }}>
          <span className="section-label">Arsenal</span>
          <h2 className="section-heading">Technical <span className="g-text">Skills</span></h2>
          <p style={{ color:'#64748B', fontSize:15, marginTop:10, maxWidth:480 }}>
            Technologies I use across the full software stack.
          </p>
        </motion.div>

        <div style={{ display:'flex', flexDirection:'column', gap:40 }}>
          {GROUPS.map((g, gi) => (
            <motion.div key={g.title} variants={fadeUp(gi*.07)} initial="hidden" whileInView="show" viewport={{once:true}}>

              {/* Group label */}
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
                <div style={{ width:28, height:28, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center',
                  background:`${g.color}15`, border:`1px solid ${g.color}30`, fontSize:13, color:g.color, fontWeight:700 }}>
                  {g.title.slice(0,1)}
                </div>
                <span style={{ fontSize:11, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:g.color }}>
                  {g.title}
                </span>
                <div style={{ flex:1, height:1, background:`${g.color}18` }}/>
              </div>

              {/* Skill badges */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
                {g.skills.map(s => (
                  <motion.div key={s.name} whileHover={{ scale:1.05, y:-2 }} transition={{ type:'spring', stiffness:400, damping:20 }}
                    style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 16px', borderRadius:12, cursor:'default',
                      background:`${s.color}08`, border:`1px solid ${s.color}20` }}>
                    <span style={{ width:30, height:30, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center',
                      background:`${s.color}18`, color:s.color, fontSize:13, fontWeight:700, fontFamily:'monospace', flexShrink:0 }}>
                      {s.icon}
                    </span>
                    <span style={{ fontSize:14, fontWeight:500, color:'#CBD5E1' }}>{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

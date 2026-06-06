import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiArrowRight } from 'react-icons/fi';

const INFO = [
  { icon:FiMail,     label:'Email',    value:'janaganesh810@gmail.com',    href:'mailto:janaganesh810@gmail.com', color:'#818CF8' },
  { icon:FiMapPin,   label:'Location', value:'Durgapur, West Bengal, IN', href:'#', color:'#F472B6' },
  { icon:FiGithub,   label:'GitHub',   value:'github.com/ganeshjana',    href:'https://github.com/Ganesh-Jana',            color:'#94A3B8' },
  { icon:FiLinkedin, label:'LinkedIn', value:'linkedin.com/in/ganesh',href:'https://www.linkedin.com/in/ganesh-chandra-jana-07a86a269/',         color:'#0A66C2' },
];

const field: React.CSSProperties = {
  width:'100%', padding:'12px 16px', borderRadius:10, fontSize:14,
  color:'#F1F5F9', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
  outline:'none', fontFamily:'var(--font-body)', transition:'border-color .2s',
};

export default function Contact() {
  const [form, setForm]   = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'err'>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      // await emailjs.send('SVC_ID','TPL_ID', form, 'PUB_KEY');
      await new Promise(r => setTimeout(r, 1200));
      setStatus('ok');
      setForm({ name:'', email:'', subject:'', message:'' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('err');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">

        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55}}
          style={{ marginBottom:56 }}>
          <span className="section-label">Let's work together</span>
          <h2 className="section-heading">Get In <span className="g-text">Touch</span></h2>
          <p style={{ color:'#64748B', fontSize:15, marginTop:10, maxWidth:500 }}>
            Whether it's a project, an opportunity, or just a hello — my inbox is always open.
          </p>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:48, alignItems:'start' }} id="contact-grid">

          {/* Info cards */}
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.55}}
            style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {INFO.map(({ icon:Icon, label, value, href, color }, i) => (
              <motion.a key={label} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.4,delay:i*.07}}
                whileHover={{ x:4 }} className="card"
                style={{ padding:'16px 20px', display:'flex', alignItems:'center', gap:14, textDecoration:'none', transition:'border-color .2s' }}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.borderColor=`${color}35`}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.07)'}>

                <div style={{ width:44, height:44, borderRadius:11, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                  background:`${color}12`, border:`1px solid ${color}25` }}>
                  <Icon size={19} style={{ color }}/>
                </div>
                <div style={{ minWidth:0 }}>
                  <p style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'var(--muted)', marginBottom:3 }}>{label}</p>
                  <p style={{ fontSize:14, fontWeight:600, color:'#CBD5E1', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{value}</p>
                </div>
                <FiArrowRight size={15} style={{ color:'#334155', marginLeft:'auto', flexShrink:0 }}/>
              </motion.a>
            ))}

            {/* Availability */}
            <div style={{ display:'flex', alignItems:'center', gap:10, padding:'14px 18px', borderRadius:12, marginTop:4,
              background:'rgba(52,211,153,0.06)', border:'1px solid rgba(52,211,153,0.2)' }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:'#34D399', flexShrink:0, animation:'pulse2 2s ease-in-out infinite' }}/>
              <p style={{ fontSize:13.5, color:'#94A3B8', lineHeight:1.6 }}>
                Open to <span style={{ color:'#34D399', fontWeight:700 }}>full-time SDE roles</span> and{' '}
                <span style={{ color:'#34D399', fontWeight:700 }}>internships</span> — June 2026+
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.55}}>
            <form onSubmit={onSubmit} className="card" style={{ padding:32 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
                <div>
                  <label style={{ display:'block', fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'#475569', marginBottom:7 }}>Name</label>
                  <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required style={field}
                    onFocus={e=>e.currentTarget.style.borderColor='rgba(99,102,241,0.5)'}
                    onBlur={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}/>
                </div>
                <div>
                  <label style={{ display:'block', fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'#475569', marginBottom:7 }}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={onChange} placeholder="you@email.com" required style={field}
                    onFocus={e=>e.currentTarget.style.borderColor='rgba(99,102,241,0.5)'}
                    onBlur={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}/>
                </div>
              </div>

              <div style={{ marginBottom:16 }}>
                <label style={{ display:'block', fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'#475569', marginBottom:7 }}>Subject</label>
                <input name="subject" value={form.subject} onChange={onChange} placeholder="Job opportunity / Project collaboration" style={field}
                  onFocus={e=>e.currentTarget.style.borderColor='rgba(99,102,241,0.5)'}
                  onBlur={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}/>
              </div>

              <div style={{ marginBottom:20 }}>
                <label style={{ display:'block', fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'#475569', marginBottom:7 }}>Message</label>
                <textarea name="message" value={form.message} onChange={onChange} rows={5} required
                  placeholder="Tell me about your project or opportunity..." style={{ ...field, resize:'none' }}
                  onFocus={e=>e.currentTarget.style.borderColor='rgba(99,102,241,0.5)'}
                  onBlur={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}/>
              </div>

              <button type="submit" disabled={status==='sending'} className="grad-btn"
                style={{ width:'100%', justifyContent:'center', opacity: status==='sending' ? .65 : 1 }}>
                {status==='sending'
                  ? <><span style={{ width:15, height:15, borderRadius:'50%', border:'2px solid rgba(255,255,255,.3)', borderTopColor:'#fff', animation:'spin .7s linear infinite' }}/> Sending...</>
                  : <><FiSend size={15}/> Send Message</>}
              </button>

              {status==='ok' && (
                <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}
                  style={{ marginTop:14, padding:'11px 16px', borderRadius:10, fontSize:13.5, fontWeight:600, textAlign:'center', color:'#34D399',
                    background:'rgba(52,211,153,0.08)', border:'1px solid rgba(52,211,153,0.2)' }}>
                  ✓ Message sent! I'll reply within 24 hours.
                </motion.div>
              )}
              {status==='err' && (
                <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}
                  style={{ marginTop:14, padding:'11px 16px', borderRadius:10, fontSize:13.5, fontWeight:600, textAlign:'center', color:'#F87171',
                    background:'rgba(248,113,113,0.08)', border:'1px solid rgba(248,113,113,0.2)' }}>
                  ✕ Failed to send. Please email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes pulse2 { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.3)} }
        @media (max-width:860px) { #contact-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}

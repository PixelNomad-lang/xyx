import React from 'react'

function Cta() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-emerald-900 text-white py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
    {/* Left Side - Gardening CTA */}
    <div className="relative z-10 space-y-6">
      <h3 className="text-4xl font-bold leading-tight">
        Transform Your Space
        <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent block mt-2">
          Today!
        </span>
      </h3>
      
      <form className="space-y-6">
        <div className="relative group">
          <input 
            type="tel" 
            placeholder="Enter your phone number" 
            className="w-full p-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm
            placeholder:text-white/60 focus:border-amber-400 focus:ring-2 focus:ring-amber-300
            transition-all duration-300 pr-24"
          />
          <button 
            className="absolute right-2 top-2 bg-gradient-to-r from-amber-400 to-yellow-500 
            px-6 py-2.5 rounded-lg font-semibold text-gray-900 hover:scale-105 transition-transform
            shadow-lg hover:shadow-xl"
          >
            Get Free Quote
          </button>
        </div>
        
        <div className="flex items-center gap-4 text-sm opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-2.12-2.12a.996.996 0 10-1.41 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l5.66-5.66a.996.996 0 00-1.41-1.41z"/>
          </svg>
          <p>100% Satisfaction Guaranteed • Licensed Professionals</p>
        </div>
      </form>
    </div>

    {/* Right Side - Service USPs */}
    <div className="space-y-8 relative z-10">
      <h4 className="text-2xl font-bold bg-gradient-to-r from-lime-200 to-emerald-300 bg-clip-text text-transparent">
        Our Green Promise
      </h4>
      
      <ul className="grid gap-6">
        {[
          { 
            title: 'Eco-Friendly Solutions',
            icon: '🌿',
            desc: 'Chemical-free cleaning & organic gardening'
          },
          { 
            title: 'Trained Experts',
            icon: '👩🌾',
            desc: 'Certified gardeners & cleaning specialists'
          },
          { 
            title: 'Custom Designs',
            icon: '🎨',
            desc: 'Personalized home decoration plans'
          },
          { 
            title: 'Flexible Scheduling',
            icon: '⏰',
            desc: '24/7 booking with same-day service'
          }
        ].map((usp) => (
          <li 
            key={usp.title}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm
            border border-white/10 hover:bg-white/10 transition-all group"
          >
            <span className="text-3xl p-3 bg-white/10 rounded-lg group-hover:bg-amber-400 group-hover:text-gray-900 transition-colors">
              {usp.icon}
            </span>
            <div>
              <h5 className="text-lg font-semibold mb-1">{usp.title}</h5>
              <p className="text-sm opacity-80">{usp.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Decorative Gardening Elements */}
  <div className="absolute inset-0 z-0 opacity-15 mix-blend-overlay" 
       style={{background: "radial-gradient(circle at 90% 10%, #fff, transparent 60%)"}}>
  </div>
  
  <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
  <div className="absolute top-1/3 -right-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-2xl"></div>
  
  {/* Leaf Pattern */}
  <div className="absolute bottom-0 left-0 opacity-10 mix-blend-screen">
    <svg width="400" height="400" viewBox="0 0 512 512" className="text-emerald-300">
      <path fill="currentColor" d="M416 456.88V96c0-35.29-28.71-64-64-64s-64 28.71-64 64v48H96c-35.29 0-64 28.71-64 64v176.88c0 43.86 35.63 79.12 80 79.12h320c44.37 0 80-35.26 80-79.12zM240 96c0-17.64 14.36-32 32-32s32 14.36 32 32v64h-64V96zm160 360c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z"/>
    </svg>
  </div>
</section>
    </div>
  )
}

export default Cta

// App.jsx
import { Map, MessageCircleQuestion, ShoppingCart, User } from 'lucide-react';
import   { motion , AnimatePresence } from 'framer-motion';
import Header from './Components/ServicesSetion';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Header */}
      <header className="relative bg-gradient-to-br from-green-400 to-green-900 shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    {/* Circular Logo with Yellow Background */}
    <div className="relative group">
      <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center 
        transition-all duration-300 hover:scale-110 hover:shadow-lg">
        <img 
          src="/logo.jpg" 
          alt="Logo" 
          className="h-10 w-10 object-contain p-1.5 transform group-hover:rotate-12 transition-transform"
        />
      </div>
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs font-bold px-2 rounded-full 
        opacity-0 group-hover:opacity-100 transition-opacity">
        Home
      </span>
    </div>

    {/* Animated Navigation */}
    <nav className="flex gap-8">
      {['Home', 'Services', 'Shop', 'Contact'].map((item) => (
        <a 
          key={item} 
          className="text-gray-600 hover:text-yellow-400 relative group transition-colors"
        >
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all 
            group-hover:w-full"></span>
        </a>
      ))}
    </nav>
    
    {/* Interactive Icons */}
    <div className="flex gap-6">
      <User className="h-8 w-8 p-1.5 rounded-full hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer transition-colors" />
      <div className="relative">
        <ShoppingCart className="h-8 w-8 p-1.5 rounded-full hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer transition-colors" />
        <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs w-5 h-5 flex items-center 
          justify-center rounded-full">3</span>
      </div>
    </div>
  </div>
</header>

      {/* 2. Categories + Promo Section */}
      < Header />

      {/* 3. CTA + USP Section */}
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
      {/* 4. Booking Section */}
<section className="bg-gradient-to-r from-green-500 to-green-700 py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 text-center relative">
    {/* Floating Elements */}
    <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20 mix-blend-overlay">
      <div className="absolute -top-16 left-1/4 animate-float">
        <span className="text-6xl">🌿</span>
      </div>
      <div className="absolute -top-8 right-1/3 animate-float-delayed">
        <span className="text-5xl">🧹</span>
      </div>
    </div>

    <div className="relative z-10 space-y-8">
      <h3 className="text-4xl font-bold text-white mb-6">
        Ready to Transform Your Space?
        <span className="block mt-4 text-2xl font-medium text-white/90">
          Gardening • Cleaning • Decoration
        </span>
      </h3>
      
      <button 
        className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-12 py-5 rounded-full 
        text-xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 
        flex items-center justify-center gap-3 mx-auto"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z"/>
        </svg>
        Book Now - Get 20% Off First Service!
      </button>

      <div className="flex items-center justify-center gap-4 text-white/80">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✅</span>
          <span>Certified Professionals</span>
        </div>
        <div className="h-4 w-px bg-white/30"></div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">⏰</span>
          <span>Same-Day Service</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 5. Why Choose Our Services */}
<section className="bg-gradient-to-b from-green-500 to-green-1000 py-24">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
    {[
      { 
        title: 'Expert Gardeners',
        icon: '🌿',
        desc: 'Certified professionals with 5+ years experience',
        color: 'from-green-300 to-green-500'
      },
      { 
        title: 'Eco-Friendly Cleaning',
        icon: '🧼',
        desc: 'Chemical-free solutions for safe environment',
        color: 'from-emerald-300 to-emerald-600'
      },
      { 
        title: 'Same-Day Service',
        icon: '⏰',
        desc: 'Book by 12 PM, get service the same day',
        color: 'from-lime-300 to-lime-600'
      },
      { 
        title: 'Carpet Revival',
        icon: '🧹',
        desc: 'Deep cleaning with stain removal guarantee',
        color: 'from-teal-300 to-teal-600'
      },
      { 
        title: 'Home Decoration',
        icon: '🎨',
        desc: 'Complete interior design solutions',
        color: 'from-amber-300 to-amber-600'
      },
      { 
        title: 'Equipment Rental',
        icon: '🔧',
        desc: 'Professional tools available for DIY',
        color: 'from-yellow-300 to-yellow-600'
      }
    ].map((service) => (
      <div 
        key={service.title}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow
        group relative overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 -z-1`} />
        
        <div className="flex flex-col items-center">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} 
            flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
            <span className="text-white">{service.icon}</span>
          </div>
          
          <h4 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h4>
          <p className="text-gray-600 text-center leading-relaxed">{service.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
      {/* 6. Testimonials */}
      {/* 6. Testimonials Carousel */}
<section className="bg-gradient-to-b from-green-200 to-green-1000 py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16 text-green-800">
      What Our Customers Say
    </h2>

    <div className="relative group">
      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 shadow-lg hover:bg-green-100 transition-colors">
        ←
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 shadow-lg hover:bg-green-100 transition-colors">
        →
      </button>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-500">
        {[
          {
            name: "Sarah Johnson",
            role: "Homeowner",
            text: "Pokemon Services transformed our backyard into a paradise! Their gardeners are true artists 🌿",
            avatar: "👩🏼🌾"
          },
          {
            name: "Raj Patel",
            role: "Office Manager",
            text: "Best commercial cleaning service in town. Our carpets look brand new!",
            avatar: "👨🏽💼"
          },
          {
            name: "Emily Chen",
            role: "Busy Mom",
            text: "Saved me during spring cleaning - efficient and eco-friendly solutions 🧼",
            avatar: "👩🏼👧🏼"
          },
          {
            name: "Mike O'Connor",
            role: "Event Planner",
            text: "Reliable last-minute cleanup before our big events. Lifesavers!",
            avatar: "🎪"
          },
          {
            name: "Linda & Tom",
            role: "Retired Couple",
            text: "Weekly gardening service keeps our yard perfect. Worth every penny!",
            avatar: "👵🏼👴🏼"
          },
          {
            name: "David Kim",
            role: "Real Estate Agent",
            text: "Magic touch in home staging - makes properties sell faster!",
            avatar: "🏡"
          }
        ].map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow
            border-l-4 border-green-400 relative"
          >
            <div className="text-4xl absolute -top-6 left-6 bg-white p-2 rounded-full">
              {testimonial.avatar}
            </div>
            <p className="text-gray-600 text-lg mb-6">"{testimonial.text}"</p>
            <div className="flex items-center gap-4 border-t pt-4">
              <div>
                <p className="font-bold text-green-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {[1,2,3,4,5,6].map((dot) => (
          <button 
            key={dot}
            className="w-3 h-3 rounded-full bg-green-200 hover:bg-green-400 transition-colors"
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* 7. Form + Map */}
      <section className="bg-gradient-to-b from-green-500 to-white py-24">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
    {/* Contact Form */}
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
      <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
        <span className="bg-green-100 p-3 rounded-xl">📧</span>
        Get a Free Quote
      </h3>
      
      <form className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-green-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border-2 border-green-100 rounded-xl focus:border-green-400"
            />
          </div>

          <div className="flex items-center gap-3 text-green-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-3 border-2 border-green-100 rounded-xl focus:border-green-400"
            />
          </div>

          <div className="flex items-start gap-3 text-green-700">
            <svg className="w-6 h-6 mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
            <textarea 
              placeholder="How can we help? (e.g., Lawn care, Deep cleaning)" 
              className="w-full p-3 border-2 border-green-100 rounded-xl focus:border-green-400 h-32"
            />
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-4 rounded-xl
          font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
          Send Request
        </button>
      </form>
    </div>

    {/* Map Section */}
    <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-green-100">
      <div className="absolute inset-0 bg-gradient-to-b from-green-100/20 to-green-50/30 z-0"/>
      
      <div className="relative z-10 p-4 bg-green-600 flex items-center gap-2">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <span className="text-white font-medium">Our Toronto Office</span>
      </div>
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.8088292223!2d-79.51840250000001!3d43.7181557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1716643857115!5m2!1sen!2sin"
        className="w-full h-96"
        allowFullScreen
        loading="lazy"
      />

      {/* Service Icons Around Map */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        <span className="bg-white p-2 rounded-lg shadow-sm">🌿</span>
        <span className="bg-white p-2 rounded-lg shadow-sm">🧹</span>
        <span className="bg-green-200 p-2 rounded-lg shadow-sm">🚜</span>
      </div>
    </div>
  </div>
</section>

      {/* 8. FAQ */}
      <section className="bg-green-400 py-24">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-green-800">
      Frequently Asked Questions
      <span className="block mt-2 text-lg font-normal text-green-600">Your Cleaning & Gardening Queries Solved</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          question: "How quickly can you start a cleaning project?",
          answer: "Emergency services available within 24 hours. Regular bookings typically scheduled within 2-3 business days.",
          icon: "🚿"
        },
        {
          question: "Do you use eco-friendly cleaning products?",
          answer: "Yes! We're GreenPro certified - 100% biodegradable solutions safe for kids and pets.",
          icon: "🌿"
        },
        {
          question: "Can you handle large gardening projects?",
          answer: "Absolutely! Our teams handle everything from balcony gardens to acre-sized landscapes.",
          icon: "🌳"
        },
        {
          question: "What's included in window cleaning?",
          answer: "Interior/exterior glass, frames, tracks, and screen cleaning. High-rise services available.",
          icon: "🪟"
        },
        {
          question: "How do pipe cleaning services work?",
          answer: "Non-invasive hydro-jetting technology removes 99% of blockages without damaging pipes.",
          icon: "🚰"
        },
        {
          question: "Are your teams insured and certified?",
          answer: "All technicians are bonded, insured, and undergo rigorous training in safety protocols.",
          icon: "🛡️"
        }
      ].map((faq, index) => (
        <div 
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow
          border-l-4 border-green-200 hover:border-green-400 group"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl p-2 bg-green-100 rounded-lg">{faq.icon}</span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-green-900 mb-2">{faq.question}</h3>
              <p className="text-green-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Support CTA */}
    <div className="mt-12 text-center bg-green-500 p-6 rounded-xl">
      <p className="text-green-800 mb-4">
        Still have questions? Chat with our Green Team 24/7 🌱
      </p>
      <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          Live Chat Support
        </span>
      </button>
    </div>
  </div>
</section>

      {/* 9. Footer */}
      <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white pt-20 pb-12">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 relative">
    
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-green-400/20 to-transparent"></div>
    <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-400/10 rounded-full blur-xl"></div>

    {/* Services Column */}
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🌿</span>
        <h3 className="text-2xl font-bold">Pokemon Services</h3>
      </div>
      <p className="text-green-200 text-sm leading-relaxed">
        Transforming spaces since 2015 with eco-friendly solutions for home and garden.
      </p>
      <div className="flex gap-4">
        {['🌎', '🍃', '🏆'].map((icon, i) => (
          <span key={i} className="p-2 bg-green-800/30 rounded-lg text-xl">{icon}</span>
        ))}
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-6 border-l-4 border-green-400 pl-3">Our Services</h4>
      <ul className="space-y-3">
        {['Deep Cleaning', 'Garden Makeover', 'Pipe Maintenance', 'Window Care', 'Eco Disinfection'].map((service) => (
          <li key={service}>
            <a href="#" className="flex items-center gap-2 hover:text-green-300 transition-colors">
              <span className="text-green-400">→</span>
              {service}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-lg font-semibold mb-6 border-l-4 border-green-400 pl-3">Contact Us</h4>
      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span>123 Green Street<br/>Toronto, Canada</span>
        </li>
        <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span>+1 (800) 123-4567</span>
        </li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h4 className="text-lg font-semibold mb-6 border-l-4 border-green-400 pl-3">Green Tips</h4>
      <form className="space-y-4">
        <input 
          type="email" 
          placeholder="Get eco-tips via email"
          className="w-full p-3 bg-green-800/30 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button className="w-full bg-gradient-to-r from-green-400 to-green-600 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
          Subscribe
        </button>
      </form>
    </div>

    {/* Bottom Bar */}
    <div className="md:col-span-4 mt-12 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center gap-4 text-green-400">
      <div className="flex gap-6">
        <a href="#" className="hover:text-green-300">Privacy Policy</a>
        <a href="#" className="hover:text-green-300">Terms of Service</a>
      </div>
      <div className="flex gap-4">
        {['🐦', '📘', '📸', '🎥'].map((icon, i) => (
          <button key={i} className="p-2 hover:bg-green-800/30 rounded-lg transition-colors">
            {icon}
          </button>
        ))}
      </div>
      <p className="text-center md:text-right">
        © 2024 Pokemon Services<br/>
        Nurturing Nature's Beauty
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}
import { useEffect, useState } from 'react';

const ServicesSection = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev % 5) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 bg-green-500">
      {/* Services Grid - Updated */}
      <div className="bg-green-600 p-8 rounded-2xl shadow-lg border border-gray-200 h-[600px] flex flex-col">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Premium Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-grow">
          {[
            { name: 'Power Cleaning', icon: '⚡', desc: 'Industrial-grade deep cleaning' },
            { name: 'Eco Cleaning', icon: '🌿', desc: 'Eco-friendly solutions' },
            { name: 'Luxury Care', icon: '✨', desc: 'Premium surface treatment' },
            { name: 'Carpet Revival', icon: '🧼', desc: 'Stain removal experts' },
            { name: 'Window Magic', icon: '🪟', desc: 'Streak-free shine' },
            { name: '24/7 Emergency', icon: '🚨', desc: 'Instant response team' }
          ].map((service) => (
            <div 
              key={service.name}
              className="p-4 rounded-xl border-2 border-gray-100 hover:border-yellow-400 
              transition-all bg-white flex flex-col items-center justify-center
              hover:shadow-md group"
            >
              <div className="text-4xl mb-3 group-hover:text-yellow-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-center">{service.name}</h3>
              <p className="text-sm text-gray-600 mt-2 text-center">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Image Carousel - Updated */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg h-[600px]">
        <img 
          src={`/img${currentImage}.jpeg`} 
          alt="Promo" 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        />
        
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-3">Evolutionary Cleaning Solutions</h3>
            <p className="text-lg opacity-90">Transforming spaces since 2010</p>
          </div>
        </div>

        {/* USP Badges */}
        <div className="absolute top-6 right-6 flex flex-col gap-3">
          {['Eco-Certified', '5-Star Rated', 'Award Winning'].map((badge) => (
            <span 
              key={badge}
              className="px-4 py-2 rounded-full bg-yellow-400/90 backdrop-blur-sm 
              text-sm font-bold text-gray-900 shadow-lg transform hover:scale-105 transition-transform"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-6 left-6 flex gap-2">
          {[1,2,3,4,5].map((num) => (
            <button 
              key={num}
              className={`w-3 h-3 rounded-full transition-colors ${currentImage === num ? 'bg-yellow-400' : 'bg-white/80'}`}
              onClick={() => setCurrentImage(num)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
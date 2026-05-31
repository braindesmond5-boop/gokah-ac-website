"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Shield, Clock, ThumbsUp, Wrench, Snowflake, CheckCircle, MapPin, Phone, Mail, Send, Star, MessageCircle, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const waNumber = "233243752653";
    const text = `Hi Gokah AC, I am inquiring about *${service}*.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A%0A*Additional Details:*%0A${message}`;

    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");

    setStatus("Redirecting to WhatsApp...");
    setTimeout(() => setStatus(""), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2461 50%, #0056b3 100%)" }}>
        {/* Glowing orb accents */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] rounded-full blur-[100px]" style={{ background: "rgba(0, 200, 255, 0.12)" }}></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] rounded-full blur-[120px]" style={{ background: "rgba(0, 150, 255, 0.15)" }}></div>
          <div className="absolute top-[30%] right-[15%] w-[25%] h-[25%] rounded-full blur-[80px]" style={{ background: "rgba(100, 220, 255, 0.08)" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full text-sm font-semibold mb-8 tracking-wide uppercase" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <Snowflake size={16} className="text-cyan-300" />
              Ghana&apos;s Trusted AC Experts
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight max-w-5xl mx-auto tracking-tight text-white">
              Stay Cool With{" "}
              <span style={{ background: "linear-gradient(90deg, #67e8f9, #bfdbfe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Premium
              </span>{" "}
              Air Conditioning
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed" style={{ color: "rgba(191, 219, 254, 0.85)" }}>
              Professional AC sales, installation, repair, and maintenance in Accra. Fast, affordable, and highly trusted cooling solutions for your home and business.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+23327786878" className="inline-flex items-center justify-center h-14 px-8 rounded-xl font-semibold text-lg shadow-xl transition-all w-full sm:w-auto" style={{ background: "#ffffff", color: "#0056b3" }}>
              <Phone className="mr-2" size={22} /> Call Now
            </a>
            <a href="https://wa.me/233243752653" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-14 px-8 rounded-xl font-semibold text-lg text-white shadow-xl transition-all w-full sm:w-auto" style={{ background: "#25D366" }}>
              <MessageCircle className="mr-2" size={22} /> WhatsApp Us
            </a>
          </FadeIn>

          <FadeIn direction="up" delay={0.5} className="mt-16 pt-10 flex flex-wrap justify-center gap-8 md:gap-16" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(147, 197, 253, 0.8)" }}>
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-cyan-400" />
              <span className="font-medium">Certified Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-cyan-400" />
              <span className="font-medium">Fast Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={20} className="text-cyan-400" />
              <span className="font-medium">10+ Years Experience</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <FadeIn>
            <h2 className="text-primary font-bold tracking-wide uppercase mb-2">About Us</h2>
            <h3 className="text-3xl font-bold text-foreground mb-6">Your Neighborhood AC Specialists</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              No.1 Gokah Refrigeration and Air Conditioning is a dedicated local business located on Agbogba Ashongman Road, Accra. We pride ourselves on delivering honest, high-quality, and prompt AC services to our community. With over 10 years of hands-on experience, our certified technicians are equipped to handle any brand or AC issue you might face.
            </p>
            <div className="inline-flex items-center justify-center gap-2 bg-blue-50 text-primary px-6 py-3 rounded-full font-semibold">
              <MapPin size={20} /> Serving Accra and Surrounding Areas
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-16 bg-surface scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-gray-600">Everything you need to stay cool and comfortable.</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "AC Sales", icon: <ShoppingCart className="w-10 h-10 text-primary" />, desc: "Top-quality new air conditioning units from trusted brands for your home or business." },
              { title: "AC Installation", icon: <Snowflake className="w-10 h-10 text-primary" />, desc: "Expert, clean, and safe installation of new split and window air conditioning units." },
              { title: "AC Repairs", icon: <Wrench className="w-10 h-10 text-primary" />, desc: "Fast diagnostics and reliable fixes for leaking water, no cooling, or strange noises." },
              { title: "Maintenance & Servicing", icon: <Shield className="w-10 h-10 text-primary" />, desc: "Thorough cleaning, gas top-ups, and tune-ups to extend the life of your AC." }
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-full bg-blue-50 mx-auto flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Gokah AC?</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Experienced Techs", icon: <CheckCircle className="text-secondary w-6 h-6" /> },
              { title: "Fast Response", icon: <Clock className="text-secondary w-6 h-6" /> },
              { title: "Affordable Pricing", icon: <ThumbsUp className="text-secondary w-6 h-6" /> },
              { title: "Quality Service", icon: <Shield className="text-secondary w-6 h-6" /> }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="flex items-center justify-center gap-3 bg-surface p-4 rounded-xl border border-gray-100">
                {item.icon}
                <span className="font-semibold text-gray-800">{item.title}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Gallery Section */}
      <section id="gallery" className="py-16 bg-surface scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground mb-4">Recent Work</h2>
              <p className="text-gray-600">A glimpse into our daily installations and repairs.</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              "/images/lg-showroom.jpg",
              "/images/daikin-showroom.jpg",
              "/images/sunny-outdoor.jpg",
              "/images/toshiba-showroom.jpg",
              "/images/gokah-technician.jpg"
            ].map((src, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="relative h-64 rounded-xl overflow-hidden shadow-sm">
                <Image src={src} alt="AC Work Gallery" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground mb-4">Customer Reviews</h2>
              <p className="text-gray-600">See what our local neighbors have to say.</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Kwame Mensah", text: "Very prompt and professional. Fixed my leaking AC in under an hour at a very reasonable price." },
              { name: "Abena Osei", text: "Excellent installation service. The team was clean, polite, and made sure everything worked perfectly before leaving." },
              { name: "Yaw Boateng", text: "I highly recommend Gokah AC. They do my regular maintenance and my AC always runs like it's brand new." }
            ].map((review, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-surface p-8 rounded-2xl border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <h4 className="font-bold">{review.name}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="py-16 bg-slate-900 text-white scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-slate-400">Call, WhatsApp, or message us to schedule your service.</p>
            </FadeIn>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 space-y-8">
              <FadeIn direction="right">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-slate-300">+233 27 786 878</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.1}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">WhatsApp</h4>
                    <p className="text-slate-300">+233 24 375 2653</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-slate-300">Agbogba Ashongman Road<br />Accra, Ghana</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.3}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-slate-300">info@breezecool.com</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="md:w-1/2">
              <FadeIn direction="left" className="bg-white rounded-xl p-8 text-foreground shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input name="name" type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input name="phone" type="tel" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Your Phone Number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select name="service" required defaultValue="" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none bg-white text-gray-700">
                      <option value="" disabled>Select a service...</option>
                      <option value="AC Sales">Selling of AC</option>
                      <option value="AC Installation">AC Installation</option>
                      <option value="AC Repair">AC Repair</option>
                      <option value="AC Maintenance">AC Maintenance</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea name="message" required rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="How can we help?"></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2" size={18} /> Send Message
                  </Button>
                  {status && (
                    <div className="p-3 bg-green-50 text-green-700 rounded-lg text-center text-sm font-medium mt-4">
                      {status}
                    </div>
                  )}
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

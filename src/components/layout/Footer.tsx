import Link from 'next/link';
import { Snowflake, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <Snowflake size={24} />
              </div>
              <span className="text-2xl font-bold text-white">
                Gokah<span className="text-primary">AC</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              No.1 Gokah Refrigeration and Air Conditioning — your trusted local AC experts on Agbogba Ashongman Road, Accra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span className="text-sm text-slate-400">Agbogba Ashongman Road<br />Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-sm text-slate-400">+233 27 786 878 (Calls)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-sm text-slate-400">+233 24 375 2653 (WhatsApp)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-sm text-slate-400">info@gokahac.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} No.1 Gokah Refrigeration and Air Conditioning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

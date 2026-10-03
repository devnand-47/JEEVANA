import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-jeevana-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-8 inline-block">
              <div className="relative h-14 w-56">
                <Image 
                  src="/logo.png" 
                  alt="Jeevana Builders" 
                  fill 
                  sizes="224px"
                  className="object-contain object-left brightness-0 invert opacity-90"
                />
              </div>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 text-balance">
              Creating the Future. Building spaces with purpose, precision and permanence in Kerala.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 tracking-wider">NAVIGATION</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-jeevana-lime transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-jeevana-lime transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-jeevana-lime transition-colors">Projects</Link></li>
              <li><Link href="/awards" className="hover:text-jeevana-lime transition-colors">Awards</Link></li>
              <li><Link href="/programmes" className="hover:text-jeevana-lime transition-colors">Programmes</Link></li>
              <li><Link href="/contact" className="hover:text-jeevana-lime transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 tracking-wider">CONTACT</h4>
            <address className="not-italic text-sm text-gray-400 space-y-4">
              <p>
                Ground Floor, Loonar Building,<br />
                Payyoli Road, Perambra – 673525,<br />
                Calicut, Kerala, India
              </p>
              <p className="flex flex-col space-y-1">
                <a href="tel:+919846086635" className="hover:text-jeevana-lime transition-colors">9846 086 635</a>
                <a href="tel:+919744465483" className="hover:text-jeevana-lime transition-colors">9744 465 483</a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jeevana Builders, Contractors & Designers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

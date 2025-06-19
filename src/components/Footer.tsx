import { MapPin, Phone, Mail, Clock, Tractor, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Lock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-agri-green text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Tractor className="h-10 w-10 text-agri-red" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div>
                <span className="text-2xl font-bold">VOF van Bladel</span>
                <div className="text-sm text-gray-300">Sinds 1983</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Al meer dan 40 jaar uw betrouwbare partner voor tractoren, landbouwmachines
              en professioneel onderhoud. Gevestigd in Herpt, werkend voor de hele regio.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-agri-red" />
                <span className="text-sm">Erkend dealer 12+ merken</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-agri-red" />
                <span className="text-sm">APK-keuring erkend</span>
              </div>
            </div>

            <p className="text-gray-300 font-semibold">
              Familiebedrijf met traditie en vakmanschap
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-agri-red">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-agri-red mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Bernsestraat 13</div>
                  <div className="text-gray-300">5253 AB Herpt</div>
                  <div className="text-gray-300">Nederland</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-agri-red" />
                <div>
                  <div className="font-semibold">Telefoon</div>
                  <div className="text-gray-300 text-sm">Nummer beschikbaar via contact</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-agri-red" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300 text-sm">info@vofvanbladel.nl</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-agri-red">Informatie</h3>

            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="h-5 w-5 text-agri-red" />
                <span className="font-semibold">Openingstijden</span>
              </div>
              <div className="text-gray-300 text-sm space-y-1 ml-8">
                <div>Ma-Vr: 7:30 - 17:00</div>
                <div>Zaterdag: Op afspraak</div>
                <div>Zondag: Gesloten</div>
                <div className="text-agri-red font-semibold mt-2">Spoed: 24/7 bereikbaar</div>
              </div>
            </div>

            <div className="space-y-2">
              <Link to="/diensten" className="block text-gray-300 hover:text-white transition-colors duration-200">
                → Onze diensten
              </Link>
              <Link to="/merken" className="block text-gray-300 hover:text-white transition-colors duration-200">
                → Erkende merken
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                → Contact opnemen
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-300">
                © 2024 VOF van Bladel. Alle rechten voorbehouden.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-sm text-gray-300">
              <span className="bg-agri-red px-3 py-1 rounded-full text-white font-semibold">Sinds 1983</span>
              <span>Erkend dealer</span>
              <span>APK-keuringen</span>
              <span>24/7 service</span>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/admin">
              <Button variant="secondary" size="sm" className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Administrator login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

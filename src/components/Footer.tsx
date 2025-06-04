
import { MapPin, Phone, Mail, Clock, Tractor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-agri-green text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Tractor className="h-8 w-8 text-agri-red" />
              <span className="text-xl font-bold">VOF van Bladel</span>
            </div>
            <p className="text-gray-300 mb-4">
              Sinds 1983 uw betrouwbare partner voor tractoren, landbouwmachines en onderhoud. 
              Gevestigd in Herpt, werkend voor de hele regio.
            </p>
            <p className="text-gray-300">
              Familiebedrijf met jarenlange ervaring in de agrarische sector.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-agri-red" />
                <span className="text-sm text-gray-300">Bernsestraat 13, Herpt</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-agri-red" />
                <span className="text-sm text-gray-300">Telefoon beschikbaar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-agri-red" />
                <span className="text-sm text-gray-300">info@vofvanbladel.nl</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Openingstijden</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-agri-red" />
                <span className="text-sm text-gray-300">Ma-Vr: 7:30-17:00</span>
              </div>
              <p className="text-sm text-gray-300">Za: Op afspraak</p>
              <p className="text-sm text-gray-300">Spoed: 24/7 bereikbaar</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2024 VOF van Bladel. Alle rechten voorbehouden.
            </p>
            <p className="text-sm text-gray-300 mt-2 md:mt-0">
              Sinds 1983 • Erkend dealer • APK-keuringen
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

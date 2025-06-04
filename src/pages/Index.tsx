
import { Wrench, Shield, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Index = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Reparatie & Onderhoud",
      description: "Professionele reparatie en onderhoud van tractoren, landbouwmachines en tuinmachines"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "APK-keuringen",
      description: "Erkende APK-keuringen voor auto's en bedrijfsvoertuigen"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Grondverzet",
      description: "Onderhoud en reparatie van grondverzetmachines"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Gebruikte Machines",
      description: "Verkoop van gebruikte tractoren en landbouwmachines via Marktplaats"
    }
  ];

  const brands = [
    "McCormick", "Zetor", "Fella", "Amazone", "Claas", "Saphir", 
    "Perfect", "Hekamp", "BVL", "Peecon", "Agromet", "Thailift"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-agri-green to-agri-brown text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            VOF van Bladel
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Sinds 1983 uw betrouwbare partner voor tractoren, landbouwmachines en professioneel onderhoud
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/diensten" 
              className="bg-agri-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Onze Diensten
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white hover:bg-white hover:text-agri-green text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Opnemen
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-agri-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-agri-green mb-6">
                Familiebedrijf sinds 1983
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                VOF van Bladel is een gerenommeerd familiebedrijf dat al meer dan 40 jaar actief is 
                in de regio Herpt. Sinds 1998 zijn we gevestigd aan de Bernsestraat 13, waar we 
                dagelijks werken aan het onderhouden en repareren van landbouwmachines.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Ons team van ervaren monteurs is gespecialiseerd in tractoren, landbouwmachines, 
                tuin- en parkmachines, grondverzet en auto's. We voeren ook APK-keuringen uit 
                en zijn erkend dealer van verschillende topmerken.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-agri-red">40+</div>
                  <div className="text-sm text-gray-600">Jaar ervaring</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-agri-red">12+</div>
                  <div className="text-sm text-gray-600">Erkende merken</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Tractor in het veld" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-agri-green mb-2">
                Betrouwbare service
              </h3>
              <p className="text-gray-600">
                Met onze jarenlange ervaring en moderne faciliteiten bieden we 
                betrouwbare service aan boeren, loonwerkers en agrarisch ondernemers 
                in de hele regio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agri-green mb-4">
              Onze Diensten
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Van reparatie tot onderhoud, wij bieden een compleet pakket aan diensten 
              voor al uw landbouwmachines en voertuigen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="text-agri-red mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-agri-green mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/diensten" 
              className="bg-agri-green hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Alle Diensten Bekijken
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agri-green mb-4">
              Erkend Dealer
            </h2>
            <p className="text-lg text-gray-600">
              Wij zijn officieel erkend dealer van verschillende topmerken in de landbouwsector
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow duration-200">
                <span className="text-agri-green font-semibold">{brand}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/merken" 
              className="bg-agri-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Alle Merken Bekijken
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-agri-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hulp nodig met uw machines?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor professioneel onderhoud, reparaties of APK-keuringen. 
            Bij spoed zijn wij 24/7 bereikbaar.
          </p>
          <Link 
            to="/contact" 
            className="bg-agri-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Direct Contact
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;


import { Wrench, Shield, Truck, Award, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Index = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Reparatie & Onderhoud",
      description: "Professionele reparatie en onderhoud van tractoren, landbouwmachines en tuinmachines",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "APK-keuringen",
      description: "Erkende APK-keuringen voor auto's en bedrijfsvoertuigen",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Grondverzet",
      description: "Onderhoud en reparatie van grondverzetmachines",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Gebruikte Machines",
      description: "Verkoop van gebruikte tractoren en landbouwmachines via Marktplaats",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const brands = [
    { name: "McCormick", featured: true },
    { name: "Zetor", featured: true },
    { name: "Claas", featured: true },
    { name: "Amazone", featured: true },
    { name: "Fella", featured: false },
    { name: "Saphir", featured: false },
    { name: "Perfect", featured: false },
    { name: "Hekamp", featured: false },
    { name: "BVL", featured: false },
    { name: "Peecon", featured: false },
    { name: "Agromet", featured: false },
    { name: "Thailift", featured: false }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-agri-green via-agri-brown to-agri-green min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Tractor in het veld" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-agri-green/80 via-agri-brown/60 to-agri-green/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              VOF van Bladel
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-medium">
              Uw specialist in tractoren en landbouwmachines
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
              Sinds 1983 bieden wij betrouwbare service en onderhoud voor alle merken tractoren, 
              landbouwmachines en bedrijfsvoertuigen in de regio Herpt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-agri-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Opnemen
              </Link>
              <Link 
                to="/diensten" 
                className="border-2 border-white hover:bg-white hover:text-agri-green text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Onze Diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-agri-red text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">24/7 Spoedservice beschikbaar</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bernsestraat 13, Herpt</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Ma-Vr: 7:30-17:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-agri-green mb-6">
              Onze Specialisaties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Met meer dan 40 jaar ervaring zijn wij uw betrouwbare partner voor 
              alles wat met landbouwmachines en tractoren te maken heeft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-agri-red bg-white p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-agri-green mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/diensten" 
              className="bg-agri-green hover:bg-green-800 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Alle Diensten Bekijken
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-agri-green mb-8">
                Familiebedrijf met traditie
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  VOF van Bladel is een gerenommeerd familiebedrijf dat al meer dan 40 jaar 
                  actief is in de landbouwsector. Sinds 1983 staan wij bekend om onze 
                  betrouwbare service en vakmanschap.
                </p>
                <p>
                  Vanaf onze vestiging aan de Bernsestraat 13 in Herpt bedienen wij 
                  boeren, loonwerkers en agrarische ondernemers in de hele regio met 
                  professioneel onderhoud en reparaties.
                </p>
                <p>
                  Als erkend dealer van meer dan 12 topmerken hebben wij directe toegang 
                  tot originele onderdelen en fabriekskennis voor optimale service.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-agri-red mb-2">40+</div>
                  <div className="text-sm text-gray-600 font-medium">Jaar ervaring</div>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-agri-red mb-2">12+</div>
                  <div className="text-sm text-gray-600 font-medium">Erkende merken</div>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-agri-red mb-2">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Service</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Werkplaats VOF van Bladel" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-agri-red text-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">Sinds 1983</div>
                <div className="text-sm">Betrouwbare partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-agri-green mb-6">
              Erkend Dealer van Topmerken
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij zijn officieel erkend dealer van de beste merken in de landbouwsector. 
              Dit betekent originele onderdelen, fabrieksgarantie en expert ondersteuning.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-agri-green text-center mb-8">Hoofdmerken</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {brands.filter(brand => brand.featured).map((brand, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2">
                  <h4 className="text-xl font-bold text-agri-green">{brand.name}</h4>
                  <div className="w-12 h-1 bg-agri-red mx-auto mt-3"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-agri-green text-center mb-6">Overige merken</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {brands.filter(brand => !brand.featured).map((brand, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center hover:border-agri-red transition-colors duration-300">
                  <span className="text-agri-green font-medium text-sm">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/merken" 
              className="bg-agri-red hover:bg-red-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Alle Merken & Specialisaties
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agri-green to-agri-brown text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Hulp nodig met uw machines?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Of het nu gaat om preventief onderhoud, spoedige reparaties of APK-keuringen - 
            ons ervaren team staat voor u klaar. Bij calamiteiten zijn wij 24/7 bereikbaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-agri-red hover:bg-red-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Direct Contact
            </Link>
            <a 
              href="tel:+" 
              className="border-2 border-white hover:bg-white hover:text-agri-green text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              24/7 Spoednummer
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

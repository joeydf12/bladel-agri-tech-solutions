
import { Award, CheckCircle, Truck, Users } from 'lucide-react';
import Layout from '../components/Layout';

const Merken = () => {
  const majorBrands = [
    {
      name: "McCormick",
      category: "Tractoren",
      description: "Officieel dealer van McCormick tractoren - betrouwbare machines voor elke agrarische toepassing",
      specialties: ["Tractoren", "Onderdelen", "Service", "Garantie"]
    },
    {
      name: "Zetor",
      category: "Tractoren", 
      description: "Erkend dealer van Zetor tractoren - robuuste en betaalbare landbouwmachines",
      specialties: ["Tractoren", "Onderdelen", "Reparaties", "Onderhoud"]
    },
    {
      name: "Claas",
      category: "Hooibouw",
      description: "Specialist in Claas hooibouwmachines - van maaimachines tot balenpers",
      specialties: ["Maaiers", "Schudders", "Balenpers", "Service"]
    },
    {
      name: "Amazone",
      category: "Grondbewerking",
      description: "Dealer van Amazone machines voor grondbewerking en zaaien",
      specialties: ["Ploegen", "Cultivators", "Zaaimachines", "Onderhoud"]
    }
  ];

  const allBrands = [
    { name: "McCormick", category: "Tractoren" },
    { name: "Zetor", category: "Tractoren" },
    { name: "Fella", category: "Hooibouw" },
    { name: "Amazone", category: "Grondbewerking" },
    { name: "Claas", category: "Hooibouw" },
    { name: "Saphir", category: "Machines" },
    { name: "Perfect", category: "Machines" },
    { name: "Hekamp", category: "Machines" },
    { name: "BVL", category: "Voermengwagens" },
    { name: "Peecon", category: "Machines" },
    { name: "Agromet", category: "Machines" },
    { name: "Thailift", category: "Heftrucks" },
    { name: "Thaler", category: "Mini-loaders" },
    { name: "Stiga", category: "Gazonmaaiers" },
    { name: "Farmtech", category: "Machines" }
  ];

  const services = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Officieel Dealer",
      description: "Erkend dealer met directe toegang tot originele onderdelen en fabrieksgarantie"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Gecertificeerde Service",
      description: "Onze monteurs zijn gecertificeerd voor alle merken die wij vertegenwoordigen"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Snelle Levering",
      description: "Directe toegang tot onderdelen zorgt voor snelle levering en reparaties"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Persoonlijk Contact",
      description: "Directe lijn met fabrikanten voor technische ondersteuning en advies"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-agri-green to-agri-brown text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Onze Merken
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Erkend dealer van topmerken in de landbouwsector. 
              Officiële service, originele onderdelen en fabrieksgarantie.
            </p>
          </div>
        </div>
      </section>

      {/* Major Brands Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agri-green mb-4">
              Hoofdmerken
            </h2>
            <p className="text-lg text-gray-600">
              Onze belangrijkste partnerships met toonaangevende fabrikanten
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {majorBrands.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-agri-green mb-2">
                      {brand.name}
                    </h3>
                    <span className="inline-block bg-agri-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {brand.category}
                    </span>
                  </div>
                  <Award className="h-8 w-8 text-agri-red" />
                </div>
                <p className="text-gray-600 mb-6">
                  {brand.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {brand.specialties.map((specialty, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white border border-agri-green text-agri-green px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Brands Grid */}
      <section className="py-16 bg-agri-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agri-green mb-4">
              Alle Merken
            </h2>
            <p className="text-lg text-gray-600">
              Volledige overzicht van alle merken waar wij officieel dealer van zijn
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {allBrands.map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition-shadow duration-200">
                <h3 className="font-bold text-agri-green text-lg mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {brand.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agri-green mb-4">
              Waarom Erkend Dealer?
            </h2>
            <p className="text-lg text-gray-600">
              De voordelen van samenwerken met een officieel erkende dealer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors duration-200">
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
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Landbouwmachines" 
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-agri-green mb-6">
                Kwaliteit en Betrouwbaarheid
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Als erkend dealer hebben we directe toegang tot technische ondersteuning, 
                originele onderdelen en de nieuwste software-updates van alle fabrikanten.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Dit betekent voor u snellere service, betrouwbare reparaties en de zekerheid 
                van fabrieksgarantie op alle werkzaamheden.
              </p>
              <div className="bg-agri-green text-white p-4 rounded-lg">
                <p className="font-semibold">
                  "Al meer dan 40 jaar vertrouwen fabrikanten op onze expertise en service."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-agri-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interesse in één van onze merken?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor meer informatie over onze merken, 
            nieuwe machines of service voor uw bestaande machines.
          </p>
          <a 
            href="/contact" 
            className="bg-agri-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Opnemen
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Merken;

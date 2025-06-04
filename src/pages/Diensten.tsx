
import { Wrench, Shield, Truck, Settings, Users, Clock } from 'lucide-react';
import Layout from '../components/Layout';

const Diensten = () => {
  const mainServices = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Tractoren",
      description: "Professionele reparatie en onderhoud van alle tractormerken",
      details: [
        "Motoronderhoud en reparaties",
        "Transmissie en koppeling",
        "Hydraulische systemen",
        "Elektrische systemen",
        "Preventief onderhoud"
      ]
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Landbouwmachines",
      description: "Onderhoud en reparatie van alle landbouwmachines",
      details: [
        "Maaidorsers en combines",
        "Ploegen en cultivators",
        "Zaaimachines",
        "Spuitmachines",
        "Hooibouwmachines"
      ]
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Tuin- & Parkmachines",
      description: "Service voor tuin- en parkmachines van alle merken",
      details: [
        "Grasmaaiers en zitmaaiers",
        "Heggenscharen",
        "Bladblazers",
        "Motorsagen",
        "Tuinfrees machines"
      ]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "APK-keuringen",
      description: "Erkende APK-keuringen voor personenauto's en bedrijfsvoertuigen",
      details: [
        "Personenauto's",
        "Bedrijfsvoertuigen",
        "Aanhangwagens",
        "Snelle service",
        "Officieel erkend"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Verkoop Gebruikte Machines",
      description: "Gebruikte tractoren en landbouwmachines via Marktplaats"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Spoedservice",
      description: "Bij calamiteiten zijn wij altijd bereikbaar voor spoedgevallen"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Grondverzet",
      description: "Onderhoud en reparatie van grondverzetmachines"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-agri-green to-agri-brown text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Onze Diensten
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Compleet onderhoud en reparatie voor al uw landbouwmachines, 
              tractoren en voertuigen. Sinds 1983 uw betrouwbare partner.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agri-green mb-4">
              Hoofddiensten
            </h2>
            <p className="text-lg text-gray-600">
              Professionele service voor al uw machines en voertuigen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="text-agri-red flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-agri-green mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-agri-red rounded-full mr-3"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-agri-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agri-green mb-4">
              Aanvullende Diensten
            </h2>
            <p className="text-lg text-gray-600">
              Extra service voor al uw behoeften
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                <div className="text-agri-red mb-4">
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agri-green mb-4">
              Onze Werkwijze
            </h2>
            <p className="text-lg text-gray-600">
              Transparant proces van intake tot oplevering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-agri-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-agri-green mb-2">Contact</h3>
              <p className="text-gray-600">Neem contact op voor een afspraak of spoedgeval</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-agri-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-agri-green mb-2">Diagnose</h3>
              <p className="text-gray-600">Grondige inspectie en diagnose van het probleem</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-agri-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-agri-green mb-2">Offerte</h3>
              <p className="text-gray-600">Duidelijke offerte met transparante prijzen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-agri-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-agri-green mb-2">Uitvoering</h3>
              <p className="text-gray-600">Professionele reparatie met kwaliteitsonderdelen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-agri-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Service nodig?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor een afspraak of bij spoedgevallen. 
            Wij staan altijd voor u klaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-agri-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Opnemen
            </a>
            <a 
              href="tel:+" 
              className="border-2 border-white hover:bg-white hover:text-agri-green text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Direct Bellen
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Diensten;

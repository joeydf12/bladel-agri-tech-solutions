
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, MapPin, Wrench } from 'lucide-react';

const TractorenTeKoop = () => {
  const tractors = [
    {
      id: 1,
      title: "John Deere 6420",
      year: 2005,
      hours: 8500,
      price: "€ 35.000",
      location: "Herpt",
      description: "Zeer nette tractor met frontlader, airco en GPS",
      image: "/placeholder.svg",
      marktplaatsUrl: "https://www.marktplaats.nl"
    },
    {
      id: 2,
      title: "Case IH Puma 165",
      year: 2018,
      hours: 3200,
      price: "€ 89.500",
      location: "Herpt",
      description: "Top tractor met CVT transmissie en zeer weinig uren",
      image: "/placeholder.svg",
      marktplaatsUrl: "https://www.marktplaats.nl"
    },
    {
      id: 3,
      title: "New Holland T7.270",
      year: 2016,
      hours: 4800,
      price: "€ 75.000",
      location: "Herpt",
      description: "Krachtige tractor met PowerShift transmissie",
      image: "/placeholder.svg",
      marktplaatsUrl: "https://www.marktplaats.nl"
    },
    {
      id: 4,
      title: "Massey Ferguson 7720",
      year: 2020,
      hours: 2100,
      price: "€ 95.000",
      location: "Herpt",
      description: "Bijna nieuwe tractor met alle opties",
      image: "/placeholder.svg",
      marktplaatsUrl: "https://www.marktplaats.nl"
    },
    {
      id: 5,
      title: "Fendt 724 Vario",
      year: 2017,
      hours: 3800,
      price: "€ 82.000",
      location: "Herpt",
      description: "Premium tractor met VarioDrive transmissie",
      image: "/placeholder.svg",
      marktplaatsUrl: "https://www.marktplaats.nl"
    },
    {
      id: 6,
      title: "Deutz-Fahr 6140",
      year: 2019,
      hours: 2800,
      price: "€ 68.000",
      location: "Herpt",
      description: "Betrouwbare tractor met goede prestaties",
      image: "/placeholder.svg",
      marktplaatsUrl: "https://www.marktplaats.nl"
    }
  ];

  const handleTractorClick = (marktplaatsUrl: string) => {
    window.open(marktplaatsUrl, '_blank');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-agri-green to-agri-red text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Tractoren te koop
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Ontdek ons aanbod van kwaliteitstractoren. Alle tractoren zijn door ons gecontroleerd en voorzien van garantie.
              </p>
            </div>
          </div>
        </div>

        {/* Tractors Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tractors.map((tractor) => (
              <Card 
                key={tractor.id} 
                className="hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 bg-white border-2 border-gray-200 hover:border-agri-red"
                onClick={() => handleTractorClick(tractor.marktplaatsUrl)}
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={tractor.image} 
                      alt={tractor.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4 bg-agri-red text-white px-3 py-1 rounded-full font-bold">
                      {tractor.price}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-agri-green mb-3">
                    {tractor.title}
                  </CardTitle>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-agri-red" />
                      <span className="text-sm">Bouwjaar: {tractor.year}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Wrench className="h-4 w-4 mr-2 text-agri-red" />
                      <span className="text-sm">Draaiuren: {tractor.hours}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-agri-red" />
                      <span className="text-sm">Locatie: {tractor.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {tractor.description}
                  </p>

                  <Button 
                    className="w-full bg-agri-red hover:bg-agri-red/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTractorClick(tractor.marktplaatsUrl);
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Bekijk op Marktplaats
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-agri-green mb-6">
              Interesse in een van onze tractoren?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Neem contact met ons op voor meer informatie, een bezichtiging of proefrit.
              Al onze tractoren worden volledig gecontroleerd en voorzien van garantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-agri-red hover:bg-agri-red/90 text-white font-semibold"
              >
                Bel ons direct
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-agri-red text-agri-red hover:bg-agri-red hover:text-white"
              >
                Stuur een e-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TractorenTeKoop;

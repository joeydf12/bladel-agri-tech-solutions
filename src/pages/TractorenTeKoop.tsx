
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, MapPin, Wrench } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface Tractor {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  hours: number;
  price: number;
  location: string;
  description: string | null;
  image_url: string | null;
  marktplaats_url: string | null;
  is_featured: boolean;
  is_available: boolean;
}

const TractorenTeKoop = () => {
  const { data: tractors, isLoading, error } = useQuery({
    queryKey: ['tractors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tractors')
        .select('*')
        .eq('is_available', true)
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching tractors:', error);
        throw error;
      }
      
      return data as Tractor[];
    }
  });

  const handleTractorClick = (marktplaatsUrl: string | null) => {
    if (marktplaatsUrl) {
      window.open(marktplaatsUrl, '_blank');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-agri-green mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Tractoren laden...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-red-600 mb-4">Er is een fout opgetreden bij het laden van de tractoren.</p>
            <Button onClick={() => window.location.reload()}>
              Probeer opnieuw
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

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
          {tractors && tractors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tractors.map((tractor) => (
                <Card 
                  key={tractor.id} 
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 bg-white border-2 border-gray-200 hover:border-agri-red"
                  onClick={() => handleTractorClick(tractor.marktplaats_url)}
                >
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img 
                        src={tractor.image_url || '/placeholder.svg'} 
                        alt={tractor.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 right-4 bg-agri-red text-white px-3 py-1 rounded-full font-bold">
                        {formatPrice(tractor.price)}
                      </div>
                      {tractor.is_featured && (
                        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                          Uitgelicht
                        </div>
                      )}
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
                        <span className="text-sm">Draaiuren: {tractor.hours.toLocaleString('nl-NL')}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-agri-red" />
                        <span className="text-sm">Locatie: {tractor.location}</span>
                      </div>
                    </div>

                    {tractor.description && (
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                        {tractor.description}
                      </p>
                    )}

                    <Button 
                      className="w-full bg-agri-red hover:bg-agri-red/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTractorClick(tractor.marktplaats_url);
                      }}
                      disabled={!tractor.marktplaats_url}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Bekijk op Marktplaats
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">Momenteel geen tractoren beschikbaar.</p>
              <p className="text-gray-500">Kom binnenkort terug voor nieuwe aanbiedingen!</p>
            </div>
          )}
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

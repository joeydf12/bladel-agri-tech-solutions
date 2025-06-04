
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a backend
    alert('Bedankt voor uw bericht! Wij nemen zo spoedig mogelijk contact met u op.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-agri-green to-agri-brown text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Neem contact met ons op voor service, reparaties of vragen. 
              Wij staan altijd voor u klaar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-agri-green mb-8">
                Contactgegevens
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-agri-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-agri-green">Adres</h3>
                    <p className="text-gray-600">
                      Bernsestraat 13<br />
                      5253 AB Herpt<br />
                      Nederland
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-agri-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-agri-green">Telefoon</h3>
                    <p className="text-gray-600">
                      Algemeen: [Telefoonnummer]<br />
                      Spoed (24/7): [Spoednummer]
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-agri-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-agri-green">Email</h3>
                    <p className="text-gray-600">
                      info@vofvanbladel.nl<br />
                      service@vofvanbladel.nl
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-agri-red mt-1" />
                  <div>
                    <h3 className="font-semibold text-agri-green">Openingstijden</h3>
                    <div className="text-gray-600">
                      <p>Maandag - Vrijdag: 7:30 - 17:00</p>
                      <p>Zaterdag: Op afspraak</p>
                      <p>Zondag: Gesloten</p>
                      <p className="text-agri-red font-medium mt-2">Spoed: 24/7 bereikbaar</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="mt-8 p-6 bg-agri-cream rounded-lg">
                <h3 className="font-semibold text-agri-green mb-3">Bedrijfsgegevens</h3>
                <div className="text-gray-600 space-y-1">
                  <p>VOF van Bladel</p>
                  <p>KvK: [Nummer]</p>
                  <p>BTW: [Nummer]</p>
                  <p>Sinds 1983 gevestigd in Herpt</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-agri-green mb-8">
                Stuur een bericht
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Onderwerp *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                  >
                    <option value="">Selecteer een onderwerp</option>
                    <option value="reparatie">Reparatie aanvragen</option>
                    <option value="onderhoud">Onderhoud plannen</option>
                    <option value="apk">APK-keuring</option>
                    <option value="verkoop">Verkoop gebruikt materiaal</option>
                    <option value="offerte">Offerte aanvragen</option>
                    <option value="spoed">Spoedgeval</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschrijf uw vraag of probleem zo gedetailleerd mogelijk..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-agri-green hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Bericht Versturen</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agri-green mb-4">
              Onze Locatie
            </h2>
            <p className="text-lg text-gray-600">
              Centraal gelegen in Herpt, makkelijk bereikbaar vanuit de hele regio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-agri-green mb-6">
                Makkelijk Bereikbaar
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Ons bedrijf is gevestigd aan de Bernsestraat 13 in Herpt, strategisch gelegen 
                  voor optimale bereikbaarheid vanuit de hele regio.
                </p>
                <p className="text-gray-700">
                  Met voldoende parkeergelegenheid en ruimte voor grote machines kunt u 
                  gemakkelijk bij ons terecht voor service en reparaties.
                </p>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-agri-green mb-2">Routebeschrijving</h4>
                  <p className="text-gray-600">
                    Vanaf de A2: Afslag 17 richting Herpt, volg de borden naar Bernsestraat.
                    GPS coördinaten beschikbaar op aanvraag.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Werkplaats VOF van Bladel" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-center text-gray-600 mt-4">
                Onze moderne werkplaats aan de Bernsestraat 13 in Herpt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-agri-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Spoedgeval?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bij calamiteiten en spoedgevallen zijn wij 24 uur per dag, 7 dagen per week bereikbaar. 
            Bel direct voor snelle hulp.
          </p>
          <a 
            href="tel:+" 
            className="bg-white text-agri-red hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>24/7 Spoednummer</span>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

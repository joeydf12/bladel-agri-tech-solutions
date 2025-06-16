
# VOF van Bladel - Tractor Website 🚜

**VOF van Bladel** is een React-applicatie voor het familiebedrijf VOF van Bladel, gespecialiseerd in tractoren en landbouwmachines sinds 1983. 

De website biedt informatie over diensten, merken, tractoren te koop en contactgegevens. De applicatie maakt gebruik van **Supabase** voor het beheren van tractor advertenties en **Tailwind CSS** voor styling.

<img src="https://via.placeholder.com/800x400/c41e3a/ffffff?text=VOF+van+Bladel+Website" alt="project-image" />

---

## 🛠️ Gebruikte Technologieën

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

---

## 📂 Projectstructuur

Hieronder vind je de mappenstructuur van het project:

```bash
vof-van-bladel/
├── src/
│   ├── components/
│   │   ├── ui/                   # Shadcn/ui components
│   │   ├── Layout.tsx            # Hoofdlayout component
│   │   ├── Navigation.tsx        # Navigatie component
│   │   └── Footer.tsx            # Footer component
│   ├── pages/
│   │   ├── Index.tsx             # Homepagina
│   │   ├── Diensten.tsx          # Overzicht van diensten
│   │   ├── Merken.tsx            # Erkende merken
│   │   ├── TractorenTeKoop.tsx   # Tractoren te koop overzicht
│   │   ├── Contact.tsx           # Contactpagina
│   │   └── NotFound.tsx          # 404 pagina
│   ├── integrations/
│   │   └── supabase/             # Supabase configuratie en types
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functies
│   └── App.tsx                   # Hoofdapplicatie component
├── supabase/
│   └── migrations/               # Database migraties
├── public/                       # Statische bestanden
├── tailwind.config.ts           # Tailwind configuratie
├── vite.config.ts               # Vite configuratie
├── package.json                 # Dependencies en scripts
└── README.md                    # Documentatie
```

---

## 🚀 Functionaliteiten

### Basisfunctionaliteit:

1. **Bedrijfsinformatie**: Informatie over het familiebedrijf sinds 1983
2. **Diensten overzicht**: Overzicht van alle aangeboden diensten
3. **Merken showcase**: Toon alle erkende merken waar mee gewerkt wordt
4. **Tractoren te koop**: Dynamische lijst van beschikbare tractoren uit Supabase
5. **Contact informatie**: Volledige contactgegevens en openingstijden
6. **Responsive Design**: Geoptimaliseerd voor mobiel, tablet en desktop dankzij **Tailwind CSS**

### Database functionaliteiten:

- **Tractor beheer**: Tractoren worden opgeslagen in Supabase database
- **Featured tractoren**: Uitgelichte tractoren op de homepagina
- **Real-time updates**: Automatische updates van tractor informatie

---

## 📦 Installatie

### Vereisten

- Node.js (versie 18 of hoger)
- NPM of Bun (voor package management)
- Supabase-account

### Installatie-instructies

1. **Clone de repository**:
   ```bash
   git clone https://github.com/<jouw-repository>/vof-van-bladel.git
   cd vof-van-bladel
   ```

2. **Installeer dependencies**:
   ```bash
   npm install
   # of
   bun install
   ```

3. **Configureer Supabase**:

   - Maak een nieuw project aan op [Supabase](https://supabase.com/).
   - Maak een tabel genaamd `tractors` met de volgende kolommen:

     | Kolomnaam       | Type            | Opmerking                    |
     | --------------- | --------------- | ---------------------------- |
     | `id`            | UUID            | Primary Key, automatisch     |
     | `title`         | TEXT            | Naam van de tractor          |
     | `brand`         | TEXT            | Merk van de tractor          |
     | `model`         | TEXT            | Model van de tractor         |
     | `year`          | INTEGER         | Bouwjaar                     |
     | `hours`         | INTEGER         | Aantal draaiuren             |
     | `price`         | DECIMAL(10,2)   | Prijs van de tractor         |
     | `location`      | TEXT            | Locatie (standaard: Herpt)   |
     | `description`   | TEXT            | Beschrijving van de tractor  |
     | `image_url`     | TEXT            | URL van de afbeelding        |
     | `marktplaats_url` | TEXT          | Link naar Marktplaats        |
     | `is_featured`   | BOOLEAN         | Uitgelicht op homepage       |
     | `is_available`  | BOOLEAN         | Beschikbaarheid              |
     | `created_at`    | TIMESTAMP       | Datum van toevoeging         |
     | `updated_at`    | TIMESTAMP       | Datum van laatste wijziging  |

   - Kopieer je Supabase URL en Anon Key naar een .env.local bestand:

     ```env
     VITE_SUPABASE_URL=YOUR_SUPABASE_URL
     VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
     ```

4. **Start de ontwikkelserver**:

   ```bash
   npm run dev
   # of
   bun dev
   ```

   Open de applicatie in je browser op [http://localhost:8080](http://localhost:8080).

---

## 🎨 Styling met Tailwind CSS

De applicatie maakt gebruik van Tailwind CSS voor het creëren van een responsief en modern ontwerp.
Kleuren zijn gebaseerd op de agrarische sector:

| Kleur | Hex       | Gebruik | Voorbeeld                                                              |
| ----- | --------- | ------- | ---------------------------------------------------------------------- |
| Green | `#c41e3a` | Primary | ![#c41e3a](https://via.placeholder.com/15/c41e3a/c41e3a.png) `#c41e3a` |
| Red   | `#c41e3a` | Accent  | ![#c41e3a](https://via.placeholder.com/15/c41e3a/c41e3a.png) `#c41e3a` |
| Brown | `#8b4513` | Earth   | ![#8b4513](https://via.placeholder.com/15/8b4513/8b4513.png) `#8b4513` |
| Cream | `#f5f5dc` | Light   | ![#f5f5dc](https://via.placeholder.com/15/f5f5dc/f5f5dc.png) `#f5f5dc` |
| Gray  | `#6b7280` | Text    | ![#6b7280](https://via.placeholder.com/15/6b7280/6b7280.png) `#6b7280` |

Voor meer informatie, bekijk het Tailwind-configuratiebestand: `tailwind.config.ts`

---

## 🧩 Componenten

### Layout Componenten
- **Navigation**: Responsive navigatiebalk met logo en menu
- **Footer**: Uitgebreide footer met contactgegevens en bedrijfsinformatie
- **Layout**: Wrapper component voor consistente pagina-indeling

### UI Componenten
Het project maakt gebruik van Shadcn/ui componenten voor consistente en toegankelijke UI elementen.

---

## 📜 Scripts

- `npm run dev`: Start de ontwikkelserver
- `npm run build`: Bouw de applicatie voor productie
- `npm run preview`: Preview van de productieversie
- `npm run lint`: Lint de code voor fouten

---

## 🔧 Features in de Toekomst

- **Admin Dashboard**: Beheer tractoren vanuit de website
- **Afbeelding Upload**: Upload van tractor afbeeldingen naar Supabase Storage
- **Zoekfunctionaliteit**: Zoek tractoren op merk, model, jaar of prijs
- **Favorieten**: Gebruikers kunnen tractoren als favoriet markeren
- **Offerte Aanvragen**: Formulier voor het aanvragen van offertes
- **Service Afspraken**: Online afspraken maken voor onderhoud

---

## 📍 Bedrijfsinformatie

**VOF van Bladel**
- **Adres**: Bernsestraat 13, 5253 AB Herpt
- **Telefoon**: Beschikbaar via contactpagina
- **Email**: info@vofvanbladel.nl
- **Sinds**: 1983
- **Specialisatie**: Tractoren, landbouwmachines en onderhoud

---

## ✨ Bijdragen

Dit is een bedrijfswebsite voor VOF van Bladel. Voor wijzigingen of verbeteringen, neem contact op met het bedrijf.

---

## 📄 Licentie

Dit project is eigendom van VOF van Bladel. Alle rechten voorbehouden.

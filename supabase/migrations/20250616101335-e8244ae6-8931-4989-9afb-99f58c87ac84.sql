
-- Create a table for tractors for sale
CREATE TABLE public.tractors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  hours INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  location TEXT NOT NULL DEFAULT 'Herpt',
  description TEXT,
  image_url TEXT,
  marktplaats_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to make tractors publicly readable
ALTER TABLE public.tractors ENABLE ROW LEVEL SECURITY;

-- Create policy that allows everyone to read tractors (public data)
CREATE POLICY "Anyone can view tractors" 
  ON public.tractors 
  FOR SELECT 
  USING (true);

-- Insert sample data for the tractors
INSERT INTO public.tractors (title, brand, model, year, hours, price, location, description, image_url, marktplaats_url, is_featured) VALUES
('John Deere 6420', 'John Deere', '6420', 2005, 8500, 35000.00, 'Herpt', 'Zeer nette tractor met frontlader, airco en GPS', '/placeholder.svg', 'https://www.marktplaats.nl', true),
('Case IH Puma 165', 'Case IH', 'Puma 165', 2018, 3200, 89500.00, 'Herpt', 'Top tractor met CVT transmissie en zeer weinig uren', '/placeholder.svg', 'https://www.marktplaats.nl', true),
('New Holland T7.270', 'New Holland', 'T7.270', 2016, 4800, 75000.00, 'Herpt', 'Krachtige tractor met PowerShift transmissie', '/placeholder.svg', 'https://www.marktplaats.nl', true),
('Massey Ferguson 7720', 'Massey Ferguson', '7720', 2020, 2100, 95000.00, 'Herpt', 'Bijna nieuwe tractor met alle opties', '/placeholder.svg', 'https://www.marktplaats.nl', false),
('Fendt 724 Vario', 'Fendt', '724 Vario', 2017, 3800, 82000.00, 'Herpt', 'Premium tractor met VarioDrive transmissie', '/placeholder.svg', 'https://www.marktplaats.nl', false),
('Deutz-Fahr 6140', 'Deutz-Fahr', '6140', 2019, 2800, 68000.00, 'Herpt', 'Betrouwbare tractor met goede prestaties', '/placeholder.svg', 'https://www.marktplaats.nl', false);

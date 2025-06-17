-- Add is_sold column to tractors table
ALTER TABLE public.tractors ADD COLUMN is_sold BOOLEAN DEFAULT false;

-- Update existing rows to have is_sold = false
UPDATE public.tractors SET is_sold = false WHERE is_sold IS NULL; 
-- Add is_sold column to tractors table
ALTER TABLE public.tractors ADD COLUMN IF NOT EXISTS is_sold BOOLEAN DEFAULT false;

-- Update existing rows to have is_sold = false
UPDATE public.tractors SET is_sold = false WHERE is_sold IS NULL;

-- Create admin user
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@vofvanbladel.nl',
  crypt('admin123', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  now(),
  now(),
  '',
  '',
  '',
  ''
);

-- Create admin role (if it doesn't exist, this will fail silently)
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'admin') THEN
    CREATE ROLE admin;
  END IF;
END
$$;

-- Grant admin privileges
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO admin;

-- Assign admin role to the admin user
GRANT admin TO authenticated;

-- Add RLS policies for authenticated users to perform CRUD operations
CREATE POLICY "Authenticated users can insert tractors" 
  ON public.tractors 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update tractors" 
  ON public.tractors 
  FOR UPDATE 
  TO authenticated 
  USING (true) 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete tractors" 
  ON public.tractors 
  FOR DELETE 
  TO authenticated 
  USING (true); 
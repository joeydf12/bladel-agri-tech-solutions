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

-- Create admin role
CREATE ROLE IF NOT EXISTS admin;

-- Grant admin privileges
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO admin;

-- Assign admin role to the admin user
GRANT admin TO authenticated; 
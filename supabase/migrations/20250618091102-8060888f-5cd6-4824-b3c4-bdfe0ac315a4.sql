
-- Add is_sold column to tractors table if it doesn't exist
ALTER TABLE public.tractors ADD COLUMN IF NOT EXISTS is_sold BOOLEAN DEFAULT false;

-- Update existing rows to have is_sold = false where it's null
UPDATE public.tractors SET is_sold = false WHERE is_sold IS NULL;

-- Create admin user in auth.users table (without ON CONFLICT since email isn't unique constraint)
DO $$
BEGIN
    -- Check if user already exists before inserting
    IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'admin@vofvanbladel.nl') THEN
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
    END IF;
END $$;

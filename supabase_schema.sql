-- Create a table for inquiries
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    scope TEXT,
    budget TEXT,
    timeline TEXT,
    details TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (anyone can submit a contact form)
CREATE POLICY "Allow anonymous insert" ON inquiries
    FOR INSERT 
    TO public
    WITH CHECK (true);

-- Only authenticated users (admins) can view inquiries (requires auth setup)
-- CREATE POLICY "Allow authenticated users to select" ON inquiries
--     FOR SELECT
--     TO authenticated
--     USING (true);

-- SQLite Schema for Cloudflare D1
-- Run with: npx wrangler d1 execute krudex-db --remote --file=./d1_schema.sql

CREATE TABLE IF NOT EXISTS inquiries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    scope TEXT,
    budget TEXT,
    timeline TEXT,
    details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);

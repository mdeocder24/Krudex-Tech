import { MongoClient, ServerApiVersion, type Db, type Collection } from 'mongodb';

export interface InquiryDocument {
  id: string;
  name: string;
  email: string;
  company: string | null;
  scope: string | null;
  timeline: string | null;
  details: string | null;
  createdAt: Date;
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

declare global {
  // Preserve cached connection across hot-reloads in dev and warm lambda invocations in serverless
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

/**
 * Returns a cached MongoDB MongoClient promise.
 * In serverless environments like Vercel, caching the client promise prevents
 * exhausting connection limits on MongoDB Atlas during burst traffic.
 */
export function getMongoClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      'Missing MONGODB_URI environment variable. Please set MONGODB_URI in your environment variables (.env.local or Vercel project settings).'
    );
  }

  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }

  return global._mongoClientPromise;
}

/**
 * Returns the MongoDB Database instance.
 * Defaults to the database named in MONGODB_DB or 'krudex-tech' (or the database specified in the URI path).
 */
export async function getDb(dbName?: string): Promise<Db> {
  const client = await getMongoClientPromise();
  const name = dbName || process.env.MONGODB_DB;
  return client.db(name);
}

/**
 * Returns the typed collection for contact inquiries.
 * Automatically ensures an index on createdAt for fast sort/retrieval.
 */
let indexesCreated = false;

export async function getInquiriesCollection(): Promise<Collection<InquiryDocument>> {
  const db = await getDb();
  const collection = db.collection<InquiryDocument>('inquiries');

  if (!indexesCreated) {
    // Fire index creation in the background; failures shouldn't block inserts
    collection
      .createIndex({ createdAt: -1 })
      .catch((err) => console.warn('Failed to ensure index on inquiries.createdAt:', err));
    indexesCreated = true;
  }

  return collection;
}

export default getMongoClientPromise;

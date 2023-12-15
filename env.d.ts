declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;

    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_ANON_KEY: string;
  }
}

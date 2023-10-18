import { config } from "https://deno.land/x/dotenv/mod.ts";

async function loadEnvironments(environment: string) {
  const path = `src/environments/${environment}.env`;

  return config({ path });
}

const environment = String(Deno.env.get("APP_ENV"));
export const env = await loadEnvironments(environment);

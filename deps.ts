export * as log from "https://deno.land/std@0.194.0/log/mod.ts";
export { getLogger } from "https://deno.land/std@0.194.0/log/mod.ts";
export * as oak from "https://deno.land/x/oak@v12.6.0/mod.ts";
export { default as oakLogger } from "https://deno.land/x/oak_logger@1.0.0/mod.ts";
export { match, P } from "https://esm.sh/ts-pattern@5.0.3";
export { sortBy } from "https://deno.land/std@0.197.0/collections/mod.ts";
export { default as TTL } from "https://deno.land/x/ttl/mod.ts";

export async function dotenvLoad() {
  await import("https://deno.land/std@0.194.0/dotenv/load.ts");
}

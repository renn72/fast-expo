import { env } from "@fast-expo/env/server";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import schema from "./schema/schema";

const client = createClient({
	url: env.DATABASE_URL,
});

export const db = drizzle({ client, schema });

/** @type {import("drizzle-kit").Config} */

export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://AI-Content-generator_owner:WEUAzOF67fRM@ep-weathered-lab-a1nn5ed0.ap-southeast-1.aws.neon.tech/AI-Content-generator?sslmode=require',
    }
}
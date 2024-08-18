import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aiOutput', {
    id:serial('id').primaryKey(),
    FormData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('email').notNull(),
    createBy:varchar('createBy').notNull(),
    createAt:varchar('createdAt')
})
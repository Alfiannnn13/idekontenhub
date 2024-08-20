// import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

// export const AIOutput=pgTable('aiOutput', {
//     id:serial('id').primaryKey(),
//     formData:varchar('formData'),
//     aiResponse:text('aiResponse'),
//     templateSlug:varchar('templateSlug').notNull(),
//     // createdBy:varchar('email').notNull(),
//     createdBy:varchar('createdBy').notNull(),
//     createdAt:varchar('createdAt')
// });


import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formData: text('formData'), // Ganti varchar dengan text jika diperlukan
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt')
});

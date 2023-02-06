import { appSchema } from "@nozbe/watermelondb";

import { pointSchema } from "./pointSchema";

const schemas = appSchema({
    version: 1,
    tables: [
        pointSchema
    ]
});

export { schemas };
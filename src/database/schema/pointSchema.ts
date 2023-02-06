import { tableSchema } from "@nozbe/watermelondb";

const pointSchema = tableSchema({
    name: 'points',
    columns: [
        {
            name: 'point_id',
            type: 'string'
        },
        {
            name: 'latitude',
            type: 'number'
        },
        {
            name: 'longitude',
            type: 'number'
        },
        {
            name: 'time',
            type: 'string'
        },
        {
            name: 'isSynchronized',
            type: 'boolean'
        }
    ]
});

export { pointSchema };
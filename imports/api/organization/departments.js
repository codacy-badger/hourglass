import { Mongo } from 'meteor/mongo';

export const Departments = new Mongo.Collection('departments');

Departments.schema = new SimpleSchema({
    name: {type: String},
    allowance: {type: Number, defaultValue: 0},
    includePublicHolidays: {type: Boolean, defaultValue: true},
    bossId: {type: String}
});

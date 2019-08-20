import { Mongo } from 'meteor/mongo';

export const LeaveTypes = new Mongo.Collection('leaveTypes');

LeaveTypes.schema = new SimpleSchema({
    name: {type: String},
    color: {type: String, defaultValue: "#ff0000"},
    use_allowance: {type: Boolean, defaultValue: true}
});
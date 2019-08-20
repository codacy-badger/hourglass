import { Mongo } from 'meteor/mongo';

export const Leaves = new Mongo.Collection('leaves');

Leaves.schema = new SimpleSchema({
    userId: {type: String},
    leaveTypeId: {type: String, defaultValue: "#ff0000"},
    status: {type: String, allowedValues: ['pending', 'rejected', 'approved', 'cancelled']},
    approverId: {type: String},
    employeeComment: {type: String},
    approverComment: {type: String},
    createdAt: {type: Date},
    decidedAt: {type: Date},
    dateStart: {type: Date},
    dateEnd: {type: Date},
    dateStartPart: {type: String, allowedValues: ['am', 'pm']},
    dateEndPart: {type: String, allowedValues: ['am', 'pm']},
});
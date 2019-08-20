import { Meteor } from 'meteor/meteor'
import { Departments } from './organization/departments.js';


Departments.addLinks({
    'bossId': {
        type: 'one',
        collection: Meteor.users,
        field: 'services.rocketchat.id'
    }
});

Meteor.users.addLinks({
    bossOf: {
        collection: Departments,
        inversedBy: 'bossId'
    }
});
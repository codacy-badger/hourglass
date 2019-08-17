import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {

    //TODO: Meter as credenciais seguras
    ServiceConfiguration.configurations.upsert(
        { service: 'rocketchat' },
        {
            $set: {
                loginStyle: "popup",
                clientId: "XGmr8XoW5cW46Gdqs", // See table below for correct property name!
                secret: "F4BzvDSDWw5vmkcUdlXeWkuqodQ_FQTcCNymUYbIDH8",
                server: "https://chat.centralprojectos.pt"
            }
        }
    );

    // TODO: Update photo sempre que houver login.
    Accounts.onCreateUser(function(options, user) {
        if (options.profile) {
            options.profile.display_picture = "https://chat.centralprojectos.pt/api/v1/users.getAvatar?userId=" + user.services.rocketchat.id;
            user.profile = options.profile;
        }
        return user;
    });

});

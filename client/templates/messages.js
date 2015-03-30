//We subscribe to get all app's messages
Meteor.subscribe('messages');

Template.messages.helpers({
    messages: function () {
        return Messages.find({});
    }
});
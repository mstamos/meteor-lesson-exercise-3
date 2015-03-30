Template.messageInput.events({
    'submit .enter-message': function (event, template) {
        event.preventDefault();
        var name = Meteor.user() ? Meteor.user().username : 'Anonymous';
        var message = template.find("#message-input").value;

        if (message != '') {
            Messages.insert({
                name: name,
                message: message,
                owner: Meteor.userId()
            });
            template.find("#message-input").value = '';
            message = '';
        }
    }
});
Template.messageInput.events({
        'submit .enter-message': function (event) {
        event.preventDefault();
        var name = Meteor.user() ? Meteor.user().username : 'Anonymous';
        var message = document.getElementById('message-input');

        if (message.value != '') {
            Messages.insert({
                name: name,
                message: message.value
            });

            document.getElementById('message-input').value = '';
            message.value = '';
        }
    }
});
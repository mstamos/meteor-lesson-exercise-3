Template.myMessages.helpers({
	messages: function () {
		//We return all user's messages
		return Messages.find({owner:Meteor.userId()});
	},
	username: function () {
		//We return users username
		return Meteor.user().username
	}
});
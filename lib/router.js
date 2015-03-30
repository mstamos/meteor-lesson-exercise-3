//We configure our Router. 

//We set as template layout the layout template
Router.configure({
	layoutTemplate: "layout"
});

//At / path we set the chatRoom template
Router.route('/', {
	template: "chatRoom",
	name: "home"
});

//We create a new route myMessages
Router.route('/myMessages',{
	name: "myMessages"
});

/*
A function which check if the user is logged in. 
If he is then we render the next template, 
if not we render the access denied template
*/
var requireLogin = function () {
    if (!Meteor.user()) {
        Meteor.loggingIn() ? this.render(this.loadingTemplate) : this.render('accessDenied');
    } else {
        this.next();
    }
}

//We call requireLogin function before router do anything else.
Router.onBeforeAction(requireLogin, {only: ['myMessages']});
var $ = require('jquery');
var Backbone = require('backbone');
var loginTemplate = require('../../../templates/login.hbs');

// View: List Locations

var LoginPageView = Backbone.View.extend({
	el: $('.page'),

	// events: {
	// 	// 'submit .login-form': 'handleSubmit'
	// },

	render: function () {
    this.$el.html(loginTemplate())

		if(window.location.href.split('?')[1] === 'fail') {
			console.log("fail")
			$('.fail').show();
		}
	},

})

module.exports = LoginPageView;

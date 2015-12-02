var $ = require('jquery');
var Backbone = require('backbone');
var contactTemplate = require('../../../templates/contact.hbs');

// View: About

var ContactPageView = Backbone.View.extend({
	el: $('.page'),

	render: function () {
		this.$el.html(contactTemplate());
	}
})

module.exports = ContactPageView;
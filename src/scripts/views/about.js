var $ = require('jquery');
var Backbone = require('backbone');
var aboutTemplate = require('../../../templates/about.hbs');

// View: About

var AboutPageView = Backbone.View.extend({
	el: $('.page'),

	render: function () {
		this.$el.html(aboutTemplate());
	}
})

module.exports = AboutPageView;
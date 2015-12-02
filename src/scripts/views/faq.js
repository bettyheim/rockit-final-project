var $ = require('jquery');
var Backbone = require('backbone');
var faqTemplate = require('../../../templates/faq.hbs');

// View: About

var FAQPageView = Backbone.View.extend({
	el: $('.page'),

	render: function () {
		this.$el.html(faqTemplate());
	}
})

module.exports = FAQPageView;
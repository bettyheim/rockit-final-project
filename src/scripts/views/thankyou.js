var $ = require('jquery');
var Backbone = require('backbone');
var thankyouTemplate = require('../../../templates/thankyou.hbs');

// View: About

var ThankyouPageView = Backbone.View.extend({
	el: $('.page'),

	render: function () {
		this.$el.html(thankyouTemplate());
	}
})

module.exports = ThankyouPageView;
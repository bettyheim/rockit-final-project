var $ = require('jquery');
var Backbone = require('backbone');
var registerTemplate = require('../../../templates/register.hbs');

// View: List Locations

var RegisterPageView = Backbone.View.extend({
	el: $('.page'),

	render: function () {
    this.$el.html(registerTemplate())
	}
})

module.exports = RegisterPageView;

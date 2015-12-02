var $ = require('jquery');
var jscookie = require('js-cookie');
var Backbone = require('backbone');
var locationsTemplate = require('../../../templates/exchange.hbs');

var userCookie = jscookie.get('user')

if (userCookie) {
	var user = JSON.parse(userCookie.slice(2));
}

var ExchangePageView = Backbone.View.extend({
	el: $('.page'),

	events: {
		'submit .exchange-form': 'handleSubmit'
	},

	collection: require('../collections/locations'),

	render: function () {
		var _this = this;

		var locationCollection = _this.collection;

		// if logged in show exchange view, otherwise redirect to login page

		if (!user && window.location.hash == "#exchange") {
			window.location.href = "#login";
			return
		}

    //Get the products from the server
    locationCollection.fetch().done(function (locations) {
      _this.$el.html(locationsTemplate(locations))
    });
	},

	handleSubmit: function () {
		var location = $('.location_id').val();
		var eggs = $('.egg_number').val();
		$.post('/api/schedule', {
			location_id: location,
			egg_number: eggs,
			user_id: user.id
		})
		.then(function (user) {
			$('.confirmed').show();
		})
		return false;
	}

})

module.exports = ExchangePageView;

var $ = require('jquery');
var Backbone = require('backbone');
var locationsTemplate = require('../../../templates/locations.hbs');
// var gmaps = require('gmaps');

// View: List Locations

var LocationsPageView = Backbone.View.extend({
	el: $('.page'),

	collection: require('../collections/locations'),

	render: function () {
		var _this = this;
		var locationCollection = _this.collection;

    //Get the products from the server
    locationCollection.fetch().done(function (locations) {
      _this.$el.html(locationsTemplate(locations))

      locations.forEach(function (location) {

        new GMaps({
          div: '#map-' + location.id,
          lat: location.lat,
          lng: location.lng,
          // zoom: 5
        });
      })
    });
	}
})

module.exports = LocationsPageView;

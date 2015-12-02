var Backbone = require('backbone');
var MeetingLocation = require('../models/location')

/****************************************
  Collection: User
*****************************************/

var LocationCollection = Backbone.Collection.extend({
  url: 'http://localhost:3000/api/location',
  model: MeetingLocation
});


module.exports = new LocationCollection;

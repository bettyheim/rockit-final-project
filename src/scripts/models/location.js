var Backbone = require('backbone');


/****************************************
  Model: User
*****************************************/

var Location = Backbone.Model.extend({
  url: function() {
    var base = 'http://localhost:3000/api/location';
    if (this.isNew()) return base;
    return base + '/' + this.id
  }
});

module.exports = Location;

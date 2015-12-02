var $ = require('jquery');
var Backbone = require('backbone');
var galleryTemplate = require('../../../templates/gallery.hbs');
var lightbox = require('../../../templates/lightbox.hbs')

// View: About

var GalleryPageView = Backbone.View.extend({
	el: $('.page'),

	render: function () {
		this.$el.html(galleryTemplate());

	}
})

// Logic for lightbox

$('.page').on('click', '.supplier-showcase a', function(e) {

	e.preventDefault();

	activateAnchor($(this));

	// launches the lightbox
	openLightbox($(this).attr('href'))
})

// hide the lightbox
$('.page').on('click', '.lightbox', function() {
	$('.lightbox').hide();
});

$('.page').on('click', '.lightbox .nav', function() {

	var firstAnchor = $('.supplier-showcase a').first();
	var lastAnchor = $('.supplier-showcase a').last();

  // Previous
  if ($(this).hasClass('previous')) {
  	var nextAnchor = $('.supplier-showcase a.active').prev('a');
  	var altAnchor = lastAnchor;
  // Next
  } else {
  	var nextAnchor = $('.supplier-showcase a.active').next('a')
  	var altAnchor = firstAnchor;
  }

  if (nextAnchor.length) {
  	activateAnchor(nextAnchor)
  	openLightbox(nextAnchor.attr('href'))
  } else {
  	activateAnchor(altAnchor)
  	openLightbox(altAnchor.attr('href'))
  }
  return false;

})

var activateAnchor = function($activeAnchor) {

  // the big switch for active
  $('.supplier-showcase a').removeClass('active')
  $activeAnchor.addClass('active')
}

var openLightbox = function(href) {

	//insert lightbox HTML into page
	$('.lightbox').show();
	$('.content').html(lightbox ({
		img_location: href
	}));
}

module.exports = GalleryPageView;
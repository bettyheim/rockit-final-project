// load jquery
var $ = require('jquery');
var Backbone = require('backbone');
var aboutView = new (require('./views/about'));
var faqView = new (require('./views/faq'));
var contactView = new (require('./views/contact'));
var thankyouView = new (require('./views/thankyou'));
var galleryView = new (require('./views/gallery'));
var locationsView = new (require('./views/locations'));
var registerView = new (require('./views/register'));
var loginView = new (require('./views/login'));
var exchangeView = new (require('./views/exchange'));

// get session status and change login text by status
var jscookie = require('js-cookie');
var user = jscookie.get('user');

if (user) {
	$('.login').hide();
	$('.logout').show();
}

// change classes depending on if the index page is active, or a subpage view is active.

var subpage = function (){
	$('div.hero').removeClass('landing');
	$('div.secondary-nav').removeClass('landing');
	$('div.footer').removeClass('hide').addClass('show');
};

// hamburger menu event
$('.hamburger').on('click', function () {
	$(this).siblings('nav.primary-nav').toggleClass('expand');
});

// google map for location page

// FAQ div events
$('.page').on('click', 'div.faq-head', function () {
$(this).find('i').toggleClass('fa fa-plus-square-o fa fa-minus-square-o');
$(this).siblings('.faq-body').toggleClass('show');
});


// Show or hide content on tabs for exchange view
$('.page').on('click', '.tabs a', function (event) {
	if ($(this).attr('class') === 'buyer-tab' && $('#buyer').attr('class') === 'tab-content-hide') {
		$('#buyer').removeClass('tab-content-hide').addClass('tab-content-show');
		$('#seller').removeClass('tab-content-show').addClass('tab-content-hide');
		$('.buyer-tab').parents('li').addClass('active');
		$('.seller-tab').parents('li').removeClass('active');
	} else if ($(this).attr('class') === 'seller-tab' && $('#seller').attr('class') === 'tab-content-hide') {
		$('#seller').removeClass('tab-content-hide').addClass('tab-content-show');
		$('#buyer').removeClass('tab-content-show').addClass('tab-content-hide');
		$('.seller-tab').parents('li').addClass('active');
		$('.buyer-tab').parents('li').removeClass('active');
	}
	event.preventDefault();
})

// Router
var Router = Backbone.Router.extend({

	// Route definitions
	routes: {
		'': 'index',
		'about': 'about',
		'faq': 'faq',
		'contact': 'contact',
		'thankyou': 'thankyou',
		'gallery': 'gallery',
		'locations': 'locations',
		'register': 'register',
		'login': 'login',
		'exchange': 'exchange',
		'*actions': 'defaultRoute'
	},

	// Route handlers

	index: function() {
		$('div.hero').addClass('landing');
		$('div.footer').removeClass('show').addClass('hide');
	},

	about: function() {
		aboutView.render();
		subpage();
	},

	faq: function() {
		faqView.render();
		subpage();
	},

	contact: function() {
		contactView.render();
		subpage();
	},

	thankyou: function() {
		thankyouView.render();
		subpage();
	},

	gallery: function() {
		galleryView.render();
		subpage();
	},

	locations: function() {
		locationsView.render();
		subpage();
	},

	register: function() {
		registerView.render();
		subpage();
	},

	login: function() {
		loginView.render();
		subpage();
	},

	exchange: function() {
		exchangeView.render();
		subpage();
	},

	defaultRoute: function(actions) {
		console.log('404');
	}
});

// Initiate the router
var router = new Router;

Backbone.history.start();
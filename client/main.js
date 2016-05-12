import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './covers.html';

Router.route('/photoshop');
Router.route('/originals');
Router.route('/stories');
Router.route('/covers');
Router.route('/', {
    name: 'home',
	template: 'home'
});
Router.configure({
    layoutTemplate: 'main'
});

Template.covers.events({
  'click .thumbnail': function(){   
		var eventId = event.target.id;
		var image = document.getElementById('galleryImage');
	    $(".gray").show();
        image.src = "/images/" + eventId + ".jpg";
    },
	'click #remove': function(){ 
		console.log("clicked");
		$(".gray").hide();
	}	
});


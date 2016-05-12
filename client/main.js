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
		var image = document.getElementById('galleryImage');
		if(event.target.id=="venice"){
			//$("body").addClass("gray");
			$(".gray").show();
		}
		if (event.target.id=="venice") {
        image.src = "/images/venice.jpg";
		} else {
        image.src = "/images/sherlock.jpg";
		}
		
    },
	'click #remove': function(){ 
		console.log("clicked");
		$(".gray").hide();
	}	
});


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import './covers.html';
var eventId= "";
var myPics = ["venice", "lizard_woman","Swiss_stream","beach","Brandeis_fall","cat","Colorize","compositing_fun","mountains_water","swiss_view","swiss_mounatins_lens_flare","swissDE2","FlowerDE","into_the_sunset","SwissDE1"];
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
Template.photoshop.events({
  'click .thumbnail': function(){   
		var image = document.getElementById('galleryImage');
		eventId = event.target.id;
		console.log("id is" + eventId);
	    $(".gray").show();
        image.src = "/images/" + eventId + ".jpg";
    },
	'click #remove': function(){ 
		console.log("clicked");
		$(".gray").hide();
	},
	'click #nextPic': function(){ 
		var image = document.getElementById('galleryImage');
		for (var i = 0; i < myPics.length-1; i++) { 
			if(myPics[i]==(eventId)){
				image.src = "/images/" + myPics[i+1] + ".jpg";
				eventId= myPics[i+1];
				break;
			}	
		}
	},
	'click #prevPic': function(){ 
		var image = document.getElementById('galleryImage');
		for (var i = 0; i < myPics.length; i++) { 
			if(myPics[i]==(eventId)&&i>0){
				image.src = "/images/" + myPics[i-1] + ".jpg";
				eventId= myPics[i-1];
				break;
			}	
		}
	}
	
});


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import './covers.html';
var eventId= "";
var currentPage = "page1";
var newCurrentPage = "newPage1";
var myPics = ["venice", "lizard_woman","Swiss_stream","beach","Brandeis_fall","cat","Colorize","compositing_fun","mountains_water","swiss_view","swiss_mounatins_lens_flare","swissDE2","FlowerDE","into_the_sunset","SwissDE1"];
var caughtInTheCrossirePages = ["page1","page2","page3","page4","page5","page6","page7"];
var theBallPages = ["newPage1","newPage2","newPage3"]
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
//class for formatting id for page selection
Template.stories.events({
	'click #nextPage': function(){   
		for (var i = 0; i < caughtInTheCrossirePages.length-1; i++) {
			if(caughtInTheCrossirePages[i]==currentPage){
				//console.log("#"+ myPages[i+1]);
				//console.log("i is " + i);
				$("#"+caughtInTheCrossirePages[i+1]).show();
				currentPage = caughtInTheCrossirePages[i+1];
				break;
			} 
		}		
    },
	'click #prevPage': function(){   
		for (var i = 0; i < caughtInTheCrossirePages.length; i++) {
			if(caughtInTheCrossirePagesPages[i]==currentPage&&i>0){
				$("#"+caughtInTheCrossirePages[i]).hide();
				currentPage = caughtInTheCrossirePages[i-1];
				break;
			} 
		}
    },
	'click #nextPage1': function(){   
		for (var i = 0; i < theBallPages.length-1; i++) {
			if(theBallPages[i]==newCurrentPage){
				console.log(theBallPages[i+1]);
				$("#"+theBallPages[i+1]).show();
				newCurrentPage = theBallPages[i+1];
				break;
			} 
		}		
    },
});


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


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

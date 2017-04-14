define(['chaplin'], function(Chaplin){
	'use strict';

	var Application = Chaplin.Application.extend({
		title: 'Tasktime.io',
		start: function(){
			Chaplin.Application.prototype.start.apply(this);
		}

	});

	return Application;

});
define(['chaplin', 'controllers/base/controller','views/list-view', 'models/task'], function(Chaplin, Controller, ListView, TaskModel){
	'use strict';

	var Controller = Controller.extend({

		show: function(){
			this.view = new ListView({
				region: 'list',
				tagName: 'p', 
				model: new TaskModel()
			});
		}

	});

	return Controller;

});
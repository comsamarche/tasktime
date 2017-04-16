define(['chaplin', 'controllers/base/controller','views/list-view'], function(Chaplin, Controller, ListView){
	'use strict';

	var Controller = Controller.extend({

		show: function(){
			var that = this;

			/*
			** SANS LE MEDIATOR
			*/
			// var task = $('#task');
			// var project = $('#project');

			// $('.go').on('click', function(e) {
			// 	e.preventDefault();

			// 	var model = new Task({
			// 		task: task.val(),
			// 		project: project.val()
			// 	});

			// 	var view = new ListView({
			// 		region: 'list',
			// 		tagName: 'p', 
			// 		model:model
			// 	});

			// 	task.val('');
			// 	project.val('');
			// 	task.focus();

			// 	that.view = view;

			// });	

			/*
			** AVEC MEDIATOR
			*/
			Chaplin.mediator.subscribe('createNewTask', function(task){

				var view = new ListView({
					region: 'list',
					tagName: 'p', 
					model:task
				});

				that.view = view;

			});			
		}

	});

	return Controller;

});
define(['chaplin', 'views/layout-view', 'models/task'], function(Chaplin, LayoutView, Task){
	'use strict';

	var timerInterval, taskModel;

	var Controller = Chaplin.Controller.extend({
		beforeAction: function(){
			this.reuse('layout-view', LayoutView);
			this.hideTimer();
			this.startTimer();
			this.addTaskHandler();
		},
		hideTimer: function(){
			$('#timer').hide();
		},
		startTimer: function(){
			var task = $('#task');
			var project = $('#project');
			var description = $(".description");
			var timerContainer = $('.timer-container');

			$('.go').on('click', function(e) {
				e.preventDefault();

				taskModel = new Task({
					task : task.val(),
					project: project.val(),
					time:0
				});

				description.text(taskModel.get('task') +' '+taskModel.get('project'));
				$('#timer').fadeIn();
				$('#form').hide();

				timerInterval = setInterval(function(){
					var time = parseInt(taskModel.get('time'));
					taskModel.set('time', time+1);
					timerContainer.text(taskModel.getRealTime());
				}, 1000);

			});

		},
		addTaskHandler: function(){

			$('.stop').on('click', function(e) {
				e.preventDefault();
				var task = $('#task');
				var project = $('#project');
				var description = $(".description");
				var timerContainer = $('.timer-container');

				window.clearInterval(timerInterval);
				$('#form').fadeIn();
				$('#timer').hide();

				Chaplin.mediator.publish('createNewTask', taskModel);
				
				task.val('');
				project.val('');
				timerContainer.text('00:00:00');

				task.focus();		
			});

		}

	});
	return Controller;
});
define(['chaplin', 'models/base/model'] , function(Chaplin, Model){
'use strict';

	var TaskModel = Model.extend({

		initialize: function(){

			this.on('change', function(){
				this.set('formattedTime', this.generateFormattedTime(this.get('time')));
			});

		},
		generateFormattedTime: function(time){

			var date = new Date(null);
			date.setSeconds(parseInt(time));
			return date.toISOString().substr(11,8);

		},
		defaults : {
			task: "titre de tâche",
			project : 'exemple de project',
			time : 0
			// ,getTime: function(){
			// 	return !this.time ? 'pas de temps' : '00:00:00'
			// }
		}

	});

	return TaskModel;

});
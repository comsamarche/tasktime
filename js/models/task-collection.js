define(['chaplin', 'models/base/collection', 'models/task', 'underscore'] , function(Chaplin, Collection, Task, _){
'use strict';

	var TaskCollection = Collection.extend({

		model:Task,
		updateTotalTime: function(){
			var totalTime = 0;

			_.each(this.models, function(item){
				totalTime += parseInt(item.get('time'));
			});

			var date = new Date(null);
			date.setSeconds(parseInt(totalTime));

			Chaplin.mediator.publish('totalTime', date.toISOString().substr(11,8));
		}

	});

	return TaskCollection;

});
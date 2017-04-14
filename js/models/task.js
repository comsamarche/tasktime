define(['chaplin', 'models/base/model'] , function(Chaplin, Model){
'use strict';

	var TaskModel = Model.extend({

		defaults : {
			task: "Creer le moule d'application",
			project : 'Creer ma tache',
			time : 0, 
			getTime: function(){
				return !this.time ? 'pas de temps' : '00:00:00'
			}
		}

	});

	return TaskModel;

});
define(['chaplin','views/base/collection-view', 'views/item-view', 'text!templates/list.hbs', 'models/task-collection'], function(Chaplin, CollectionView, ItemView, ListTemplate, TaskCollection){
	'use strict';

	var collection = new TaskCollection();

	var ListView = CollectionView.extend({

		autoRender: true,
		itemView: ItemView,
		template: ListTemplate,
		collection: collection,
		listen: {
			'createNewTask mediator': 'createNewTask'
		},
		createNewTask: function(task){
			collection.add(task);
			collection.updateTotalTime();
		}

	});

	return ListView;
});
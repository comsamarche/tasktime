define(['chaplin','views/base/view', 'text!templates/list.hbs'], function(Chaplin, View, ListTemplate){
	'use strict';

	var ListView = View.extend({

		autoRender: true,
		template: ListTemplate,

	});

	return ListView;
});
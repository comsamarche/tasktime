define(['chaplin','views/base/view', 'text!templates/item.hbs'], function(Chaplin, View, ItemTemplate){
	'use strict';

	var View = View.extend({

		autoRender: true,
		template: ItemTemplate,
		tagName: 'li',
		className: 'collection-item'

	});

	return View;
});
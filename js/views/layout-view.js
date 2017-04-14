define(['views/base/view', 'text!templates/base/layout.hbs', 'chaplin'], function(View, Template, Chaplin){
	'use strict';

	var LayoutView = View.extend({

		container: 'body',
		id:'container',
		template: Template,
		regions: {
			list: '#list-container'
		}

	});

	return LayoutView;
});
define(['chaplin', 'views/layout-view'], function(Chaplin, LayoutView){
	'use strict';

	var Controller = Chaplin.Controller.extend({
		beforeAction: function(){
			this.reuse('layout-view', LayoutView);
		}
	});
	return Controller;
});
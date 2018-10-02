'use strict';

angular.module('prueba').controller('MainCtrl', function ($scope, $rootScope, productosFactory) {
	var ctrl = this;
	ctrl.filter = '';

	ctrl.servicios = productosFactory.list()

	ctrl.saveService = () =>{
		productosFactory.save(ctrl.servicio)
		ctrl.clearForm();
	}
	ctrl.clearForm = () => {
		delete ctrl.servicio
		ctrl.serviceForm.$setUntouched()
	}
	ctrl.deleteService = (id) =>{
		ctrl.servicios = productosFactory.delete(id)
	}
	ctrl.getDetail = (id) =>{
		ctrl.servicio = productosFactory.detail(id)
	}
});

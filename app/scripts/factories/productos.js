angular.module('prueba').factory('productosFactory', function () {

	var cont = 0;
	var services = []
	return {
		list: () => {
			services = [
				{
					id: cont++,
					nombre: 'Electricidad',
					descripcion: 'Lorem ipsum dolor sit amet repellat.'
				},
				{
					id: cont++,
					nombre: 'Auxilio Mecanico',
					descripcion: 'Lorem ipsum dolor sit amet repellat.'
				},
				{
					id: cont++,
					nombre: 'Chofer reemplazo',
					descripcion: 'Lorem ipsum dolor sit amet repellat.'
				}
			]
			return services
		},
		save: (service) => {
			return services.push(service);
		},
		delete: (id) => {
			var newArray = services.filter(service => service.id != id);
			return services = newArray;
		},
		detail: (id) => {
			return services.filter(service => service.id == id)[0];
		}
	}
});
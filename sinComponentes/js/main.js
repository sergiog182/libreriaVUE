var parte1 = new Vue({
	el: "#app",
	data: {
		name: "Sergio"
	},
	methods: {
		revertir: function() {
			this.name = this.name.split('').reverse().join('')
		}
	}
});

var parte2 = new Vue({
	el: "#app2",
	data: {
		first_name: "",
		last_name: "",
		formSubmitted: false
	},
	methods: {
		isFormValid: function() {
			return this.first_name != "" && this.last_name != "";
		},
		validarDatos: function() {
			this.formSubmitted = true;
		}
	}
});

var parte2 = new Vue({
	el: "#app3",
	data: {
		primero: 0,
		segundo: 0
	},
	computed:{
		total: function() {
			return parseInt(this.primero) + parseInt(this.segundo);
		}
	}
});

var parte4 = new Vue({
	el: "#app4",
	data: {
		nombres: "",
		apellidos: "",
		comentario: "",
		errorComentario: false
	},
	methods: {
		isFormValid: function() {
			return this.nombres != "" && this.apellidos != "";
		},
		validarDatos: function() {
			this.errorComentario = true
		}
	},
	computed: {
		mensajeError: function () {
			var val = this.comentario.trim();
			if (val == "") {
				return "* Debes incluir un comentario";
			} else if (val.length < 5) {
				return "* El comnetario debe ser mayor a 5 caracteres";
			} else if (val.length > 20) {
				return "* El comnetario debe ser menor a 20 caracteres";
			}
			//return true;
			//return this.comentario.trim() == "" ? true : false;
		}
	}
});

var parte5 = new Vue({
	el: "#app5",
	data: {
		experienceYears: 0
	},
	methods:{
		addYear: function() {
			this.experienceYears++
		},
		takeYear: function () {
			this.experienceYears--
		}
	}
});

var parte6 = new Vue({
	el: "#app6",
	data: {
		restaurants: [
			"Italiano",
			"Mexicano",
			"Mediterraneo"
		],
		newRestaurant: ''
	},
	methods: {
		addRestaruant: function(value) {
			if (this.newRestaurant.trim() != '') {
				this.restaurants.push(this.newRestaurant);
				this.newRestaurant = '';
			} else {
				alert("nombre del restaurante es obligatorio");
			}
		},
		eliminatRestaruante: function(value) {
			this.restaurants.splice(value, 1);
		}
	}
});
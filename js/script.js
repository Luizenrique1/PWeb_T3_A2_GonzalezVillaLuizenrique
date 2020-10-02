function mostrar_curp(nombre, apep, apem, fecha, sex, enti){
	alert("Tu CURP es "+(apep.substring(0,2)+apem.substring(0,1)+nombre.substring(0,1)+fecha.substring(2,4)+fecha.substring(5,7)+fecha.substring(8,10)+sex+enti.substring(0, 1)+enti.substring(enti.length-1, enti.length)).toUpperCase()+"RRL18");
	//aaaa-mm-dd
	Torre
}

function cambiar_numeros(numero){
	alert("Binario: "+numero.toString(2)+"\nOctal: "+numero.toString(8)+"\nHexadecimal: "+numero.toString(16));
}

function ejercicio3(cadena, letra){
	var vocales = 0;
	var conso = 0;
	var con_letra = 0;
	var cadena_loca="";
	for (var i = 0; i < cadena.length; i++) {
		if (cadena.substring(i, i+1)=="a" || cadena.substring(i, i+1)=="e" || cadena.substring(i, i+1)=="i" || cadena.substring(i, i+1)=="o" || cadena.substring(i, i+1)=="u") {
			vocales++;
		}else{
			conso++;
		}
		if (cadena.substring(i, i+1)==letra) {
			con_letra++;
		}
	}
	for (var i = 0; i < cadena.length; i++) {
		if (i%2==0) {
			cadena_loca = cadena_loca+(cadena.substring(i, i+1)).toUpperCase();
		}else{
			cadena_loca = cadena_loca+cadena.substring(i, i+1);
		}
	}
	alert("vocales: "+vocales+"\nConsonantes: "+conso+"\nLetra especifica: "+con_letra+"\nCaDeNa LoCa: "+cadena_loca);
}

function prueba(){
	var letra = a;
	if ("a"==letra) {
		alert("iguales");
	}
}
var number1 = "";
var number2 = "";
var operation1 = "";
var isNewNumber = true;

function eraseValue() {
	var visor = document.getElementById("inp_text_visor").value;

	if (visor.length > 1) {
		visor = visor.substring(0, visor.length - 1);
	} else {
		visor = "0"
	}

	document.getElementById("inp_text_visor").value = visor;
}

function number(num) {
	var visor = document.getElementById("inp_text_visor").value;
	if (visor.length >= 10) {
		return;
	}

	if (visor == "0" || isNewNumber) {
		document.getElementById("inp_text_visor").value = num;
		isNewNumber = false;
	}
	else
		document.getElementById("inp_text_visor").value += num;
}

function operation(oper) {
	if (number1 == "") {
		number1 = document.getElementById("inp_text_visor").value;
		operation1 = oper;
		isNewNumber = true;
	} else {
		if (isNewNumber) {
			operation1 = oper;
		} else {
			calculate();
			number1 = document.getElementById("inp_text_visor").value;
			operation1 = oper;
		}
	}
}

function comma() {
	var visor = document.getElementById("inp_text_visor").value;
	if (visor.indexOf(",") == -1)
		document.getElementById("inp_text_visor").value += ",";
}

function calculate() {
	if (number1 == "") {
		return;
	}

	number2 = document.getElementById("inp_text_visor").value;

	// Fix Locale
	number1 = number1.replace(",", ".");
	number2 = number2.replace(",", ".");

	var result;
	switch (operation1) {
		case '/':
			result = parseFloat(number1) / parseFloat(number2);
			break;
		case 'x':
			result = parseFloat(number1) * parseFloat(number2);
			break;
		case '-':
			result = parseFloat(number1) - parseFloat(number2);
			break;
		case '+':
			result = parseFloat(number1) + parseFloat(number2);
			break;
	}

	// Fix Locale
	result = result.toString().replace(".", ",");

	document.getElementById("inp_text_visor").value = result;

	number1 = "";
	number2 = "";
	operation1 = "";
	isNewNumber = true;
}

function clearZero() {
	var visor = document.getElementById("inp_text_visor").value;

	if (visor == "0") {
		document.getElementById("inp_text_visor").value = ""
	}
}

function restoreZero() {
	var visor = document.getElementById("inp_text_visor").value;

	if (visor == "") {
		document.getElementById("inp_text_visor").value = "0";
	}
}

function validateInput() {
	// Only Numbers (ASCII Table)
	if ((event.keyCode < 44 || event.keyCode > 45) && (event.keyCode < 48 || event.keyCode > 57))	 {
		event.returnValue = false;
	} else {
		if (event.keyCode == 44) {
			comma();
			event.returnValue = false;
		}
	}
}
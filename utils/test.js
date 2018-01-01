const test = (name) => (input) => (operation) => (output) => {
	//console.log(operation);
	const results = operation(input);
	const passed = results === output;
	passed? 
		console.log(name, '\nOK : Test Passed!',' \nResults : ', results, '\nExpected : ', output)
	:   console.log(name, '\nBYE: Test Failed!',' \nResults : ', results, '\nExpected : ', output);

	return;
};
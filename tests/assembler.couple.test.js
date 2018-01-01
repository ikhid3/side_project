const test_coupling= (util, assembler) => {
	const single = 1; 
	const multiple = 3;
	const tag = '<div>'; 
	const complete_tag = '<div></div>';
	const no_embed = '';
	const embed = "text"; 
	const embedded = '<div>text</div>'; 
	const sumofparts = [
		assembler.build(1)('')(tag),
		assembler.build(2)('')('<p>'),
	]

	//Test to build one empty tag
	util('couple 1 different tag with 2 same')
		(sumofparts)
		(assembler.couple)
		('<div></div>'.concat('<p></p>'.repeat(2)));	
}

test_coupling(test, assembler());




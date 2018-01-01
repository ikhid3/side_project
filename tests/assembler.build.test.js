const test_building = (util, build) => {
	const single = 1; 
	const multiple = 3;
	const tag = '<div>'; 
	const complete_tag = '<div></div>';
	const no_embed = '';
	const embed = "text"; 
	const embedded = '<div>text</div>'; 

	//Test to build one empty tag
	util('tag to complete tag')
		(tag)
		(build(single)(no_embed))
		(complete_tag);

	//Test to build one tag with text
	util('one tag containing text')
		(tag)
		(build(single)(embed))
		(embedded);

	//Test to build multiple empty tags
	util('multiple empty tags test')
		(tag)
		(build(multiple)(no_embed))
		(complete_tag.repeat(multiple));

	//Test to build multiple empty tags
	util('multiple embedded tags test')
		(tag)
		(build(multiple)(embed))
		(embedded.repeat(multiple));
}

test_building(test, assembler().build);




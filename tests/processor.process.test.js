const test_processing = (util, process, build) => {
	const single = 1; 
	const multiple = 3;
	const tag = '<div>'; 
	const complete_tag = '<div></div>';
	const no_embed = '';
	const embed = "text"; 
	const embedded = '<div>text</div>'; 

	//Test to build one empty tag
	util('process one tag')
		([{container: {block : build(1)('')(tag)}}])
		(process)
		(complete_tag);
}

test_processing(test, processor().process, assembler().build);




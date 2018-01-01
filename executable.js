const brain = processor();
const service = {assemble : assembler()};

const cards = [title(service.assemble), total(service.assemble)];

$(document).ready(function(){
	$('body').prepend($(brain.process(cards)));
});
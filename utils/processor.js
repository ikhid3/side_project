const processor = () => {	
	const process = (memory) => 
	   			     memory.map((layout) => layout.container.block)
	   			           .join('');	
	return {process};
};
const brain = processor(); 
const memory = [];




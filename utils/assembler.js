const assembler = () => {
	const build = (count) => (embedded) => (part) => part.concat(embedded).concat(part.replace(/</, '</')).repeat(count);
	const couple = (parts) => parts.join('');
	return {build, couple};
}

const service = assembler();
let app = brain.process([title(service), total(service)]);
const title_plus_total = (embedded, util) => {	
	const container = {block : util.build(1)(embedded)('<div>')};
	return {container};
}

memory.push(title_plus_total(app, service));



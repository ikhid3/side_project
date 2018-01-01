const total = (util) => {
	const label = {block : util.build(1)('TOTAL : $ ')('<label>')};
	const display= {block : util.build(1)('0.00')('<div>')};
	const container = {block : util.build(1)(util.couple([label.block, display.block]))('<div>')};
	return {container};
}
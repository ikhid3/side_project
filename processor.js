const container = '<div>';
const label_block = '<label>';
const display_block = '<div>';

const pipe = (...fns) => x => fns.reduce((v,f) => f(v), x);
const compose = (...fns) => x => fns.reduceRight((v,f) => f(v), x);
const attach = (part) => $(part);
const assemble = (count) => pipe(build(count), attach);

const build = (count) => part => part.concat(part.replace(/</, '</')).repeat(count);
const block = (container) => (embedded) => build(1)(container).replace(/></, '>'+embedded+'<');
const couple = (part_a) => (part_b) => part_a.concat(part_b);

function process(stream){
	



}
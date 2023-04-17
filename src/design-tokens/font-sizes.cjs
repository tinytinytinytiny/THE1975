const css = `
/* @link https://utopia.fyi/type/calculator?c=398,14,1.25,1568,16,1.414,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

:root {
  --step--2: clamp(0.50rem, calc(0.58rem + -0.08vw), 0.56rem);
  --step--1: clamp(0.70rem, calc(0.70rem + 0.01vw), 0.71rem);
  --step-0: clamp(0.88rem, calc(0.83rem + 0.17vw), 1.00rem);
  --step-1: clamp(1.09rem, calc(0.98rem + 0.44vw), 1.41rem);
  --step-2: clamp(1.37rem, calc(1.15rem + 0.86vw), 2.00rem);
  --step-3: clamp(1.71rem, calc(1.33rem + 1.53vw), 2.83rem);
  --step-4: clamp(2.14rem, calc(1.50rem + 2.55vw), 4.00rem);
  --step-5: clamp(2.67rem, calc(1.66rem + 4.08vw), 5.65rem);
}
`;

const tokens = {};

css.split('{')[1].split('}')[0].split(';')
	.map(x =>
		x
			.replace(/\/\*((?!\*\/).|\n)+\*\/+/g, '')
			.trim()
			.replace('--step-', '')
	)
	.filter(x => x)
	.forEach((x) => {
		const [key, value] = x.split(': ');
		tokens[key] = value;
	});

module.exports = tokens;
const css = `
/* @link https://utopia.fyi/space/calculator?c=398,14,1.25,1568,16,1.414,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6|9,s-l&g=s,l,xl,12 */

:root {
  --space-3xs: clamp(0.25rem, calc(0.25rem + 0.00vw), 0.25rem);
  --space-2xs: clamp(0.44rem, calc(0.42rem + 0.09vw), 0.50rem);
  --space-xs: clamp(0.69rem, calc(0.67rem + 0.09vw), 0.75rem);
  --space-s: clamp(0.88rem, calc(0.83rem + 0.17vw), 1.00rem);
  --space-m: clamp(1.31rem, calc(1.25rem + 0.26vw), 1.50rem);
  --space-l: clamp(1.75rem, calc(1.66rem + 0.34vw), 2.00rem);
  --space-xl: clamp(2.63rem, calc(2.50rem + 0.51vw), 3.00rem);
  --space-2xl: clamp(3.50rem, calc(3.33rem + 0.68vw), 4.00rem);
  --space-3xl: clamp(5.25rem, calc(4.99rem + 1.03vw), 6.00rem);
  --space-4xl: clamp(7.88rem, calc(7.49rem + 1.54vw), 9.00rem);

  /* One-up pairs */
  --space-3xs-2xs: clamp(0.25rem, calc(0.16rem + 0.34vw), 0.50rem);
  --space-2xs-xs: clamp(0.44rem, calc(0.33rem + 0.43vw), 0.75rem);
  --space-xs-s: clamp(0.69rem, calc(0.58rem + 0.43vw), 1.00rem);
  --space-s-m: clamp(0.88rem, calc(0.66rem + 0.85vw), 1.50rem);
  --space-m-l: clamp(1.31rem, calc(1.08rem + 0.94vw), 2.00rem);
  --space-l-xl: clamp(1.75rem, calc(1.32rem + 1.71vw), 3.00rem);
  --space-xl-2xl: clamp(2.63rem, calc(2.16rem + 1.88vw), 4.00rem);
  --space-2xl-3xl: clamp(3.50rem, calc(2.65rem + 3.42vw), 6.00rem);
  --space-3xl-4xl: clamp(5.25rem, calc(3.97rem + 5.13vw), 9.00rem);

  /* Custom pairs */
  --space-s-l: clamp(0.88rem, calc(0.49rem + 1.54vw), 2.00rem);
}
`;

const tokens = {
	'0': '0'
};

css.split('{')[1].split('}')[0].split(';')
	.map(x =>
		x
			.replace(/\/\*((?!\*\/).|\n)+\*\/+/g, '')
			.trim()
			.replace('--space-', '')
	)
	.filter(x => x)
	.forEach((x) => {
		const [key, value] = x.split(': ');
		tokens[key] = value;
		// tokens[`${key}-static`] = remToPx(value);
	});

// function remToPx(string) {
// 	const matchRem = new RegExp(/[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?(rem)/, 'g');
// 	const convertToPx = (x) => `${Math.round(Number(x.split('rem')[0]) * 16)}px`;
// 	return string.replaceAll(matchRem, convertToPx);
// }

module.exports = tokens;  
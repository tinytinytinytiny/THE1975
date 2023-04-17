export function findFileInGlob(modules, fileToMatch) {
	return modules[Object.keys(modules).find(x => x.split('/')[x.split('/').length - 1] === fileToMatch)]();
}
import { readFile, writeFile } from 'fs/promises';

const filesToUpdate = process.argv.slice(2);

const html = await readFile('index.html', { encoding: 'utf-8' });
const config = await readFile('tailwind.config.mjs', { encoding: 'utf-8' });
const css = await readFile('index.css', { encoding: 'utf-8' });
const response = await fetch('https://play.tailwindcss.com/api/share', {
	headers: {
		accept: '*/*',
		'content-type': 'application/json',
		priority: 'u=1, i'
	},
	body: JSON.stringify({
		config,
		html,
		css,
		version: '3'
	}),
	method: 'POST'
});

const { ID } = await response.json();
console.log('Generated play.tailwindcss ID', ID);

async function updateFile(relativeFilePath) {
	const fileContents = await readFile(relativeFilePath, { encoding: 'utf-8' });
	const updatedFileContents = fileContents.replace(
		/https:\/\/play.tailwindcss.com\/[a-zA-Z0-9]+/,
		`https://play.tailwindcss.com/${ID}`
	);
	await writeFile(relativeFilePath, updatedFileContents, { encoding: 'utf-8' });
}

await Promise.all(filesToUpdate.map(relativeFilePath => updateFile(relativeFilePath)));

import { readFile } from 'fs/promises';

const fileContents = await readFile('index.html', { encoding: 'utf-8' });

const assignmentMatches = fileContents.matchAll(/\((\d+)\)/g);
const sortedAssignments = Array.from(assignmentMatches)
	.map((match) => parseInt(match[1]))
	.sort((a, b) => (a > b ? 1 : -1));

let previousAssignment = 0;
let checkedForHint = true;
for (const assignment of sortedAssignments) {
	if (checkedForHint) {
		if (assignment !== previousAssignment + 1) {
			throw new Error(
				`There is a gap in assignments: From (${previousAssignment}) to (${assignment})`
			);
		}
		previousAssignment = assignment;
		checkedForHint = false;
		continue;
	}
	if (assignment !== previousAssignment) {
		throw new Error(
			`There seems to be a hint missing for assignment ${previousAssignment}, since ${assignment} was the next match.`
		);
	}
    checkedForHint = true;
}

console.log(`Check successful for ${previousAssignment} assignments!`);

// Given
var endorsements = [
{ skill: 'css', user: 'Bill' },
{ skill: 'javascript', user: 'Chad' },
{ skill: 'javascript', user: 'Bill' },
{ skill: 'css', user: 'Sue' },
{ skill: 'javascript', user: 'Sue' },
{ skill: 'html', user: 'Sue' }
];

getSkills = (endorsements) => {
	let skillUsersMap = {};
    for (let endorsement of endorsements) {
        if (!skillUsersMap[endorsement.skill]) {
        	skillUsersMap[endorsement.skill] = {
        		skill: endorsement.skill,
        		user: [endorsement.user],
        		count: 1
        	};
        } else {
        	skillUsersMap[endorsement.skill].user.push(endorsement.user);
        	skillUsersMap[endorsement.skill].count += 1;
        }
    }
    return Object.values(skillUsersMap);
}

getSkills(endorsements);

// Result
// [
// { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
// { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
// { skill: 'html', user: ['Sue'], count: 1 }
// ];

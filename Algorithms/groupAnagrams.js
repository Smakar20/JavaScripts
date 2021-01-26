/**
 * Group a list of words into a list of lists of words. Group by anagrams.

    Input = ['dog', 'elvis', 'forest', 'fortes', 'foster', 'goat',
             'god', 'heros', 'horse', 'lives', 'shore', 'softer']
    Output:
     [
         ['elvis', 'lives'],
         ['forest', 'fortes', 'foster', 'softer'],
         ['heros', 'horse', 'shore'],
         ['dog', 'god'],
         ['goat']
     ]
    
    For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case
 */
function sortString(str) {
  return str.split('').sort().join('');
}

(function groupByAnagram(input){
  const sorted = input.map((i) => sortString(i));
  const sortedMap = {};
  sorted.forEach((s, i) =>{
    if(!sortedMap[s]) {
      sortedMap[s] = [];
    }
    sortedMap[s].push(input[i]);
  })
  /*
  // alternate approach:
  
    for(var i of input){
      var sortedStr = JSON.stringify(i.split('').sort());
        if(!sortedMap[sortedStr]){
            sortedMap[sortedStr] = []
        }
        sortedMap[sortedStr].push(i);
    }
  */
  return Object.values(sortedMap);
})(['dog', 'elvis', 'forest', 'fortes', 'foster', 'goat',
             'god', 'heros', 'horse', 'lives', 'shore', 'softer']);


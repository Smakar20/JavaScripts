/*
In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word 
successor. For example, the root an, followed by other, which can form another word another.

Now, given a dictionary consisting of many roots and a sentence. You need to replace all the successor in the sentence with the root 
forming it. If a successor has many roots can form it, replace it with the root with the shortest length.

You need to output the sentence after the replacement.

Example 1:

Input: dict = ["cat", "bat", "rat"]
sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
 */


var replaceWords = function(dict, sentence) {
    var root = new Trie();
    dict.forEach((d)=>{
        buildTrie(root,d,d);
    });
    var output = [];
    for (var s of sentence.split(' ')){
      var current = []
      searchWord(root, s, current);
      output.push((current.length != 0) ? current[0] : s);
    }
   
    return output.join(' ');
};


function searchWord(root, word, output){
    if(root.isWord){
      output.push(root.word)
      return output;
    }
    var node = root.children.get(word[0]);
    if(node){
        searchWord(node,word.slice(1),output);
    }
}

function buildTrie(root, curWord, word){
    if(curWord === ''){
        root.isWord = true;
        root.word = word;
        return;
    }
    var node = root.children.get(curWord[0]);
    if(node === undefined){
      node = new Trie();
      root.children.set(curWord[0], node); 
    }
    buildTrie(node,curWord.slice(1),word);
}

class Trie{
  constructor(){
    this.children = new Map()
    this.isWord = false
    this.word = '';
  }
}


/*
Input: dict = ["cat", "bat", "rat"]
sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
 */
 
replaceWords(["cat", "bat", "rat"],"the cattle was rattled by the battery");

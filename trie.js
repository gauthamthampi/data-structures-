class TrieNode{
    constructor(){
        this.children = {}
        this.isEndWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    startsWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[prefix]){
                return false
            }
            node = node.children[char]
        }
        return true
    }

    

    autocomplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return []; // No words with given prefix
            }
            node = node.children[char];
        }
        // Perform DFS to find all words with given prefix
        const result = [];
        this.dfs(node, prefix, result);
        return result;
    }

   
    dfs(node, prefix, result) {
        if (node.isEndOfWord) {
            result.push(prefix); // Add word to result
        }
        for (let char in node.children) {
            this.dfs(node.children[char], prefix + char, result); // Recursively search child nodes
        }
    }
}

const trie = new Trie()
trie.insert("apple")
trie.insert("apply")
trie.insert("applications")
trie.insert("apps")
console.log(trie.search("apple")); 
console.log(trie.startsWith("a"));
console.log(trie.autocomplete("app"));
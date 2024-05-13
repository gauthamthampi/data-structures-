class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return node !== null && node.isEndOfWord;
    }

    wordsWithPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!(char in node.children)) {
                return [];
            }
            node = node.children[char];
        }
        return this._findAllWords(node, prefix);
    }

    _findAllWords(node, prefix) {
        let words = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (let char in node.children) {
            words = words.concat(this._findAllWords(node.children[char], prefix + char));
        }
        return words;
    }
}


let trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple")); 
console.log(trie.search("app"));  
console.log(trie.search("banana")); 
trie.insert("apples");
trie.insert("banana");
trie.insert("application");
console.log(trie.wordsWithPrefix("app")); 

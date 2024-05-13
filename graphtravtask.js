class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(v1, v2) {
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }

    dfsRecursive(startVertex) {
        let visited = new Set();

        const dfs = (vertex) => {
            visited.add(vertex);
            console.log(vertex);

            let neighbors = this.adjList.get(vertex);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };

        dfs(startVertex);
    }

    dfsIterative(startVertex) {
        let visited = new Set();
        let stack = [startVertex];
    
        while (stack.length > 0) {
            let vertex = stack.pop();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                console.log(vertex);
    
                let neighbors = this.adjList.get(vertex);
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
    }

    bfs(startVertex) {
        let visited = new Set();
        let queue = [startVertex];
        visited.add(startVertex);

        while (queue.length > 0) {
            let vertex = queue.shift();
            console.log(vertex);

            let neighbors = this.adjList.get(vertex);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Example usage
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

console.log("DFS Recursive:");
graph.dfsRecursive("A");
console.log("DFS Iterative:");
graph.dfsIterative("A");
console.log("BFS:");
graph.bfs("A");

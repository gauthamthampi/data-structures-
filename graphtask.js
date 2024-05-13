//add edge and vertex
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
        if (!this.adjList.has(v1) || !this.adjList.has(v2)) {
            return false;
        }
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }

    dfs(startVertex) {
        let visited = {};
        this._dfsUtil(startVertex, visited);
    }

    _dfsUtil(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);

        let neighbors = this.adjList.get(vertex);
        for (let neighbor of neighbors) {
            if (!visited[neighbor]) {
                this._dfsUtil(neighbor, visited);
            }
        }
    }

    bfs(startVertex) {
        let visited = {};
        let queue = [];

        visited[startVertex] = true;
        queue.push(startVertex);

        while (queue.length > 0) {
            let currentVertex = queue.shift();
            console.log(currentVertex);

            let neighbors = this.adjList.get(currentVertex);
            for (let neighbor of neighbors) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
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
graph.addEdge("A", "B");
graph.addEdge("B", "C");
console.log(graph.adjList);
graph.dfs("A");
graph.bfs("A");



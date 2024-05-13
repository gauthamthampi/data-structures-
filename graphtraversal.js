class Graph{
    constructor(){
        this.adjList = {}
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set()
        }
    }

    addEdges(v1,v2){
        if(!this.adjList[v1]){
           this.addVertex(v1)
        }
        if(!this.adjList[v2]){
            this.addVertex(v2)
         }

         this.adjList[v1].add(v2)
         this.adjList[v2].add(v1)

    }

    display(){
        for(let vertex in this.adjList){
            console.log(vertex+"=>"+[...this.adjList[vertex]]);
        }
    }

    dfs(vertex , visited = {}){
        console.log(vertex);
        visited[vertex] = true

        for(let neighbor of this.adjList[vertex]){
            if(!visited[neighbor]){
                this.dfs(neighbor,visited)
            }
        }
    }

    bfs(start){
        let queue = [start]
        let visited = {}
        visited[start] = true

       while(queue.length>0){
       const vertex = queue.shift()
        console.log(vertex);
        for(let neighbor of this.adjList[vertex]){
            if(!visited[neighbor]){
                queue.push(neighbor)
                visited[neighbor] = true
            }
        }
       }
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdges("A","B")
graph.addEdges("B","C")
graph.display()
graph.dfs("A")
graph.bfs("B")
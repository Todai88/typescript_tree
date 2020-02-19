import {PackageNode} from "./PackageNode";

let a = new PackageNode('a')
let b = new PackageNode('b')
let c = new PackageNode('c')
let d = new PackageNode('d')
let e = new PackageNode('e')

a.addEdge(b)
a.addEdge(d)
b.addEdge(c)
b.addEdge(e)
c.addEdge(d)
c.addEdge(e)

let resolved : PackageNode[] = [];
a.resolveDependency(resolved);

let used = process.memoryUsage();
Object.keys(used).map((key) => {
    console.log(`${key}: ${Math.round(Object(used)[key] / 1024 / 1024 * 100) / 100} MB`);
})

console.log(resolved);

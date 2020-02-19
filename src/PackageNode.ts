import {cloneDeep} from 'lodash';

export class PackageNode {
    
    name : string;
    edges : PackageNode[];

    constructor(name : string) { 
        this.name = name;
        this.edges = [];
    }

    addEdge(edge :PackageNode) : void {
        this.edges.push(edge);
    }

    resolveDependency(resolved : PackageNode[]) : PackageNode[] {
        console.log(this.name);
        let resolvedClone = cloneDeep(resolved);
        this.edges.forEach((e : PackageNode) => {
            if (!resolvedClone.includes(e)) {
                e.resolveDependency(resolvedClone);
            }
        });
        resolvedClone.push(this);
        return resolvedClone;
    }
}

import { PackageNode } from "./../src/PackageNode";

describe("PackageNode", () => {
    describe("given a new PackageNode", () => { 
        let pn = new PackageNode("a");
        it("edges should be empty", () => {
            expect(pn.edges.length).toEqual(0);
        })
        it("name should be set", () => {
            expect(pn.name).toEqual("a");
        })
    })
    describe("given a PackageNode with two dependencies", () => {
        let a = new PackageNode("a");
        let b = new PackageNode("b");
        let c = new PackageNode("c");
        a.addEdge(b);
        a.addEdge(c);
        it("edges should have length 2", () => {
            expect(a.edges.length).toBe(2);
        })
        it("should resolve dependencies")
    })
});

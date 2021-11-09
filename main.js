let jsonParser = require('./helper-module.js')
// let topology = require('./topology.js')
let fs = require('fs')
let topology = require('./topology.js');
const { writer } = require('repl');

// const topology = JSON.parse("./topology.json")

function main (pathsJSON, topologyJSON) {
        const {slices, areas} = topologyJSON.definitions;
        let slicesWriter = fs.createWriteStream(pathsJSON.slices)
            slices.forEach( slice => {
                slicesWriter.write(jsonParser.slice(slice) + "\r\n")
            });
        
        let areasWriter = fs.createWriteStream(pathsJSON.areas)
            areas.forEach( area => 
                areasWriter.write(jsonParser.area(area) + "\r\n" )
        )

        const {nodes} = topologyJSON;

        let nodesWriter = fs.createWriteStream(pathsJSON.nodes)
            nodes.forEach( node => 
                nodesWriter.write(jsonParser.node(node) + "\r\n" )
        )

}


const paths = {
    nodes: "./nodes.txt",
    slices: "./slices.txt",
    areas: "./areas.txt"
}
main(paths, topology)
// console.log(jsonParser.node(topology.nodes[0]))
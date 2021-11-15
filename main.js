let jsonParser = require('./json-parser-module.js')
let getTopologyMapJson = require('./json-topology-module.js')
let jsonTopParser = require('./json-topology-parser-module.js')
let fs = require('fs')
let topology = require('./topology.js');

function parseSpacedStrings (operatorName) {
    nameArr = operatorName.split(' ')
    return nameArr.join('-')
}

function main (topologyJSON) {
        const {slices, areas} = topologyJSON.definitions;
        let fileWriter = fs.createWriteStream("./output.txt")
        fileWriter.write(';; slices')
        fileWriter.write("\r\n")

        slices.forEach( slice => {
            fileWriter.write(jsonParser.slice(slice) + "\r\n")
        });

        fileWriter.write(';; areas')
        fileWriter.write("\r\n")
        areas.forEach( area => 
            fileWriter.write(jsonParser.area(area) + "\r\n" )
        )

        fileWriter.write(';; nodes')
        fileWriter.write("\r\n")
        const {nodes} = topologyJSON;
        nodes.forEach( node => 
            fileWriter.write(jsonParser.node(node) + "\r\n" )
        )

        fileWriter.write(';; topology')
        fileWriter.write("\r\n")
        const mappedTopologyJson = getTopologyMapJson(topology.definitions.slices)

        const operators = Object.keys(mappedTopologyJson)
        let opName;
        let opOCUS;
        let ocuID;
        let ocuODUs;
        let oduORUs;

        operators.forEach(operator => {
            opName = parseSpacedStrings(operator)
            fileWriter.write("\r\n")

            fileWriter.write(`;; Topology for ${operator}`)
            fileWriter.write("\r\n")
            fileWriter.write(jsonTopParser.operator(opName))
            fileWriter.write("\r\n")



            opOCUS = Object.keys(mappedTopologyJson[operator])


            opOCUS.forEach( ocu => {
                ocuID = jsonTopParser.getNodeId(ocu)
                fileWriter.write(jsonTopParser.operatorOCU_CP(opName, ocuID) + "\r\n")
                fileWriter.write(jsonTopParser.operatorOCU_UP(opName, ocuID) + "\r\n")
                fileWriter.write("\r\n")

                ocuODUs = Object.keys(mappedTopologyJson[operator][ocu])
                
                ocuODUs.forEach( odu => {
                    fileWriter.write(jsonTopParser.ocuOdu(ocuID, odu) + "\r\n")

                    oduORUs = mappedTopologyJson[operator][ocu][odu]


                    oduORUs.forEach(oru => {
                        fileWriter.write(jsonTopParser.oduOru(odu, oru)+ "\r\n")
                    })
                })
            
        })


        

    })
}



main(topology)

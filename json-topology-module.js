const getTopologyMapJson = (slicesJsonArr) => {
    let topology = {}
    slicesJsonArr.forEach(slice => {
        topology[slice.name] = getSliceTopology(slice.node)
    });

    return topology;
}

const getSliceTopology = (nodeArr) => {
    const {OCU, OCUlastIndex} = getSliceOCUs(nodeArr)
    const remainingNodes = nodeArr.slice(OCUlastIndex)

    let results = {}

    OCU.forEach( ocu => {
        results[ocu] = getODUsforOCU(ocu, nodeArr)
    });

    return results;


}

const getSliceOCUs = (nodeArr) => {
    const OCU = []
    let OCUlastIndex = 0
    
    for (let i = 0; i < nodeArr.length; i++) {
        if (nodeArr[i].slice(0,4) === "O-CU" && !arrayHasNode(OCU, nodeArr[i])) {
            OCU.push(nodeArr[i]);
            OCUlastIndex = i
        }
    }
    return {OCU, OCUlastIndex}
}

const getBothOCUs = (nodeArr) => {
    const OCU = []
    for (let i = 0; i < nodeArr.length; i++) {
        if (nodeArr[i].slice(0,4) === "O-CU" && !arrayHasNode(OCU, nodeArr[i])) {
            OCU.push(nodeArr[i]);
            OCUlastIndex = i
        }
    }


}
const getODUsforOCU = (OCUName, nodeArray) => {
    const orus = {}
    const ocuID = getNodeIdNum(OCUName)
    const ocuIDLength = ocuID.length

    nodeArray.forEach(node => {
        if (getNodeIdNum(node).slice(0, ocuIDLength) === ocuID && 
            getNodeFunction(node) === 'O-DU') {
            orus[node] = getORUsforODU(node, nodeArray)
        }
    });

    return orus;


}

const getNodeIdNum = (nodeNameStr) => {
    if(nodeNameStr.includes('O-CU')) {
        return nodeNameStr.slice(8)
    } else {
        return nodeNameStr.slice(5)
    }
    
}

const getNodeFunction = (nodeNameStr) =>{
    if(nodeNameStr.includes('O-CU')) {
        return nodeNameStr.slice(0,7)
    } else {
        return nodeNameStr.slice(0,4)
    }
}

const getORUsforODU = (ODUname, nodeArray) => {
    const oruID = getNodeIdNum(ODUname)
    const oruIDlength = oruID.length;
    const odus = []

    nodeArray.forEach(node => {
        if (getNodeIdNum(node).slice(0, oruIDlength) === oruID &&
            getNodeFunction(node) === 'O-RU') {
            odus.push(node)
        }
    });

    return odus;

    
}

//remove CP-UP duplicates
const arrayHasNode = (nodeArr, nodeName) => {
    const nodeId = getNodeIdNum(nodeName)
    let check = false;
    let i = 0;

    while (i < nodeArr.length && !check) {
        if (getNodeIdNum(nodeArr[i]) === nodeId) {
            check = true;
        }
        i++;
    }

    return check
}



module.exports = getTopologyMapJson
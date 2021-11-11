const jsonTopologyParser = {
    operatorOCU_UP: function (opName, ocuID) {
        return `(op-ocu ${opName} O-CU-UP-${ocuID})`
    },

    operatorOCU_CP: function (opName, ocuID) {
        return `(op-ocu ${opName} O-CU-CP-${ocuID})`
    },
    
    ocuOdu: function(ocuID, oduName) {
        return `(ocu-odu O-CU-CP-${ocuID} O-CU-UP-${ocuID} ${oduName})`
    },

    oduOru: function(oduName, oruName) {
        return `(odu-oru ${oduName} ${oruName})`
    },

    getNodeId: function(componentName) {
            if(componentName.includes('O-CU')) {
                return componentName.slice(8)
            } else {
                return componentName.slice(5)
            }
    }
}

module.exports = jsonTopologyParser
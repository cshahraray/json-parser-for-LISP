
function parseSpacedStrings (operatorName) {
    nameArr = operatorName.split(' ')
    return nameArr.join('-')
}

const Json2ListParser = {
    slice: function (sliceJSON) {
        const {id, name, node} = sliceJSON
        return `(slice ${id} ${parseSpacedStrings(name)} (${node})`
    },

    area: function (areaJSON) {
        const {id, name, node} = areaJSON

        return `(area ${id} ${name} ${node})`
    },
    
    odu2Shop3: function (nodeJSON) {
        const {id, owner, area, x, y} = nodeJSON
    
        return `(node ${id} ${parseSpacedStrings(owner)} ${area} ${nodeJSON.function} ${x} ${y} )`

    },

    ocu2Shop3: function (nodeJSON) {
        const {id, owner, area} = nodeJSON;

        return `(node ${id} ${parseSpacedStrings(owner)} ${area} ${nodeJSON.function})`
    },

    oru2Shop3: function (nodeJSON) {
        const {id, owner, area, x, y, sector} = nodeJSON
        const func = nodeJSON.function;

        return `(node ${id} ${parseSpacedStrings(owner)} ${area} ${x} ${y})`
    },

    node: function (nodeJSON) {
        const type = nodeJSON.function.slice(0,4)
        switch(type) {
            case "O-DU":
                return this.odu2Shop3(nodeJSON);
            case "O-CU":
                return this.ocu2Shop3(nodeJSON);
            case "O-RU":
                return this.oru2Shop3(nodeJSON)
        }
    },
}

module.exports = Json2ListParser




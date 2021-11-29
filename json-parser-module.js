
function parseSpacedStrings (operatorName) {
    nameArr = operatorName.split(' ')
    return nameArr.join('-')
}

function parseArea (areaId) {
    switch (areaId) {
        case 0:
            return "North"
        case 1: 
            return "East"
        case 2:
            return "South"
        case 3:
            return "West"
    }
}


const Json2ListParser = {
    slice: function (sliceJSON) {
        const {id, name, node} = sliceJSON
        return `(slice ${id} ${parseSpacedStrings(name)} (${node})`
    },

    area: function (areaJSON) {
        const {id, name, node} = areaJSON

        return `(area ${name} (${node}))`
    },
    
    odu2Shop3: function (nodeJSON) {
        const {id, owner, area, x, y} = nodeJSON
    
        return `(node "${id}" ${parseSpacedStrings(owner)} ${parseArea(area)} ${nodeJSON.function})`

    },

    ocu2Shop3: function (nodeJSON) {
        const {id, owner, area} = nodeJSON;

        return `(node "${id}" ${parseSpacedStrings(owner)} ${parseArea(area)} ${nodeJSON.function})`
    },

    oru2Shop3: function (nodeJSON) {
        const {id, owner, area, x, y, sector} = nodeJSON
        const func = nodeJSON.function;
        let disaster = "false";
        let i = 0

        while (i < sector.length && disaster === "false") {
            if (sector[i].disaster === "true") {
                disaster = "true"
            }
            i++;
        }

        if (disaster === "true") {
            return `(node "${id}" ${parseSpacedStrings(owner)} ${parseArea(area)} ${func} "${disaster}")`
        } else {
            return `(node "${id}" ${parseSpacedStrings(owner)} ${parseArea(area)} ${func})`
        }

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




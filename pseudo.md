==================
JSON data structure:
==================
• slice: {id name array-of-nodes}
  Some nodes are O-CUs, some O-DUs, some O-RUs (controller, distributed, radio).
  O-CUs control multiple O-DUs, and O-DUs multiple O-RUs. An O-RU is a cell.
  Which O-RUs an O-DU controls is reflected by the naming convention!
  An O-DU can have O-RUs with different owners; likewise for an O-CU.
• area: array-of-nodes (here 'area' can be N,S,E,W).  Contains the nodes
  whose geographical location is in that area.
• node: if function = O-DU,
  {id owner area function x y}, 
  where 'area' is N,S,E,W.
  and if function = O-RU (a cell),
  {id owner area function array-of-sectors x y}.
• sector: {id power direction failed}

NOTE: a slice's "name" is the same as a node's "owner", and their
value is an operator's name.
=============
 --all strings alphaNum + char: '-' (except area->name)
slice: {
    id: (string),
    name: (string),
    node: (array of strings)
},

area: {
    id: (string),
    name: (string in ["North", "East", "South", "West"])
    node: (array of strings)
}

node: { (O-CU) 
    id: (string), begins with O-DU, O-CU, etc.
    owner: (string in ("Operator 1", ' " A", etc.))
    area: (num in (0..3) where 0-3 = NESW)
}

node: { (O-DU) 
    id: (string), begins with O-DU, O-CU, etc.
    owner: (string in ("Operator 1", ' " A", etc.))
    area: (num in (0..3) where 0-3 = NESW)
    function: (O-DU etc.)
    x: coord
    y: coord
}

node: { (O-RU) 
    id: (string), begins with O-DU, O-CU, etc.
    owner: (string in ("Operator 1", ' " A", etc.))
    area: (num in (0..3) where 0-3 = NESW)
    function: (O-RU etc.)
    x: coord
    y: coord
    sector: (array of sectors, see below)//should be renamed sectors
}

sector:
{
    id: "O-RU-11112-Sector1" (//begins with name of O-RU + "-Sector${num})
    power: (num)
    direction: (num)
    disaster: (bool)
}
------------
JSON array -> Lisp list 

helper methods:
getOperators (?)
getSMOs(?)

slice -> json2Lisp
takes slice JSON (above) returns in format
(slice id op capacity power [array of node ids])

ex:
(slice)
{
    id: "s0",
    name:"public safety", (owner)
    node: [ "O-CU-CP-111",
                    "O-CU-CP-112",
                    "O-CU-UP-111",
                    "O-CU-UP-112",
                    "O-DU-1111","]
}
becomes
(slice s0  publicsafety {*capacity?*} {*power?*} [nodes])
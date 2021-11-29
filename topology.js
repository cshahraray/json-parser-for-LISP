var topology = {
    definitions: {
        slices: [{
                id: "s0",
                name: "Public Safety",
                node: [
                    "O-CU-CP-111",
                    "O-CU-CP-112",
                    "O-CU-UP-111",
                    "O-CU-UP-112",
                    "O-DU-1111",
                    "O-DU-1112",
                    "O-DU-1121",
                    "O-DU-1122",
                    "O-RU-11111",
                    "O-RU-11112",
                    "O-RU-11113",
                    "O-RU-11121",
                    "O-RU-11122",
                    "O-RU-11123",
                    "O-RU-11211",
                    "O-RU-11212",
                    "O-RU-11213",
                    "O-RU-11221",
                    "O-RU-11222",
                    "O-RU-11223",
                    "O-CU-CP-121",
                    "O-CU-CP-122",
                    "O-CU-UP-121",
                    "O-CU-UP-122",
                    "O-DU-1211",
                    "O-DU-1212",
                    "O-DU-1221",
                    "O-DU-1222",
                    "O-RU-12111",
                    "O-RU-12112",
                    "O-RU-12113",
                    "O-RU-12121",
                    "O-RU-12122",
                    "O-RU-12123",
                    "O-RU-12211",
                    "O-RU-12212",
                    "O-RU-12213",
                    "O-RU-12221",
                    "O-RU-12222",
                    "O-RU-12223",
                    "O-CU-CP-131",
                    "O-CU-CP-132",
                    "O-CU-UP-131",
                    "O-CU-UP-132",
                    "O-DU-1311",
                    "O-DU-1312",
                    "O-DU-1321",
                    "O-DU-1322",
                    "O-RU-13111",
                    "O-RU-13112",
                    "O-RU-13113",
                    "O-RU-13121",
                    "O-RU-13122",
                    "O-RU-13123",
                    "O-RU-13211",
                    "O-RU-13212",
                    "O-RU-13213",
                    "O-RU-13221",
                    "O-RU-13222",
                    "O-RU-13223"
                ]
            },
            {
                id: "s1",
                name: "Operator A",
                node: [
                    "O-CU-CP-121",
                    "O-CU-CP-122",
                    "O-CU-UP-121",
                    "O-CU-UP-122",
                    "O-DU-1211",
                    "O-DU-1212",
                    "O-DU-1221",
                    "O-DU-1222",
                    "O-RU-12111",
                    "O-RU-12112",
                    "O-RU-12113",
                    "O-RU-12121",
                    "O-RU-12122",
                    "O-RU-12123",
                    "O-RU-12211",
                    "O-RU-12212",
                    "O-RU-12213",
                    "O-RU-12221",
                    "O-RU-12222",
                    "O-RU-12223"
                ]
            },
            {
                id: "s2",
                name: "Operator B",
                node: [
                    "O-CU-CP-111",
                    "O-CU-CP-112",
                    "O-CU-UP-111",
                    "O-CU-UP-112",
                    "O-DU-1111",
                    "O-DU-1112",
                    "O-DU-1121",
                    "O-DU-1122",
                    "O-RU-11111",
                    "O-RU-11112",
                    "O-RU-11113",
                    "O-RU-11121",
                    "O-RU-11122",
                    "O-RU-11123",
                    "O-RU-11211",
                    "O-RU-11212",
                    "O-RU-11213",
                    "O-RU-11221",
                    "O-RU-11222",
                    "O-RU-11223"
                ]
            },
            {
                id: "s3",
                name: "Operator C",
                node: [
                    "O-CU-CP-131",
                    "O-CU-CP-132",
                    "O-CU-UP-131",
                    "O-CU-UP-132",
                    "O-DU-1311",
                    "O-DU-1312",
                    "O-DU-1321",
                    "O-DU-1322",
                    "O-RU-13111",
                    "O-RU-13112",
                    "O-RU-13113",
                    "O-RU-13121",
                    "O-RU-13122",
                    "O-RU-13123",
                    "O-RU-13211",
                    "O-RU-13212",
                    "O-RU-13213",
                    "O-RU-13221",
                    "O-RU-13222",
                    "O-RU-13223"
                ],
            },
        ],
        areas: [{
                id: "a0",
                name: "North",
                node: [
                    "O-CU-CP-111",
                    "O-CU-CP-112",
                    "O-CU-CP-121",
                    "O-CU-CP-122",
                    "O-CU-CP-131",
                    "O-CU-CP-132",
                    "O-CU-UP-111",
                    "O-CU-UP-112",
                    "O-CU-UP-121",
                    "O-CU-UP-122",
                    "O-CU-UP-131",
                    "O-CU-UP-132",
                    "O-DU-1111",
                    "O-DU-1211",
                    "O-DU-1311",
                    "O-RU-11111",
                    "O-RU-11112",
                    "O-RU-11113",
                    "O-RU-12111",
                    "O-RU-12112",
                    "O-RU-12113",
                    "O-RU-13111",
                    "O-RU-13112",
                    "O-RU-13113",
                ],
            },
            {
                id: "a1",
                name: "East",
                node: [
                    "O-DU-1112",
                    "O-DU-1212",
                    "O-DU-1312",
                    "O-RU-11121",
                    "O-RU-11122",
                    "O-RU-11123",
                    "O-RU-12121",
                    "O-RU-12122",
                    "O-RU-12123",
                    "O-RU-13121",
                    "O-RU-13122",
                    "O-RU-13123"
                ],
            },
            {
                id: "a2",
                name: "South",
                node: [
                    "O-DU-1121",
                    "O-DU-1221",
                    "O-DU-1321",
                    "O-RU-11211",
                    "O-RU-11212",
                    "O-RU-11213",
                    "O-RU-12211",
                    "O-RU-12212",
                    "O-RU-12213",
                    "O-RU-12311",
                    "O-RU-12312",
                    "O-RU-12313",
                ],
            },
            {
                id: "a3",
                name: "West",
                node: [
                    "O-DU-1122",
                    "O-DU-1222",
                    "O-DU-1322",
                    "O-RU-11221",
                    "O-RU-11222",
                    "O-RU-11223",
                    "O-RU-12221",
                    "O-RU-12222",
                    "O-RU-12223",
                    "O-RU-13221",
                    "O-RU-13222",
                    "O-RU-13223"
                ],
            },
        ],

    },
    nodes: [{
            id: "O-CU-CP-111",
            owner: "Operator B",
            area: 0,
            function: "O-CU-CP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-CP-112",
            owner: "Operator B",
            area: 0,
            function: "O-CU-CP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-CP-121",
            owner: "Operator A",
            area: 0,
            function: "O-CU-CP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-CP-122",
            owner: "Operator A",
            area: 0,
            function: "O-CU-CP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-CP-121",
            owner: "Operator A",
            area: 0,
            function: "O-CU-CP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-CP-122",
            owner: "Operator A",
            area: 0,
            function: "O-CU-CP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-UP-111",
            owner: "Operator B",
            area: 0,
            function: "O-CU-UP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-UP-112",
            owner: "Operator B",
            area: 0,
            function: "O-CU-UP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-UP-121",
            owner: "Operator A",
            area: 0,
            function: "O-CU-UP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-UP-122",
            owner: "Operator A",
            area: 0,
            function: "O-CU-UP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-UP-121",
            owner: "Operator A",
            area: 0,
            function: "O-CU-UP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-UP-122",
            owner: "Operator A",
            area: 0,
            function: "O-CU-UP",
            x: 0,
            y: 0
        },
        {
            id: "O-DU-1111",
            owner: "Operator B",
            area: 0,
            function: "O-DU",
            x: 0.00,
            y: -150.00
        },
        {
            id: "O-DU-1112",
            owner: "Operator B",
            area: 1,
            function: "O-DU",
            x: 150.00,
            y: 0.00
        },
        {
            id: "O-DU-1121",
            owner: "Operator B",
            area: 2,
            function: "O-DU",
            x: 0.00,
            y: 150.00
        },
        {
            id: "O-DU-1122",
            owner: "Operator B",
            area: 3,
            function: "O-DU",
            x: -150.00,
            y: 0.00
        },
        {
            id: "O-DU-1211",
            owner: "Operator A",
            area: 0,
            function: "O-DU",
            x: 38.82,
            y: -144.89
        },
        {
            id: "O-DU-1212",
            owner: "Operator A",
            area: 1,
            function: "O-DU",
            x: 144.89,
            y: 38.82
        },
        {
            id: "O-DU-1221",
            owner: "Operator A",
            area: 2,
            function: "O-DU",
            x: -38.82,
            y: 144.89
        },
        {
            id: "O-DU-1222",
            owner: "Operator A",
            area: 3,
            function: "O-DU",
            x: -144.89,
            y: -38.82
        },
        {
            id: "O-DU-1211",
            owner: "Operator A",
            area: 0,
            function: "O-DU",
            x: 38.82,
            y: -144.89
        },
        {
            id: "O-DU-1212",
            owner: "Operator A",
            area: 1,
            function: "O-DU",
            x: 144.89,
            y: 38.82
        },
        {
            id: "O-DU-1221",
            owner: "Operator A",
            area: 2,
            function: "O-DU",
            x: -38.82,
            y: 144.89
        },
        {
            id: "O-DU-1222",
            owner: "Operator A",
            area: 3,
            function: "O-DU",
            x: -144.89,
            y: -38.82
        },
        {
            id: "O-RU-11111",
            owner: "Operator B",
            area: 0,
            function: "O-RU",
            x: 0.00,
            y: -225.00,
            sector: [{
                    id: "O-RU-11111-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-11111-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-11111-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-11112",
            owner: "Operator B",
            area: 0,
            function: "O-RU",
            x: 64.95,
            y: -187.50,
            sector: [{
                    id: "O-RU-11112-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-11112-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-11112-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-11113",
            owner: "Operator B",
            area: 0,
            function: "O-RU",
            x: -64.95,
            y: -187.50,
            sector: [{
                    id: "O-RU-11113-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-11113-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-11113-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-11121",
            owner: "Operator B",
            area: 1,
            function: "O-RU",
            x: 150.00,
            y: 75.00,
            sector: [{
                    id: "O-RU-11121-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-11121-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-11121-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-11122",
            owner: "Operator B",
            area: 1,
            function: "O-RU",
            x: 214.95,
            y: -37.50,
            sector: [{
                    id: "O-RU-11122-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-11122-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-11122-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-11123",
            owner: "Operator B",
            area: 1,
            function: "O-RU",
            x: 85.05,
            y: -37.50,
            sector: [{
                    id: "O-RU-11123-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-11123-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-11123-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-11211",
            owner: "Operator B",
            area: 2,
            function: "O-RU",
            x: 0.00,
            y: 225.00,
            sector: [{
                    id: "O-RU-11211-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-11211-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-11211-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-11212",
            owner: "Operator B",
            area: 2,
            function: "O-RU",
            x: 64.95,
            y: 112.50,
            sector: [{
                    id: "O-RU-11212-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-11212-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-11212-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-11213",
            owner: "Operator B",
            area: 2,
            function: "O-RU",
            x: -64.95,
            y: 112.50,
            sector: [{
                    id: "O-RU-11213-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-11213-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-11213-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-11221",
            owner: "Operator B",
            area: 3,
            function: "O-RU",
            x: -150.00,
            y: 75.00,
            sector: [{
                    id: "O-RU-11221-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-11221-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-11221-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-11222",
            owner: "Operator B",
            area: 3,
            function: "O-RU",
            x: -85.05,
            y: -37.50,
            sector: [{
                    id: "O-RU-11222-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-11222-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-11222-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-11223",
            owner: "Operator B",
            area: 3,
            function: "O-RU",
            x: -214.95,
            y: -37.50,
            sector: [{
                    id: "O-RU-11223-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-11223-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-11223-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-12111",
            owner: "Operator A",
            area: 0,
            function: "O-RU",
            x: 38.82,
            y: -69.89,
            sector: [{
                    id: "O-RU-12111-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12111-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12111-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12112",
            owner: "Operator A",
            area: 0,
            function: "O-RU",
            x: 103.77,
            y: -182.39,
            sector: [{
                    id: "O-RU-12112-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12112-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12112-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12113",
            owner: "Operator A",
            area: 0,
            function: "O-RU",
            x: -26.13,
            y: -182.39,
            sector: [{
                    id: "O-RU-12113-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12113-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12113-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12121",
            owner: "Operator A",
            area: 1,
            function: "O-RU",
            x: 144.89,
            y: 113.82,
            sector: [{
                    id: "O-RU-12121-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12121-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12121-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12122",
            owner: "Operator A",
            area: 1,
            function: "O-RU",
            x: 209.84,
            y: 1.32,
            sector: [{
                    id: "O-RU-12122-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12122-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12122-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12123",
            owner: "Operator A",
            area: 1,
            function: "O-RU",
            x: 79.94,
            y: 1.32,
            sector: [{
                    id: "O-RU-12123-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12123-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12123-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12211",
            owner: "Operator A",
            area: 2,
            function: "O-RU",
            x: -38.82,
            y: 219.89,
            sector: [{
                    id: "O-RU-12211-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-12211-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-12211-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-12212",
            owner: "Operator A",
            area: 2,
            function: "O-RU",
            x: 26.13,
            y: 107.39,
            sector: [{
                    id: "O-RU-12212-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-12212-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-12212-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-12213",
            owner: "Operator A",
            area: 2,
            function: "O-RU",
            x: -103.77,
            y: 107.39,
            sector: [{
                    id: "O-RU-12213-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-12213-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-12213-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-12221",
            owner: "Operator A",
            area: 3,
            function: "O-RU",
            x: -144.89,
            y: 36.18,
            sector: [{
                    id: "O-RU-12221-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-12221-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-12221-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-12222",
            owner: "Operator A",
            area: 3,
            function: "O-RU",
            x: -79.94,
            y: -76.32,
            sector: [{
                    id: "O-RU-12222-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-12222-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-12222-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-12223",
            owner: "Operator A",
            area: 3,
            function: "O-RU",
            x: -209.84,
            y: -76.32,
            sector: [{
                    id: "O-RU-12223-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-12223-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-12223-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-12111",
            owner: "Operator A",
            area: 0,
            function: "O-RU",
            x: 38.82,
            y: -69.89,
            sector: [{
                    id: "O-RU-12111-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12111-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12111-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12112",
            owner: "Operator A",
            area: 0,
            function: "O-RU",
            x: 103.77,
            y: -182.39,
            sector: [{
                    id: "O-RU-12112-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12112-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12112-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12113",
            owner: "Operator A",
            area: 0,
            function: "O-RU",
            x: -26.13,
            y: -182.39,
            sector: [{
                    id: "O-RU-12113-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12113-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12113-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12121",
            owner: "Operator A",
            area: 1,
            function: "O-RU",
            x: 144.89,
            y: 113.82,
            sector: [{
                    id: "O-RU-12121-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12121-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12121-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12122",
            owner: "Operator A",
            area: 1,
            function: "O-RU",
            x: 209.84,
            y: 1.32,
            sector: [{
                    id: "O-RU-12122-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12122-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12122-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12123",
            owner: "Operator A",
            area: 1,
            function: "O-RU",
            x: 79.94,
            y: 1.32,
            sector: [{
                    id: "O-RU-12123-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12123-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12123-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12211",
            owner: "Operator A",
            area: 2,
            function: "O-RU",
            x: -38.82,
            y: 219.89,
            sector: [{
                    id: "O-RU-12211-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-12211-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-12211-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-12212",
            owner: "Operator A",
            area: 2,
            function: "O-RU",
            x: 26.13,
            y: 107.39,
            sector: [{
                    id: "O-RU-12212-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-12212-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-12212-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-12213",
            owner: "Operator A",
            area: 2,
            function: "O-RU",
            x: -103.77,
            y: 107.39,
            sector: [{
                    id: "O-RU-12213-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "true"
                },
                {
                    id: "O-RU-12213-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "true"
                },
                {
                    id: "O-RU-12213-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "true"
                }
            ]
        },
        {
            id: "O-RU-12221",
            owner: "Operator A",
            area: 3,
            function: "O-RU",
            x: -144.89,
            y: 36.18,
            sector: [{
                    id: "O-RU-12221-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12221-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12221-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12222",
            owner: "Operator A",
            area: 3,
            function: "O-RU",
            x: -79.94,
            y: -76.32,
            sector: [{
                    id: "O-RU-12222-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12222-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12222-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-12223",
            owner: "Operator A",
            area: 3,
            function: "O-RU",
            x: -209.84,
            y: -76.32,
            sector: [{
                    id: "O-RU-12223-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-12223-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-12223-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                },
            ]
        },
        {
            id: "O-CU-CP-131",
            owner: "Operator C",
            area: 0,
            function: "O-CU-CP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-UP-131",
            owner: "Operator C",
            area: 0,
            function: "O-CU-CP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-CP-132",
            owner: "Operator C",
            area: 0,
            function: "O-CU-CP",
            x: 0,
            y: 0
        },
        {
            id: "O-CU-UP-132",
            owner: "Operator C",
            area: 0,
            function: "O-CU-CP",
            x: 0,
            y: 0
        },
        {
            id: "O-DU-1311",
            owner: "Operator C",
            area: 0,
            function: "O-DU",
            x: 'n/a',
            y: 'n/a'
        },
        {
            id: "O-DU-1312",
            owner: "Operator C",
            area: 1,
            function: "O-DU",
            x: 'n/a',
            y: 'n/a'
        },
        {
            id: "O-DU-1321",
            owner: "Operator C",
            area: 2,
            function: "O-DU",
            x: 'n/a',
            y: 'n/a'
        },
        {
            id: "O-DU-1322",
            owner: "Operator C",
            area: 3,
            function: "O-DU",
            x: 'n/a',
            y: 'n/a'
        },
        {
            id: "O-RU-13111",
            owner: "Operator C",
            area: 0,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13111-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13111-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13111-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-13112",
            owner: "Operator C",
            area: 0,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13112-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13112-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13112-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-13113",
            owner: "Operator C",
            area: 0,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13113-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13113-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13113-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-13121",
            owner: "Operator C",
            area: 1,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13121-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13121-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13121-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-13122",
            owner: "Operator C",
            area: 1,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13122-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13122-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13122-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-13123",
            owner: "Operator C",
            area: 1,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13123-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13123-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13123-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-13211",
            owner: "Operator C",
            area: 2,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13211-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13211-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13211-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-13212",
            owner: "Operator C",
            area: 2,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13212-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13212-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13212-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-13213",
            owner: "Operator C",
            area: 2,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13213-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13213-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13213-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-13221",
            owner: "Operator C",
            area: 3,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13221-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13221-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13221-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-13222",
            owner: "Operator C",
            area: 3,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13222-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13222-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13222-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
        {
            id: "O-RU-13223",
            owner: "Operator C",
            area: 3,
            function: "O-RU",
            x: 'n/a',
            y: 'n/a',
            sector: [{
                    id: "O-RU-13223-Sector1",
                    power: 100,
                    direction: 0,
                    disaster: "false"
                },
                {
                    id: "O-RU-13223-Sector2",
                    power: 100,
                    direction: 120,
                    disaster: "false"
                },
                {
                    id: "O-RU-13223-Sector3",
                    power: 100,
                    direction: 240,
                    disaster: "false"
                }
            ]
        },
    ],
    links: [],
};


module.exports = topology;
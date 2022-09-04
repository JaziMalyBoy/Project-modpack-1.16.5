events.listen('recipes', function (e) {
  
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "upgrade_aquatic:river_sapling"
    },
    "categories": [
        "dirt"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "upgrade_aquatic:river_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "upgrade_aquatic:river_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "upgrade_aquatic:mulberry"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "upgrade_aquatic:river_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "upgrade_aquatic:river_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

})
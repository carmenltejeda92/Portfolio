const ships = [
    {
        name: 'human',
        hull: 20,
        firepower: 5,
        accuracy: .70

    },

    {
        name: 'alien',
        hull: Math.floor(Math.random() * (6-3) + 3),
        firepower: Math.floor(Math.random() * (4-2) + 2),
        accuracy: Number((Math.random() * (0.8 -0.6) + 0.6).toFixed(2))

    }


]


module.exports = ships

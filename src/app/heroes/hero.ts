export class Hero {
    _id?: String
    id: Number
    name: String
    value: Number
    range: Number
    wheel: [{
        stats: {
            attack: Number,
            defense: Number,
        },
        skills: [Number]
    }]
}


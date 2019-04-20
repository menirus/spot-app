export interface TeamCondensed {
    _id: String,
    name: String
}

export interface Match {
    teams: TeamCondensed[],
    sets: [
        { scores: Number[] }
    ],
    day: Date
}
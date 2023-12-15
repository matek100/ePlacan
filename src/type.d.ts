type Data = {
    id: number,
    ip: number,
    job: string,
    school: string,
    schoolTier: 1 | 2 | 3 | 4 | 5 | 6 | 7,
    years: number,
    hours: number,
    pay: number
}

type Filters =
    "id" |
    "job" |
    "hours" |
    "school" |
    "schoolTier" |
    "years" |
    "pay"

export { Data, Filters }
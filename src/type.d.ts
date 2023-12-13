type Data = {
    id: number,
    ip: number,
    job: string,
    school: string,
    schoolTier: 0 | 1 | 2 | 3 | 4 | 5,
    years: number,
    hours: number,
    pay: number
}

type Filters =
    "id" |
    "ip" |
    "job" |
    "hours" |
    "school" |
    "schoolTier" |
    "years" |
    "pay"

export { Data, Filters }
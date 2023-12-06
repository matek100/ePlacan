type Data = {
    ip: number,
    job: string,
    school: string,
    schoolTier: number,
    years: number,
    hours: number,
    pay: number
}

type Filters =
    "job" |
    "hours" |
    "school" |
    "schoolTier" |
    "years" |
    "pay"

export { Data, Filters }
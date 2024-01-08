export {};
declare global {
  export interface Movie {
    id?: number
    userId?: number
    name: string
    slug?: string
    imdb: string
    year: number
    description: string
    sinopsis: string
    trailer: string
    country: string
    language: string
    genders: string
    duration: number
    tags: string
    points?: number
    total?: number
    active: boolean
  }
}
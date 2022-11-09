import { Actor } from "./actor.interface";
import { Creator } from "./creator.interface";
import { Rating } from "./rating.interface";
import { Trailer } from "./trailer.interface";

export interface Movie {
    actor: Actor[],
    rating: Rating,
    contentRating: string,
    creator: Creator[],
    datePublished: string,
    description: string,
    genre: string[],
    image: string,
    name: string,
    url: string,
    trailer: Trailer
}
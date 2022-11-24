import { IActor } from "./actor.interface";
import { ICreator } from "./creator.interface";
import { IRating } from "./rating.interface";
import { ITrailer } from "./trailer.interface";


export interface IMovie {
    actor: IActor[],
    rating: IRating,
    contentRating: string,
    creator: ICreator[],
    datePublished: string,
    description: string,
    genre: string[],
    image: string,
    name: string,
    url: string,
    trailer: ITrailer
}
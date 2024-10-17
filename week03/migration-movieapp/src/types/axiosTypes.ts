import {Movie} from "./movieTypes";

export interface MovieApiResponse {
    data:{
            movies:Movie[];
    }
}
// api로 받아오는 데이터 타입 정의
export interface Cast {
    name: string;
    character_name: string;
    url_small_image?: string;
}


export interface Movie {
    id: number;
    title: string;
    year: number;
    rating: number;
    genres: string[];
    summary: string;
    medium_cover_image: string;
    large_cover_image: string;
    background_image: string;
    cast?: Cast[];
    description_intro: string;
}


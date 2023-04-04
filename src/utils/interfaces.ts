export interface Mode {
    theme: string;
    mode: boolean;
}

export interface Items {
    id: number;
    title:string;
    price: number;
    category: string;
    description:string;
    image: string;
    rating: {
        rate:number;
        count: number;
    };
}
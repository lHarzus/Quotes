export const GET_QUOTES = "GET_QUOTES";
export const QUOTES_ERROR = "QUOTES_ERROR";
export const GET_IMAGE = "GET_IMAGE";
export const IMAGE_ERROR = "IMAGE_ERROR";

//QUOTES
//Quotes types
export type Quotes = {
  quote: string;
  author: string;
  category: string;
};

//Quotes interface

export interface QuotesError {
  type: typeof QUOTES_ERROR;
  payload: {
    error: string;
  };
}

export interface GetQuotes {
  type: typeof GET_QUOTES;
  payload: {
    results: Quotes[];
  };
}

export type QuotesDispatchTypes = QuotesError | GetQuotes;

//IMAGE
//Image types
export type Image = {
  image: string;
};

//Image interface
export interface ImageError {
  type: typeof IMAGE_ERROR;
  payload: {
    error: string;
  };
}

export interface GetImage {
  type: typeof GET_IMAGE;
  payload: {
    results: Image[];
  };
}

export type ImageDispatchTypes = ImageError | GetImage;

export type DataModal = {
  count: number;
  next: string | null;
  previous: null | string;
  results: CharactersData;
};

type CharactersData = [
  {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  }
];

export type MovieData = {
  count: number;
  next: null;
  previous: null;
  results: SingleMovieType;
};

type SingleMovieType = [
  {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
  }
];

export type PlanetData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: [PlanetResultData];
};

export type PlanetResultData = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

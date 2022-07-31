const key = "68abbab26acd93a94586c200635646d2";
const base_URL = "https://api.themoviedb.org/3/";
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

const API_CATEGORIES = {
  POPULAR: "popular",
  TOP_RATED: "top_rated",
  TRENDING: "trending/all/day",
  UPCOMING: "upcoming",
};

export const requests = {
  requestPopular: `${base_URL}movie/${API_CATEGORIES.POPULAR}?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `${base_URL}movie/${API_CATEGORIES.TOP_RATED}?api_key=${key}&language=en-US&page=1`,
  requestTrending: `${base_URL}/${API_CATEGORIES.TRENDING}?api_key=${key}`,
  requestHorror: `${base_URL}search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=true`,
  requestUpcoming: `${base_URL}movie/${API_CATEGORIES.UPCOMING}?api_key=${key}&language=en-US&page=1`,
};

export const fetchImage = (backdrop_path) => {
  if (backdrop_path) {
    return `${imageBaseUrl}${backdrop_path}`;
  }
};

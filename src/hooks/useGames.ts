import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, selectedOrder: string, searchText: string) => 
  useData<Game>('/games', { 
    params: { 
      genres: selectedGenre?.id, 
      parent_platforms: selectedPlatform?.id,
      ordering: selectedOrder,
      search: searchText
    }}, 
    [
      selectedGenre?.id, 
      selectedPlatform?.id,
      selectedOrder,
      searchText
    ]);

export default useGames;
import { useEffect, useState } from "react";
import { FilmAdapter } from "../adapter/FilmAdapter";
import ResultMovie from "../config/entities/ResultMovie";

export const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<ResultMovie | null>(null);
    const [loading, setLoading] = useState(false);
    // He creado un estado para la página
    const [page, setPage] = useState(1); 

    const loadMovies = async () => {
        if (loading) return; 
        setLoading(true);

        const movies = await FilmAdapter.getMovies({ page, route: FilmAdapter.ROUTES.nowPlaying });
        if (movies != null) {
            setNowPlaying((prev) => ({
                ...movies,
                // Junto las películas de la página anterior y las junto con las nuevas
                movies: [...(prev?.movies || []), ...movies.movies],
            }));
        }

        setLoading(false); 
    };
        useEffect(() => {
        loadMovies();
    }, [page]); 
    return {
        nowPlaying,loading,setPage, 
    };
}
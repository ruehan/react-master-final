import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import MovieView from "./view/MovieView";
import ComingSoonView from "./view/ComingSoonView";
import NowPlayingView from "./view/NowPlayingView";
import MovieDetailView from "./view/MovieDetailView";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <MovieView />,
            },
            {
                path: "coming-soon",
                element: <MovieView />,
            },
            {
                path: "now-playing",
                element: <MovieView />,
            },
            {
                path: "movie/:id",
                element: <MovieDetailView />
            }
        ]
    }
])

export default router;
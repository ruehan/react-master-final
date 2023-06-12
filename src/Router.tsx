import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import MovieView from "./view/MovieView";
import ComingSoonView from "./view/ComingSoonView";
import NowPlayingView from "./view/NowPlayingView";
import Home from "./view/Home";

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
                element: <ComingSoonView />,
            },
            {
                path: "now-playing",
                element: <NowPlayingView />,
            }
        ]
    }
])

export default router;
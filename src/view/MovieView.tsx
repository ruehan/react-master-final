import styled from "styled-components";
import Movie from "../components/Movie";

const MovieContainer = styled.div`
    /* display: grid;
    grid-template-columns: repeat(3, 1fr) */
    /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
`


function MovieView(){
    return(
        <>
            <Movie />
        </>
    )
}

export default MovieView;
import { useQuery } from "react-query";
import { getComingSoon, makeImagePath } from "../api/api";
import styled from "styled-components";


const MovieContainer = styled.div`
    color: white;
    

    div {
        text-align: center;
    }
`

const MovieInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(300px, 1fr))
`

const MovieData = styled.div`
    display: grid;
    grid-template-rows: 310px 20px;
    margin-bottom: 100px;
`

const Img = styled.img`
    width: 200px;
    height: auto;
    border-radius: 15px;
`

function ComingSoon(){

    const { isLoading, isError, data, error } = useQuery("coming-soon", getComingSoon, {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: data => {
            console.log(data.results)
        },
        onError: e => {
            console.log(e.message)
        }
    })

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    return(
        <MovieContainer>
            <MovieInfo>
                {data.results.map((movie: any) => (
                
                    <MovieData>
                        <div><Img src={makeImagePath(movie.poster_path)}></Img></div>
                        <div key={movie.id}>{movie.title}</div> 
                    </MovieData>
                
                ))}
            </MovieInfo>
            
        </MovieContainer>
    )
}

export default ComingSoon;
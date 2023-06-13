import { useQuery } from "react-query";
import { getComingSoon, getMovie, getNowPlaying, getPopular, makeBgPath, makeImagePath } from "../api/api";
import styled from "styled-components";
import { motion } from "framer-motion";
import { movieState, tabState } from "../atoms/atoms";
import { useRecoilState } from "recoil";
import { useMatch, useParams } from "react-router-dom";
import ModalContainer from "./modal/ModalContainer";


const Img = styled(motion.img)`
    width: 80%;
    height: auto;
    border-radius: 15px;
    opacity: 0.2;
`

const Container = styled(motion.div)`
    width: 60%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 20%;
    top: 10%;
    overflow: scroll;
    border-radius: 15px;

    ::-webkit-scrollbar {
        display: none;
    }
    
`

const CollectionImg = styled(motion.img)`
    width: 200px;
    height: auto;
    border-radius: 15px;
`

const DetailUL = styled.ul`
    width: 100%;
    height: auto;
    z-index: 100;
`

const DetailLI = styled.li`
    color: white;
`

const Title = styled.h1`
    font-size: 40px;
`

function MovieDetail(){

    const [movieId, setMovieId] = useRecoilState(movieState)


    const { isLoading, isError, data, error } = useQuery(['id', movieId], ({ queryKey }) => getMovie(queryKey[1]), {
        refetchOnWindowFocus: false,
        retry: false,
        onSuccess: data => {
            // console.log(data)
        },
        onError: e => {
            console.log(e.message)
        }
    })

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    return(
        <>
                <Container
                    initial={{scale:0}}
                    animate={{scale:1.2}}
                    transition={{
                        type: "spring",
                        duration: 1

                    }}>
                <DetailUL>
                    <DetailLI><Img src={makeBgPath(data.backdrop_path)}></Img></DetailLI>
                    <DetailLI><Title>{data.original_title}</Title></DetailLI>
                    <DetailLI>{data.release_date}</DetailLI>
                    <div>
                        {data.genres.map((genre: any) => (
                            <DetailLI>{genre.name}</DetailLI>
                        ))}        
                    </div>      
                    {data.belongs_to_collection !== null ? (
                        <>
                            <DetailLI>{data.belongs_to_collection.name}</DetailLI>      
                            <CollectionImg src={makeImagePath(data.belongs_to_collection.poster_path)}></CollectionImg>
                        </>
                    ) : null}
                </DetailUL>
                </Container>

        </>
    )
}

export default MovieDetail;

function useRouteMatch(arg0: string) {
    throw new Error("Function not implemented.");
}

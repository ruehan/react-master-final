import { useQuery } from "react-query";
import { getComingSoon, getMovie, getNowPlaying, getPopular, makeBgPath, makeImagePath } from "../api/api";
import styled from "styled-components";
import { motion } from "framer-motion";
import { modalState, movieState, tabState } from "../atoms/atoms";
import { useRecoilState } from "recoil";



const Img = styled(motion.img)`
    width: 100%;
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
    z-index: 5;
    overflow: hidden;

    ::-webkit-scrollbar {
        display: none;
    }
    
`

const DetailUL = styled.ul`
    width: 100%;
    height: auto;
    position: relative;
    text-align: left;
`

const DetailLI = styled.li`
    color: white;
    margin: 20px;
`

const Title = styled.h1`
    font-size: 40px;
`

const BackBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 30px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    z-index: 10;
    /* background-color: rgba(0, 0, 0, .1); */
    border: none;
    /* color: rgba(255, 255, 255, 0); */
`

const Genres = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(6, minmax(100px, 200px));
    /* justify-self: start; */
    align-items: center;
    /* text-align: left; */
`

function MovieDetail(){

    const [movieId, setMovieId] = useRecoilState(movieState)
    const [openModal, setOpenModal] = useRecoilState(modalState)
    
    const onClick = () => {
        setOpenModal(prev => !prev)
        console.log("Modal OnCLick")
    }

    const { isLoading, isError, data, error } = useQuery(['id', movieId], ({ queryKey }) => getMovie(queryKey[1]), {
        refetchOnWindowFocus: false,
        retry: false,
        onSuccess: data => {
            console.log(data)
            console.log("Movie Detail Page Load")
        },
        onError: e => {
            console.log(e.message)
        }
    })

    if (isLoading) return null

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
                <DetailUL >
                    <BackBtn onClick={onClick}>
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z">
                            </path>
                        </svg>
                    </BackBtn>
                    <DetailLI key={data.backdrop_path}><Img src={makeBgPath(data.backdrop_path)}></Img></DetailLI>
                    <DetailLI key={data.original_title}><Title>{data.original_title}</Title></DetailLI>
                    <DetailLI key={data.id}>{data.overview.substr(0, 150)}...</DetailLI>
                    <DetailLI key={data.release_date}>Release Data : {data.release_date}</DetailLI>
                    <Genres>
                        Genre : 
                        {data.genres.map((genre: any) => (
                            <DetailLI key={genre.name}>{genre.name}  </DetailLI>
                        ))}        
                    </Genres>      
                    <DetailLI>Runtime : {data.runtime}</DetailLI>
                </DetailUL>
                </Container>

        </>
    )
}

export default MovieDetail;


import { useQuery } from "react-query";
import { getComingSoon, getNowPlaying, getPopular, makeImagePath } from "../api/api";
import styled from "styled-components";
import { motion } from "framer-motion";
import { modalState, movieState, tabState } from "../atoms/atoms";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import MovieDetailView from "../view/MovieDetailView";


const MovieContainer = styled.div`
    color: white;
    
    div {
        text-align: center;
    }
`

const MovieInfo = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr))
`

const MovieData = styled(motion.div)`
    display: grid;
    grid-template-rows: 310px 20px;
    margin-bottom: 100px;
`

const Img = styled(motion.img)`
    width: 200px;
    height: auto;
    border-radius: 15px;
`

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const img = {
    whileHover: {
        scale: 1.1,
        y: -50
    }
}

function Movie(){

    const [tab, setTab] = useRecoilState(tabState)
    const [movieId, setMovieId] = useRecoilState(movieState)
    const [openModal, setOpenModal] = useRecoilState(modalState)

    const addr = window.location.href


    const onClick = (event) => {
        setMovieId(event.target.id)
        setOpenModal(prev => !prev)
        console.log("Modal OnCLick")
    }

    //popular, coming-soon, now-playing

    const { isLoading, isError, data, error} = useQuery(tab === 'Popular' ? 'popular' : tab === 'Coming Soon' ? 'coming-soon' : 'now-playing', 
    tab === 'Popular' ? getPopular : tab === 'Coming Soon' ? getComingSoon : getNowPlaying, {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: data => {
            console.log(data.results)
        },
        onError: e => { 
            console.log(e.message)
        }
    })

    if (isLoading) return null

    if (isError) return <div>{error.message}</div>

    return(
        <>
            <MovieContainer>
                <MovieInfo 
                    key={tab}
                    variants={container}
                    initial="hidden"
                    animate="visible">
                    {data.results.map((movie: any) => (
                    
                        <MovieData 
                            key={movie.name}
                            variants={item}>
                            <div>
                            <Img key={movie.id} id={movie.id} onClick={onClick} src={makeImagePath(movie.poster_path)} variants={img} whileHover='whileHover'></Img>
                                    
                            </div>
                            {openModal ? (
                                        <MovieDetailView />
                                    ) : null}
                            
                            <div key={movie.title}>{movie.title}</div> 
                        </MovieData>
                    ))}
                </MovieInfo>
            </MovieContainer>
        </>
    )
}

export default Movie;
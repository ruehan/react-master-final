import { useQuery } from "react-query";
import { getComingSoon, makeImagePath } from "../api/api";
import styled from "styled-components";
import { motion } from "framer-motion";


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

const Img = styled.img`
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
            <MovieInfo 
                variants={container}
                initial="hidden"
                animate="visible">
                {data.results.map((movie: any) => (
                
                    <MovieData 
                        variants={item}>
                        <div><Img src={makeImagePath(movie.poster_path)}></Img></div>
                        <div key={movie.id}>{movie.title}</div> 
                    </MovieData>
                
                ))}
            </MovieInfo>
            
        </MovieContainer>
    )
}

export default ComingSoon;
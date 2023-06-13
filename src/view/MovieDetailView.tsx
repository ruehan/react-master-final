import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "../backdrop/backdrop";
import MovieDetail from "../components/MovieDetail";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;


function MovieDetailView(){
    const navigate = useNavigate();

    const onOverlayClick = () => {
        navigate("/");
      };

    return (
        <>
            <MovieDetail />
        </>
    )
}



export default MovieDetailView;
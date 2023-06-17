import React from "react";
import { Link, Outlet, useMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { movieState, tabState } from "../atoms/atoms";
import { color, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Tabs = styled.ul`
    width: 50%;
    height: auto;
    padding-left: 25%;
    padding-top: 50px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`

const Tab = styled.li`
    color: white;
    position: relative;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-size: 22px;
`

const Circle = styled(motion.span)`
    position: absolute;
    width: 15px;
    height: 7px;
    background-color: #ec6b5d;
    bottom: -15px;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 15px;
`

function Home(){

    const [tab, setTab] = useRecoilState(tabState)

    const  popularMatch = useMatch("/")
    const  comingSoonMatch = useMatch("coming-soon")
    const  nowPlayingMatch = useMatch("now-playing")
    

    const onClick = (event) => {
        setTab(event.target.innerText)
    }

    return (
        <>
        <Tabs style={{ color: 'white'}}>
            <Tab>
                <Link to="/" style={{ textDecoration: "none", color: 'white' }}  onClick={onClick}>Popular {popularMatch&& <Circle layoutId="circle"/>}</Link>
            </Tab>
            <Tab>
                <Link to="/coming-soon" style={{ textDecoration: "none", color: 'white'  }} onClick={onClick}>Coming Soon {comingSoonMatch && <Circle layoutId="circle"/>}</Link>
            </Tab>
            <Tab>
                <Link to="/now-playing" style={{ textDecoration: "none", color: 'white'  }} onClick={onClick}>Now Playing {nowPlayingMatch && <Circle layoutId="circle"/>}</Link>
            </Tab>
        </Tabs>
        <Outlet />
        </>
    ) 
}

export default Home;
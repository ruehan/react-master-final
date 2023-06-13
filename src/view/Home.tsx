import React from "react";
import { Link, Outlet, useMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { movieState, tabState } from "../atoms/atoms";
import { motion } from "framer-motion";

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
`

const Circle = styled(motion.span)`
    position: absolute;
    width: 15px;
    height: 7px;
    background-color: white;
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
    
    console.log(popularMatch, comingSoonMatch, nowPlayingMatch)

    const onClick = (event) => {
        setTab(event.target.innerText)
    }

    return (
        <>
        <Tabs>
            <Tab>
                <Link to="/" style={{ textDecoration: "none" }} onClick={onClick}>Popular {popularMatch&& <Circle layoutId="circle"/>}</Link>
            </Tab>
            <Tab>
                <Link to="/coming-soon" style={{ textDecoration: "none" }} onClick={onClick}>Coming Soon {comingSoonMatch && <Circle layoutId="circle"/>}</Link>
            </Tab>
            <Tab>
                <Link to="/now-playing" style={{ textDecoration: "none" }} onClick={onClick}>Now Playing {nowPlayingMatch && <Circle layoutId="circle"/>}</Link>
            </Tab>
        </Tabs>

        <Outlet />
        </>
    )
}

export default Home;
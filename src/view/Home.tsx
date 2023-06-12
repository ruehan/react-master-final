import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

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
`


function Home(){

    return (
        <>
        <Tabs>
            <Tab>
                <Link to="/" style={{ textDecoration: "none" }}>Popular</Link>
            </Tab>
            <Tab>
                <Link to="/coming-soon" style={{ textDecoration: "none" }}>Coming Soon</Link>
            </Tab>
            <Tab>
                <Link to="/now-playing" style={{ textDecoration: "none" }}>Now Playing</Link>
            </Tab>
        </Tabs>

        <Outlet />
        </>
    )
}

export default Home;
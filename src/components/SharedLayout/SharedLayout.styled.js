import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const Navigation = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 4px;
    background-color: white;
    border-radius: 30px;
    border: 2px solid #4F2EE8;
    margin: 8px auto 20px auto;
    width: 80%;
`

export const Link = styled(NavLink)`
    font-size: 22px;
    color: #202024;
    text-decoration: none;

    &.active {
        color: white;
        background-color: #4F2EE8;
        border-radius: 40px;
        border: 2px solid #4F2EE8;
        padding: 4px 8px;
    }
    &:hover {
        color: #202024;
        border: 2px solid #4F2EE8;
        border-radius: 40px;
        padding: 4px 8px;
        background-color: white;
        box-shadow: 0px 0px 0px 4px rgba(79, 46, 232, 0.3);
    }
`
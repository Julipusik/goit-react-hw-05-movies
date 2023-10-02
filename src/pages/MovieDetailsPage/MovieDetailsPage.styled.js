import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 760px;
    margin: 0 auto 40px auto;
`

export const MovieInfoContainer = styled.div`
    display: flex;
    gap: 40px;
    width: 760px;
    margin-top: 24px;
    border: 2px solid #EAC645;
    border-radius: 20px;
    padding: 10px 20px;
`

export const MovieInfo = styled.div`
    width: 420px;
`

export const CastReviewsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
`
export const AdditionalInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 760px;

    h3 {
        text-align: center;
    }
`

export const Link = styled(NavLink)`
    text-decoration: none;
    color: #202024;
    background-color: #EAC645;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
        
        &.active {
            background-color: #4F2EE8;
            color: white;
        }

        &:hover {
            color: white;
            background-color: #4f2ee8;
            box-shadow: 0px 0px 0px 4px rgba(79, 46, 232, 0.3);
        }
`

export const GoBackBtn = styled(NavLink)`
    text-decoration: none;
    text-align: center;
    color: #202024;
    background-color: #EAC645;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    height: 100%;
    width: 70px;

        &:hover {
            color: white;
            background-color: #4f2ee8;
            box-shadow: 0px 0px 0px 4px rgba(79, 46, 232, 0.3);
        }
`
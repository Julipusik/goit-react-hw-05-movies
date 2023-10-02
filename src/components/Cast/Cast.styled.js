import { styled } from "styled-components";

export const CastContainer = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        text-align: center;
    }
`

export const CastList = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`

export const CastItem = styled.li`
    h3 {
        font-size: 16px;
        margin: 8px 0;
    }
     img {
        border: none;
        border-radius: 10px;
     }
`
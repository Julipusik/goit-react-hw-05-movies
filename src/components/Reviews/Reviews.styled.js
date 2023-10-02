import { styled } from "styled-components";

export const ReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        text-align: center;
    }

    p {
        text-align: center;
    }
`

export const ReviewsList = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-top: 0;
`

export const ReviewsItem = styled.li`
    border: 2px solid #4F2EE8;
    border-radius: 20px;
    padding: 20px 20px;
    margin-bottom: 16px;

    p {
        margin-bottom: 0;
        text-align: justify;
    }
`
import { styled } from "styled-components";

export const MovieList = styled.ul`
    margin-top: 0;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const MovieListItem = styled.li`
    padding: 8px;
    font-size: 18px;

    a {
    text-decoration: none;
    color: #202024;

        &:hover {
            background-color: #EAC645;
            box-shadow: 0px 0px 0px 4px rgba(234, 198, 69, 0.3);
            border-radius: 20px;
            padding: 8px 10px;
    }
    }
`
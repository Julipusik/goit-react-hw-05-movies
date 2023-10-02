import { styled } from "styled-components";

export const SearchMovie = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    input {
        padding: 10px;
        font-size: 16px;
        border: 1px solid #EAC645;
        border-radius: 20px;
        margin-right: 12px;
    }

    button {
        background-color: #EAC645;
        color: black;
        border: none;
        border-radius: 20px;
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
        
        &:hover {
            color: white;
            background-color: #4f2ee8;
            box-shadow: 0px 0px 0px 4px rgba(79, 46, 232, 0.3);
        }
    }
`
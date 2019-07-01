import React from "react";
import styled from "styled-components";

const HeaderBar = styled.div`
    display: flex;
    margin-top: 20px;
    padding: 5px;
    background-color: #d6eff0;
`;

const H1 = styled.h1`
    flex: 4;
    font-size: 32px;
    font-weight: 400;
    margin: 0;
`;

const SelectContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100px;
`;

const Header = () => {
    return (
        <HeaderBar>
            <H1>Women's Tops</H1>
            <SelectContainer>
                <select>
                    <option>Filter by size</option>
                </select>
            </SelectContainer>
        </HeaderBar>
    )
}

export default Header;
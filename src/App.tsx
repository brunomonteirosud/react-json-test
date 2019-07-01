import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ProductDisplay from "./components/ProductDisplay";

const Container = styled.div`
    width: 80%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`;

const App = () => {
    return (
        <Container>
            <Header />
            <ProductDisplay url="https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3" />
        </Container>
    )
}

export default App;
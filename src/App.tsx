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
    const [sizeFilterOptions, setSizeFilterOptions] = React.useState([]);
    const [selectedFilter, setSelectedFilter] = React.useState("all");

    const handleSetFilter = (options: string[]) => {
        setSizeFilterOptions(options);
    }

    return (
        <Container>
            <Header
                filterOptions={sizeFilterOptions}
                setFilter={setSelectedFilter}
            />
            <ProductDisplay
                url="https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3"
                currentFilter={selectedFilter}
                setFilter={handleSetFilter}
            />
        </Container>
    )
}

export default App;
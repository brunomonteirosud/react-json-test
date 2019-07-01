import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`;

const ProductDisplay = () => {
    return (
        <Products>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Products>
    )
}

export default ProductDisplay;
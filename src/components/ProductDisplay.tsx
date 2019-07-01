import React from "react";
import ProductLoadingCard from "./ProductLoadingCard";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import axios from "axios";

const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`;

const ErrorMessage = styled.p`
    flex: 1;
    padding: 10px;
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #ce9096;
    border-radius: 5px;
`;

const initialState = (
    <>
        <ProductLoadingCard />
        <ProductLoadingCard />
        <ProductLoadingCard />
        <ProductLoadingCard />
    </>
)

interface Props {
    url: string;
}

const ProductDisplay = (props: Props) => {
    const [products, setProducts] = React.useState(initialState);

    React.useEffect(() => {
        axios.get(props.url)
            .then(function (response) {
                const productList = response.data.map((product: any, idx: number) => {
                    return <ProductCard key={idx} productInfo={product} />
                })
                setProducts(productList);
            })
            .catch(function (error) {
                setProducts(
                    <ErrorMessage>
                        <span>Could not load data from server. Please check your connection and try again.</span>
                        <br />
                        <span>Error Message: <strong>{error.response.data.message || "No message"}</strong></span>
                    </ErrorMessage>
                );
            });
    }, [props.url])

    

    return (
        <Products>
            {products}
        </Products>
    )
}

export default ProductDisplay;
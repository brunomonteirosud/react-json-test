import React from "react";
import ProductLoadingCard from "./ProductLoadingCard";
import ProductCard from "./ProductCard";
import { ProductInfo } from "./interfaces";
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
    currentFilter: string;
    setFilter: (options: string[]) => void;
}

const ProductDisplay = (props: Props) => {
    const [products, setProducts] = React.useState<any>(initialState);
    const [jsonData, setJsonData] = React.useState([]);

    React.useEffect(() => {
        axios.get(props.url)
            .then(function (response) {
                setJsonData(response.data);
                createFilter(response.data);
                createProductList(response.data);
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

    React.useEffect(() => {
        createProductList(jsonData);
    }, [props.currentFilter])

    const createFilter = (data: ProductInfo[]) => {
        // Get all size options in one flatten array
        const allSizeOptions = data.map((item) => {
            return item.size;
        }).flat();
    
        // Remove duplicated values and create filter options
        const sizeOptions = [...new Set(allSizeOptions)];
        props.setFilter(sizeOptions);
    }

    const createProductList = (products: ProductInfo[]) => {
        console.log("productDisplay", props.currentFilter);
        let filteredProducts;

        if (props.currentFilter === "all") {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter((product) => {
                return product.size.includes(props.currentFilter.toUpperCase());
            });
        }

        const productList = filteredProducts.map((product: ProductInfo, idx: number) => {
            return <ProductCard key={idx} productInfo={product} />
        })
        setProducts(productList);
    }

    return (
        <Products>
            {products}
        </Products>
    )
}

export default ProductDisplay;
import React from "react";
import styled, { keyframes } from "styled-components";

const Card = styled.div`
    display: flex;

    @media (min-width: 768px) {
        flex: 0 0 50%;
        max-width: 50%;
    }

    @media (min-width: 992px) {
        flex: 0 0 25%;
        max-width: 25%;
    }

    flex: 0 0 100%;
    max-width: 100%;
`;

const CardWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #ccc;
    height: 374px;
    width: 100%;
`;

const pulse = keyframes`
    0% {
        background-color: #ccc;
    }
    50% {
        background-color: #e8e8e8;
    }
    100% {
        background-color: #ccc;
    }
`;

const Image = styled.div`
    flex: 10;
    width: 100%;
    animation: ${pulse} 1.6s infinite ease-in-out;
`;

const Tag = styled.div`
    flex: 1;
  margin-top: 10px;
  width: 40%;
  animation: ${pulse} 1.6s infinite ease-in-out;
`;

const ProductInfo = styled.div`
    flex: 1;
    margin-top: 10px;
    display: flex;
`;

const Name = styled.div`
    flex: 2;
    margin-right: 50px;
    animation: ${pulse} 1.6s infinite ease-in-out;
`;

const Price = styled.div`
    flex: 1;
    animation: ${pulse} 1.6s infinite ease-in-out;
`;

const ProductLoadingCard = () => {
    return (
        <Card>
            <CardWrapper>
                <Image />
                <Tag />
                <ProductInfo>
                    <Name />
                    <Price />
                </ProductInfo>
            </CardWrapper>
        </Card>
    )
}

export default ProductLoadingCard;
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
    flex-direction: column;
    padding: 10px;
    border: 1px solid #ccc;
`;

const Figure = styled.figure`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

const Tag = styled.div`
    flex: 1;
    color: white;
    font-size: 12px;
`;

const TagSale = styled.span`
    display: inline-block;
    background: #ce0303;
    padding: 10px;
    margin: 5px 0;
`;

const TagExclusive = styled.span`
    display: inline-block;
    background: #13940b;
    padding: 10px;
    margin: 5px 0;
`;

const ProductInfo = styled.div`
    flex: 1;
    margin-top: 10px;
    display: flex;
`;

const Name = styled.div`
    flex: 2;
    font-size: 14px;
    font-weight: 700;
    display: inline-flex;
    align-items: flex-end;
`;

const Price = styled.div`
    flex: 1;
    font-size: 22px;
    font-weight: 700;
    display: inline-flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

interface Props {
    productInfo: {
        size: string[];
        productImage: string;
        productName: string;
        price: string;
        isSale: boolean;
        isExclusive: boolean;
    };
};

const ProductCard = (props: Props) => {
    return (
        <Card>
            <CardWrapper>
                <Figure>
                    <Image src={`/src/images/products/${props.productInfo.productImage}`} />
                </Figure>
                <Tag>
                    {props.productInfo.isSale ? <TagSale>Sale</TagSale> : ""}
                    {props.productInfo.isExclusive ? <TagExclusive>Exclusive</TagExclusive> : ""}
                </Tag>
                <ProductInfo>
                    <Name>{props.productInfo.productName}</Name>
                    <Price>{props.productInfo.price}</Price>
                </ProductInfo>
            </CardWrapper>
        </Card>
    )
}

export default ProductCard;

import Carousel from "react-material-ui-carousel";
import React, {useState} from "react";
import {NATIONAL_CODE} from "../constants/nationalCode";
import {Button, CameraIcon, ContactIcon, LikeIcon, Modal, TypoBody, ViewIcon} from "@closet-design-system/core-connect";
import styled from "@emotion/styled";
import styles from "styles/Home.module.css";

interface ItemCarousel {
    dataObj: any;
}

const ItemCarousel: React.FC<ItemCarousel> = ({ dataObj }) => {
    return (
        <Slider>
            <Carousel cycleNavigation={true} navButtonsAlwaysVisible={true}>
                {dataObj.items.map((content, index) => (
                    <div key={index}>
                        <CarouselImage src={content.imagePath} />
                    </div>
                ))}
            </Carousel>
        </Slider>
    )
}

export default ItemCarousel;

const Slider = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;
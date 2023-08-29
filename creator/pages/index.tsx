import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import axios from 'axios';
import { NATIONAL_CODE } from '../constants/nationalCode';
import { Button, ContactIcon, LikeIcon, ViewIcon, Modal, TypoBody, CameraIcon } from '@closet-design-system/core-connect';
import Carousel from "react-material-ui-carousel";
import {NextPage} from "next";
import CreatorCard from "../components/CreatorCard";

const Home: React.FC = ({ creatorList, creatorIntro }) => {
  console.log("creatorList : ", creatorList)
  return (
      <div className={styles.container}>
        <Head>
          <title>Closet Connect Onboarding 2 by jhin</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div>
            {creatorList.map((dataObj, index) => (
                <div className={styles.grid} key={dataObj.userId}>
                  <CreatorCard dataObj={dataObj}/>

                  {/*<div className={styles.slider}>*/}
                  {/*  <Carousel cycleNavigation={true} navButtonsAlwaysVisible={true}>*/}
                  {/*    {dataObj.items.map((content, index) => (*/}
                  {/*        <div key={index}>*/}
                  {/*          <img src={content.imagePath} className={styles.carouselImage} />*/}
                  {/*        </div>*/}
                  {/*    ))}*/}
                  {/*  </Carousel>*/}
                  {/*</div>*/}
                </div>
            ))}
          </div>
        </main>
      </div>
  )
}

export async function getServerSideProps(context) {
  const creatorsInputObj = {
    "keyword": "",
    "countries": [],
    "occupations": [
      2
    ],
    "pageNo": 1,
    "pageSize": 24,
    "defaultSortBy": 1,
    "sortby": 2
  };

  try {
    const response = await axios.post('https://test-connect.api.clo-set.com/api/creators', creatorsInputObj);
    const creatorList = response.data.creators;

    // Creator Introduction
    let creatorIntro = [];
    for(let i = 0; i < creatorList.length; i ++){
      if(creatorList[i].introduction !== "" && creatorList[i].introduction.ops !== [] && creatorList[i].introduction.ops[0]){
        creatorIntro.push(creatorList[i].introduction.ops[0].insert)
      } else {
        creatorIntro.push("")
      }
    }

    return {
      props: {
        creatorList: creatorList,
        creatorIntro: creatorIntro
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        creatorList: []
      }
    };
  }
}

export default Home
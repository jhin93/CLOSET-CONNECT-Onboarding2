import styles from "styles/Home.module.css";
import React, {useState} from "react";
import {Button, CameraIcon, ContactIcon, LikeIcon, Modal, TypoBody, ViewIcon} from "@closet-design-system/core-connect";
import {NATIONAL_CODE} from "../constants/nationalCode";
import styled from "@emotion/styled";


interface CreatorCardProps {
    dataObj: any;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ dataObj }) => {
    const findCountryLabel = (countryCode) => {
        const country = NATIONAL_CODE.find(item => item.value === countryCode);
        return country ? country.label : '';
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalOpen = () => {
        setIsModalOpen(true);
        console.log("isModalOpen : ", isModalOpen)
    };
    const modalClose = () => {
        setIsModalOpen(false);
        console.log("isModalOpen : ", isModalOpen)
    };

    return (
        <Card>
            <h2>{dataObj.creator}</h2>
            <JobList>
                {
                    dataObj.occupations.filter(occupation => occupation.name && occupation.name.trim() !== '').map((occupation, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && ', '}
                            <span>{occupation.name}</span>
                        </React.Fragment>
                    ))
                }
            </JobList>
            <div>
                <p>{findCountryLabel(dataObj.country)}</p>
            </div>
            <div>
                {dataObj.photo && <CreatorThumb src={dataObj.photo} alt="Creator Thumbnail" />}
            </div>
            <div>
                {dataObj.introduction !== "" && dataObj.introduction.ops.length > 0 && (
                    <p>{dataObj.introduction.ops[0].insert}</p>
                )}
            </div>
            <UserSection>
                <Button
                    shape="fill"
                    size="sm"
                    variant="primary"
                    width="initial"
                >
                    <p>FOLLOW</p>
                </Button>
                <UserInfo>
                    <ViewIcon />
                    <p>{dataObj.viewCount}</p>
                </UserInfo>
                <UserInfo>
                    <LikeIcon />
                    <p>{dataObj.likeCount}</p>
                </UserInfo>
                <UserInfo>
                    <ContactIcon />
                    <Button onClick={modalOpen}>{dataObj.followerCount}</Button>
                    <Modal isOpen={isModalOpen} onClose={modalClose} modalZIndex={10000}>
                        <Modal.Header>제목</Modal.Header>
                        <Modal.Content>
                            <TypoBody>컨텐츠로 무엇이든 올 수 있어요</TypoBody>
                            <CameraIcon />
                        </Modal.Content>
                        <Modal.Footer>
                            <Button onClick={modalClose}>닫기</Button>
                        </Modal.Footer>
                    </Modal>
                </UserInfo>
            </UserSection>
        </Card>
    )
}

export default CreatorCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 40px 40px 40px 60px;
  text-align: left;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100rem;
  background-color: rgb(46, 46, 51);
  
  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.5;
  }
`;

const JobList = styled.div`
  display: flex;
`;

const CreatorThumb = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: -100px;
  margin-top: -50px;
`;

const UserSection = styled.div`
  display: flex;
  margin-top: 10px;
  height: 1rem;

  p {
    font-size: 1rem;
    margin-left: 8px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  margin-left: 16px;
`;
import styles from "styles/Home.module.css";
import React, {useState} from "react";
import {Button, CameraIcon, ContactIcon, LikeIcon, Modal, TypoBody, ViewIcon} from "@closet-design-system/core-connect";
import {NATIONAL_CODE} from "../constants/nationalCode";


interface CreatorCardProps {
    dataObj: any; // dataObj의 타입을 적절하게 수정해야 합니다.
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

    return (<div className={styles.card}>
        <h2>{dataObj.creator}</h2>
        <div className={styles.joblist}>
            {
                dataObj.occupations.filter(occupation => occupation.name && occupation.name.trim() !== '').map((occupation, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && ', '}
                        <span>{occupation.name}</span>
                    </React.Fragment>
                ))
            }
        </div>
        <div>
            <p>{findCountryLabel(dataObj.country)}</p>
        </div>
        <div>
            {dataObj.photo && <img src={dataObj.photo} className={styles.creatorThumb} alt="Creator Thumbnail" />}
        </div>
        <div>
            {dataObj.introduction !== "" && dataObj.introduction.ops.length > 0 && (
                <p>{dataObj.introduction.ops[0].insert}</p>
            )}
        </div>
        <div className={styles.userSection}>
            <Button
                shape="fill"
                size="sm"
                variant="primary"
                width="initial"
            >
                <p>FOLLOW</p>
            </Button>
            <div className={styles.userInfo}>
                <ViewIcon />
                <p>{dataObj.viewCount}</p>
            </div>
            <div className={styles.userInfo}>
                <LikeIcon />
                <p>{dataObj.likeCount}</p>
            </div>
            <div className={styles.userInfo}>
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
            </div>
        </div>
    </div>)
}

export default CreatorCard;
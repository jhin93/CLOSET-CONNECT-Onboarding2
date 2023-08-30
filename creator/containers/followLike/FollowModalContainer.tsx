import * as React from 'react';
import FollowParentTabContainer from 'containers/followLike/FollowParentTabContainer';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { selectFollowModalTab, selectShowFollowModal } from 'features/followLike/followLikeSlice';
import ModalTemplateContainer from 'containers/followLike/ModalTemplateContainer';

interface Props {
    userId: number;
    onCloseModal: () => void;
}

const FollowModalContainer = ({ userId, onCloseModal }: Props): ReactElement => {
    const showModal = useSelector(selectShowFollowModal);
    const followCategory = useSelector(selectFollowModalTab);

    return (
        <ModalTemplateContainer isOpen={showModal} onClose={onCloseModal}>
            <FollowParentTabContainer userId={userId} selectedTab={followCategory} />
        </ModalTemplateContainer>
    );
};

export default FollowModalContainer;

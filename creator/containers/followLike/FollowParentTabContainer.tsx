import * as React from 'react';
import { ReactElement, useState } from 'react';
import ModalTabBar from 'components/followLike/ModalTabBar';
import { useSelector } from 'react-redux';
import { selectFollowerList, selectFollowingList } from 'features/followLike/followLikeSlice';
import { FollowCategoryType } from '@closet/types/followlike';
import FollowerTabContainer from 'containers/followLike/FollowerTabContainer';
import FollowingTabContainer from 'containers/followLike/FollowingTabContainer';

const FOLLOW_TAPS = [
  { key: 'follower', label: 'label_follower' },
  { key: 'following', label: 'label_following' },
];

interface Props {
  userId: number;
  selectedTab: FollowCategoryType;
}

const FollowParentTabContainer = ({ userId, selectedTab: _selectedTab }: Props): ReactElement => {
  const [selectedTab, setSelectedTab] = useState<FollowCategoryType>(_selectedTab);
  const { loading: followerLoading, data: followers } = useSelector(selectFollowerList);
  const { loading: followingLoading, data: followings } = useSelector(selectFollowingList);

  const handleClickTab = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    const tab = evt.currentTarget.value as FollowCategoryType;
    setSelectedTab(tab);
  };

  return (
    <>
      <ModalTabBar tabs={FOLLOW_TAPS} onClickTab={handleClickTab} selectedTab={selectedTab} />
      {selectedTab === 'follower' ? (
        <FollowerTabContainer
          userId={userId}
          pageNo={followers.pageNo}
          isLoading={followerLoading}
          totalCount={followers.totalCount}
          users={followers.users}
        />
      ) : (
        <FollowingTabContainer
          userId={userId}
          isLoading={followingLoading}
          pageNo={followings.pageNo}
          totalCount={followings.totalCount}
          users={followings.users}
        />
      )}
    </>
  );
};

export default FollowParentTabContainer;

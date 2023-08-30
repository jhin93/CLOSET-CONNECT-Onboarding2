import * as React from 'react';
import { followLikeActions } from 'features/followLike/followLikeSlice';
import { useDispatch } from 'react-redux';
import { ReactElement } from 'react';
import { Follower } from '@closet/types/followlike';
import { PAGE_SIZE } from 'constants/followLike';
import FollowListContainer from 'containers/followLike/FollowListContainer';

interface Props {
  userId: number;
  isLoading: boolean;
  pageNo: number;
  totalCount: number;
  users: Follower[];
}

const FollowingTabContainer = ({
  userId,
  isLoading,
  pageNo,
  totalCount,
  users,
}: Props): ReactElement => {
  const dispatch = useDispatch();

  const getFollowingList = (pageNo: number): void => {
    dispatch(
      followLikeActions.getFollowingList({
        userId,
        pageNo: pageNo + 1,
        pageSize: PAGE_SIZE,
      }),
    );
  };

  return (
    <FollowListContainer
      followType={'following'}
      isLoading={isLoading}
      pageNo={pageNo}
      totalCount={totalCount}
      users={users}
      getFollowList={getFollowingList}
    />
  );
};

export default FollowingTabContainer;

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

const FollowerTabContainer = ({
  userId,
  isLoading,
  pageNo,
  totalCount,
  users,
}: Props): ReactElement => {
  const dispatch = useDispatch();

  const getFollowerList = (pageNo: number): void => {
    dispatch(
      followLikeActions.getFollowerList({
        userId,
        pageNo: pageNo + 1,
        pageSize: PAGE_SIZE,
      }),
    );
  };

  return (
    <FollowListContainer
      followType={'follower'}
      isLoading={isLoading}
      pageNo={pageNo}
      totalCount={totalCount}
      users={users}
      getFollowList={getFollowerList}
    />
  );
};

export default FollowerTabContainer;

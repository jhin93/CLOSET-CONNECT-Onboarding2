import * as React from 'react';
import { ReactElement, useEffect } from 'react';
import { CircleSpinner } from '@closet-design-system/core';
import FollowList from 'components/followLike/FollowList';
import { FollowCategoryType, Follower } from '@closet/types/followlike';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { followLikeActions } from 'features/followLike/followLikeSlice';

interface Props {
  isLoading: boolean;
  pageNo: number;
  totalCount: number;
  users: Follower[];
  followType: FollowCategoryType;
  getFollowList: (pageNo: number) => void;
}

const FollowListContainer = ({
  isLoading,
  pageNo,
  totalCount,
  users,
  followType,
  getFollowList,
}: Props): ReactElement => {
  const dispatch = useDispatch();

  const handleLinkAction = (): void => {
    dispatch(followLikeActions.setShowFollowModal({ show: false }));
  };

  const getResultOnInfiniteScroll = async (): Promise<void> => {
    getFollowList(pageNo);
  };

  useEffect(() => {
    getFollowList(0);
    return () => {
      dispatch(followLikeActions.initFollowLikeState());
    };
  }, []);

  return (
    <>
      {users.length === 0 && isLoading ? (
        <InitCircleSpinner>
          <CircleSpinner size={'md'} />
        </InitCircleSpinner>
      ) : (
        <FollowList
          followerType={followType}
          isLoading={isLoading}
          pageNo={pageNo}
          totalCount={totalCount}
          followList={users}
          onLinkAction={handleLinkAction}
          getResultOnInfiniteScroll={getResultOnInfiniteScroll}
        />
      )}
    </>
  );
};

const InitCircleSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  padding-top: 45%;
`;

export default FollowListContainer;

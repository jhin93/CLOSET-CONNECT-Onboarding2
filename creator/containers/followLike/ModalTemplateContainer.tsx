import * as React from 'react';
import { Button, Modal } from '@closet-design-system/core';
import { FOLLOW_MODAL_WIDTH } from 'constants/followLike';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { mq } from '@closet-design-system/theme';
import { MODAL_TEMPLATE_Z_INDEX } from 'constants/common/zIndex';

interface Props {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  innerHeight?: string[];
  innerMinHeight?: string[];
}

const ModalTemplateContainer: React.FC<Props> = ({
  children,
  isOpen,
  title,
  onClose,
  innerHeight = '64rem',
  innerMinHeight = '64rem',
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      width={FOLLOW_MODAL_WIDTH}
      hasContentAllSpacing={false}
      minWidth={'initial'}
      modalZIndex={MODAL_TEMPLATE_Z_INDEX}
    >
      {title && <Modal.Header>{title}</Modal.Header>}
      {/* Modal.Content 에서는 Hight 조절이 안되어 Content는 비우고 사용 */}
      <Modal.Content>
        <></>
      </Modal.Content>
      <FixedHeightModal height={innerHeight} minHeight={innerMinHeight}>
        {children}
      </FixedHeightModal>
      <Modal.Footer>
        <Button onClick={onClose}>{t('btn_ok')}</Button>
      </Modal.Footer>
    </Modal>
  );
};

const FixedHeightModal = styled.div<{ height: string | string[]; minHeight: string | string[] }>(
  ({ height, minHeight }) =>
    mq()({
      height,
      minHeight,
      padding: ['0 16px', '0 24px'],
    }),
);

export default ModalTemplateContainer;

import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { BLUE, BOX_BACKGROUND, DARK_BLUE } from '../../utils/colorConsts';

export const AddButton = styled(IconButton)`
  background-color: ${BLUE};
  color: ${BOX_BACKGROUND};
  &:hover {
    background-color: ${DARK_BLUE};
  }
  position: fixed;
  bottom: 20px;
  left: 90%;
`;

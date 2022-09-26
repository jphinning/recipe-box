import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { BLUE, DARK_BLUE, WHITE } from '../../../utils/colorConsts';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const FormBox = styled.div`
  background-color: ${WHITE};
  width: 350px;
  border-radius: 10px;
  margin: 5%;
  padding: 40px;
  @media (max-width: 800px) {
    width: 100%;
  }
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${BLUE};
  border-radius: 50px;
  color: ${WHITE};
  padding-inline: 30px;
  padding-block: 8px;
  &:hover {
    background-color: ${DARK_BLUE};
  }
`;

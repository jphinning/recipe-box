import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { WHITE } from '../../utils/colorConsts';

export const RecipeWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  width: 60%;
  background-color: ${WHITE};
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 4px;
  row-gap: 15px;
`;

export const CardHeader = styled.div`
  display: flex;
  column-gap: 15px;
`;

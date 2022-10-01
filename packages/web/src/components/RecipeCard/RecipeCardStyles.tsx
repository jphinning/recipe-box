import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { BLACK, BLUE, WHITE } from '../../utils/colorConsts';

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
  overflow-wrap: break-word;
`;

export const RouterLink = styled(Link)`
  overflow: hidden;
  text-decoration: 'none' !important;
  color: ${BLACK};

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
    color: ${BLUE};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  column-gap: 15px;
`;

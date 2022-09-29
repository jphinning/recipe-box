import styled from 'styled-components';
import { BOX_BORDER, TEXT_GRAY, WHITE } from '../../../utils/colorConsts';

export const SearchButton = styled.div`
  border: none;
  width: 100%;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  font-size: 1.1em;
  align-items: center;
  border: 1px solid ${BOX_BORDER};
  justify-content: left;
  background-color: ${WHITE};
  padding-inline: 15px;
  padding-block: 8px;
  color: ${TEXT_GRAY};
  font-size: 0.9em;
  &:hover {
    border-color: ${TEXT_GRAY};
  }
`;

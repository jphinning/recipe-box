import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BLUE, TEXT_GRAY } from '../../../utils/colorConsts';

export const NavLinkStyles = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: inherit;
  color: ${TEXT_GRAY};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding-block: 5px;
  &:hover {
    border-bottom: 3px solid ${BLUE};
    color: ${BLUE};
  }
  &:focus {
    color: ${BLUE};
    border-bottom: 3px solid ${BLUE};
  }
`;

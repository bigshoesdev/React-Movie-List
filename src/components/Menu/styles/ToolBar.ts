import { Toolbar, styled } from '@mui/material';
import { MENU_HEIGHT } from '../../../styles';

const ToolBar = styled(Toolbar)`
max-height: ${MENU_HEIGHT}, 
background: ${({ theme }) => theme.palette.primary.main},
`;

export default ToolBar;

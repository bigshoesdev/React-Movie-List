import { MenuItem, styled } from '@mui/material';

const StyledMenuItem = styled(MenuItem)`
    margin-right: '40px',
    font-size: '1rem',
    font-weight: 'bold',
    color: ${({ theme }) => theme.palette.primary.main},
    border-radius: 10px,
    &:hover: {
        color: ${({ theme }) => theme.palette.primary.light},
      },
`;

export default StyledMenuItem;

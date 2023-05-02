import { Box, styled } from '@mui/material';
import Logo from '../../../../assets/logo.jpg';

const Detail = styled(Box)`
  display: flex;
  flex-direction: column;
  background: url(${Logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Detail;

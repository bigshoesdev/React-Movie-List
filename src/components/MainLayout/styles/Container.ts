import { Box, styled } from '@mui/material';
import backgroundImage from '../../../assets/img-bg.jpg';

const Container = styled(Box)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background: url(${backgroundImage}) no-repeat center;
`;

export default Container;

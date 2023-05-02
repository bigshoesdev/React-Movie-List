import { Box, styled } from '@mui/material';
import ItemBackgroundImage from '../../../../assets/img-box-bg.jpg';

const Container = styled(Box)`
  height: 10rem;
  width: 80%;
  display: flex;
  flex-direction: row;
  border-radius: 2rem;
  gap: 1rem;
  background: url(${ItemBackgroundImage});
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
  margin-tp: 1rem;
  overflow: hidden;
  cursor: pointer;
`;

export default Container;

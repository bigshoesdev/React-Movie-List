import { Box, styled } from '@mui/material';

type ImageProps = {
  file: string;
};

export const Image = styled(Box)`
  width: 20%;
  height: 100%;
  background: ${({ file }: ImageProps) => `url(${file})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

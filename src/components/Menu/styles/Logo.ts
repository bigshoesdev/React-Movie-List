import { Box, styled } from '@mui/material';

type LogoProps = {
  file: string;
};

export const Logo = styled(Box)`
  width: 10rem;
  height: 54px;
  background: ${({ file }: LogoProps) => `url(${file})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

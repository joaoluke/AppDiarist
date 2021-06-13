import { experimentalStyled as styled } from "@material-ui/core/styles";

export const Container = styled("div")`
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-right: 2rem;
`;

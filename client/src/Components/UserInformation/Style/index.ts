import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Avatar, Rating } from "@material-ui/core/";

export const Container = styled("div")`
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
  align-items: center;
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";

  .user-name {
    grid-area: name;
    font-weight: bolder;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }

  .user-description {
    grid-area: description;
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;

export const AvatarUser = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

export const RatingUser = styled(Rating)`
  grid-area: rating;
`;

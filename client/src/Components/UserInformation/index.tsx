import * as S from "./Style";

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

export default function UserInformation(props: UserInformationProps) {
  return (
    <S.Container>
      <S.AvatarUser src={props.picture}>{props.name[0]}</S.AvatarUser>
      <div className="user-name">{props.name}</div>
      <S.RatingUser readOnly value={props.rating} />
      <div className="user-description">{props.description}</div>
    </S.Container>
  );
}

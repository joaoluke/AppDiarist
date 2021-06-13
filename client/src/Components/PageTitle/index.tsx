import * as S from './Style'

interface PageTitleProps {
  title: string;
  subtitle: string;
}

export default function PageTitle(props: PageTitleProps) {
  return (
    <S.Container>
      <h2 className="title">{props.title}</h2>
      <h4 className="subtitle">{props.subtitle}</h4>
    </S.Container>
  );
};

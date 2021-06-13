import { Toolbar, Container } from "@material-ui/core";

import * as S from "./Style";

export default function Header() {
  return (
    <S.HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <S.HeaderLogo src="/img/logos/logo.svg" alt="Logo" />
      </Toolbar>
    </S.HeaderAppBar>
  );
}

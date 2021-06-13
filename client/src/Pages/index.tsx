import Head from "next/head";
import Image from "next/image";

import Feedback from "Components/Feedback";
import PageTitle from "Components/PageTitle";
import UserInformation from "Components/UserInformation";

import styles from "Styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Feedback />
      <PageTitle
        subtitle={
          "Preencha seu endereço e veja os profissionais da sua localidade"
        }
        title={"Conheça os profissionais"}
      />
      <UserInformation
        picture="https://github.com/joaoluke.png"
        name="John Luke"
        rating={4}
        description="Florianópolis"
      />
    </>
  );
}

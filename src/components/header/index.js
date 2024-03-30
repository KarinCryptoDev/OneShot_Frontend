import { useEffect, useState } from "react";

import { useWallet } from "@/wallets/wallet-selector";

import * as S from "./styled";

const Header = () => {
  const { signedAccountId, logOut, logIn } = useWallet();

  const handleButtonClick = () => {
    if (signedAccountId) {
      logOut();
    } else {
      logIn();
    }
  };

  return (
    <S.HeaderWrapper>
      <S.Logo>Logo Here</S.Logo>
      <S.Button onClick={handleButtonClick}>
        {signedAccountId ? "Logout" : "Login"}
      </S.Button>
    </S.HeaderWrapper>
  );
};

export default Header;

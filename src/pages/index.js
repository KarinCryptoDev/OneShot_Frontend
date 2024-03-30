"use client";
import { useWallet } from "@/wallets/wallet-selector";
import { useState, useEffect } from "react";
import { HelloNearContract, NetworkId } from "../config";
import BN from "bn.js";

import * as S from "./styled";

const CONTRACT = HelloNearContract[NetworkId];

const Home = () => {
  const { signedAccountId, viewMethod, callMethod } = useWallet();

  const [greeting, setGreeting] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [media, setMedia] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleGithubUrlChange = (event) => {
    setGithubUrl(event.target.value);
  };

  const handleMediaChange = (event) => {
    setMedia(event.target.value);
  };

  useEffect(() => {
    viewMethod &&
      viewMethod(CONTRACT, "nft_tokens", {}).then((greeting) =>
        setGreeting(greeting)
      );
  }, [viewMethod]);

  useEffect(() => {
    setLoggedIn(!!signedAccountId);
  }, [signedAccountId]);

  const saveGreeting = async () => {
    setShowSpinner(true);
    await callMethod(
      CONTRACT,
      "nft_mint",
      {
        token_id: "Oneshot-token-6",
        metadata: {
          title,
          description,
          githubUrl,
          media,
        },
        receiver_id: signedAccountId,
      },
      undefined,
      new BN("100000000000000000000000")
    );
    setShowSpinner(false);
  };

  return (
    <S.Page>
      <S.Wrapper>
        <S.LNBWrapper>
          {greeting?.map((elem) => (
            <S.ItemWrapper>
              <S.ItemWrapperLeft>
                <S.ItemMedia src={elem.metadata.media} />
              </S.ItemWrapperLeft>
              <S.ItemWrapperRight>
                <S.ItemTitle>{elem.metadata.title}</S.ItemTitle>
                <S.ItemDescription>
                  {elem.metadata.description}
                </S.ItemDescription>
                <S.ItemGitubUrl>{elem.metadata.githubUrl}</S.ItemGitubUrl>
              </S.ItemWrapperRight>
            </S.ItemWrapper>
          ))}
        </S.LNBWrapper>
        <S.ContentWrapper>콘텐츠 영역</S.ContentWrapper>
      </S.Wrapper>

      {/* <input value={title} onChange={handleTitleChange} />
      <br />
      <input value={description} onChange={handleDescriptionChange} />
      <br />
      <input value={githubUrl} onChange={handleGithubUrlChange} />
      <br />
      <input value={media} onChange={handleMediaChange} />
      <br />

      <button onClick={saveGreeting}>test</button> */}
    </S.Page>
  );
};

export default Home;

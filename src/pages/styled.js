import styled from "styled-components";

export const Page = styled("div")`
  padding-left: 10vw;
  padding-right: 10vw;
`;

export const Wrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid rgb(220, 220, 220);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 10px rgba(100, 100, 100, 0.05);
  background-color: white;
`;

export const LNBWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const ItemWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border-bottom: 1px solid rgb(220, 220, 220);
  padding: 20px;
  gap: 10px;
`;

export const ItemWrapperLeft = styled("div")``;

export const ItemWrapperRight = styled("div")``;

export const ItemTitle = styled("div")`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ItemDescription = styled("div")`
  font-size: 0.8rem;
`;

export const ItemGitubUrl = styled("div")`
  font-size: 0.8rem;
`;

export const ItemMedia = styled("img")`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const ContentWrapper = styled("div")`
  border-left: 1px solid rgb(220, 220, 220);
`;

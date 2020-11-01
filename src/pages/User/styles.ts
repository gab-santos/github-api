import { GoMarkGithub, GoRepo } from "react-icons/go";

import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 34rem; // 544px

  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    display: flex;
    align-items: center;
    margin-top: 40px;

    font: 700 24px "Poppins";
    line-height: 36px;
    text-transform: capitalize;
    color: ${props => props.theme.colors.lightPrimary};
  }
`;

export const GithubLogo = styled(GoMarkGithub).attrs({
  size: "34px",
})`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.lightPrimary};
`;

export const RepoIcon = styled(GoRepo).attrs({
  size: "24px",
})`
  margin-right: 20px;
`;

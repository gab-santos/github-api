import { GoMarkGithub, GoRepo } from "react-icons/go";

import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 34rem; // 544px

  margin: 0 auto;
  padding: 1.25rem 0.625rem; // 20px 10px

  display: flex;
  flex-direction: column;
  align-items: center;

  .loading,
  .no-repositories {
    font: 700 1rem "Poppins"; //16px
    color: ${props => props.theme.colors.lightPrimary};
  }

  .no-repositories {
    margin-top: 1.25rem; // 20px
  }

  .error {
    font: 700 1rem "Poppins"; //16px
    color: ${props => props.theme.colors.darkPrimary};
  }

  > strong {
    display: flex;
    align-items: center;
    margin-top: 2.5rem; //40px

    font: 700 1.5rem "Poppins"; //1.5rem
    line-height: 2.25rem; //36px
    text-transform: capitalize;
    color: ${props => props.theme.colors.lightPrimary};
  }
`;

export const GithubLogo = styled(GoMarkGithub).attrs({
  size: "2.125rem", // 34px
})`
  margin-bottom: 1.25rem; // 20px
  color: ${props => props.theme.colors.lightPrimary};
`;

export const RepoIcon = styled(GoRepo).attrs({
  size: "1.5rem", // 1.5rem
})`
  margin-right: 1.25rem; // 20px
`;

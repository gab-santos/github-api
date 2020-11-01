import { GoMarkGithub, GoPerson, GoSearch } from "react-icons/go";

import { lighten, darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-width: 34rem; // 544px

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GithubLogo = styled(GoMarkGithub).attrs({
  size: "7rem", // 112px
})`
  color: ${props => props.theme.colors.lightPrimary};
  margin-bottom: 2.5rem; //40px
`;

export const Main = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 20px;
  background-color: ${props => props.theme.colors.light};
  border-radius: 8px;

  label {
    font: 16px "Poppins";
    line-height: 24px;
    color: ${props => props.theme.colors.primary};
  }

  .input-container {
    height: 48px;

    display: flex;
    align-items: center;

    padding: 10px;
    margin: 10px 0;

    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.light};
    border-radius: 4px;

    :focus-within {
      border-color: ${props => props.theme.colors.lightPrimary};
    }

    input {
      width: 100%;

      line-height: 24px;
      color: ${props => props.theme.colors.darkPrimary};
      outline: 0;
      border: 0;

      ::placeholder {
        color: ${props => props.theme.colors.gray};
      }
    }
  }

  button {
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    outline: 0;
    border: 0;
    text-decoration: none;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.secondary};

    color: ${props => props.theme.colors.white};
    font-weight: 500;
    text-transform: uppercase;

    cursor: pointer;

    :hover {
      background: ${props => lighten(0.02, props.theme.colors.secondary)};
    }

    :active {
      background: ${props => darken(0.02, props.theme.colors.secondary)};
    }
  }
`;

export const PersonIcon = styled(GoPerson).attrs({
  size: "24px",
})`
  color: ${props => props.theme.colors.lightPrimary};
  margin-right: 10px;
`;

export const SearchIcon = styled(GoSearch).attrs({
  size: "24px",
})`
  margin-right: 10px;
`;

import { darken, lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: 2.5rem; //40px
  display: flex;
  align-items: center;
  justify-content: space-between;

  > strong {
    font: 600 1.125rem "Poppins"; //18px
    color: ${props => props.theme.colors.lightPrimary};
  }

  > button {
    height: 3rem; //48px

    display: flex;
    align-items: center;
    justify-content: center;

    outline: 0;
    border: 0;
    padding: 0 0.625rem; //10px
    text-decoration: none;
    border-radius: 0.25rem; //4px
    background-color: ${props => props.theme.colors.secondary};

    color: ${props => props.theme.colors.white};
    font-weight: 500;
    text-transform: uppercase;

    cursor: pointer;

    :disabled {
      background-color: ${props => props.theme.colors.gray};
      cursor: not-allowed;
    }

    :not(:disabled):hover {
      background: ${props => lighten(0.02, props.theme.colors.secondary)};
    }

    :active {
      background: ${props => darken(0.02, props.theme.colors.secondary)};
    }
  }
`;

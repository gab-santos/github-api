import { GoLink, GoLocation, GoMention } from "react-icons/go";

import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;

  border-radius: 8px;
  background-color: ${props => props.theme.colors.light};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  height: 112px;
  width: 112px;
  border-radius: 56px;

  object-fit: cover;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 20px;

  a {
    font: 600 24px "Poppins";
    line-height: 36px;
    color: ${props => props.theme.colors.darkPrimary};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    align-items: center;

    font-size: 14px;
    line-height: 21px;
    color: ${props => props.theme.colors.primary};

    :first-of-type {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

const icons = {
  size: "14px",
  style: css`
    margin-right: 5px;
  `,
};

export const UsernameIcon = styled(GoMention).attrs({
  size: icons.size,
})`
  ${icons.style}
`;

export const LinkIcon = styled(GoLink).attrs({
  size: icons.size,
})`
  ${icons.style}
`;

export const LocationIcon = styled(GoLocation).attrs({
  size: icons.size,
})`
  ${icons.style}
`;

export const Bio = styled.footer`
  margin-top: 20px;

  p {
    line-height: 24px;
    color: ${props => props.theme.colors.darkPrimary};
  }
`;

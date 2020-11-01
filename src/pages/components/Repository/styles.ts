import { GoEye, GoStar, GoRepoForked, GoChevronRight } from "react-icons/go";

import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;

  border-radius: 8px;

  margin-top: 20px;
`;

export const Main = styled.main`
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.colors.light};
`;

export const Name = styled.span`
  font: 500 24px "Poppins";
  color: ${props => props.theme.colors.darkPrimary};
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Info = styled.span`
  display: flex;
  align-items: center;

  margin-right: 20px;
  color: ${props => props.theme.colors.lightPrimary};
  font-size: 14px;
  line-height: 21px;
`;

const icons = {
  size: "16px",
  styles: css`
    margin-right: 5px;
  `,
};

export const EyeIcon = styled(GoEye).attrs({
  size: icons.size,
})`
  ${icons.styles}
`;

export const StarIcon = styled(GoStar).attrs({
  size: icons.size,
})`
  ${icons.styles}
`;

export const ForkIcon = styled(GoRepoForked).attrs({
  size: icons.size,
})`
  ${icons.styles}
`;

export const Description = styled.p`
  margin-top: 20px;
  color: ${props => props.theme.colors.primary};
`;

export const Link = styled.a`
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.secondary};
`;

export const LinkIcon = styled(GoChevronRight).attrs({
  size: "24px",
})`
  color: ${props => props.theme.colors.white};
`;

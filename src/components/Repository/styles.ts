import { GoEye, GoStar, GoRepoForked, GoChevronRight } from "react-icons/go";

import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;

  border-radius: 0.5rem; //8px

  margin-top: 1.25rem; //20px
`;

export const Main = styled.main`
  width: 100%;
  padding: 1.25rem; //20px
  background-color: ${props => props.theme.colors.light};
`;

export const Name = styled.span`
  font: 500 1.5rem "Poppins"; //24px
  color: ${props => props.theme.colors.darkPrimary};
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Info = styled.span`
  display: flex;
  align-items: center;

  margin-right: 1.25rem; //20px
  color: ${props => props.theme.colors.lightPrimary};
  font-size: 0.875rem; //14px
  line-height: 1.313rem; //21px
`;

const icons = {
  size: "1rem", // 16px
  styles: css`
    margin-right: 0.313rem; //5px
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
  margin-top: 1.25rem; //20px
  color: ${props => props.theme.colors.primary};
`;

export const LanguagesContainer = styled.div`
  width: 100%;
  margin-top: 0.625rem; //10px
`;

export const Languages = styled.span`
  margin-right: 0.625rem; //10px
  padding: 0.313rem 0.938rem; //5px 15px

  font-size: 0.875rem; //14px
  line-height: 1.313rem; //21px
  border-radius: 0.688rem; //11px
  background-color: ${props => props.theme.colors.lightPrimary};
  color: ${props => props.theme.colors.primary};
`;

export const Link = styled.a`
  width: 2.5rem; //40px

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.secondary};
`;

export const LinkIcon = styled(GoChevronRight).attrs({
  size: "1.5rem",
})`
  color: ${props => props.theme.colors.white};
`;

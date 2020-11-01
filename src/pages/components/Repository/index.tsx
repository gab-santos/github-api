import React from "react";

import {
  Container,
  Main,
  Name,
  Infos,
  Info,
  EyeIcon,
  StarIcon,
  ForkIcon,
  Description,
  Link,
  LinkIcon,
} from "./styles";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  languages_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
}

interface RepositoryProps {
  repository: Repo;
}

const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  return (
    <Container>
      <Main>
        <Name>Lorem ipsum dolor</Name>

        <Infos>
          <Info>
            <EyeIcon />
            &nbsp; 0
          </Info>

          <Info>
            <StarIcon />
            &nbsp; 0
          </Info>

          <Info>
            <ForkIcon />
            &nbsp; 0
          </Info>
        </Infos>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores
          quae inventore. Illum, pariatur natus. Veniam, nesciunt explicabo?
          Sapiente minus laboriosam impedit esse exercitationem nobis deserunt
          dolore maiores eius repudiandae?
        </Description>
      </Main>

      <Link href="http://" target="_blank" rel="noopener noreferrer">
        <LinkIcon />
      </Link>
    </Container>
  );
};

export default Repository;

import React, { useEffect, useState } from "react";

import { Repo, requestRepoLanguages } from "../../services/github";

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
  LanguagesContainer,
  Languages,
  Link,
  LinkIcon,
} from "./styles";

interface RepositoryProps {
  repository: Repo;
}

const Repository: React.FC<RepositoryProps> = ({ repository: repo }) => {
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const response = await requestRepoLanguages(repo.languages_url);
      setLanguages(response);
    })();
  }, [repo]);

  return (
    <Container>
      <Main>
        <Name>{repo.name}</Name>

        <Infos>
          <Info>
            <EyeIcon />
            {repo.watchers_count}
          </Info>

          <Info>
            <StarIcon />
            {repo.stargazers_count}
          </Info>

          <Info>
            <ForkIcon />
            {repo.forks_count}
          </Info>
        </Infos>

        <Description>{repo.description}</Description>

        <LanguagesContainer>
          {languages.map(lang => (
            <Languages key={lang}>{lang}</Languages>
          ))}
        </LanguagesContainer>
      </Main>

      <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <LinkIcon />
      </Link>
    </Container>
  );
};

export default Repository;

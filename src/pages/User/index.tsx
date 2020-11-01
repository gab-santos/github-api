import React from "react";
import { Link, useParams } from "react-router-dom";

import Profile from "../components/Profile";
import Repository from "../components/Repository";

import { Container, GithubLogo, RepoIcon } from "./styles";

interface RouteParams {
  username: string;
}

const user = {
  login: "Lorem ipsum",
  avatar_url: "https://",
  html_url: "https://",
  name: "Lorem ipsum",
  blog: "http://",
  location: "Lorem ipsum",
  bio:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quibusdam fugiat ipsum doloribus iusto rerum est dicta ratione sint, natus veritatis illo rem vitae ex mollitia accusantium qui nemo in!",
};

const repository = {
  id: 1,
  name: "Lorem ipsum",
  html_url: "https://",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in sit pariatur esse nulla iure ullam nam unde est porro! Fugiat, at! Laudantium adipisci nostrum natus voluptate. Dolorum, quibusdam totam.",
  languages_url: "https://",
  stargazers_count: 0,
  watchers_count: 0,
  forks_count: 0,
};

const User: React.FC = () => {
  const { username } = useParams<RouteParams>();

  return (
    <Container>
      <Link to="/">
        <GithubLogo />
      </Link>

      <Profile user={user} />

      <strong>
        <RepoIcon />
        Repositórios
      </strong>

      <Repository repository={repository} />
      <Repository repository={repository} />
      <Repository repository={repository} />
      <Repository repository={repository} />
      <Repository repository={repository} />
    </Container>
  );
};

export default User;

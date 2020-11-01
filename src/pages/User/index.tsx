import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { AxiosError } from "axios";

import Pagination from "../../components/Pagination";
import Profile from "../../components/Profile";
import Repository from "../../components/Repository";
import {
  Repo,
  requestGithubRepos,
  requestGithubUser,
  User as UserInterface,
} from "../../services/github";

import { Container, GithubLogo, RepoIcon } from "./styles";

interface RouteParams {
  username: string;
}

const User: React.FC = () => {
  const reposPerPage = 5;
  const { username } = useParams<RouteParams>();

  const [user, setUser] = useState<UserInterface>();
  const [repositories, setRepositories] = useState<Repo[]>([]);

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await requestGithubUser(username);
        setUser(response.data);
        setTotalPages(response.data.public_repos / reposPerPage);
        //
      } catch (err) {
        requestAPIError(err);
      }
      setLoading(false);
    })();
  }, [username]);

  useEffect(() => {
    (async () => {
      try {
        const response = await requestGithubRepos(
          username,
          reposPerPage,
          currentPage,
        );

        setRepositories(response.data);

        window.scrollTo({ top: 0 });
        //
      } catch (err) {
        requestAPIError(err);
      }
      setLoading(false);
    })();
  }, [username, currentPage]);

  function requestAPIError({ response }: AxiosError) {
    if (response?.status === 404) {
      setError("Usuário não encontrado");
      return;
    }
    setError("Algo inexperado aconteceu, tente novamente mais tarde :D");
  }

  const handlePagination = {
    nextPage: () => setCurrentPage(prev => prev + 1),
    previousPage: () => setCurrentPage(prev => prev - 1),
  };

  if (loading) {
    return (
      <Container>
        <Link to="/">
          <GithubLogo />
        </Link>

        <span className="loading">Carregando...</span>
      </Container>
    );
  }

  if (error || !user) {
    return (
      <Container>
        <Link to="/">
          <GithubLogo />
        </Link>

        <span className="error">{error}</span>
      </Container>
    );
  }

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

      {repositories.length <= 0 ? (
        <span className="no-repositories">Nenhum repositório encontrado</span>
      ) : (
        <>
          {repositories.map(repo => (
            <Repository key={repo.id} repository={repo} />
          ))}
          <Pagination {...{ handlePagination, currentPage, totalPages }} />
        </>
      )}
    </Container>
  );
};

export default User;

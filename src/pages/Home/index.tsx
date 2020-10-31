/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, GithubLogo, Main, PersonIcon, SearchIcon } from "./styles";

const Home: React.FC = () => {
  const [user, setUser] = useState("");

  return (
    <Container>
      <GithubLogo />
      <Main>
        <label htmlFor="user">Pesquise por um usuário do Github</label>

        <div className="input-container">
          <PersonIcon />
          <input
            id="user"
            type="text"
            placeholder="Digite um usuário do Github"
            value={user}
            onChange={event => setUser(event.target.value)}
          />
        </div>

        <Link to={`/user/${user}`}>
          <SearchIcon />
          Pesquisar
        </Link>
      </Main>
    </Container>
  );
};

export default Home;

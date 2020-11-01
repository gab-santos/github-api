/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, GithubLogo, Main, PersonIcon, SearchIcon } from "./styles";

const Home: React.FC = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!user) {
      setError("Digite um usuário!");
      return;
    }

    history.push(`/user/${user}`);
  }

  return (
    <Container>
      <GithubLogo />
      <Main onSubmit={handleSubmit}>
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

        {error && <span className="error">{error}</span>}

        <button type="submit">
          <SearchIcon />
          Pesquisar
        </button>
      </Main>
    </Container>
  );
};

export default Home;

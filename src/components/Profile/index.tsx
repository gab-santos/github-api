import React from "react";

import { User } from "../../services/github";

import {
  Container,
  Header,
  Avatar,
  UserData,
  Infos,
  UsernameIcon,
  LinkIcon,
  LocationIcon,
  Bio,
} from "./styles";

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} alt="" />

        <UserData>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            {user.name}
          </a>

          <Infos>
            <span>
              <UsernameIcon />
              {user.login}
            </span>
            <span>
              <LinkIcon />
              {user.blog}
            </span>
            <span>
              <LocationIcon />
              {user.location}
            </span>
          </Infos>
        </UserData>
      </Header>

      <Bio>
        <p>{user.bio}</p>
      </Bio>
    </Container>
  );
};

export default Profile;

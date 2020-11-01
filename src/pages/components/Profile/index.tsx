import React from "react";

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

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  location: string;
  bio: string;
}

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <Container>
      <Header>
        <Avatar src="https://picsum.photos/id/1003/200/300" alt="" />

        <UserData>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Lorem ipsum
          </a>

          <Infos>
            <span>
              <UsernameIcon />
              Lorem ipsum
            </span>
            <span>
              <LinkIcon />
              Lorem ipsum
            </span>
            <span>
              <LocationIcon />
              Lorem ipsum
            </span>
          </Infos>
        </UserData>
      </Header>

      <Bio>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          aspernatur cum doloremque qui, rem sapiente ut animi corporis,
          necessitatibus, amet maiores placeat delectus laudantium excepturi
          hic! Dolorum cum obcaecati id?
        </p>
      </Bio>
    </Container>
  );
};

export default Profile;

import axios, { AxiosResponse } from "axios";

export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
}

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  languages_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
}

const api = axios.create({
  baseURL: "https://api.github.com",
});

export async function requestGithubUser(
  username: string,
): Promise<AxiosResponse<User>> {
  const response = await api.get<User>(`/users/${username}`);
  return response;
}

export async function requestGithubRepos(
  username: string,
  per_page: number,
  page = 1,
): Promise<AxiosResponse<Repo[]>> {
  const response = await api.get<Repo[]>(
    `/users/${username}/repos?page=${page}&per_page=${per_page}`,
  );
  return response;
}

export async function requestRepoLanguages(
  languages_url: string,
): Promise<string[]> {
  const response = await axios.get(languages_url);
  return Object.keys(response.data);
}

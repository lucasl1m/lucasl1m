import { useQuery } from '@tanstack/react-query';
import { githubApi } from '@/lib/axios';

const GITHUB_USERNAME = 'lucasl1m';

type GithubUserResponse = {
  public_repos: number;
  followers: number;
};

async function fetchGithubStats(username: string): Promise<GithubUserResponse> {
  const { data } = await githubApi.get<GithubUserResponse>(`users/${username}`);
  return { public_repos: data.public_repos, followers: data.followers };
}

export function useGithubStats() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['github', 'user', GITHUB_USERNAME],
    queryFn: () => fetchGithubStats(GITHUB_USERNAME),
    staleTime: 1000 * 60 * 5,
  });

  return {
    publicRepos: data?.public_repos ?? 0,
    followers: data?.followers ?? 0,
    isLoading,
    isError,
  };
}

import { useQuery } from '@tanstack/react-query';
import { githubApi } from '@/lib/axios';

const GITHUB_USERNAME = 'lucasl1m';
const BIO_FALLBACK = '';

async function fetchGithubBio(username: string): Promise<string> {
  const { data } = await githubApi.get<{ bio: string | null }>(`users/${username}`);
  return data.bio ?? BIO_FALLBACK;
}

export function useGithubBio() {
  const { data: bio = BIO_FALLBACK } = useQuery({
    queryKey: ['github', 'bio', GITHUB_USERNAME],
    queryFn: () => fetchGithubBio(GITHUB_USERNAME),
    staleTime: 1000 * 60 * 5,
  });

  return { bio };
}

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleFollowersStatus } from '@/services/api/tweetsApi';
import { useState } from 'react';

export const useToggleFollowersStatus = (id, isFollowed, followers) => {
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);

  const calcFollowers = isFollowed ? followers - 1 : followers + 1;

  const toggle = useMutation(
    async () => {
      setIsLoading(true);

      await toggleFollowersStatus(id, !isFollowed, calcFollowers);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['tweets'] });

        setIsLoading(false);
      },

      onError: () => {
        setIsLoading(false);
      },
    }
  );

  return { toggle, isLoading };
};

import { Button } from '@/components/Button/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { toggleFollowersStatus } from '@/services/api/tweetsApi';

export const TweetCard = ({ data: { id, user, avatar, tweets, followers, isFollowed } }) => {
  const queryClient = useQueryClient();

  const { mutate: toggle } = useMutation({
    mutationFn: () => toggleFollowersStatus(id, !isFollowed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tweets'] });
    },
  });
  console.log(toggle);

  return (
    <li className="flex flex-col justify-center  items-center w-380  h-460 rounded-3xl bg-gradient-to-br from-custom-blue1 via-custom-blue2 to-custom-blue3 shadow-[-2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px rgba(0, 0, 0, 0.23)]">
      <img src={avatar} alt={user} />
      <p>{tweets}</p>
      <p>{followers}</p>
      <Button toggle={toggle} />
    </li>
  );
};

TweetCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    tweets: PropTypes.number,
    isFollowed: PropTypes.bool,
  }).isRequired,
};

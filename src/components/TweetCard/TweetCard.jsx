import { Button } from '@/components/Button/Button';
import PropTypes from 'prop-types';

export const TweetCard = ({ data: { id, user, avatar, tweets, followers } }) => {
  console.log(id);

  return (
    <li>
      <img src={avatar} alt={user} />
      <p>{tweets}</p>
      <p>{followers}</p>
      <Button />
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
    //isFollowed: PropTypes.bool,
  }).isRequired,
};

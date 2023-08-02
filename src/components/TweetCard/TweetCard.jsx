import PropTypes from 'prop-types';

import { useToggleFollowersStatus } from '@/hooks/useToggleFollowersStatus';

import { Button } from '@/components/Button/Button';

import bgImageCard from '../../assets/bgCard.webp';
import logoCard from '../../assets/LogoCard.webp';

export const TweetCard = ({ data: { id, user, avatar, tweets, followers, isFollowed } }) => {
  const {
    toggle: { mutate: toggle },
    isLoading,
  } = useToggleFollowersStatus(id, isFollowed, followers);

  return (
    <li className="relative flex flex-col   items-center w-380  h-460 rounded-[20px] bg-gradient-to-br from-custom-blue1 via-custom-blue2 to-custom-blue3 shadow-card">
      <img
        src={logoCard}
        alt="GoIt"
        className="w-[76px] h-[22px] absolute top-[20px] left-[20px]"
      />
      <img
        src={bgImageCard}
        alt="GoIt"
        className="absolute top-[28px] left-[36px] w-[308px] h-[168px]"
      />
      <div className="relative  h-[80px] flex justify-center items-center mt-[178px] w-full">
        <div className="before:absolute before:top-1/2 before:inset-0 before:w-full before:h-2 before:bg-[#EBD8FF]  "></div>
        <img
          src={avatar}
          alt={user}
          className="inline object-cover w-[62px] h-[62px]  rounded-full box-content   border-[#EBD8FF] border-8 shadow-avatar drop-shadow-avatar"
        />
      </div>

      <p className="mt-[26px] text-[#EBD8FF] text-xl font-medium uppercase">{tweets} TWEETS</p>
      <p className="mt-[16px]  text-[#EBD8FF] text-xl font-medium uppercase">
        {followers.toLocaleString('en-US')} followers
      </p>
      <Button toggle={toggle} text={isFollowed ? 'Following' : 'Follow'} disabled={isLoading} />
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

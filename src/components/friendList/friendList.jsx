import PropTypes from 'prop-types';
import css from './friendlist-css.module.css';
import FriendListItem from '../friendList/friendListItem';

const FriendList = props => {
  const { friends } = props;

  return <ul className={css.friendList}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
  </ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

export default FriendList;

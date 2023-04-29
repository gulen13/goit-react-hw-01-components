import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './friendlist-css.module.css';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;

  const classNames = clsx(isOnline ? css.OnLine : css.OfLine);

  return (
    <li className={css.item}>
      <span className={classNames}></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;

import PropTypes from 'prop-types';
import css from './profile-css.module.css';

const Profile = props => {
  const { avatar, location, stats, tag, username } = props;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} width="100" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{'@' + tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        {Object.keys(stats).map(item => (
          <li key={item} className={css.profileLi}>
            <span className={css.label}>{item}</span>
            <span className={css.quantity}>{stats[item]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired
}

export default Profile;

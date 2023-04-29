import PropTypes from 'prop-types';
import css from './statistics-css.module.css';

const Statistics = props => {
  const { title, stats } = props;

  return (
    <section className={css.statistics}>

      { title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>

        {stats.map(statItem => (
          <li className={css.item} key={statItem.id}>
            <span className={css.label}>{statItem.label}</span>
            <span className={css.percentage}>{statItem.percentage + " %"}</span>
          </li>
        ))}
        
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

export default Statistics;

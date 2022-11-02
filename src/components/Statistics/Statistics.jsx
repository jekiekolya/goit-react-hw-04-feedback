import PropTypes from 'prop-types';
import { Title, StatisticResult } from './Statistics.styled';
import { Box } from '../Box';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box>
      <Title>Statistics</Title>
      {total ? (
        <Box>
          <StatisticResult>
            Good: <span>{good}</span>
          </StatisticResult>
          <StatisticResult>
            Neutral: <span>{neutral}</span>
          </StatisticResult>
          <StatisticResult>
            Bad: <span>{bad}</span>
          </StatisticResult>
          <StatisticResult>
            Total: <span>{total}</span>
          </StatisticResult>
          <StatisticResult>
            Positive feedback: <span>{positivePercentage}%</span>
          </StatisticResult>
        </Box>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

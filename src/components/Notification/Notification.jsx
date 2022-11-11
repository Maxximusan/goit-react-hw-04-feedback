import PropTypes from 'prop-types';

export const Notification = (props) => {
    const { message } = props;
    return (
    <h3>{message}</h3>
)
}


Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
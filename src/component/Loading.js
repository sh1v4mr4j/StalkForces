import React from 'react';
import './Loading.css';
import PropTypes from 'prop-types';
const Loading = () => {
  // const { width, height } = props;
  return <div class="lds-facebook"><div></div><div></div><div></div></div>;
}

// Loading.defaultProps = {
//   width: '28px',
//   height: '28px'
// }
// Loading.propTypes = {
//   width: PropTypes.string,
//   height: PropTypes.string
// }
export default Loading;
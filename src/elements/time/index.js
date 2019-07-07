/**
 * @file Time.
 * @copyright Simon Finney 2019
 */

import { string } from 'prop-types';
import React from 'react';

const time = ({ dateTime }) => <time dateTime={dateTime}>{dateTime}</time>;

time.propTypes = {
  dateTime: string.isRequired,
};

export default time;

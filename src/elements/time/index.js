/**
 * @file Time.
 * @copyright Simon Finney 2019
 */

import React from 'react';
import { string } from 'prop-types';

const time = ({ dateTime, label }) => <time dateTime={dateTime}>{label}</time>;

time.propTypes = {
  dateTime: string.isRequired,
  label: string.isRequired,
};

export default time;

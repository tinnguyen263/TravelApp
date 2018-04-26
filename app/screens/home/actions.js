/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../../constants/actionTypes';

export const getFlights = () => ({ type: actionTypes.RETRIEVE_FLIGHTS });

export const getToken = () => ({ type: 'get_token' });
import React from 'react';
import PropTypes from 'prop-types';
import axios from './axios';

export const ApiContext = React.createContext();

const ApiProvider = ({ store, children }) => {
  axios.setStore(store);

  const value = {
    /** GET */
    async get(path, config = {}) {
      try {
        const response = await axios.get(path, config);

        return response;
      } catch (error) {
        throw error;
      }
    },

    /** POST */
    async post(path, data, config = {}) {
      try {
        const response = await axios.post(
          path,
          data,
          config,
        );

        return response;
      } catch (error) {
        throw error;
      }
    },

    async delete(path, config = {}) {
      try {
        const response = await axios.delete(
          path,
          config,
        );

        return response;
      } catch (error) {
        throw error;
      }
    },

    /** PUT */
    async put(path, data, config = {}) {
      try {
        const response = await axios.put(
          path,
          data,
          config,
        );

        return response;
      } catch (error) {
        throw error;
      }
    },
  };

  return (
    <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.node,
  store: PropTypes.any,
};

export default ApiProvider;

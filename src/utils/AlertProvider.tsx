import React, { useRef, useState, useContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import DropdownAlert from 'react-native-dropdownalert';
import { useNetInfo } from '@react-native-community/netinfo';
import { useSelector, useDispatch } from 'react-redux';
import { clearError } from 'src/redux/actions';

export const AlertContext = React.createContext();

const AlertProvider = ({ children }) => {
  const alertRef = useRef(null);
  const [closeInterval, setCloseInterval] = useState(4000);
  const netInfo = useNetInfo();
  const { title, message, interval } = useSelector(state => state.error);
  const dispatch = useDispatch();

  const value = {
    setCloseInterval: (value = 3000) => setCloseInterval(value),
    showAlert: ({ type = '', title = '', message = '', interval = closeInterval }, payload = {}) => {
      if (alertRef.current) {
        alertRef.current.alertWithType(type, title, message, payload, interval);
      }
    },
    close: () => {
      if (alertRef.current) {
        alertRef.current.close();
      }
    }
  };

  useEffect(() => {
    netInfo.isConnected
      ? value.close()
      : value.showAlert({
          type: 'error',
          title: 'Network Error',
          message: 'Can\'t reach the server. Please, check your internet connection',
          interval: Number.MAX_SAFE_INTEGER,
        });
  }, [netInfo.isConnected, alertRef.current]);

  useEffect(() => {
    if (title || message) {
      value.showAlert({ type: 'error', title, message, interval });
    }
  }, [title, message]);

  const onClose = useCallback(() => {
    dispatch(clearError());
    alertRef.current.updateStatusBar(true, false);
  }, []);

  return (
    <React.Fragment>
      <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
      <DropdownAlert ref={alertRef} closeInterval={closeInterval} onClose={onClose} translucent inactiveStatusBarBackgroundColor='transparent' inactiveStatusBarStyle='light-content' />
    </React.Fragment>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.node,
};

export default AlertProvider;

export const useAlert = () => {
  const alert = useContext(AlertContext);

  return alert;
};


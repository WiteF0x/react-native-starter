import React, { useEffect } from 'react';

const Root = ({ navigation }) => {
  useEffect(() => {
    redirect();
  }, []);

  const redirect = () => navigation.navigate('Main');

  return null;
};


export default Root;

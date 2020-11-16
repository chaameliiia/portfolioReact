import React, { createContext } from 'react';

export const DetailList = createContext();

const DetailsList = props => {
  const details = [
    {
      id: 1,
      title: 'What To Wear',
      url: 'whatToWear',
      src: require('../assets/imgs/thum/img_prj1.jpg'),
    },
    {
      id: 2,
      title: 'WooFoo (clone)',
      url: 'wooFooClone',
      src: '/',
    },
    {
      id: 3,
      title: 'Clac. for the web',
      url: 'calcForTheWeb',
      src: '/',
    },
    {
      id: 4,
      title: 'working..',
      url: 'working',
      src: '/',
    },
  ];

  return (
    <DetailList.Provider value={details}>{props.children}</DetailList.Provider>
  );
};

export default DetailsList;

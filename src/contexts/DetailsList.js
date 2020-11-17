import React, { createContext } from 'react';
import { prjThumb1 } from '../assets/imgs/Imgs';

export const DetailList = createContext();

const DetailsList = props => {
  const details = [
    {
      id: 1,
      title: 'What To Wear',
      url: 'whatToWear',
      src: prjThumb1,
    },
    {
      id: 2,
      title: 'WooFoo (clone)',
      url: 'wooFooClone',
      src: '/',
    },
    {
      id: 3,
      title: 'Calculator',
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

import React, { createContext } from 'react';
import * as imgs from '../assets/imgs/Imgs';

export const DetailList = createContext();

const DetailsList = props => {
  const details = [
    {
      id: 1,
      title: 'What To Wear',
      url: 'whatToWear',
      src: imgs.prjThumb1,
    },
    {
      id: 2,
      title: 'WooFoo (clone)',
      url: 'woofooClone',
      src: imgs.prjThumb2,
    },
    {
      id: 3,
      title: 'Calculator',
      url: 'calcForTheWeb',
      src: imgs.prjThumb3,
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

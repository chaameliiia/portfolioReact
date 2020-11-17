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
      title: 'Portfolio (jQuery)',
      url: 'portfolioJquery',
      src: imgs.prjThumb2,
    },
    {
      id: 3,
      title: 'WooFoo (clone)',
      url: 'woofooClone',
      src: imgs.prjThumb3,
    },
    {
      id: 4,
      title: 'Calculator',
      url: 'calcForTheWeb',
      src: imgs.prjThumb4,
    },
    {
      id: 5,
      title: 'Portfolio (React)',
      url: 'portfolioReact',
      src: imgs.prjThumb5,
    },
    {
      id: 6,
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

import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'About',
    path: '/About',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'The CBM Team',
        path: '/About/TheCBMTeam',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'History',
        path: '/About/History',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Products',
    path: '/Products',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'SHARP Multifunction Printers',
          path: '/Products/SMP',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
          title: 'SHARP LivMote',
          path: '/Products/SLM',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
            title: 'AQUOS Boards',
            path: '/Products/AB',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'KIP Wide-Foarmat Printing',
            path: '/Products/KWFP',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          }
      ]    
  },
  {
    title: 'Solutions',
    path: '/Solutions',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'Office Solutions',
          path: '/Solutions/OS',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
          title: 'Government Solutions',
          path: '/Solutions/GS',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
            title: 'Classroom Solutions',
            path: '/Solutions/CS',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Service & Networking',
            path: '/Solutions/SN',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          }
      ]
  },
  {
    title: 'Financing',
    path: '/Financing',
    icon: <FaIcons.FaEnvelopeOpenText />    
  },
  {
    title: 'Service',
    path: '/Service',
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
            title: 'Refill Request',
            path: '/Service/RR',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Contact CBM',
            path: '/Service/CCBM',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
              title: 'SHARP Drivers & Software',
              path: '/Service/SDS',
              icon: <IoIcons.IoIosPaper />,
              cName: 'sub-nav'
          }
      ]
  }
  
];
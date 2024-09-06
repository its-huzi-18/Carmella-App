import React from 'react';
import Options from './Options';
import { MdBarChart, MdOutlineIncompleteCircle, MdPeopleAlt } from 'react-icons/md';
import { GiOpenBook } from 'react-icons/gi';
import { IoSettings } from 'react-icons/io5';
import { PiCloudArrowDown } from 'react-icons/pi';

function IcoOption() {
  const options = [
    { id: 1, icon: <MdPeopleAlt />, name: 'Students' },
    { id: 2, icon: <MdOutlineIncompleteCircle />, name: 'Polls' },
    { id: 3, icon: <GiOpenBook />, name: 'Work' },
    { id: 4, icon: <MdBarChart />, name: 'Reports' },
    { id: 5, icon: <IoSettings />, name: 'Settings' },
    { id: 6, icon: <PiCloudArrowDown />, name: 'Updaters' }
  ];

  return (
    <div className=' w-full mt-10 h-20 flex justify-center gap-7 
    transform hover:gap-11 transition-transform duration-500
    '>
      {options.map(({ id, icon, name }) => (
        <Options key={id} icon={icon} name={name} />
      ))}
    </div>
  );
}

export default IcoOption;

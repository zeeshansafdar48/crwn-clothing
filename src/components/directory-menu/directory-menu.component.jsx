import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { useSelector } from 'react-redux';

import './directory-menu.styles.scss';

export default function DirectoryMenu() {
  const sections = useSelector((state) => state.directory?.sections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

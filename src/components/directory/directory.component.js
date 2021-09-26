import React, { useState } from 'react'
import MenuItem from '../menu-item'
import importedSections from './sections'

import './directory.styles.scss'

const Directory = () => {
  const [sections, setSections] = useState(importedSections)

  return (
    <div className='directory-menu'>
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  )
}

export default Directory

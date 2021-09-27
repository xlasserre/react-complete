import React from 'react'
import CollectionItem from '../collectionItem'

import './previewCollection.styles.scss'

const PreviewCollection = ({ title, items}) => {
  return (
    <div className='preview-collection'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items
          .filter((item, idx) => idx < 4)
          .map(({id, ...item}) => (
            <CollectionItem key={id} {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default PreviewCollection

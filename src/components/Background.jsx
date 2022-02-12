import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'

const Background = () => {
    // const [ image ] = useImage('https://via.placeholder.com/500')
    const [ image ] = useImage('https://konvajs.org/assets/lion.png')

    const LionImage = () => {
        const [image] = useImage('https://konvajs.org/assets/lion.png');
        return <Image image={image} />;
      };

  return (
      <div>
          <Image image={image} />
          <LionImage />
      </div>
  )
}

export default Background
import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Slider extends React.Component {
  render() {
    return (<div >
    <ImageGallery {... (
        {
          thumbnailPosition: "left",
          useBrowserFullscreen: true,
          showPlayButton: true,
          showIndex: true,
          height: "400px",
          width: "400px",

    
          items: [
            {
                original: 'https://i1.adis.ws/i/office/2413211642_ld1.jpg?$highres$',
                thumbnail: 'https://i1.adis.ws/i/office/2413211642_ld1.jpg?$highres$',
              },
              {
                original: 'https://i1.adis.ws/i/office/2413211642_pr1.jpg?$highres$&w=560&h=490&fmt.jpeg.interlaced=true',
                thumbnail: 'https://i1.adis.ws/i/office/2413211642_pr1.jpg?$highres$&w=560&h=490&fmt.jpeg.interlaced=true',
              },
          ]

        })}/></div>);
  }
}
 export default Slider
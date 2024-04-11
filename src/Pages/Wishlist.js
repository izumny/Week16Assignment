import React from 'react';
import WishImage from '../Components/WishImage';



function WishList() {
    
    
    return(
        <div>
            <h3 className="h3--wishlist">Wish List Room</h3>
            <h4 className="h4--wishlist">*** Make your own Wish Lists by uploading photoes here! ***</h4>
            <WishImage />
        </div>
        
    )
}

export default WishList;



//<img src={require('./closet1.jpeg')} alt="Image 1" height={400} width={500} />





/* import React, { useState, useEffect } from 'react';


function Wishlist() {
  const [photos, setphotos] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setphotos(data));
  }, []);
  return (
    <div className="App">
      {photos &&
        photos.map((item) => (
          <a keys={item.id} href={item.url}>
            <img width={'200px'} height={'200px'} src={item.thumbnailUrl}></img>
          </a>
        ))}
    </div>
  );
}
export default Wishlist; */








/*import React, { useState } from 'react';

function Wishlist() {
    const [images, setImages] = useState([
        {
            id: 1,
            image: 'dress1.jpeg'
        },
        {
            id: 2,
            image: 'dress2.jpeg'
        }
    ]);
    const [error, setError] = useState();

    function handleChange(e) {
        const fileList = e.target.files;
        const updatedImages = [];
        for (let i = 0; i < fileList.length; i++) {
            const file = fileList[i];
            updatedImages.push({
                id: i + 1,
                image: URL.createObjectURL(file)
            });
        }
        setImages(updatedImages);
    }

    return (
        <div className="App">
            <form>
                <h1>File Upload</h1>
                <input type="file" multiple onChange={handleChange} />
            </form>
            <div>
                {images.map((item, index) => (
                    <img key={index} src={item.image} alt={`Uploaded image ${index + 1}`} />
                ))}
            </div>
            {error && <p>Error uploading file: {error.message}</p>}
        </div>
    );
}

export default Wishlist; */

// function imageUrls() {
//     return (
//         <h1>image</h1>
//     )
// }

// <img src={require('./closet1.jpeg')} alt="Image 1" height={400} width={500} />
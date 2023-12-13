/* eslint-disable no-unused-vars */

import {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';


function App() {


  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
    .then(response => response.json())
    .then(data =>{
        setImages(data.hits);
        setIsLoading(false);
    })
    .catch(error => console.log(error))
  }, [term])
  return (
    <div className='container mx-auto mb-10 '>
      <ImageSearch searchText={(text) => setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>}

      {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32 sm:text-xl'>Loading....</h1>
      :<div className='grid grid-cols-1 gap-2 2xl:grid-cols-4 2xl:gap-2 xl:grid-cols-4 xl:gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {images.map(image =>(
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  );
}

export default App;


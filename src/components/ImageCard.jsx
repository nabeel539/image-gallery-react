import React from 'react'

const ImageCard = ({image}) => {

    const tags = image.tags.split(',');

  return (
    <>
      {/* <div className='bg-slate-800 p-4 text-white text-center text-2xl bold'>Image Gallery</div> */}
      <div className="max-w-md w-[380px] rounded-md overflow-hidden shadow-lg mx-auto md:w-[330px] lg:max-w-[350px] xl:max-w-[300px] 2xl:max-w-[340px] cursor-pointer">
        <img 
          className="h-96 w-full object-cover"
          src={image.webformatURL}
          alt=""/>
        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
              Photo by {image.user}
            </div>
            <ul>
              <li>
                <strong>Views:</strong>
                 {image.views}
              </li>
              <li>
                <strong>Downloads:</strong>
                 {image.downloads}
              </li>
              <li>
                <strong>Likes:</strong>
                 {image.likes}
              </li>
            </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag,idx) =>(
            <span 
                key={idx}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
                #{tag}
            </span>
          ))}
        </div>
      </div>
    </>
  
  )
}

export default ImageCard
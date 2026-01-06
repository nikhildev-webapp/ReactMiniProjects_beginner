import React, { useEffect, useState } from 'react'

const RandomDogImage = () => {
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const getDogImage = async () => {
        setLoading(true);
        setError(null)
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            if (!response.ok) {
                throw new Error(`HTTP Errro ${response.status}`)
            }
            const result =  await response.json()
            setImage(result.message)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getDogImage()
    },[])
  return (
      <>
          <div>
              <h2>Random Dog Image</h2>
              <button onClick={getDogImage} disabled={loading}>{loading ? 'Loading..' : 'GetDogImage'}</button>
              {error && <p className='text-red-500'>{error}</p>}
              {image && (
                  <div>
                     <img src={image} alt="" />
                  </div>
              )}
          </div>  
      </>
  )
}

export default RandomDogImage
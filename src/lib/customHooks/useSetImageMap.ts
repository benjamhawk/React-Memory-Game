import { useEffect, useState } from 'react'
import { imageMapAnimals } from '../imageData/animals'
import { imageMapCars } from '../imageData/cars'
import { useTheme } from './globalStateHooks'

export const useSetImageMap = () => {
  const [imageMap, setImageMap] = useState(imageMapAnimals)
  const theme = useTheme()

  useEffect(() => {
    theme === 'animals'
      ? setImageMap(imageMapAnimals)
      : setImageMap(imageMapCars)
  }, [theme])

  return imageMap
}

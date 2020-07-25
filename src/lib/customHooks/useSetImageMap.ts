import { useEffect, useState } from 'react'
import { ThemeModel } from '../../models'

export const useSetImageMap = (
  theme: ThemeModel,
  imageMapAnimals: any,
  imageMapCars: any
) => {
  const [imageMap, setImageMap] = useState(imageMapAnimals)

  useEffect(() => {
    theme === 'animals'
      ? setImageMap(imageMapAnimals)
      : setImageMap(imageMapCars)
  }, [theme])

  return imageMap
}

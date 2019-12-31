import { useEffect } from "react"

export const useSetImageMap = (theme: string, setImageMap: any, imageMapAnimals: any, imageMapCars: any) => {
  useEffect(() => {
    theme === 'animals' ? setImageMap(imageMapAnimals) : setImageMap(imageMapCars)
  }, [theme, setImageMap, imageMapAnimals, imageMapCars])
}
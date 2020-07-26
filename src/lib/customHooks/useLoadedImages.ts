import { useState, useEffect } from 'react'
import { ThemeModel } from '../../models'

export const useLoadedImages = (theme: ThemeModel) => {
  const [loadedImages, setLoadedImages] = useState(0)

  useEffect(() => {
    setLoadedImages(0)
  }, [theme])

  return { loadedImages, setLoadedImages }
}

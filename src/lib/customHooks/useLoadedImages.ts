import { useState, useEffect } from 'react'
import { ThemeName } from '../../features/theme/themeSlice'
import { useTheme } from './globalStateHooks'

export const useLoadedImages = () => {
  const [loadedImages, setLoadedImages] = useState(0)
  const theme = useTheme()

  useEffect(() => {
    setLoadedImages(0)
  }, [theme])

  return { loadedImages, setLoadedImages }
}

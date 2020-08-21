import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'
import { ThemeName } from '../theme/themeSlice'
import { carImages } from '../../lib/imageData/cars'
import { shuffle } from '../../lib/shuffle'
import { animalImages } from '../../lib/imageData/animals'

export type CardData = {
  selectedImages: {
    first: number
    second: number
  }
  images: Image[]
  matchesFound: string[]
}

export type Image = {
  name: string
}

const initialState: CardData = {
  selectedImages: {
    first: -1,
    second: -1
  },
  images: shuffle([...animalImages, ...animalImages]),
  matchesFound: []
}

const resetGame = createAction<ThemeName>('twoPlayerGame/resetGame')
const changeTheme = createAction<ThemeName>('theme/changeTheme')

const cards = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    selectImage: ({ selectedImages }, { payload }: PayloadAction<number>) => {
      if (selectedImages.first === -1) {
        selectedImages.first = payload
      } else if (selectedImages.second === -1) {
        selectedImages.second = payload
      }
    },
    unselectImages: state => {
      state.selectedImages = {
        first: -1,
        second: -1
      }
    },
    addMatch: ({ matchesFound }, { payload }: PayloadAction<string>) => {
      matchesFound.push(payload)
    }
  },
  extraReducers: builder =>
    builder
      .addCase(resetGame, (state, { payload }: PayloadAction<ThemeName>) => {
        state.images = shuffle(state.images)
        state.matchesFound = []
      })
      .addCase(changeTheme, (state, { payload }: PayloadAction<ThemeName>) => {
        state.images =
          payload === 'animals'
            ? shuffle([...animalImages, ...animalImages])
            : shuffle([...carImages, ...carImages])
      })
})

export const { selectImage, unselectImages, addMatch } = cards.actions

export default cards.reducer

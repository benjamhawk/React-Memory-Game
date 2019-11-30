import elephant from "../assets/images/animals/elephant.jpg"
import fish from "../assets/images/animals/fish.jpg"
import cheetah from "../assets/images/animals/cheetah.jpg"
import fox from "../assets/images/animals/fox.jpg"
import frog from "../assets/images/animals/frog.jpg"
import penguin from "../assets/images/animals/penguin.jpg"
import sheep from "../assets/images/animals/sheep.jpg"
import walrus from "../assets/images/animals/walrus.jpg"
import giraffe from "../assets/images/animals/giraffe.jpg"
import zebra from "../assets/images/animals/zebra.jpg"
import { ImageDataModel } from "../models/imageData.model"

export const animalsData: ImageDataModel = {
  selectedImages: {
    first: null,
    second: null
  },
  images: [
    // {
    //   name: 'elephant',
    // },
    // {
    //   name: 'fish',
    // },
    // {
    //   name: 'cheetah',
    // },
    // {
    //   name: 'fox',
    // },
    // {
    //   name: 'frog',
    // },
    // {
    //   name: 'penguin',
    // },
    {
      name: 'sheep',
    },
    {
      name: 'walrus',
    },
    {
      name: 'giraffe',
    },
    {
      name: 'zebra',
    }
  ],
  matchesFound: []
}



export const imageMap: any = {
  'elephant': elephant,
  'fish': fish,
  'cheetah': cheetah,
  'fox': fox,
  'frog': frog,
  'penguin': penguin,
  'sheep': sheep,
  'walrus': walrus,
  'giraffe': giraffe,
  'zebra': zebra
}


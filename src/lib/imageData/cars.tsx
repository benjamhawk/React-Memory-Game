import cars1 from '../../assets/images/cars/cars1.jpg'
import cars2 from '../../assets/images/cars/cars2.jpg'
import cars3 from '../../assets/images/cars/cars3.jpg'
import cars4 from '../../assets/images/cars/cars4.jpg'
import cars5 from '../../assets/images/cars/cars5.jpg'
import cars6 from '../../assets/images/cars/cars6.jpg'
import cars7 from '../../assets/images/cars/cars7.jpg'
import cars8 from '../../assets/images/cars/cars8.jpg'
import cars9 from '../../assets/images/cars/cars9.jpg'
import cars10 from '../../assets/images/cars/cars10.jpg'

import { ImageDataModel } from '../../models/ImageData'

export const carsData: any = [
  {
    name: 'cars1'
  },
  {
    name: 'cars2'
  },
  {
    name: 'cars3'
  },
  {
    name: 'cars4'
  },
  {
    name: 'cars5'
  },
  {
    name: 'cars6'
  },
  {
    name: 'cars7'
  },
  {
    name: 'cars8'
  },
  {
    name: 'cars9'
  },
  {
    name: 'cars10'
  }
]

export const INITIAL_CARS_STATE: ImageDataModel = {
  selectedImages: {
    first: -1,
    second: -1
  },
  images: [...carsData, ...carsData],
  matchesFound: []
}

export const imageMapCars: any = {
  cars1,
  cars2,
  cars3,
  cars4,
  cars5,
  cars6,
  cars7,
  cars8,
  cars9,
  cars10
}

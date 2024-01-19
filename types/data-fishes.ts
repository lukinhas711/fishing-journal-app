export interface IDataWhater {
  name: string
  background: string
}

export interface IDataFishes {
  name: string
  slug: string
  image: string
  description: string
  maxWidth: string
  whather: string
  habitat: IDataWhater[]
}

export interface IFish {
  image: string
  name: string
  width: string
  weigth: string
  date: string
  quantity: number
  isTrophy: boolean
}

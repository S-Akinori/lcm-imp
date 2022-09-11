export interface MenuProp {
  id: string
  name: string
  title: string,
  text?: string,
  priceText: string,
  price: number
  category: 'movies' | 'locations' | 'locationOptions' | 'options' | 'discounts'
  disabled?: boolean
}

export interface MenuObjectProp {
  movies: MenuProp[]
  locations: MenuProp[]
  locationOptions: MenuProp[]
  options: MenuProp[]
  discounts: MenuProp[]
}
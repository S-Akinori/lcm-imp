export interface MenuProp {
  id: string
  title: string,
  text?: string,
  priceText: string,
  price: number
  category: 'movies' | 'locations' | 'options' | 'discounts'
  disabled?: boolean
}

export interface MenuObjectProp {
  movies: MenuProp[]
  locations: MenuProp[]
  options: MenuProp[]
  discounts: MenuProp[]
}
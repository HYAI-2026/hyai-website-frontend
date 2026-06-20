export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface QuickMenuItem {
  label: string
  href: string
  icon: string
}

export interface HeroSlide {
  id: number
  image: string
  title?: string
  description?: string
}

export interface PostCard {
  id: number
  title: string
  summary?: string
  date: string
  image: string
  href: string
}

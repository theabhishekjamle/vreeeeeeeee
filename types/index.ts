export interface Project {
  id: string
  title: string
  category: string
  description: string
  thumbnail: string
  videoUrl?: string
  tags: string[]
  year: number
  featured?: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  tools?: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

export interface NavItem {
  label: string
  href: string
}

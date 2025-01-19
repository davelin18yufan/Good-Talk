export interface Author {
  id: string
  name: string
  url?: string
  description?: string
  aka?: string
  tags?: string[]
  badges?: string[]
  location?: string
  email?: string
}

// Base blog interface with common properties
export interface BaseBlog {
  title: string
  id: string
  date: string
  description?: string
  coverUrl?: string
  altText?: string
  author: Author
  tags?: string[]
}

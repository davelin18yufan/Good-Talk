export interface Author {
  id: string
  name: string
  url?: string
  description?: string
  tags?: string[]
  badges?: string[]
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

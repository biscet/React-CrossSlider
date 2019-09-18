export interface HeaderProps {
  title?: string
  link: Array<LinkObject>
}

export interface LinkObject {
  readonly href: string
  name: string
}

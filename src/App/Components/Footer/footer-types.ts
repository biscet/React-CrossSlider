export interface FooterProps {
  link: Array<SocialNetworkObject>
}

export interface SocialNetworkObject {
  readonly href: string
  readonly src: string
  alt: string
}

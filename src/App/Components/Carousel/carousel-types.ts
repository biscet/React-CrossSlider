export interface CardObject {
  readonly src: string
  readonly index: number
  alt: string
  caption: string
  title: string
}

export type CarouselProps = {
  card: Array<Object>
}

export type CardRenderState = {
  backgroundPosition: string
  backgroundImage: string
}

export interface EventTargets {
  pageX: number
  pageY: number
  target: HTMLElement
}

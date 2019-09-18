import React, { Component } from "react"
import { Slide } from "pure-react-carousel"
import {
  CarouselProps,
  CardRenderState,
  EventTargets,
  CardObject
} from "./carousel-types"

export default class CardRender extends Component<
  CarouselProps,
  CardRenderState
> {
  state = {
    backgroundImage: "",
    backgroundPosition: "0% 0%"
  } as CardRenderState

  handleMouseMove = (e: EventTargets): void => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x: number = ((e.pageX - left) / width) * 100
    const y: number = ((e.pageY - top) / height) * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` } as CardRenderState)
  }

  render() {
    const figureStyle: Function = (src: string): Object => {
      return {
        backgroundImage: `url(${src})`,
        backgroundPosition: this.state.backgroundPosition
      } as CardRenderState
    }

    const CardProp = this.props.card.map((elem: CardObject, i: number) => {
      return (
        <Slide index={i} key={i} className="card">
          <span className="card__title">{elem.title}</span>
          <div className="img-wrap">
            <figure
              onMouseMove={this.handleMouseMove.bind(this)}
              style={figureStyle(elem.src)}
            >
              <img className="img-wrap__image" alt={elem.alt} src={elem.src} />
            </figure>
          </div>
          <figcaption className="card__caption">{elem.caption}</figcaption>
        </Slide>
      )
    })

    return CardProp
  }
}

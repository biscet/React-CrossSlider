import React, { Component } from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel"
import { CarouselProps } from "./carousel-types"

import "./carousel.scss"
import "pure-react-carousel/dist/react-carousel.es.css"

import CardRender from "./card-render"

export default class Carousel extends Component<CarouselProps> {
  render() {
    return (
      <div className="carousel">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={6}
          currentSlide={0}
          lockOnWindowScroll={true}
          touchEnabled={false}
          dragEnabled={false}
          visibleSlides={3}
        >
          <div className="carousel-row">
            <ButtonBack className="left-button">{"   "}</ButtonBack>
            <Slider className="slider">
              <Slide index={0}></Slide>
              <CardRender card={this.props.card} />
              <Slide index={5}></Slide>
            </Slider>
            <ButtonNext className="right-button">{"   "}</ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    )
  }
}

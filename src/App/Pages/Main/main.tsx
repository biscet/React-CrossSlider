import React, { Component } from "react"

import "./main.scss"
import { LinkArray, ImageArray, CardArray } from "../../Entities/array-data"

import { Header } from "../../Components/Header/header"
import { Footer } from "../../Components/Footer/footer"
import Carousel from "../../Components/Carousel/carousel"

export default class Main extends Component {
  render() {
    return (
      <main>
        <Header title={"Slider"} link={LinkArray} />
        <Carousel card={CardArray} />
        <Footer link={ImageArray} />
      </main>
    )
  }
}

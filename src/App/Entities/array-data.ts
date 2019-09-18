import instagram from "../Static/Media/instagram.png"
import vk from "../Static/Media/vk.png"
import pinterest from "../Static/Media/pinterest.png"

import asianOne from "../Static/Media/asian_one.png"
import asianTwo from "../Static/Media/asian_two.png"
import asianThree from "../Static/Media/asian_three.jpg"

import { LinkObject } from "../Components/Header/header-types"
import { SocialNetworkObject } from "../Components/Footer/footer-types"
import { CardObject } from "App/Components/Carousel/carousel-types"

export const LinkArray: Array<LinkObject> = [
  { name: "GitHub", href: "https://github.com/biscet/" },
  { name: "UpWork", href: "https://www.upwork.com/fl/egorprokhorov" },
  { name: "GitLab", href: "https://gitlab.com/biscet" }
]

export const ImageArray: Array<SocialNetworkObject> = [
  {
    href: "https://vk.com/id548111510",
    alt: "VK",
    src: vk
  },
  {
    href: "https://www.instagram.com/_blsrng/",
    alt: "Instagram",
    src: instagram
  },
  {
    href: "https://www.pinterest.ru/biscet275/",
    alt: "Pinterest",
    src: pinterest
  }
]

export const CardArray: Array<CardObject> = [
  {
    src: asianOne,
    alt: "Ellen A Shepard",
    caption: "California, April 27",
    index: 1,
    title: "01"
  },
  {
    src: asianTwo,
    alt: "Leslie J Striegel",
    caption: "Berlin, May 13",
    index: 2,
    title: "02"
  },
  {
    src: asianThree,
    alt: "Frances J Bratcher",
    caption: "Michigan, June 5",
    index: 3,
    title: "03"
  },
  {
    src: asianOne,
    alt: "Pam V Hendrickson",
    caption: "Illinois, March 27",
    index: 4,
    title: "04"
  }
]

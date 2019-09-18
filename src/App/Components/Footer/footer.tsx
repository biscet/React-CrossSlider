import React from "react"
import { FooterProps } from "./footer-types"

import "./footer.scss"

export const Footer = ({ link }: FooterProps): JSX.Element => (
  <footer className="footer">
    <div className="flex-box" />
    <div className="link-box">
      {link.map((elem, i) => {
        return (
          <a
            className="link-box__link"
            href={elem.href}
            key={i}
            target="_blank"
          >
            <img src={elem.src} alt={elem.alt} />
          </a>
        )
      })}
    </div>
  </footer>
)

import React from "react"
import { HeaderProps } from "./header-types"

import "./header.scss"

const changeBodyMode: Function = (bodyClass: string): void => {
  document.body.className = bodyClass
}

export const Header = ({ title, link }: HeaderProps): JSX.Element => (
  <header className="header">
    <h3 className="header__title">{title}</h3>
    {link.map((elem, i) => (
      <a className="header__link" key={i} href={elem.href} target="_blank">
        {elem.name}
      </a>
    ))}
    <div className="change-mode">
      <button
        onClick={() => changeBodyMode("body-light")}
        className="change-mode__light"
      />
      <button
        onClick={() => changeBodyMode("body-dark")}
        className="change-mode__dark"
      />
    </div>
  </header>
)

import React from 'react'
import { Link } from 'gatsby'


export default function SecondaryButton(props) {
   return (
      <Link to={props.buttonLink} className="button--secondary">{props.buttonText}</Link>
   )
}
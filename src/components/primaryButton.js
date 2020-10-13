import React from 'react'
import { Link } from 'gatsby'


export default function ButtonPrimary(props) {
   return (
      <Link to={props.buttonLink} className="button--primary">{props.buttonText}</Link>
   )
}
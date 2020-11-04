import React from 'react'
import { images } from '../utils/imports'

function Header() {
    return (
        <div>
            {images.map((item,i)=>
                <img style={{width: '100%'}} key={i} src={item} alt="rayhan"/>
            )}
        </div>
    )
}

export default Header

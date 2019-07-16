import React from 'react'
import './styles.scss'
import Logo from '../../assct/img/yangagi.png'
const Header = (props)=>{
    return(
        <header>
            <div className ='wrap'>
                <div className = 'logo'>
                    <img src = {Logo} alt = '아지'/>
                </div>
            </div>
        </header>
    )
}

export default Header
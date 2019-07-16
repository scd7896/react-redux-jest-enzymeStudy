import React from 'react'
import './styles.scss'
import Logo from '../../assct/img/yangagi.png'
const Header = (props)=>{
    return(
        <header data-test = 'headerComponent'>
            <div className ='wrap'>
                <div className = 'logo'>
                    <img data-test='logoIMG' src = {Logo} alt = '아지'/>
                </div>
            </div>
        </header>
    )
}

export default Header
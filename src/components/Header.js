import React from 'react'
import './Header.css'
import punkLogo from '../components/assets/header/cryptopunk-logo.png'
import searchIcon from '../components/assets/header/search.png'
import darkModeIcon from '../components/assets/header/theme-switch.png'

export const Header = () => {
    return (
        <div className = 'header'>
        <div className = 'logoContainer'>
            <img src = {punkLogo} className ='punkLogo' alt=''/ >
        </div>
        <div className ='searchBar'>
            <div className ='searchIconContainer'>
                <img src={searchIcon} />
            </div>
            <input 
                className='searchInput'
                placeholder='Collection, item or user...'
                />
        </div>

        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>

        <div className='headerActions'>
            <div className='darkMode'>
                <img src={darkModeIcon} alt='' />
            </div>
        </div>

        <div className='loginButton'>GET IN</div>
        
        
        </div>
    )
}

export default Header

import React from 'react'
import { useState, useEffect } from 'react'
import instagramLogo from './assets/owner/instagram.png'
import twitterLogo from './assets/owner/twitter.png'
import moreIcon from './assets/owner/more.png'
import './Main.css'


const Main = ( {selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])

    // useEffect(() => {setActivePunk(punkListData[selectedPunk])
    // } )

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    console.log(punkListData[selectedPunk])
    return (
        <div className= 'main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img 
                        className='selectedPunk'
                        src={activePunk.image_original_url}
                        alt=''
                        />
                    </div>
                </div>
                <div className='punkDetails' >
                    <div className='title'>{activePunk.name}
                    </div>
                    <span className='itemNumber'>.#{activePunk.id}</span>
                </div>
                <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>0x536A5D3e7a8603fCd53Beac71a8C6A3081c0dD51</div>
                            <div className='ownerHandle'>@EdithG</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt=''/>
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt='' />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt=''/>
                        </div>
                </div>
            </div>         
        </div>
    )
}

export default Main

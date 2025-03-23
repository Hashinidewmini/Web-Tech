import React from 'react'
import Header from '../Header/Header'
import image1 from '../../../public/Images/1.jpg'
import image2 from '../../../public/Images/2.jpg'
import './Homepage.css'

export default function Homepage() {
  return (
    <>
      {/* header section */}
      <Header />

      {/* Coffee for Union section */}
      <div className='content' style={{
        position: 'absolute',
        top: '30%',
        left: 0,
        right: 0,
        backgroundColor: '#4E3B31',
        padding: '2% 0 2% 0'
      }}>

        <img src={image1} alt="" style={{ float: 'left' }} />
        <div style={{
          float: 'right', color: 'white',
          marginRight: '20%',
          marginTop: '7%'
        }}>

          <h1>Coffee for Union</h1>
          <p>Book Now</p>
        </div>
      </div >

      {/* Coffee for happiness section */}

      <div className='content' style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#E8CBAF',
        padding: '2% 0 2% 0'
      }}>

        <img src={image2} alt="" style={{ float: 'right', marginRight: '2%' }} />
        <div style={{
          float: 'left', color: 'black',
          marginLeft: '20%',
          marginTop: '7%'
        }}>

          <h1>Coffee for Happiness</h1>
          <p>Learn More</p>
        </div>
      </div >

      {/* Coffee for Freedom section */}
      <div className='content' style={{
        position: 'absolute',
        top: '170%',
        left: 0,
        right: 0,
        backgroundColor: '#C2B280',
        padding: '2% 0 2% 0'
      }}>

      </div>
    </>
  )
}

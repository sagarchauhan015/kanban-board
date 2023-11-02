import React from 'react'

import './Card.css'

export default function Card() {
  return (
    <>
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">CAM-4</div>
                <div className="card-profile">
                    <div className="card-profile-initial">AS</div>
                </div>
            </div>
            <div className="card-title">
                Add Multi-language Support for the performance
            </div>
            <div className="card-tag">
                <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1024 1024"><path fill="currentColor" d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"/></svg></div>
                <div className="card-tag-box">
                    <div className="card-tag-title">Feature Request</div>
                </div>
            </div>
        </div>
    </>
  )
}

import React from 'react'

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://i.pinimg.com/736x/e9/86/87/e98687512e7a6df281b6482a553b6fc7.jpg)'
        }}>

      </div>

      <div className="journal__entry-body">
        <p className="journal__entry-title" >Tour Animals</p>
        <p className="journal__entry-content">Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}

export default JournalEntry

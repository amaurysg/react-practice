import React from 'react'
import moment from 'moment'

const JournalEntry = ({ id, date, title, body, url }) => {

  console.log(id, date, title, body, url)

  const nodeDate = moment(date)
  console.log(nodeDate)

  return (
    <div className="journal__entry pointer">

      { url &&
        <div className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url}))`
          }}>

        </div>

      }

      <div className="journal__entry-body">
        <p className="journal__entry-title" >{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{nodeDate.format('dddd')}</span>
        <h4>{nodeDate.format('Do')}</h4>
      </div>
    </div>
  )
}

export default JournalEntry

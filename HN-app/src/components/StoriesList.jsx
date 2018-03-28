import React from 'react'

const StoriesList = (props) => {
  const { stories } = props
  return (
    <div className='stories'>
      {stories.map((s, i) => (
        <div key={i}>
          <a href={s.url} target='_blank'>
            <div>
              <span className='index'>{i + 1}</span>
              {`${s.title} by ${s.by}`}
              <span className='score'>
                {s.score} points
              </span>
            </div>
            <p className='link'>{s.url}</p>
          </a>
        </div>)
      )}
    </div>
  )
}

export default StoriesList

/*

V1 :

<a href={s.url} target='_blank'>
  {`${s.title} by ${s.by}`}
</a>

V2 :

<a href={s.url} target='_blank'>
  <div>
    <span className='index'>{i + 1}</span>
    {`${s.title} by ${s.by}`}
    <span className='score'>
      {s.score} points
    </span>
  </div>
  <p className='link'>{s.url}</p>
</a>

*/

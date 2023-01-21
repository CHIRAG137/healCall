import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a User'/>
      </div>
      <div className='userChat'>
        <img src='https://avatars.githubusercontent.com/u/97824765?v=4'/>
        <div className='userChatInfo'>
            <span>Chirag</span>
        </div>
      </div>
    </div>
  )
}

export default Search

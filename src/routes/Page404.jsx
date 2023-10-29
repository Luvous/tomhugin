import React from 'react'

function Page404() {
  return (
    <section id='LostPage'>
        <h1><b>404</b><br/>YOU SEEM LOST</h1>
        <div className='subtext'>There's no planet at that adress :/</div>
  
        <div className='contfly'>
            <a href='/' className='flyhome'>
                FLY HOME
            </a>
        </div>
    </section>
  )
}

export default Page404
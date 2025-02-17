import React from 'react'

function ProjectsSection() {
  return (
    <section id='Projects'>
      <h2>
        MY FAVORITE PROJECTS
      </h2>
      <div className='grid-project'>
        <div className='card-project design'>
          <div className='card-title design'>
            <h4>Sakura</h4>
            <p>Garden Center</p>
          </div>
          <div>
            LEARN MORE
          </div>
          <div className='card-description'>
            Branding project and social media content.
          </div>
        </div>
        <div className='card-project code'>
          <div className='card-title'>
            <h4>Snowaway</h4>
            <p>Platform game</p>
          </div>
          <div>
            LEARN MORE
          </div>
          <div className='card-description'>
            Game made in Unity, in development.
          </div>
        </div>
        <div className='card-project design'>
          <div className='card-title'>
            <h4>Galapago</h4>
            <p>Creative Studio</p>
          </div>
          <div>
            LEARN MORE
          </div>
          <div className='card-description'>
            Branding and web development
          </div>
        </div>
        <div className='card-project code'>
          <div className='card-title'>
            <h4>Chairman Revolt</h4>
            <p>Action game</p>
          </div>
          <div>
            LEARN MORE
          </div>
          <div className='card-description'>
            Game built in 5 days for the itch.io jam "BOSS RUSH JAM"
          </div>
        </div>
        <div className='card-project design'>
          <div className='card-title'>
            <h4>NUFF</h4>
            <p>Comicbook Store</p>
          </div>
          <div>
            LEARN MORE
          </div>
          <div className='card-description'>
            Full branding design
          </div>
        </div>

        <div className='card-project code'>
          <div className='card-title'>
            <h4>TBA GAME</h4>
            <p>Unannounced game</p>
          </div>
          <div>
            LEARN MORE
          </div>
          <div className='card-description'>
            PC Multiplayer game, TBA
          </div>
        </div>
      </div>
      <a href='/projects'><h3>ALL PROJECTS</h3></a>
    </section>
  )
}

export default ProjectsSection
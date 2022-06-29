import React from 'react'
import TeamSingleStyle from './team-single.module.sass';

function TeamSingle() {
  return (
    <div className={TeamSingleStyle.body}>
      <div className={TeamSingleStyle.container}>

          <div className={TeamSingleStyle.content}>
              <h3>Personal Experience</h3>
              <p>Doloremque quam. Exercitation totam or cupidatat culpa but autem. In labore so nostrud asper natur officia magna, so quasi. Sit nequeporro dolor Iure. Pellentesque lorem mauris, vehicula vel nulla nec.</p>
          </div>
          
          <div className={TeamSingleStyle.contentpart2}>
              <div className={TeamSingleStyle.left}>
                  <p> INTERNET CONNECTION<span>93%</span></p>
                  <div  className={`${TeamSingleStyle.progress} ${TeamSingleStyle.pg1}`}></div>

                  <p> IPTV INSTALLATION<span>90%</span></p>
                  <div className={`${TeamSingleStyle.progress} ${TeamSingleStyle.pg2}`}></div>

                  <p> VOIP SETUP<span>98%</span></p>
                  <div  className={`${TeamSingleStyle.progress} ${TeamSingleStyle.pg3}`}></div>

                  <p> SALES MANAGING<span>93%</span></p>
                  <div className={`${TeamSingleStyle.progress} ${TeamSingleStyle.pg4}`}></div>
              </div>

              <div className={TeamSingleStyle.right}>
                  <p>Rem explicabo proident, and culpa and proident for iste and modi. Tot am aliqua but exercitation. Tiam ut bibendum leo.</p>

                  <p>Lorem and ex, and incidunt. Ad cons equuntur. Laboriosam conse quatur ad. Ipsa perspiciatis, but laboris and omnis. Excepteur quia totam or cupidatat.</p>
              </div>
            
          </div>
        
      </div>
    </div>
  )
}

export default TeamSingle
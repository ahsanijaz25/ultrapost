import React from 'react'
import "./passion.css"


const Passion = () => {
  return (
    <div className='container'>
            <div className='pass-font'>

                <h2 className="text-center"><strong>Notre passion pour les <em>Ordinateur Gamer</em></strong></h2>
                <p class=" text-center my-4 pass-1">Ultraport France - le meilleur site pour monter son PC</p>
                <p className="text-center  p-pass-2 my-3">En tant que client, vos attentes sont toujours au cœur de nos préoccupations. La convivialité de notre site informatique commence avant tout avec notre <strong> configurateur PC gaming</strong>, conçu pour vous permettre de créer vous-même votre ordinateur gamer ou bureautique selon vos besoins.</p>
                <p className="text-center  p-pass-2 my-3">meilleur PC gaming configurables possibles,au meilleur prix.</p>

                <div className="row">
                    <div className="col-12">
                        <img src="../assets/passion.jpg" alt="" className='w-100'/>
                    </div>
                </div>


            </div>
        </div>
  )
}

export default Passion
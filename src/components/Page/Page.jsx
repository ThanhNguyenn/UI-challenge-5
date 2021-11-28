import React from 'react'
// import Cards from '../Cards/Cards'
import './Page_Styled.css'
import Card from '../Card/Card'
import Cards from '../Cards/Cards'

function Page() {
    return (
        <div className="page--outer-container">
           <div className="page--inner-container">
                {/* <Card /> */}
                <Cards />
           </div>
        </div>
    )
}

export default Page

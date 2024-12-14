'use client'

import Card from '../shared/Card'


const Info = () => {

    return (
        <section className='w-screen flex-col h-screen flex justify-evenly py-16 items-center overflow-x-hidden'>

            <h1 className='text-4xl'>meet the revolutionary scripting utility</h1>
        
            <div className='flex w-[75%] justify-evenly items-center'>
                <Card className="card" title="Exceptional Performance" icon="Rocket" />
                <Card className="card" title="Simple and responsive" icon="ThumbsUp" />
                <Card className="card" title="...and more!" icon="Elipsis" />
            </div>

        </section>
    )
}

export default Info
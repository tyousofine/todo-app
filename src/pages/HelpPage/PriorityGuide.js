import React from 'react'

export default function PriorityGuide() {
    return (
        <div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus distinctio nesciunt ea deserunt eveniet. Hic, perspiciatis. Vitae minima amet ut quis eos quibusdam laudantium enim ullam magnam, ipsam est vero</div>
            <br />
            <ul>
                <li><button className='red'></button><span>  Top priority</span></li>
                <li><button className='yellow'></button><span>  Medium priority</span></li>
                <li><button className='green'></button>  Low priority</li>
            </ul>
        </div>

    )
}

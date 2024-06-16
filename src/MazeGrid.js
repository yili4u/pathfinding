import './App.css'

export default function MazeGrid(){
    return (
        <div>
            <div className='cell wall'></div>
            <div className='cell path'></div>
            <div className='cell start'></div>
            <div className='cell end'></div>
        </div>
    )
}
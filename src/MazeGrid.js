import './App.css'

export default function MazeGrid(){

    let maze = [
        ['wall', 'wall', 'wall', 'wall' ,'wall'],
        ['start', 'path', 'path', 'wall' ,'wall'],
        ['wall', 'wall', 'path', 'wall' ,'wall'],
        ['wall', 'wall', 'path', 'path' ,'wall'],
        ['wall', 'wall', 'wall', 'end' ,'wall'],
    ];

    return (
        <div>
           {maze.map((row, rowIndex) => (
            <div className='row'>
                {row.map((cell, cellIndex) => (
                <div className={`cell ${cell}`}></div>
                ))}
            </div>
           ))}
        </div>
    )
}
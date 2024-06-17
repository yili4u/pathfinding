import { useState } from "react";
import './App.css'

export default function MazeGrid(){

    let initialMaze = [
        ['wall', 'wall', 'wall', 'wall' ,'wall'],
        ['start', 'path', 'path', 'wall' ,'wall'],
        ['wall', 'wall', 'path', 'wall' ,'wall'],
        ['wall', 'wall', 'path', 'path' ,'wall'],
        ['wall', 'wall', 'wall', 'end' ,'wall'],
    ];

    const [maze, setMaze] = useState(initialMaze);

    function generateMaze(height, width){
        let maze = [];

        for (let i = 0; i < height; i++){
            let row = [];
            for (let j = 0; j < width; j++){
                let cell = 'wall';
                if (Math.random() < 0.5){
                    cell = 'path';
                }
                row.push(cell)
            }
            maze.push(row)
        }
        maze[1][0] = 'start';
        maze[height-2][width-1] = 'end';
        setMaze(maze);
    }

    return (
        <div className='maze-grid'>
            <button className='maze-button' onClick={() => generateMaze(10, 10)}>Refresh Maze</button>
            <div className={'maze'}>
            {maze.map((row, rowIndex) => (
                <div className='row'>
                    {row.map((cell, cellIndex) => (
                    <div className={`cell ${cell}`}></div>
                    ))}
                </div>
            ))}
            </div>
        </div>
    )
}
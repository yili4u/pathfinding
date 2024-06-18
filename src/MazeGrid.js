import { useState, useEffect } from "react";
import './App.css'

export default function MazeGrid(){

    let initialMaze = [];

    const [maze, setMaze] = useState(initialMaze);

    function generateMaze(height, width){
        let maze = [];

        // Initialize the maze of all walls
        for (let i = 0; i < height; i++){
            let row = [];
            for (let j = 0; j < width; j++){
                row.push('wall')
            }
            maze.push(row)
        }

        // Create paths
        const left = [0, -1], right = [0, 1], up = [-1, 0], down = [1, 0]; 
        const dirs = [left, right, up, down];

        function isCellValid(r, c){
            return r >= 0 && r < height && c >= 0 && c < width &&
                   maze[r][c] === 'wall';
        }

       function createPath(r, c){
            maze[r][c] = 'path';

            // Randomly pick an order
            const directions = dirs.sort(() => Math.random() - 0.5);

            // Try each direction
            for (let [dr, dc] of directions){
                // Check next cell of the same direction
                const nr = r + dr * 2;
                const nc = c + dc * 2;
                if (isCellValid(nr, nc)){
                    maze[r + dr][c + dc] = 'path';
                    createPath(nr, nc);
                }
            }
        }

        createPath(1,1);

        // Set maze start and end points
        maze[1][0] = 'start';
        maze[height-2][width-1] = 'end';

        setMaze(maze);
    }

    useEffect(() => {
        // This function will run once the component mounts
        generateMaze(19, 19);
    }, []);

    return (
        <div className='maze-grid'>
            <button className='maze-button' onClick={() => generateMaze(19, 19)}>Refresh Maze</button>
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
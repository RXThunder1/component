import React, { useState, useEffect } from 'react';
import Cell from './Cell';

const Board = ({ size = 5 }) => {
    const [grid, setGrid] = useState(createInitialGrid(size));
    const [won, setWon] = useState(false);

    function createInitialGrid(size) {
        return Array.from({ length: size }, () =>
            Array.from({ length: size }, () => Math.random() > 0.5)
        );
    }

    const toggleLights = (row, col) => {
        setGrid((prevGrid) => {
            const newGrid = prevGrid.map((r) => r.slice());

            newGrid[row][col] = !newGrid[row][col];

            if (row > 0) newGrid[row - 1][col] = !newGrid[row - 1][col]; // up
            if (row < size - 1) newGrid[row + 1][col] = !newGrid[row + 1][col]; // down
            if (col > 0) newGrid[row][col - 1] = !newGrid[row][col - 1]; // left
            if (col < size - 1) newGrid[row][col + 1] = !newGrid[row][col + 1]; // right

            return newGrid;
        });
    };

    useEffect(() => {
        const allOff = grid.flat().every((cell) => !cell);
        setWon(allOff);
    }, [grid]);

    return (
        <div>
            {won ? (
                <h2>You Won!</h2>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${size}, 50px)` }}>
                    {grid.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <Cell
                                key={`${rowIndex}-${colIndex}`}
                                isOn={cell}
                                onClick={() => toggleLights(rowIndex, colIndex)}
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Board;
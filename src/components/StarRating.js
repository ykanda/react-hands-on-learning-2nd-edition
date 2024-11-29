import React, { useState } from "react";
import Star from "./Star";

export default function StarRating({ totalStars = 5 }) {
    const [ selectedStars, setSelectedStars ] = useState(3);

    // Star がクリックされたると setSelectedStars onSelect に渡してた関数が呼び出される
    const s = [ ...Array(totalStars) ]
    return (
        <>
            {s.map((n, i) => (<Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}
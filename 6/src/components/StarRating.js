import React, { useState } from "react";
import Star from "./Star";

// style, totalStars を除いたプロパティ（残余プロパティ）を props として受け取っている
export default function StarRating({ style = {}, totalStars = 5, ...props }) {
    const [ selectedStars, setSelectedStars ] = useState(0);

    // Star がクリックされると setSelectedStars onSelect に渡してた関数が呼び出される
    // props はスプレッド構文で展開して div にわたされている
    return (
        <div style={{ padding: "5px", ...style }} { ...props }>
            {[ ...Array(totalStars) ].map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}
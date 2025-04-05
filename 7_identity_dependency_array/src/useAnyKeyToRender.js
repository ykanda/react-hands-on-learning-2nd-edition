import { useState, useEffect } from "react";


const useAnyKeyToRender = () => {
    const [, forceRender] = useState();

    useEffect(() => {
        // state を変更することで再描画を行わせる
        window.addEventListener("keydown", forceRender);
        return () => {
            window.removeEventListener("keydown", forceRender);
        };
    }, []);
};

export default useAnyKeyToRender;
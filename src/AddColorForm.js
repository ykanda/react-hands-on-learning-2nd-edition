import React, { useState } from "react";
import { useInput } from "./hooks"
import { useColors } from "./ColorProvider";

export default function AddColorForm({ onNewColor = f => f }) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = e => {
        // <form> の submit イベントはデフォルトで HTTP の POST リクエストを送ってしまうので
        // その動作を行わないようにするために preventDefault() を呼び出している
        e.preventDefault();
        addColor(titleProps.value, colorProps.value)
        resetTitle();
        resetColor();
    }

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input {...colorProps} type="color" required />
            <button>ADD</button>
        </form>
    );
}
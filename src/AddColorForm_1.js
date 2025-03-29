import React from "react";

export default function AddColorForm({ onNewColor = f => f }) {
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = e => {
        // <form> の submit イベントはデフォルトで HTTP の POST リクエストを送ってしまうので
        // その動作を行わないようにするために preventDefault() を呼び出している
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        onNewColor(title, color)

        txtTitle.current.value = "";
        hexColor.current.value = "";
    }

    return (
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder="color title..." required />
            <input ref={hexColor} type="color" required />
            <button>ADD</button>
        </form>
    );
}
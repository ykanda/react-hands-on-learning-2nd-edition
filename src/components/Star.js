import React from "react";
import { FaStar } from "react-icons/fa"


// onSelect に渡している (f) => f は onClick が undefined とならないように、
// ダミーの関数をデフォルト引数に指定している
const Star = ({ selected = false , onSelect = (f) => f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default Star;

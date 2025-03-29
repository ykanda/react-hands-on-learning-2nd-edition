import React, { useContext } from "react";
import Color from "./Color";
import { useColors } from "./ColorProvider";

export default function ColorList() {
  const { colors } = useColors();

  // 渡されたデータ colors が空であればユーザーにメッセージを表示
  if (!colors.length) {
    return <div>No Colors Listed. (Add a Color)</div>
  }

  // データが存在している場合 Color コンポーネントの配列に変換する
  return (
    <div>
      {
        colors.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  );
}
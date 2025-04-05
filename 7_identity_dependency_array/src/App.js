import './App.css';
import useAnyKeyToRender from './useAnyKeyToRender'
import { useEffect, useMemo, useCallback } from 'react';


function WordCount({ children = "" }) {
  useAnyKeyToRender();

  // useCallback は関数の呼び出しをメモ化する（同じ引数であった場合に関数を実行せずメモ化された値を返す）
  // 依存配列の空の配列を渡しているため、useCallback は初回の実行以降再評価されることはなく、その一度だけ実行される
  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, []);
  useEffect(() => {
    console.log("fresh render fn");
    fn();
  }, [fn]);

  // useMemo はメモ化された値を返す（一度内部で生成された値は常に同一のもの＝インスタンスを返す）
  const words = useMemo(() => {
    const words = children.split(" ");
    return words;
  }, [children]);
  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p><strong>{words.length} - words</strong></p>
    </>
  );
}

function App() {
  return <WordCount>You are not going to belive this but... </WordCount>;
}

export default App;

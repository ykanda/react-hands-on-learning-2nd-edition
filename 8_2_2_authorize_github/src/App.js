import './App.css';
import React, { useState, useEffect } from 'react';

// ローカルストレージからデータを読み込む
const loadJSON = key =>
  key && JSON.parse(localStorage.getItem(key));

// ローカルストレージにデータを書き込む
const saveJSON = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));


function GitHubUser({ login, token }) {
  // loadJSON は同期関数なので useState の初期値に直接指定できる
  const [data, setData] = useState(loadJSON(`user:${login}`));
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);


  // 
  useEffect(() => {
    if (!data) return;
    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location
    });
  }, [data])

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (error)
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <h1>Loading...</h1>;
  if (!data) return null;

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        data.name && <p>{data.name}</p>
        data.location && <p>{data.location}</p>
      </div>
    </div>
  );
}

console.log("aaaa")

function App() {
  return <GitHubUser login="ykanda" />;
}

export default App;

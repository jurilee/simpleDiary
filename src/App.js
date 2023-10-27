import { useState, useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id: 1,
//     author: "이주리",
//     content: "안녕하세용",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "유지성",
//     content: "반갑습니다",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "손정민",
//     content: "안녕히가세용",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   }
// ];

function App() {

  const [data, setDate] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setDate([newItem, ...data]);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} /> 
    </div>
  );
}

export default App;

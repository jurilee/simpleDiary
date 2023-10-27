import { useState, useRef } from "react";

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentInput = useRef();

// const [author, setAuthor] = useState("이주리");
// const [content, setContent] = useState("");
// 동작방식이 유사한 state는 묶어서
const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1
});

const handleChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setState({
    ...state,
    [e.target.name]: e.target.value,
    });
};

    const handleSubmit = () => {
        if (state.author.length < 1) { 
            // alert("작성자는 최소 1글자 이상 입력해주세요");
            authorInput.current.focus();
            return;
        }
        if (state.content.length < 5) {
            // alert("일기 내용은 최소 5글자 이상 입력해주세요");
            contentInput.current.focus();
            return;
        }
        onCreate(state.author, state.content, state.emotion);
    // console.log(state);
        alert("저장 성공");
        setState({
            author: "",
            content: ""
        })
};

return (
  <div className="DiaryEditor">
    <h2>오늘의 일기</h2>
    <div>
      <input
        ref={authorInput}
        name="author"
        value={state.author}
        onChange={handleChangeState}
        // onChange={(e) => {
        //     // console.log(e.target.name);
        //     // console.log(e.target.value);
        //     setState({
        //         ...state,
        //         author: e.target.value,
        //         // content: state.content
        //         // 만약 state가 더 늘어난다면, 유지시켜야하는 부분을 전부 기재하는 것은 비효율적이므로, 스프레드 연산자 활용
        //         // 단 스프레드가 뒤에 나오는 경우 author에 덮어씌워지므로 업데이트가 안됨. state를 먼저 펼치고 변경하고자하는 프로퍼티를 뒤에 기재해야함
        //     });
        // }}
      />
    </div>
    <div>
      <textarea
        ref={contentInput}
        name="content"
        value={state.content}
        onChange={handleChangeState}
      />
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
    </div>
    <div>
      <button onClick={handleSubmit}>일기 저장하기</button>
    </div>
  </div>
);
};

export default DiaryEditor;

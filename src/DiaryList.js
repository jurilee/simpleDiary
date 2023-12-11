import DiaryItem from "./DiaryItem";

const DiaryList = ({ onRemove ,diaryList }) => { // props 
    // console.log(diaryList);
    return (
      <div className="DiaryList">
        <h2>다이어리 리스트</h2>
        <h3>{diaryList.length}개의 일기가 있습니다.</h3>
        <div>
          {diaryList.map((i) => (
            <DiaryItem key={i.id} {...i} onRemove={onRemove} />
          ))}
        </div>
      </div>
    );
}

DiaryList.defaultProps = {
    diaryList:[]
} // defaultProps로 값이 없는 경우 대응

// map 사용시 key 필수. 본문에서는 id를 고유한 key로 설정
// 없는 경우 통상 idx를 쓰곤 하지만 데이터를 수정하거나 삭제힌디먄 idx가 바뀌므로 문제가 생길 수 있음
export default DiaryList;
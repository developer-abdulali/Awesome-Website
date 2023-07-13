import React from "react";

const CommentComp = () => {
  return (
    <div>
      <div className="usr-cmnt">
        <img src="../images/usr-img.png" alt="user image" />
        <span className="usr-name">안녕 나 응애 </span>
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="usr-svg"
        >
          <circle cx="7.5" cy="7" r="7" fill="#01B99F" />
          <path
            d="M6.09471 8.38071L10.2397 4.19509C10.3685 4.06503 10.5324 4 10.7315 4C10.9305 4 11.0945 4.06503 11.2233 4.19509C11.3521 4.32515 11.4165 4.49069 11.4165 4.69169C11.4165 4.89269 11.3521 5.05823 11.2233 5.18829L6.58649 9.8705C6.44598 10.0124 6.28206 10.0833 6.09471 10.0833C5.90737 10.0833 5.74344 10.0124 5.60294 9.8705L3.77633 8.026C3.64753 7.89593 3.58313 7.7304 3.58313 7.5294C3.58313 7.32839 3.64753 7.16286 3.77633 7.0328C3.90513 6.90274 4.06905 6.83771 4.26811 6.83771C4.46716 6.83771 4.63109 6.90274 4.75989 7.0328L6.09471 8.38071Z"
            fill="white"
          />
        </svg>
        <span className="adayAgo">1일전</span>
      </div>
      <div className="comment">
        <span>
          어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 <br /> 우짤래미님도
          아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
          기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
          올라온다고 하니 꼭 봐주세용~!
        </span>
      </div>
    </div>
  );
};

export default CommentComp;

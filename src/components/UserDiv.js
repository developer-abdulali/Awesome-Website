import React from "react";

const UserDiv = () => {
  return (
    <div>
      <div className="usr-div">
        <div className="usr-detail">
          <img src="../images/img1.png" alt="img" className="logo" />
          <div className="usr-text">
            <div>
              <span className="helloIam">안녕 나 응애 </span>
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
                  d="M6.09471 8.38069L10.2397 4.19507C10.3685 4.06501 10.5324 3.99998 10.7315 3.99998C10.9305 3.99998 11.0945 4.06501 11.2233 4.19507C11.3521 4.32513 11.4165 4.49066 11.4165 4.69167C11.4165 4.89267 11.3521 5.05821 11.2233 5.18827L6.58649 9.87048C6.44598 10.0124 6.28206 10.0833 6.09471 10.0833C5.90737 10.0833 5.74344 10.0124 5.60294 9.87048L3.77633 8.02597C3.64753 7.89591 3.58313 7.73038 3.58313 7.52937C3.58313 7.32837 3.64753 7.16284 3.77633 7.03278C3.90513 6.90271 4.06905 6.83768 4.26811 6.83768C4.46716 6.83768 4.63109 6.90271 4.75989 7.03278L6.09471 8.38069Z"
                  fill="white"
                />
              </svg>
              <span className="adayAgo">1일전</span>
            </div>
            <div className="cmKg">
              <span>165cm</span>
              <span className="dot">.</span>
              <span>53kg</span>
            </div>
          </div>
        </div>
        <div>
          <button className="btn">팔로우</button>
        </div>
      </div>
      <div className="">
        <h1 className="hTag">
          지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
        </h1>{" "}
        <br />
        <span className="someText">
          지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시
          어떤 상품이 제일 괜찮았어? <br /> <br />
          후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일
          재밌었다던데 맞아??? <br /> <br /> 올해 로우라이즈가 트렌드라길래 나도
          도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지 너무너무
          궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면 어땠는지 후기 좀
          공유해주라~~!
        </span>
      </div>
      <div className="hashtags">
        <div className="spans">
          <span className="spn">#2023</span>
        </div>
        <div className="spans">
          <span className="spn">#TODAYISMONDAY</span>
        </div>
        <div className="spans">
          <span className="spn">#TOP</span>
        </div>
        <div className="spans">
          <span className="spn">#POPS!</span>
        </div>
      </div>
      <div className="hashtags">
        <div className="spans">
          <span className="spn">#WOW</span>
        </div>
        <div className="spans">
          <span className="spn">#ROW</span>
        </div>
      </div>
    </div>
  );
};

export default UserDiv;

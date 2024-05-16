import React from "react";
const footerText = [
  {
    title:"NAVER",
    desc:"네이버블로그에 오시면 더 많은 강의를 볼 수 있습니다.",
    link:"https://blog.naver.com/dongseog_you/223434116836",
  },
  {
    title:"NAVER",
    desc:"네이버블로그에 오시면 더 많은 강의를 볼 수 있습니다.",
    link:"https://blog.naver.com/dongseog_you/223434116836",
  },
  {
    title:"NAVER",
    desc:"네이버블로그에 오시면 더 많은 강의를 볼 수 있습니다.",
    link:"https://blog.naver.com/dongseog_you/223434116836",
  },
  {
    title:"NAVER",
    desc:"네이버블로그에 오시면 더 많은 강의를 볼 수 있습니다.",
    link:"https://blog.naver.com/dongseog_you/223434116836",
  },
  {
    title:"NAVER",
    desc:"네이버블로그에 오시면 더 많은 강의를 볼 수 있습니다.",
    link:"https://blog.naver.com/dongseog_you/223434116836",
  },
  {
    title:"NAVER",
    desc:"네이버블로그에 오시면 더 많은 강의를 볼 수 있습니다.",
    link:"https://blog.naver.com/dongseog_you/223434116836",
  },  
];

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
        <div className="footer_inner">
            <div className="footer_text">
                <span>DongSeok,Yu</span>
                <span>@Yu</span>
            </div>
            <div className="footer_info">
                <div className="left">
                    <div className="title">
                        <a href="/">sign up</a>
                    </div>
                    <p className="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                </div>
                <div className="right">
                    <h3>social</h3>
                    <ul>
                      {footerText.map((footer,key)=>(
                        <li key={key}>
                          <a href={footer.link}>{footer.title}</a>
                          <em>{footer.desc}</em>
                        </li>
                      ))}
                    </ul>
                </div>               
            </div>
            <div className="footer_right">
                © 2023 webstoryboy<br />
                이 사이트는 리액트를 이용하여 제작하였습니다.
            </div>
        </div>
    </footer>
  );
};

export default Footer;

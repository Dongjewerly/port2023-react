import React from "react"

const siteText = [
  {
    text:["Make","site compliant with","webstandard"],
    title:"Vite를 이용한 사이트 제작",
    code:"https://port2023vite.netlify.app",
    view:"https://port2023vite.netlify.app",
    info:[
      "site coding",
      "production period : two days",
      "use stack : vue.js, html5/css3, CSS Variable, Vite"
    ],
  },
  {
    text:["Make","site compliant with","react.js"],
    title:"eact를 이용한 사이트 제작",
    code:"https://port2023vite.netlify.app",
    view:"https://port2023vite.netlify.app",
    info:[
      "site coding",
      "production period : two days",
      "use stack : React.js,  html5/css3, CSS Variable, React"
    ],
  },
  {
    text:["Make","site compliant with","vue.js"],
    title:"Vue를 이용한 사이트 제작",
    code:"https://port2023vite.netlify.app",
    view:"https://port2023vite.netlify.app",
    info:[
      "site coding",
      "production period : two days",
      "use stack : Vue.js, html5/css3, CSS Variable, Vue"
    ],
  },
  {
    text:["Make","site compliant with","next.js"],
    title:"NEXT를 이용한 사이트 제작",
    code:"https://port2023vite.netlify.app",
    view:"https://port2023vite.netlify.app",
    info:[
      "site coding",
      "production period : two days",
      "use stack : NEXT.js, html5/css3, CSS Variable"
    ],
  },

]

const Site = () => {
  return (
    <section id="site">
            <div className="site_inner">
                <h2 className="site_title">Site Coding <em>나의 작업물</em></h2>
                <div className="site_wrap">
                    {siteText.map((site,key)=>(
                      <article className={`site_item s${key+1}`} key={key}>
                        <span className="num">{key+1}.</span>
                        <div className="text">
                            <div>{site.text[0]}</div>
                            <div>{site.text[1]}</div>
                            <div>{site.text[3]}</div>
                        </div>
                        <h3 className="title">{site.title}</h3>
                        <div className="btn">
                            <a href={site.code}>Code</a>
                            <a href={site.view}>View</a>
                        </div>
                        <div className="info">
                            <span>{site.info[0]}</span>
                            <span>{site.info[1]}</span>
                            <span>{site.info[2]}</span>
                        </div>
                      </article>
                    ))}
                </div>
            </div>
        </section>
  );
};

export default Site;

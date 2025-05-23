import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets); // 개발 단계에서 사용하는 더미 데이터입니다.

const Header = () => {
  return (
    <div className="header">
      <span className="header-text">ROCKET TWITTLER</span>
      <img src="/rocketboost_logo_symbol-1.png" alt="로고" className="header-logo" />
    </div>
  );
};

const Sidebar = () => {
  return (
        <section className="sidebar">
          <div className="sidebar__menuItem">
            <i className="fas fa-home icon"></i> 홈
          </div>
          <div className="sidebar__menuItem">
            <i className="fas fa-search icon"></i> 검색
          </div>
          <div className="sidebar__menuItem">
            <i className="fas fa-bell icon"></i> 알림
          </div>
          <div className="sidebar__menuItem">
            <i className="fas fa-envelope icon"></i> 메시지
          </div>
          <div className="sidebar__menuItem">
            <i className="far fa-comment-dots icon"></i> 댓글
          </div>

        </section>
      );
    };
    


const Counter = ({total}) => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
        total: {total}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>ⓒ 2025 Twittler. All rights reserved.</p>
    </footer>
  );
};

const Tweets = ({tweets}) => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        const isBob = tweet.username === 'Bob';
        const tweetUserNameClass = isBob
          ? 'tweet__username tweet__username--purple'
          : 'tweet__username';

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              <img src={tweet.picture} alt={tweet.username} />
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className={tweetUserNameClass}>
                  {tweet.username}
                </span>
                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className="tweet__message">{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};


const Features = ({tweets}) => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter total={dummyTweets.length} />
          <div className="tweetForm__count__text">
            총 {dummyTweets.length}개의 트윗이 있습니다 🚀
          </div>
        </div>
      </div>
      <Tweets tweets={tweets}/>
      <Footer />
    </section>
  );
};

const App = ({dummyTweets =[] }) => {
  return (
    <div className="App">
      <Header />
      <main>
      <Sidebar />
      <Features tweets={dummyTweets} />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };

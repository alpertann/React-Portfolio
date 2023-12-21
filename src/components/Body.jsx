import React from 'react';

function Body() {
  return (
    <>
      <div className="hero-title">
        <h1>hey, I'm Alper 👋</h1>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quae labore expedita qui nesciunt pariatur totam voluptatibus laboriosam, consequuntur vitae?</p>
      <div className="Image">
        <img src="./image/3.jpeg" style={{ width: '250px', height: '250px;' }} alt="" />
        <img src="/image/4.jpg" style={{ width: '390px', height: '250px' }} alt="" />
        <img src="/image/4.jpg" style={{ width: '390px', height: '250px' }} alt="" />
        <img src="/image/4.9.png" style={{ width: '250px', height: '250px' }} alt="" />
      </div>
      <p>
        I create educational content for developers, teaching them about web development,
        JavaScript and TypeScript, React and Next.js, and more. This comes in all forms:
        blog posts, videos, tweets, conference talks, and workshops. You can watch some of my
        favorites below.
      </p>
      <div className="box">
        <div className="first-box">
          <div className="info-ex">
            <img src="/image/ins.png" style={{ width: '63px', height: '63px;' }} alt="" />
            <p>Follow me on Instagram<br />@alprtan</p>
          </div>
        </div>
        <div className="second-box">
          <div className="info-ex">
            <img src="/image/x.jpg" style={{ width: '63px', height: '63px;' }} alt="" />
            <p>Follow me on X<br />@alper8tan</p>
          </div>
        </div>
      </div>
      <p>
        I create educational content for developers, teaching them about web development,
        JavaScript and TypeScript, React and Next.js, and more. This comes in all forms:
        blog posts, videos, tweets, conference talks, and workshops. You can watch some of my
        favorites below.
      </p>
      <div className="box-work">
        <h1>This is my workeds</h1>
        <div className="box-box">
          <img src="/image/work4.png" style={{ width: '625px' }} alt="" />
          <h2>
            Frontend Project
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="box-box">
          <img src="/image/work3.png" style={{ width: '625px' }} alt="" />
          <h2>
            Frontend Project
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="box-box">
          <img src="/image/work2.png" style={{ width: '625px', height: '200px;' }} alt="" />
          <h2>
            Frontend Project
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <p>
        I create educational content for developers, teaching them about web development,
        JavaScript and TypeScript, React and Next.js, and more. This comes in all forms:
        blog posts, videos, tweets, conference talks, and workshops. You can watch some of my
        favorites below.
      </p>
      <div className="black-box">
        <h3>What  A Great Developer Experience?
        </h3>
        <p>
          34,119 views
        </p>
      </div>
      <div className="black-box">
        <h3>What Makes A Great Developer Experience?</h3>
        <p>
          34,119 views.
        </p>
      </div>
      <div className="black-box">
        <h3>
          What Makes A Great Developer Experience?
        </h3>
        <p>
          34,119 views.
        </p>
      </div>
      <p>İletişim Kanalları</p>
      <div className="social">
        <div className="social-box">
          <h3>
            <img src="/image/github.png" style={{ width: '40px', height: '40px' }} alt="" />
          </h3>
        </div>
        <div className="social-box">
          <h3>
            <img src="/image/ins.png" style={{ width: '40px', height: '40px' }} alt="" />
          </h3>
        </div>
        <div className="social-box">
          <h3>
            <img src="/image/x.jpg" style={{ width: '40px', height: '40px' }} alt="" />
          </h3>
        </div>
      </div>
    </>
  )
}

export default Body
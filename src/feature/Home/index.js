import React from 'react';

import itemImg from '../../images/background-top-item.jpg'


const Home = props => (
  <div id="main-content">
    <div className="container">
      <div className="row section">
        {/* col-md-3 */}
        <div className="col-xs-12 col-sm-4 col-md-3">
          <div className="top-item">
            <a href="/gioi-thieu.html">
              <div className="top-item-content">
                <div className="background-top-item">
                </div>
                <div className="title-top-item">
                  Giới thiệu
                    </div>
              </div>
            </a>
          </div>
        </div>
        {/* /col-md-3 */}
        {/* col-md-3 */}
        <div className="col-xs-12 col-sm-4 col-md-3">
          <div className="top-item">
            <a href="/khoa-hoc.html">
              <div className="top-item-content">
                <div className="background-top-item">
                </div>
                <div className="title-top-item">
                  Khóa học
                    </div>
              </div>
            </a>
          </div>
        </div>
        {/* /col-md-3 */}
        {/* col-md-3 */}
        <div className="col-xs-12 col-sm-4 col-md-3">
          <div className="top-item">
            <a href="/vinh-danh-hoc-vien.html">
              <div className="top-item-content">
                <div className="background-top-item">
                </div>
                <div className="title-top-item">
                  Vinh danh học viên
                    </div>
              </div>
            </a>
          </div>
        </div>
        {/* /col-md-3 */}
      </div>
      {/* /row */}
      {/* row */}
      <div className="row section">
        <div className="banner">
          <img src="https://a0.muscache.com/4ea/air/v2/pictures/5b64bcbf-d6b1-4cbf-b866-9b5f91027b35.jpg?t=c:w1131-h343,r:w1131-h343-sfit,e:fjpg-c75" alt="" />
        </div>
      </div>
      {/* /row */}
      {/* Course */}
      <div className="row section">
        <h3>Khóa học</h3>
        {/* course item */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="course-item">
            <div className="course-item-image">
              <img src={itemImg} alt=""/>
            </div>
            <div className="course-item-content">
              <h2>Course title</h2>
              <h4>2,000,000 VND</h4>
              <h4>rating</h4>
            </div>
          </div>
        </div>
        {/* /course item */}
        {/* course item */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="course-item">
            <div className="course-item-image">
              <img src={itemImg} alt=""/>
            </div>
            <div className="course-item-content">
              <h2>Course title</h2>
              <h4>2,000,000 VND</h4>
              <h4>rating</h4>
            </div>
          </div>
        </div>
        {/* /course item */}
        {/* course item */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="course-item">
            <div className="course-item-image">
              <img src={itemImg} alt=""/>
            </div>
            <div className="course-item-content">
              <h2>Course title</h2>
              <h4>2,000,000 VND</h4>
              <h4>rating</h4>
            </div>
          </div>
        </div>
        {/* /course item */}
        {/* course item */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="course-item">
            <div className="course-item-image">
              <img src={itemImg} alt=""/>
            </div>
            <div className="course-item-content">
              <h2>Course title</h2>
              <h4>2,000,000 VND</h4>
              <h4>rating</h4>
            </div>
          </div>
        </div>
        {/* /course item */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="course-item">
            <div className="course-item-image">
              <img src={itemImg} alt=""/>
            </div>
            <div className="course-item-content">
              <h2>Course title</h2>
              <h4>2,000,000 VND</h4>
              <h4>rating</h4>
            </div>
          </div>
        </div>
        {/* /course item */}
        {/* course item */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="course-item">
            <div className="course-item-image">
              <img src={itemImg} alt="" />
            </div>
            <div className="course-item-content">
              <h2>Course title</h2>
              <h4>2,000,000 VND</h4>
              <h4>rating</h4>
            </div>
          </div>
        </div>
        {/* /course item */}
        {/* course item */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="course-item">
            <div className="course-item-image">
              <img src={itemImg} alt=""/>
            </div>
            <div className="course-item-content">
              <h2>Course title</h2>
              <h4>2,000,000 VND</h4>
              <h4>rating</h4>
            </div>
          </div>
        </div>
        {/* /course item */}
        {/* course item */}
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className="course-item">
            <div className="course-item-image">
              <img src={itemImg} alt=""/>
            </div>
            <div className="course-item-content">
              <h2>Course title</h2>
              <h4>2,000,000 VND</h4>
              <h4>rating</h4>
            </div>
          </div>
        </div>
        {/* /course item */}
      </div>
      {/* /Course */}
      {/* News */}
      <div className="row section">
        <h3>Tin tức</h3>
        {/* new item */}
        <div className="col-sm-6 col-md-4">
          <div className="news-item">
            <div className="news-item-image">
              <img src={itemImg} alt=""/>
            </div>
            <div className="news-item-content">
              <h2>Catch a wave</h2>
              <h4>
                We’ve teamed up with the World Surf League to offer surfing experiences around the world.
                  </h4>
            </div>
          </div>
        </div>
        {/* /new-item */}
        {/* new item */}
        <div className="col-sm-6 col-md-4">
          <div className="news-item">
            <div className="news-item-image">
              <img src={itemImg} alt="" />
            </div>
            <div className="news-item-content">
              <h2>Catch a wave</h2>
              <h4>
                We’ve teamed up with the World Surf League to offer surfing experiences around the world.
                  </h4>
            </div>
          </div>
        </div>
        {/* /new-item */}
        {/* new item */}
        <div className="col-sm-6 col-md-4">
          <div className="news-item">
            <div className="news-item-image">
              <img src={itemImg} alt=""/>
            </div>
            <div className="news-item-content">
              <h2>Catch a wave</h2>
              <h4>
                We’ve teamed up with the World Surf League to offer surfing experiences around the world.
              </h4>
            </div>
          </div>
        </div>
        {/* /new-item */}
      </div>
      {/* /News */}
    </div>
  </div>
);

Home.propTypes = {

}

export default Home;

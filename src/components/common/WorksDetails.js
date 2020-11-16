import React, { useContext } from 'react';
import { DetailList } from 'contexts/DetailsList';

const WorksDetails = ({ match }) => {
  const worksList = useContext(DetailList);
  const title = worksList.find(v => v.tiltle === match.params.title);
  return (
    <section className="main__detail">
      <article className="main__detail_visual">
        <h3>
          {/* <?=$row['title']?> */}
          {/* <small><?=$row['d_type']?></small> */}
        </h3>
        <span>
          <img src="<?=$row['d_mockup']?>" alt="" />
        </span>
        <div className="back_img"></div>
      </article>
      <article className="main__detail_description">
        <h4>overall</h4>
        <span>
          {/* <?=$row['period']?>/ <?=$row['d_brief']?> */}
        </span>
        {/* <p><?=$row['d_description']?></p> */}
        <a href="<?=$row['url']?>">
          <span className="linkBtn">바로가기</span>
        </a>
      </article>
      <article className="main__detail_preview">
        <img src="assets/img/detail/img_page1.jpg" alt="" />
        <img src="assets/img/detail/img_page2.jpg" alt="" />
        <img src="assets/img/detail/img_page3.jpg" alt="" />
        {/* <!-- page4 php 연결 후 캡쳐한 화면 --> */}
      </article>
      <div className="main__detail_btn">
        <a href="detail.php?num=<?=$prevC?>">prev</a>
        <button type="button" className="top-btn">top</button>
        <a href="detail.php?num=<?=$nextC?>">next</a>
      </div>
    </section>
  );
};

export default WorksDetails;
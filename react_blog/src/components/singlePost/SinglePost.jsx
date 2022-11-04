import "./singlePost.css";
import { Link } from "react-router-dom";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <Link className="link" to="/write">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            </Link>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Shivam</b>
          </span>
          <span className="singlePostDate">1 hour ago </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In possimus
          deserunt fuga dicta porro esse! Sunt, adipisci voluptas! Iste quos
          voluptatibus, dolore, pariatur commodi tenetur accusantium placeat
          itaque tempora debitis mollitia, quidem minima? Praesentium est rerum
          non quaerat id distinctio consectetur quis repellendus, molestias
          incidunt reprehenderit excepturi culpa dolorem voluptatibus fugiat
          nisi recusandae dolores iure sequi explicabo quia! Quia nam nisi,
          facere numquam perspiciatis, fuga dolores, commodi animi iusto qui
          laborum eius provident incidunt quibusdam eos pariatur labore
          molestias obcaecati rem minus illo odit. Consequatur consequuntur
          magni, doloremque ratione id repellendus excepturi aut dolore alias
          voluptatem debitis cumque sed rerum enim similique facilis aperiam et
          nesciunt odit amet. Labore ut voluptates esse, provident qui ea minus
          expedita praesentium sunt, fuga dignissimos voluptatem ipsa iure
          temporibus, velit officia quae cumque ad dolorum aliquam illum soluta
          quam? Facilis eum ut magni obcaecati, aliquid consequatur debitis
          aliquam perferendis ex accusantium, vitae libero animi veritatis
          tenetur temporibus enim ea delectus nobis vel, deserunt cumque
          sapiente! Sapiente, facere fugit earum, labore veritatis culpa
          officiis veniam ipsum et perspiciatis nesciunt magni quis quia maiores
          deserunt totam in. Voluptatum, omnis necessitatibus? Autem impedit
          voluptate eligendi, non hic fuga, neque officiis aperiam culpa
          nesciunt adipisci enim, aut quae accusantium inventore magnam.
          Accusantium fugiat laborum vitae dicta quam. Explicabo, earum harum
          omnis alias molestiae corrupti ipsa nisi voluptas obcaecati vero
          tempore blanditiis doloremque id sapiente non sint facilis soluta
          dolores consequatur! Beatae expedita et, blanditiis minus facere ab
          neque repellat nam incidunt. Illum architecto, optio accusamus quas
          labore corrupti adipisci voluptatum quidem unde eum ratione, nostrum,
          deserunt neque. Deserunt placeat aspernatur ipsam obcaecati et. Id
          eaque est, amet magni voluptatibus nam vitae. Consequatur quia esse
          aperiam consectetur voluptatem ratione, fuga sit quisquam delectus. Ab
          quisquam incidunt veniam nobis dolorum aut rem saepe laborum suscipit
          perferendis officiis tenetur nemo nihil enim eaque corporis dicta quo
          porro, quia dignissimos ducimus voluptatem praesentium consectetur
          omnis. Quo harum rem culpa corporis animi suscipit ratione laudantium
          nemo, dolorum voluptas minus cum odit maiores, quae dolore totam.
          Provident, harum quis! Saepe aut ipsum ea ut suscipit dolore, veniam
          cum nihil. Asperiores repellendus corporis possimus quo deserunt
          dolorem quia culpa delectus illo! Ullam necessitatibus ipsa, velit,
          illum impedit pariatur aperiam alias reiciendis accusamus
          exercitationem eum deserunt ducimus natus consectetur adipisci
          assumenda, nisi iste rem nostrum repudiandae maxime? Amet delectus
          veritatis dignissimos veniam ipsa laudantium sapiente unde, itaque,
          ipsum debitis accusantium temporibus corporis inventore optio
          distinctio blanditiis nisi non deserunt officia nihil fugiat nam.
          Corporis doloremque voluptatem porro explicabo sed ea incidunt ipsa
          itaque. Cupiditate sapiente consequuntur laboriosam similique laborum
          sunt obcaecati quia ipsum asperiores exercitationem, expedita delectus
          veniam? Facilis distinctio impedit rerum! Ab ut sed error, doloremque
          delectus dolorum maxime vel eveniet porro? Quas nam ad rem voluptate
          labore fuga! Ipsum accusamus fuga vel id officiis. Ex debitis
          voluptate asperiores eum soluta tempora doloremque laudantium ab rem
          vitae fugiat officia repellendus laborum dolorum necessitatibus quia
          recusandae quam, possimus, doloribus tempore labore? Dolore, aperiam
          impedit quam fuga non recusandae eos at odio beatae vero nesciunt
          voluptatem repudiandae!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;

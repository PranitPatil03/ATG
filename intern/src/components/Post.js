import React from 'react'
import postimg from '../components/images/postimg.png'
import dots from '../components/images/dots.png'
import user from '../components/images/user.png'
import share from '../components/images/share.png'


export default function Post() {
  return (
    <>
        <div className="posts">
            <div className="postno">
                <p>Post(368)</p>
            </div>
            <div className="filter">
                <button>Filter:All</button>
            </div>
        </div>

        <div className="postimg">
            <img class="imgpost" src={postimg} alt="" />
        </div>

        <div className="articles">
            <p>✍️ Article</p>
        </div>

        <div className="articelcontent">
            <div className="leftcontent">
                <p>What if famous brands had regular fonts? 
                <br /> Meet RegulaBrands!</p>
            </div>
            <div className="icondots">
                <img class="dots" src={dots} alt="" />
            </div>
        </div>

        <div className="description">
            <p>I’ve worked in UX for the better part of a decade. F..</p>
        </div>

        <div className="name">
            <div className="photo">
                <img src={user} alt="" />
                <div className="username">
                    <p> <span>Sarthak Kamra</span> <br />
                    1.4k views </p> 
                </div>
            </div>
          
            <div className="share">
                <button><img src={share} alt="" /> Share</button>
            </div>
        </div>

    </>
    )
}

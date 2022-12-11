import React,{ useContext } from 'react';
import alert from "../../assets/images/icon/alert.svg";
import location from "../../assets/images/icon/location.svg";
import group from "../../assets/images/icon/navigation/Vector.png";
import pen from "../../assets/images/icon/pen.svg";
import Banner from '../Banner/Banner';

import downArrow from "../../assets/images/icon/navigation/downArrow.png";
import PostCard from '../PostCard/PostCard';

import articleIcon from "../../assets/images/icon/Article.svg";
import leave from "../../assets/images/icon/leave.svg";
import hand from "../../assets/images/icon/hand.svg";
import EduIcon from "../../assets/images/icon/Education.svg";


import leisure from "../../assets/images/leisure.png";
import activism from "../../assets/images/activism.png";
import mba from "../../assets/images/mba.png";
import philosophy from "../../assets/images/philosophy.png";
import article from "../../assets/images/article.png";
import eduImg from "../../assets/images/education.png";


import sarah from "../../assets/images/sarah.png";
import sarthak from "../../assets/images/sarthak.png";
import { authContext } from '../../Context/Context';
import EventCard from '../EventCard/EventCard';
import JobCard from '../JobCard/JobCard';
import SignIn from '../SignIn/SignIn';
import SignInMobile from '../SignIn/SignInMobile';
import SignUp from '../SignUp/SignUp';
import SignUpMobile from '../SignUp/SignUpMobile';
const Home = () => {
  const {loggedIn, setLoggedIn} = useContext(authContext)
  console.log(loggedIn);
  const handleSingIn = (e) => {
    e.preventDefault();
    console.log("clicked");
    setLoggedIn(true);
  }
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("clicked");
    setLoggedIn(false);
  };

  const postdata = [
    {
      id: 1,
      img: `${article}`,
      category: "Article",
      catIcon: `${articleIcon}`,

      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      authorImg: `${sarthak}`,
      author: "Sarthak Karma",
    },
    {
      id: 2,
      img: `${eduImg}`,
      category: "Education",
      catIcon: `${EduIcon}`,
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      authorImg: `${sarah}`,
      author: "Sarah West",
    },
  ];

    return (
      <div className="">
        <Banner></Banner>
        <div>
          <nav className="navbar navbar-expand-md bg-white ">
            <div className="container ">
              <div
                className="collapse navbar-collapse border-1 border-bottom"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav me-auto">
                  <li className="nav-item border-1 border-dark border-bottom pb-2">
                    <a className="nav-link active" aria-current="page" href="/">
                      All Posts(32)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Article
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Event
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Education
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Job
                    </a>
                  </li>
                </ul>
                <div className="">
                  <button className="btn bg-light me-1">
                    Write a post <img className="ms-1" src={downArrow} alt="" />
                  </button>
                  {loggedIn ? (
                    <button
                      className="btn border"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#modalBox"
                      onClick={handleLogout}
                    >
                      <img src={leave} alt="" /> Leave Group
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#modalBox"
                    >
                      <img src={group} alt="" /> Join Group
                    </button>
                  )}

                  {/* <div id="popup" className="d-none w-100 custoStyle" >
                    <div
                      className=""
                      
                    /> */}
                  {/* <div className="mx-auto container">
                      <div className="">
                        <div className="bg-white shadow  overflow-y-auto w-100">
                          <div className="">
                            <div className=" mt-9">
                              <SignIn></SignIn>
                              <button
                                className=" shadow rounded text-sm text-white"
                                onClick={closepopup}
                              >
                                Cancel
                              </button>
                              <button className="px-6 py-3  shadow rounded text-sm text-white">
                                Update Review
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="container my-5">
          <div className="row justify-content-between">
            <div className="col-md-8">
              {postdata.map((post) => (
                <PostCard post={post} key={post.id}></PostCard>
              ))}
              <EventCard></EventCard>
              <JobCard></JobCard>
            </div>
            {loggedIn ? (
              <div className="col-md-3">
                <div>
                  <div className="d-flex justify-content-between gap-5 my-3 border-2 border-bottom ">
                    <span className="h5 lead muted">
                      <img src={location} alt="" /> Enter Your Location
                    </span>
                    <span className="h5">
                      <img className="w-100" src={pen} alt="" />
                    </span>
                  </div>
                  <div className="d-flex justify-content-between gap-3 my-3 mt-5 ">
                    <span className="h5">
                      <img src={alert} alt="" />
                    </span>
                    <span className="lead">
                      <p>
                        Your location will help us serve better and extend a
                        personalised experience.
                      </p>
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-5">
                      <img src={hand} alt="" /> RECOMENDED GROUPS
                    </h4>
                    <div className="d-flex justify-content-between my-3">
                      <div className="d-flex content-align-center align-items-center gap-2 ">
                        <img src={leisure} alt="" />
                        <span className="h4">Leisure</span>
                      </div>
                      <button className="btn bg-light btn-lg rounded-pill px-3">
                        {" "}
                        follow
                      </button>
                    </div>
                    <div className="d-flex justify-content-between my-3">
                      <div className="d-flex content-align-center align-items-center gap-2 ">
                        <img src={activism} alt="" />
                        <span className="h4">Activsm</span>
                      </div>
                      <button className="btn bg-light btn-lg rounded-pill px-3">
                        {" "}
                        follow
                      </button>
                    </div>
                    <div className="d-flex justify-content-between my-3">
                      <div className="d-flex content-align-center align-items-center gap-2 ">
                        <img src={mba} alt="" />
                        <span className="h4">MBA</span>
                      </div>
                      <button className="btn bg-light btn-lg rounded-pill px-3">
                        {" "}
                        follow
                      </button>
                    </div>
                    <div className="d-flex justify-content-between my-3">
                      <div className="d-flex content-align-center align-items-center gap-2 ">
                        <img src={philosophy} alt="" />
                        <span className="h4">Philosophy</span>
                      </div>
                      <button className="btn bg-light btn-lg rounded-pill px-3">
                        {" "}
                        follow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-md-3">
                <div>
                  <div className="d-flex justify-content-between gap-5 my-3 border-2 border-bottom ">
                    <span className="h5">
                      <img src={location} alt="" /> Norda, India
                    </span>
                    <span className="h5">
                      <img className="w-100" src={pen} alt="" />
                    </span>
                  </div>
                  <div className="d-flex justify-content-between gap-3 my-3 mt-5 ">
                    <span className="h5">
                      <img src={alert} alt="" />
                    </span>
                    <span className="lead">
                      <p>
                        Your location will help us serve better and extend a
                        personalised experience.
                      </p>
                    </span>
                  </div>
                  
                </div>
              </div>
            )}
          </div>
        </div>
        <SignIn handleSingIn={handleSingIn}></SignIn>
        <SignUp handleSingIn={handleSingIn}></SignUp>
        <SignInMobile handleSingIn={handleSingIn}></SignInMobile>
        <SignUpMobile handleSingIn={handleSingIn}></SignUpMobile>
      </div>
    );
};

export default Home;
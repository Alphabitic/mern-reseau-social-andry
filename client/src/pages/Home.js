import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import NewPostForm from "../components/Post/NewPostForm";
import Log from "../components/Log";

import FriendsHint from "../components/Profil/FriendsHint";
import Trends from "../components/Trends";
import Thread from "../components/Thread";

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
          {uid ? <><NewPostForm /> <Thread /> </> : <Log signin={true} signup={false} />}
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">

            {uid && <><FriendsHint /> <Trends /> </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

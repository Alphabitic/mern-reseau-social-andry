import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "../components/AppContext";
import LeftNav from '../components/LeftNav';
import { isEmpty } from "../components/Utils";
import Card from "../components/Post/Card";
import Profil from "./Profil";

const Trending = () => {
  const uid = useContext(UidContext);
  const trendList = useSelector((state) => state.trendingReducer);

  return (<>
    <div>
      <LeftNav />
      {uid ? (<>
        <div className="main">
          <ul>
            {!isEmpty(trendList[0]) && trendList.map((post) => <Card post={post} key={post._id} />)}
          </ul>
        </div>

      </>) : (
        <Profil />
      )}
    </div>
  </>)

}
export default Trending;

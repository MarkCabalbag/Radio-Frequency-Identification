import GetCard from "../content/RegisterCardsComponents/GetCard";
import HomeCard from "../components/placeholders/HomeCard";
import HomeRationale from "../content/HomeRationale";
import { useRequireDean } from "../hooks/useRequireDean";

function Home() {
  useRequireDean();

  return (
    <div>
      <GetCard
        className="card-rail"
        hideButtons="d-none"
        statusElement={<HomeCard />}
      />
      <HomeRationale />
    </div>
  );
}

export default Home;
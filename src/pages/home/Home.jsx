import Charts from "../../component/charts/Charts";
import "./home.css";
import { userData } from "../../dummydata";
import Featuredinfo from "../../component/featuredinfo/Featuredinfo";
import WidgetSm from "../../component/widgetSm/WidgetSm";
import WidgetLg from "../../component/widgetLg/WidgetLg";


export default function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
       <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
       </div>
      </div>
    </div>
  );
}
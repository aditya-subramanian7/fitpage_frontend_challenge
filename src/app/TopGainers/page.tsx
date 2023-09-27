import ListItem from "../components/ListItem";
import { getTopGainers } from "../page";

export default async function TopGainers() {
  const topGainersData = await getTopGainers();
  return (
    <div className=" flex-col bg-gray-900 max-w-xs lg:max-w-md mx-auto mt-12 px-4 py-4 h-96">

      <div className="h-24 bg-[#1686b0] px-4 py-4">
      <ListItem
        color={topGainersData.color}
        name={topGainersData.name}
        tag={topGainersData.tag}
      />
      </div>
      <h1 className=" text-sm mt-12 text-white">{topGainersData.criteria[0].text}</h1>
    </div>
  );
}

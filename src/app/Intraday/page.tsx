import ListItem from "../components/ListItem";
import { getIntraday, getTopGainers } from "../page";

interface Criteria {
  text: string;
  type: string;
}

export default async function Intraday() {
  const intradayData = await getIntraday();
  return (
    <div className=" flex-col bg-gray-900 max-w-xs lg:max-w-md mx-auto mt-12 px-4 py-4 h-96">

      <div className="h-24 bg-[#1686b0] px-4 py-4 mb-6">
      <ListItem
        color={intradayData.color}
        name={intradayData.name}
        tag={intradayData.tag}
      />
    
    </div>


      {intradayData.criteria.map((criteria: Criteria, index: number) => (
        <h1 className=" text-sm text-white py-2" key={index}>
          {criteria.text}
        </h1>
      ))}
    </div>
  
  );
}

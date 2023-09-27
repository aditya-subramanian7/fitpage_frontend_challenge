import { getRSI } from "@/app/page";
//Check sort issue

export default async function CCIArrayParams() {
  const rsiData = await getRSI();
  const values = rsiData.criteria[1].variable.$2.values;
  const sortedValues = values.slice().sort((a: number, b: number) => a - b);
  return (
    <div className=" flex-col bg-gray-900 max-w-xs lg:max-w-md mx-auto mt-12 px-4 py-4 h-96">

    <ul className="divide-y divide-dotted">
        {sortedValues.map((value: number, index: number) => {
          return <li className="text-white px-4 py-2" key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

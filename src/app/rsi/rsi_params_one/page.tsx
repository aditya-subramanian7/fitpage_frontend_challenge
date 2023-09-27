import { getRSI } from "@/app/page";

export default async function rsiParamsOne() {
  const rsiData = await getRSI();
  const values = rsiData.criteria[0].variable.$1.values.sort();

  return (
    <div className=" flex-col bg-gray-900 max-w-xs lg:max-w-md mx-auto mt-12 px-4 py-4 h-96">

      <ul className="divide-y divide-dotted">
        {values.map((value: number, index: number) => {
          return <li className="text-white py-2 px-4" key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

import { getRSI } from "@/app/page";

export default async function rsiPeriodParams() {
  const rsiData = await getRSI();
  const default_value = rsiData.criteria[2].variable.$4.default_value;

  return (
    <div className="bg-gray-900 max-w-xs lg:max-w-md mx-auto text-white h-96 mt-12">      
    <h1 className="px-8">RSI</h1>
      <h2 className="px-8 py-2">Set Parameters</h2>
      <div className=" flex mt-3 mx-6 justify-between gap-10 bg-white px-4 pb-24 h-12">
        <p className="text-black mt-4">Period</p>
        <input
          className="border border-black px-2 h-6 mt-4 rounded-md w-28 text-black"
          defaultValue={default_value}
        />
      </div>
    </div>
  );
}

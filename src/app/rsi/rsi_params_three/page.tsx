import { getRSI } from "@/app/page";

export default async function rsiParamsThree() {
  const rsiData = await getRSI();
  const values = rsiData.criteria[1].variable.$3.values;

  function customSort(a: number, b: number) {
    const isADecimal = Number.isFinite(a) && a % 1 !== 0;
    const isBDecimal = Number.isFinite(b) && b % 1 !== 0;

    if (isADecimal && !isBDecimal) {
      return -1;
    } else if (!isADecimal && isBDecimal) {
      return 1;
    } else {
      return a - b;
    }
  }

  values.sort(customSort);

  return (
    <div className=" flex-col bg-gray-900 max-w-xs lg:max-w-md mx-auto mt-12 px-4 py-4 h-96">

      <ul className="divide-y divide-dotted">
        {values.map((value: number, index: number) => {
          return <li className="text-white px-4 py-2" key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

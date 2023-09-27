import { getCCI } from "@/app/page";

export default async function CCIArrayParams() {
  const cciData = await getCCI();
  const values = cciData.criteria[0].variable.$2.values;

  return (
    <div className=" flex-col bg-gray-900 max-w-xs lg:max-w-md mx-auto mt-12 px-4 py-4 h-96">

      <ul className="divide-y divide-dotted">
        {values.map((value: number, index: number) => {
          return <li className="text-white py-4" key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

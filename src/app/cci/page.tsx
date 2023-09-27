import ListItem from "../components/ListItem";
import { getCCI } from "../page";

export default async function CCI() {
  const cciData = await getCCI();
  const { text, variable } = cciData.criteria[0];
  const { $1: variable1, $2: variable2 } = variable;

  const replacedText: string = text
    .replace("$1", variable1.default_value)
    .replace("$2", variable2.values[0]);

  const words = replacedText.split(" ");
  const content = words.map((word, index) => {
    if (
      word === variable1.default_value.toString() ||
      word === variable2.values[0].toString()
    ) {
      return (
        <a
          className=" underline text-purple-600"
          key={index}
          href={`${
            word === variable1.default_value.toString()
              ? "/cci/cci_period_params"
              : "/cci/cci_array_params"
          }`}
        >
          ({word}){" "}
        </a>
      );
    } else {
      return <span key={index}>{word} </span>;
    }
  });
  return (
    <div className=" flex-col bg-gray-900 max-w-xs lg:max-w-md mx-auto mt-12 px-4 py-4 h-96">

    <div className="h-24 bg-[#1686b0] px-4 py-4">
      <ListItem color={cciData.color} name={cciData.name} tag={cciData.tag} />

      <div className="mt-16 text-white">
      {content}
      </div>
    </div>
    </div>
  );
}

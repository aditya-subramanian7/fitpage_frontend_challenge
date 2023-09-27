import ListItem from "../components/ListItem";
import { getRSI } from "../page";

export default async function Rsi() {
  const rsiData = await getRSI();
  const { criteria } = rsiData;
  const v1 = criteria[0].variable.$1?.values[0];
  const v2 = criteria[1].variable.$2?.values[0];
  const v3 = criteria[1].variable.$3?.values[0];
  const v4 = criteria[2].variable.$4?.default_value;

  if (v1) {
    criteria[0].text = criteria[0].text.replace("$1", v1.toString());
  } else {
    throw new Error("Empty values");
  }

  if (v2 && v3) {
    criteria[1].text = criteria[1].text
      .replace("$2", v2.toString())
      .replace("$3", v3.toString());
  }

  if (v4) {
    criteria[2].text = criteria[2].text.replace("$4", v4.toString());
  }

  let fullContent: any[] = [];

  criteria.forEach((criteria: any, index: number) => {
    const words = criteria.text.split(" ");
    fullContent.push(
      words.map((word: string, index: number) => {
        if (v1 && v2 && v3 && v4) {
          if (
            word === v1.toString() ||
            word === v2.toString() ||
            word === v3.toString() ||
            word === v4.toString()
          ) {
            return (
              <a
                className=" underline text-purple-600"
                key={index}
                href={`${
                  word === v1.toString()
                    ? "/rsi/rsi_params_one"
                    : word === v2.toString()
                    ? "/rsi/rsi_params_two"
                    : word === v3.toString()
                    ? "/rsi/rsi_params_three"
                    : "/rsi/rsi_period_params"
                }`}
              >
                ({word}){" "}
              </a>
            );
          } else {
            return <span key={index}>{word} </span>;
          }
        }
      })
    );
  });

  return (
     <div className=" flex-col bg-gray-900 max-w-xs lg:max-w-md mx-auto mt-12 px-4 py-4 h-96">

    <div className="h-24 bg-[#1686b0] px-4 py-4">
      <ListItem color={rsiData.color} name={rsiData.name} tag={rsiData.tag} />
      <div className=" flex-col mt-16">
        {fullContent.map((content, index: number) => {
          return (
            <div className=" py-2 text-white" key={index}>
                {content}
              </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

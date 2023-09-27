import ListItem from "../components/ListItem";
import { getOpenHigh } from "../page";

interface Criteria {
  text: string;
  type: string;
  variable: Object;
}

export default async function OpenHigh() {
  const openHighData = await getOpenHigh();
  const val = openHighData.criteria[0].variable.$1.values[0];

  const replacedText = openHighData.criteria[0].text.replace("$1", val);
  const words: string[] = replacedText.split(" ");
  const content = words.map((word, index) => {
    if (word === val.toString()) {
      return (
        <a
          className="underline text-purple-600"
          key={index}
          href={`/openHigh/openHighParams`}
        >
          ({word}){" "}
        </a>
      );
    } else {
      return <span key={index}>{word} </span>;
    }
  });
  // console.log(content);
  return (
    <div className=" flex-col bg-gray-900 max-w-xs lg:max-w-md mx-auto mt-12 px-4 py-4 h-96">

    <div className="h-24 bg-[#1686b0] px-4 py-4 mb-6">
      <ListItem
        color={openHighData.color}
        name={openHighData.name}
        tag={openHighData.tag}
      />
    </div>
    <div className="text-white text-sm">
      {content}
    </div>
    </div>
    
  );
}

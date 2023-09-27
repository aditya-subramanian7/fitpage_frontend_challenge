import ListItem from "./components/ListItem";
// import { topGainersData } from "../../../backend/controllers/getTopGainers.js";

export async function getTopGainers() {
  const apiUrl = "http://localhost:5001/getTopGainers";
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data) {
    throw new Error("Couldnt fetch the value");
  }

  return data;
}

export async function getIntraday() {
  const apiUrl = "http://localhost:5001/getIntraday";
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data) {
    throw new Error("Couldnt fetch the value");
  }

  return data;
}

export async function getOpenHigh() {
  const apiUrl = "http://localhost:5001/getOpenHigh";
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data) {
    throw new Error("Couldnt fetch the value");
  }

  return data;
}

export async function getCCI() {
  const apiUrl = "http://localhost:5001/getCCI";
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data) {
    throw new Error("Couldnt fetch the value");
  }

  return data;
}

export async function getRSI() {
  const apiUrl = "http://localhost:5001/getRSI";
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data) {
    throw new Error("Couldnt fetch the value");
  }

  return data;
}

export default async function Home() {
  const topGainersData = await getTopGainers();
  const intradayData = await getIntraday();
  const openHighData = await getOpenHigh();
  const cciData = await getCCI();
  const rsiData = await getRSI();

  return (
    <div className="bg-gray-900 max-w-xs lg:max-w-lg mx-auto h-96">
  <div className=" mt-12 divide-y divide-dotted">
    <div className="px-8 py-4">
      <ListItem
        name={topGainersData.name}
        tag={topGainersData.tag}
        color={topGainersData.color}
        href={"/TopGainers"}
      />
    </div>

    <div className="px-8  py-4">
      <ListItem
        name={intradayData.name}
        tag={intradayData.tag}
        color={intradayData.color}
        href={"/Intraday"}
      />
    </div>

    <div className="px-8 py-4">
      <ListItem
        name={openHighData.name}
        tag={openHighData.tag}
        color={openHighData.color}
        href={"/openHigh"}
      />
    </div>
    
    <div className="px-8 py-4">
      <ListItem
        name={cciData.name}
        tag={cciData.tag}
        color={cciData.color}
        href="/cci"
      />

  </div>

    <div className="px-8 py-4">
      <ListItem
        name={rsiData.name}
        tag={rsiData.tag}
        color={rsiData.color}
        href="rsi"
      />
    </div>
    </div>
    </div>
  );
}


import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { RecoilRoot } from "recoil";

function App() {

  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <div style={{ padding: "50px" }}>
        <Buttons />
      </div>
      <EventCountRenderer/>
    </div>
  );
}

function EventCountRenderer() {
  const count = useRecoilValue(evenSelector)
  if(count % 2 === 0) {
    return (
      <div>
         Even number
      </div>
    ) 
  } else return null
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        count
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
}
export default App;

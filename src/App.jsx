import { ReactMemo } from "./hooks/Memo/ReactMemo";
import NetflixSeries from "./components/NetflixSeries";

export const App = () => {
  return (
    <>
      <ReactMemo />
      <NetflixSeries />
    </>
  );
};

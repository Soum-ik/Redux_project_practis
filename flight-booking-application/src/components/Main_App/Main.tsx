import FormInputs from "../booking/FormInputs";
import Navbar from "../booking/Navbar";
import Preview from "../booking/Preview";
import CounterComponent from "../cunter/couter";

function Main() {
  return (
    <div>
      <Booking />
      {/* <Counter /> */}
    </div>
  );
}

export default Main;

function Booking() {
  return (
    <div>
      <Navbar />
      <FormInputs />
      <Preview />
    </div>
  );
}

function Counter() {
  return (
    <div>
      <CounterComponent />
    </div>
  );
}

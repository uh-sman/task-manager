import {
  findRenderedDOMComponentWithClass,
  renderIntoDocument,
} from "react-dom/test-utils";

const tasks = [
  {
    id: 1,
    text: "Decorate Room",
    day: "Jun 24",
    reminder: true,
  },
];

const Tasks = () => {
  return <div></div>;
};

export default Tasks;

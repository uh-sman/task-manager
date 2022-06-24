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
  {
    id:2,
    text:'Work from Home',
    day:'Jun 20',
    reminder: false,
  }
  {
    id:3,
    text:'call home',
    day:'Jun 21',
    reminder:true
  }
];

const Tasks = () => {
  return <>
  {tasks.map((tasks) => (<h3 key={task.id}>{tasks}</h3>))}
  </>;
};

export default Tasks;

const heading = React.createElement("h1", {
    id:"title",
    style : {
        color: "blue",
        fontSize: "50px"
    }
}, "React First Lecture");
const heading2 = React.createElement("h1", {
    id:"title",
    style : {
        color: "red",
        fontSize: "50px"
    }
}, "React First Lecture");
const container = React.createElement("div", {id:"container"}, [heading, heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)
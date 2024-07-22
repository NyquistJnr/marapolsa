import Popular from "./Popular";
// import classes from "./Popular.module.css";

const PopularList = (props) => {
  return (
    <>
      <h3 style={{ fontWeight: "bold" }}>{props.name}</h3>
      <hr style={{ border: "1.4px solid" }} />
      {props.data.map((item) => (
        <Popular {...item} key={Math.random()} />
      ))}
    </>
  );
};

export default PopularList;

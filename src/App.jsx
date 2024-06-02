import data from "../data.json";

const App = () => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <>
            <h2 key={index + 1}>{item.name}</h2>
            <img src={item.img} height={200} width={200} alt="item image" />
          </>
        );
      })}
    </div>
  );
};

export default App;

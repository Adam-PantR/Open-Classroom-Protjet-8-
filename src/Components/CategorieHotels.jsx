import "../Styles/App.css";

function CategorieHotels(props) {
  const appartementTags = props.tags;

  return (
    <div className={"categorieContainer"}>
      {appartementTags.map((tag, index) => (
        <div className="categoryBox" key={index}>
          {tag}
        </div>
      ))}
    </div>
  );
}

export default CategorieHotels;

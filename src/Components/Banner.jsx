import "../Styles/App.css";

function Banner(props) {
  return (
    <div className="divBanner">
      <img src={props.src} className="banner" alt="banner" />
      {props.title && <span className="spanBanner">{props.title}</span>}
    </div>
  );
}

export default Banner;

const FooterBar = () => {
  const style = {
    backgroundColor: "black",
  };
  return (
    <div style={style} className="border-top justify-content-around">
      <div className="container justify-content-around">
        <div className="d-inline-block text-white">Myo Thu Kha</div>
        <div className="text-white">myothukha.dev@gmail.com</div>
        <div className="d-inline-block text-white">Myanmar</div>
      </div>
    </div>
  );
};

export default FooterBar;

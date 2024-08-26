type args = { text:string };

const PanelHeader = ({ text }:args) => {
  return (
    <h1 className="text-white text-base lg:text-2xl xl:text-3xl">{text}</h1>
  );
}

export default PanelHeader;
type Schema = {
  isVisible: boolean;
  className?: string;
};

const Schema = ({ isVisible, className = "" }: Schema) => (
  <div className={`${className} ${isVisible ? "" : "hidden"}`}>
    <h2 className="srOnly">Schema</h2>
  </div>
);

export default Schema;

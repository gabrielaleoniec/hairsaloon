type Schema = {
  className?: string;
};

const Schema = ({ className = "" }: Schema) => (
  <div className={`${className}`}>
    <h2 className="srOnly">Schema</h2>
  </div>
);

export default Schema;

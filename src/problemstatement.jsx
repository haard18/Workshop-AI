import PropTypes from 'prop-types';

const ProblemStatement = ({ problem }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-gray-900 text-white max-w-lg mx-auto mt-4">
      <h2 className="text-3xl font-bold mb-4 text-green-500">Problem Statement {problem.ProblemNo}</h2>
      <p className="text-xl mb-2"><span className="font-semibold">Organization Name:</span> {problem["Organization Name"]}</p>
      <p className="text-xl mb-2"><span className="font-semibold">Domain:</span> {problem.Domain}</p>
      <p className="text-xl mb-2"><span className="font-semibold">Theme and Essence of Logo:</span> {problem["Theme and Essence of Logo"]}</p>
      <p className="text-xl"><span className="font-semibold">Extra Details:</span> {problem["Extra Details"]}</p>
    </div>
  );
};

ProblemStatement.propTypes = {
  problem: PropTypes.shape({
    ProblemNo: PropTypes.number.isRequired,
    "Organization Name": PropTypes.string.isRequired,
    Domain: PropTypes.string.isRequired,
    "Theme and Essence of Logo": PropTypes.string.isRequired,
    "Extra Details": PropTypes.string.isRequired,
  }).isRequired,
};

export default ProblemStatement;

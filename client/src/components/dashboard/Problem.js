import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProblem } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Problem = ({ problem, deleteProblem }) => {
  // const problems = problem.map((prob) => (
  //   <tr key={prob._id}>
  //     <td>{prob.name}</td>
  //     <td className="hide-sm">{prob.type}</td>
  //     <td>
  //       {formatDate(prob.from)} - {prob.to ? formatDate(prob.to) : 'Now'}
  //     </td>
  //     <td>
  //       <button
  //         onClick={() => deleteProblem(prob._id)}
  //         className="btn btn-danger"
  //       >
  //         Delete
  //       </button>
  //     </td>
  //   </tr>
  // ));

  return (
    <Fragment>
      <h2 className="my-2">Problem</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Cas</th>
            <th className="hide-sm">Type</th>
            <th className="hide-sm">Time</th>
            <th />
          </tr>
        </thead>
        {/* <tbody>{problems}</tbody> */}
      </table>
    </Fragment>
  );
};

Problem.propTypes = {
  problem: PropTypes.array.isRequired,
  deleteProblem: PropTypes.func.isRequired
};

export default connect(null, { deleteProblem })(Problem);

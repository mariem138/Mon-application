import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteDiseases } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Disease = ({ disease, deleteDiseases }) => {
 // const diseases = disease.map((dis) => (
  //  <tr key={dis._id}>
   //   <td>{dis.diseases}</td>
    //  <td className="hide-sm">{dis.chronicnotChronic}</td>
    //  <td>
     //   {formatDate(dis.from)} - {dis.to ? formatDate(dis.to) : 'Now'}
     // </td>
     // <td>
      // <button
        // onClick={() => deleteDiseases(dis._id)}
        // className="btn btn-danger"
      //>
      // Delete
     // </button>
     // </td>
   // </tr>
 // ));

  return (
    <Fragment>
      <h2 className="my-2">Diseases</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Diseases</th>
            <th className="hide-sm">chronic/notChronic</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        {/*tbody>{diseases}</tbody>*/}
      </table>
    </Fragment>
  );
};

Disease.propTypes = {
  disease: PropTypes.array.isRequired,
  deleteDiseases: PropTypes.func.isRequired
};

export default connect(null, { deleteDiseases })(Disease);

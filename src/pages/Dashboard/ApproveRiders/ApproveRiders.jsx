import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserCheck } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";

import Swal from 'sweetalert2';
const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure()
  const {refetch, data: riders = [] } = useQuery({
    queryKey: ['riders', 'pending'],
    queryFn: async () => {
      const res = await axiosSecure.get('/riders')
      return res.data
    }
  })

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.riderEmail }
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
      .then(res => {
        if (res.data.modifiedCount) {
          refetch()
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Rider status is set to ${status}.`,
            showConfirmButton: false,
            timer: 2000,
          })
        }
      })
}

  const handleApproval = (rider) => {
    updateRiderStatus(rider, 'approved')
  }

  const handleRejection = (rider) => {
  updateRiderStatus(rider, 'rejected')
}

  return (
    <div>
      <h2>rider approve:{riders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, i) => (
              <tr key={rider._id}>
                <th>{i + 1}</th>
                <td>{rider.riderName}</td>
                <td>{rider.riderEmail}</td>
                <td>{rider.riderDistrict}</td>
                <td><p className={` badge badge-outline   ${rider.status === 'approved' ? 'badge-success' : rider.status === 'rejected' ? " badge-error" : 'badge-warning '}`}> {rider.status}</p></td>
                <td>
                  <button onClick={() => handleApproval(rider)} className="btn">
                    <IoMdEye />
                  </button>
                  <button onClick={() => handleApproval(rider)} className="btn">
                    <FaUserCheck />
                  </button>
                  <button onClick={() => handleRejection(rider)} className="btn">
                    <IoPersonRemoveSharp />
                  </button>
                  <button className="btn">
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
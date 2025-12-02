import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';
import Swal from 'sweetalert2';

const AssignDeliveries = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth();
  const { data: parcels = [], refetch, isLoading } = useQuery({
    queryKey: ['parcels', user?.email, 'diver_assigned'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user?.email}&deliveryStatus=driver_assigned`)
      console.log("api Response", res.data)
      return res.data
    }
  })

  const handleDeliveryStatusUpdate = (parcel, status) => {
    
    const statusInfo = {
      deliveryStatus: status,
      riderId: parcel.riderId,
      trackingId: parcel.trackingId
     }
    let message = `parcel status is update with ${status.split('_').join('')}`
    axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then(res => {
        if (res.data.modifiedCount) {
          refetch()
          Swal.fire({
            position: "center",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          })
        }
      })
  }



  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h2 className="text-4xl">Parcels Pending Pickup</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Confirm</th>
              <th>Other Action</th>
            </tr>
          </thead>
          <tbody>
            {
              parcels.map((parcel, i) => (
                <tr key={parcel._id}>
                  <th>{i + 1}</th>
                  <td>{parcel.parcelName}</td>
                  <td>
                    {
                      parcel.deliveryStatus === 'driver_assigned' ? <>
                        <button
                          onClick={() => handleDeliveryStatusUpdate(parcel, 'rider_arriving')}
                          type="button"
                          class="btn btn-primary text-black"
                        >
                          Accept
                        </button>
                        <button
                          type="button"
                          class="btn btn-warning text-black"
                        >
                          Reject
                        </button>
                      </> : <span>Accepted</span>
                    }
                    

                  </td>
                  <td>
                    <button
                      onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_picked_up')}
                      type="button"
                      class="btn btn-primary text-black"
                    >
                      Mark as pickup
                    </button>
                    <button
                      onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_delivered')}
                      type="button"
                      class="btn btn-primary mx-2 text-black"
                    >
                     Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignDeliveries;
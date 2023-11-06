import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hock/axiosSecure";
import { useTable } from "react-table";
import { useMemo } from "react";
import UseAuth from "../../Hock/UseAuth";
import { AiFillDelete } from "react-icons/ai";
import Loading from "../../Component/Loading/Loading";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
const MyFoodRequest = () => {
  const [food, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  console.log("user from manage", user);
  console.log(food);
  const data = useMemo(() => food, [food]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
      .delete(`/request/${id}`)
      .then((response) => {
        setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
        if(response.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting food item: ", error);
      });
        
      }
    });
    
  };

  const columns = useMemo(
    () => [
      {
        Header: "Donator Name",
        accessor: "donatorName",
      },
      {
        Header: "Pickup location",
        accessor: "pickupLocation",
      },
      {
        Header: "Expired Date",
        accessor: "expiredDate",
      },
      {
        Header: "Request Date",
        accessor: "requestDate",
      },
      {
        Header: "Donation Amount",
        accessor: "donationMoney",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Action",
        accessor: "_id",
        Cell: ({ row }) => (
          <div>
            {row.original.status !== "Delivered" ? (
              <button onClick={() => handleDelete(row.original._id)}>
                <AiFillDelete className="text-2xl text-blue-600 hover:text-red-600 mx-1" />
              </button>
            ) : (
              <button disabled>
                <AiFillDelete className="text-2xl text-gray-400 mx-1" />
              </button>
            )}
          </div>
        ),
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/request-foods?email=${user?.email}`).then((res) => {
      setFoods(res.data);
      setLoading(false);
    });
  }, [axiosSecure, user?.email]);
  console.log(food);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Helmet>
        <title>Foodies | My Food Request</title>
      </Helmet>
      <div className="max-w-[100rem] w-full mx-auto  px-4 sm:px-6 lg:px-8 my-10 sm:my-20">
        <div className="overflow-x-auto">
          {food?.length < 1 ? (
            <div className="flex justify-center items-center h-[50vh] font-semibold text-2xl md:text-3xl lg:text-4xl">
              No date find
            </div>
          ) : (
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-200"
            >
              <thead>
                {headerGroups.map((headerGroup, i) => (
                  <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                    {headerGroup.headers.map((column, i) => (
                      <th
                        {...column.getHeaderProps()}
                        key={i}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="divide-y divide-gray-200"
              >
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={i}>
                      {row.cells.map((cell, i) => (
                        <td
                          {...cell.getCellProps()}
                          key={i}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                        >
                          {cell.column.id === "action"
                            ? cell.render("Cell")
                            : cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default MyFoodRequest;

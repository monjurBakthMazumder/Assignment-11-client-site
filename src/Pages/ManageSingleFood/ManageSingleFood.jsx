import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hock/axiosSecure";
import { useTable } from "react-table";
import { useMemo } from "react";
import UseAuth from "../../Hock/UseAuth";
import { useParams } from "react-router-dom";
const ManageSingleFood = () => {
  const params = useParams();
  console.log("useparams", params);
  const [food, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  console.log("user from manage", user);
  console.log(food);
  const data = useMemo(() => food, [food]);
  const handleUpdate = (id) => {
    const updateFood = { status: "Delivered" };
    alert("update");
    axiosSecure
      .put(`/request/${id}`, updateFood)
      .then((response) => {})
      .catch((error) => {
        console.error("Error deleting food item: ", error);
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Requester Name",
        accessor: "requesterName",
      },
      {
        Header: "Requester Image",
        accessor: "requesterImg",
        Cell: ({ row }) => (
          <div>
            <img
              src={row.values.requesterImg}
              alt="Requester Image"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        ),
      },
      {
        Header: "Requester Email",
        accessor: "requesterEmail",
      },
      {
        Header: "Request Date",
        accessor: "requestDate",
      },
      {
        Header: "Status",
        accessor: "_id",
        Cell: ({ row }) => (
          <>
            <div>
              {row.original.status !== "Delivered" ? (
                <button onClick={() => handleDelete(row.original._id)}>
                  <p
                    onClick={() => handleUpdate(row.original._id)}
                    className="px-3 py-1 text-center border border-blue-600 bg-blue-600 text-white hover:bg-white hover:text-blue-600 cursor-pointer"
                  >
                    status
                  </p>
                </button>
              ) : (
                <button disabled>
                  <p
                    onClick={() => handleUpdate(row.original._id)}
                    className="px-3 py-1 text-center border border-blue-600 bg-white text-blue-600"
                  >
                    Delivered
                  </p>
                </button>
              )}
            </div>
          </>
        ),
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  useEffect(() => {
    axiosSecure
      .get(`/manage-single-foods-request/${params?.id}`)
      .then((res) => setFoods(res.data));
  }, [axiosSecure, params?.id, () => handleUpdate]);
  console.log(food);

  return (
    <div className="max-w-[100rem] w-full mx-auto  px-4 sm:px-6 lg:px-8 my-10 sm:my-20">
      <div className="overflow-x-auto">
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
          <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
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
      </div>
    </div>
  );
};

export default ManageSingleFood;

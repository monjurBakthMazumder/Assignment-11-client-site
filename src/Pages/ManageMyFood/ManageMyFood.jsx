import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hock/axiosSecure";
import { useTable } from "react-table";
import { useMemo } from "react";
import UseAuth from "../../Hock/UseAuth";
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const ManageMyFood = () => {
  const [food, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const navigate = useNavigate()
  console.log("user from manage", user);
  console.log(food);
  const data = useMemo(() => food, [food]);
  const handleDelete = (id) => {
    alert('delete')
    axiosSecure
      .delete(`/foods/${id}`)
      .then((response) => {
        setFoods((prevFoods) =>
          prevFoods.filter((food) => food._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting food item: ", error);
      });
  };
  const handleUpdate = (id) => {
    navigate(`/update-food/${id}`)
  };
  const handleManage = (id) => {
    // navigate(`/update-food/${id}`)
    navigate(`/manage-food/${id}`)
  };

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "Food Name",
  //       accessor: "foodName",
  //     },
  //     {
  //       Header: "Quantity",
  //       accessor: "quantity",
  //     },
  //     {
  //       Header: "Expired Date",
  //       accessor: "expiredDate",
  //     },
  //     {
  //       Header: "Status",
  //       accessor: "status",
  //     },
  //     {
  //       Header: "Update",
  //       accessor: "_id",
  //     },
  //     {
  //       Header: "Delete",
  //       accessor: "id", 
  //       Cell: ({ row }) => (
  //         <button onClick={() => handleDelete(row.original._id)}><AiFillDelete className="text-2xl text-blue-600 hover:text-red-600"/></button>
  //       ),
  //     },
  //   ],
  //   []
  // );

  const columns = useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "foodName",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
      {
        Header: "Expired Date",
        accessor: "expiredDate",
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
            <button onClick={() => handleUpdate(row.original._id)}><AiFillEdit className="text-2xl text-blue-600 hover:text-black-900"/></button> {/* Step 2 */}
            <button onClick={() => handleDelete(row.original._id)}><AiFillDelete className="text-2xl text-blue-600 hover:text-red-600 mx-1"/></button>
            <button onClick={() => handleManage(row.original._id)}><AiFillEye className="text-2xl text-blue-600 hover:text-black-900"/></button> {/* Step 2 */}
          </div>
        ),
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  useEffect(() => {
    axiosSecure
      .get(`/manage-foods?email=${user?.email}`)
      .then((res) => setFoods(res.data));
  }, [axiosSecure, user?.email]);
  console.log(food);

  return (
    <>
      <div className="max-w-[100rem] w-full mx-auto  px-4 sm:px-6 lg:px-8 my-10 sm:my-20">
        <div className="overflow-x-auto">
          <table
            {...getTableProps()}
            className="min-w-full divide-y divide-gray-200"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      key={column}
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
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={row}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        key={cell}
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
    </>
  );
};

export default ManageMyFood;

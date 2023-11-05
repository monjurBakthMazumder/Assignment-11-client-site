import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hock/axiosSecure";
import { useTable } from "react-table";
import { useMemo } from "react";
import UseAuth from "../../Hock/UseAuth";

const ManageMyFood = () => {
  const [food, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const {user} = UseAuth()
  console.log("user from manage",user);
  console.log(food);
  const data = useMemo(() => food, [food]);
  const columns = useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "foodName",
      },
      {
        Header: "quantity",
        accessor: "quantity",
      },
      {
        Header: "expiredDate",
        accessor: "expiredDate",
      },
      {
        Header: "status",
        accessor: "status",
      },
      {
        Header: "Action",
        accessor: "",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  useEffect(() => {
    axiosSecure.get(`/manage-foods?email=${user?.email}`).then((res) => setFoods(res.data));
  }, [axiosSecure,user?.email]);
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
                        {" "}
                        {cell.render("Cell")}{" "}
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

import { Iproduct } from "@/interface/product";
import { deleteProduct } from "@/service/product";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);
  const delProduct = async (id: string) => {
    let mess = window.confirm("are you sure delete product?");
    if (mess) {
      try {
        await deleteProduct(id);
        const newList = products.filter(
          (product: Iproduct) => product.id !== id
        );
        setProduct(newList);
        console.log("cc", newList);
        alert("delete successfully");
        navigate(`/`);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("you can choose delete product");
    }
  };
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <>
      <Link to={`/products/add`}>
        <button>add</button>
      </Link>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                STT
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: any, index) => {
              return (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  ></th>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.desc}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">
                    <Link to={`/products/update/${product.id}`}>
                      <button className="px-[20px]">edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        delProduct(product.id);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashBoard;

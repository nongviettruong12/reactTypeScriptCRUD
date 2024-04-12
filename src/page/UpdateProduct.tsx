import { Iproduct } from "@/interface/product";
import { getOneProduct, updateProduct } from "@/service/product";
import { ProductObj } from "@/validation/product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const UpdateProduct = () => {
  const params = useParams()
  const id:any = params.id
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const product = await getOneProduct(id)
      setName(product.name)
      setDesc(product.desc)
      setPrice(product.price)

    })()
  },[])
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const { error } = ProductObj.validate({
        name,
        desc,
        price,
      });
      if (error) {
        setMessage(error.message);
      } 
      else {
        const product:Iproduct = await updateProduct(id,{name,desc,price})
        console.log(product);
        alert("update succsessfuly");
        navigate(`/`);
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
       update

        <h1>{message}</h1>
        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            name
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            onChange={(e:any)=>{setName(e.target.value)}}
            defaultValue={desc}
            
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            des
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            onChange={(e:any)=>{setDesc(e.target.value)}}
            defaultValue={desc}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            price
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            onChange={(e:any)=>{setPrice(e.target.value)}}
            defaultValue={price}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default UpdateProduct;

import { useEffect, useState } from "react"

export default function  Pro (props){

  const [catagorys,setcatagorys]=useState([])
  const [brands,setbrand]=useState([])
     var [products,setproducts]=useState([])

      
      useEffect(()=>{

         fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/api/product/list",{
       
      
        headers:{


          authorization :"Bearer "+props.token,
          "content-type" :'application/json'
        },


      }).then(respones=>respones.json()).then(respdata=>{

            setproducts(respdata.products)


      })





      })


     
     

   return<>
 <h1 className="alert-warning text-center"> hello product component</h1>
 <form>
 <div className=" row mt-3">
<div className="col-6">
<input type="text" className=" form-control" placeholder="enter your product name"></input>

</div>
<div className="col-6">
<input type="files" className=" form-control"></input>

</div>
 </div>
 <div className=" row mt-3">
<div className="col-6">
<input type="number" className=" form-control" placeholder="enter your product price"></input>
</div>
<div className="col-6">
<select className="form-control">
  <option value=""> choose your catagory</option>
  {catagorys.map(ob=><option value={ob._id}>{ob.cate_name}</option>)}
</select>

</div>
 </div>
 <div className=" row mt-3">
<div className="col-6">

 <select className="form-control">
  <option value=" "> choose your brand</option>
  {brands.map(ob=><option value={ob._id}>{ob.brand_name}</option>)}
 </select>
</div>
<div className="col-6">

   <button className="btn btn-success"> save</button>

</div>
 </div>

 </form>
  
  <table className="table table-warning">
 <thead>
<tr>
<th>so no</th>
<th> name</th>
<th> image</th>
<th>price</th>
<th> catagory</th>
<th> brand</th>





</tr>
</thead>
<tbody>
{products.map((ob,i)=><tr>
 <td>{i+1}</td>
 <td>{ob.prod_name}</td>
 <td><img src={"data:image/png;base64, "+ob.prod_image} height="100" width="100"></img></td>
 <td>{ob.prod_price}</td>
 <td>{ob.prod_cate}</td>
 <td>{ob.prod_brand}</td>
 



</tr>



)}


</tbody>

 


  </table>
 
 
 
 
 
 
 </>
 
 }

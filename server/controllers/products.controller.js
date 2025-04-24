let products = [
    { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
    { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
    { id: 3, name: "Sony PlayStation 5", price: 499.99 },
    { id: 4, name: "MacBook Pro 16", price: 2399.99 },
    { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
  ];



  const getAllProducts=(req,res)=>{

    res.status(200).json({products});
    };

//////////////////////////////////
  const getSingleProduct=(req,res)=>{
    const {id}=req.params;
     const match=products.find(item=>item.id===Number(id));

     if(!match){
       return res.status(404).json({message:"Product not found."})
     }

    res.status(200).json(match);
    };

//////////////////////////////////////////
 const creat=(req,res)=>{
    const{name,price}=req.body
    const newProduct={
  id:products.length + 1,
  name,
  price,
    }
    products.push(newProduct);
  
      res.status(201).json({message:"Product added."});
      }

/////////////////////////////////
 const update=(req,res)=>{


    const{id}=req.params;
     const match=products.find(pro=>pro.id===Number(id));

          if (!match) {
            return  res.status(404).json({message:"Id not found."})
          }

     const updatedProducts=  products.map(product=>{
       if(product.id===Number(id)){

      return{

         ...product,
         ...req.body

        }
        
       }
        
       return product
     })
     products=updatedProducts;

     res.status(200).json({message:"Products updated."});
    };
/////////////////////////////////////
 const deleting=(req,res)=>{
    const {id}=req.params;
    const match=products.find(pro=>pro.id===Number(id));

    if (!match) {
      return  res.status(404).json({message:"Id not found."})
    }

 const newData=products.filter(product=>product.id !== Number(id));
 products=newData;
 res.status(200).json({message:"Product deleted."});
 };

module.exports={getAllProducts,getSingleProduct,creat,update,deleting};
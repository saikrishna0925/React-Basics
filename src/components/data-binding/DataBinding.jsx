export function DataBinding(){

  var products={
    Name: "LG",
    Price: "50000",
    Stock: true
  }
  var categories =["Electronics", "Footware", "Fashion"]
  var items =["Electronics", "Footware", "Fashion"]

  return(
    <div className="container-fluid">
      <h3>Products</h3>
      <dl>
        <dt>Name</dt>
        <dd>{products.Name}</dd>  
        <dd><input type="text" value={products.Name} /> </dd>
        <dt>Price</dt>
        <dd>{products.Price}</dd>
        <dt>Stock</dt>
        <dd>{(products.Stock===true)?"Available":"Out of Stock"}</dd>
      </dl>
    <ol>
      {
        categories.map(category=>
          <li>{category}</li>
          )
      }
    </ol>
    
    <select name="" id="">{

      items.map(Items=>
      <option value="">{Items}</option>
      )
}
    </select>
    </div>
  )
}
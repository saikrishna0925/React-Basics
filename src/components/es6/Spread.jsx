export function Spread(){
  const details1 = ["sai","Hyd","React"];
  const details2 = ["krishna","Blr","Java"];
  const Year =[...details1,...details2];

  return(
    <div>
      <h3>{Year}</h3>
    </div>
  )
}
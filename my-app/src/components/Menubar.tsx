type menuProp={
  setMenu:any
}


const Menubar = (props:menuProp) => {
  return (
    <div className="flex shadow-sm h-10 p-2 cursor-pointer">
        <h1 onClick={()=> props?.setMenu("Shirt")} className="ml-48">Shirt</h1>
        <h1 onClick={()=> props?.setMenu("Jacket")} className="ml-5">Jacket</h1>
        <h1 onClick={()=> props?.setMenu("Mobile phones")} className="ml-5">Mobile phones</h1>
        <h1 onClick={()=> props?.setMenu("House")} className="ml-5"> House</h1>
        <h1 onClick={()=> props?.setMenu("Scooters")} className="ml-5">Scooters</h1>
        <h1 onClick={()=> props?.setMenu("Bike")} className="ml-5">Bike</h1>
        <h1 onClick={()=> props?.setMenu("Apartment")} className="ml-5">Apartment</h1>
      
    </div>
  )
}

export default Menubar

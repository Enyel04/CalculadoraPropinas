import { OrderItem } from "../types"

type OrderContentsProps={
    order:OrderItem[]
}

export default function OrderContents( {order} : OrderContentsProps) {
  return (
    <div>
        <h2 className=' font-black  text-4xl text-center'> Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.length===0 ? 
                <p className=" text-center"> La Orden esta vacía</p>
            :  (
                order.map(item=>(
                    <div key={item.id}>
                        <p>
                            {item.name}
                        </p>
                    </div>
                ))  //El operador ternario evalua si hay elemento o no, al ver que hay los va agregando
            )
            }

        </div>
    </div>
  )
}

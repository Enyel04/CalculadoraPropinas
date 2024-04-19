import { useMemo } from 'react'

import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalProps={
  order:OrderItem[]
}

export default function OrderTotals( {order}:OrderTotalProps) {

  const subTotalAmmount = useMemo(() =>order.reduce((total,item)=>total + 
  (item.cantidad *item.price),0),[order])
  return (
  <>
    
    <div className=' space-y-3'>
        <h2 className=' font-black  text-2xl'> Totales y Propinas:</h2>
        <p>Subtotal a pagar:
            <span className=' font-bold'> {formatCurrency(subTotalAmmount)}</span>
        </p>

        <p>Propina:
            <span className=' font-bold'> $0</span>
        </p>

        <p>Total a Pagar:
            <span className=' font-bold'> $0</span>
        </p>

    </div>

    <button></button>
    
  </>
  )
}
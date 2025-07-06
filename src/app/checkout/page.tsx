'use client'
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { getCartItems } from '../actions/actions'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { ChevronRight } from 'lucide-react'
import Swal from 'sweetalert2'
import { client } from '@/sanity/lib/client'

const Page = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [discount, setDiscount] = useState<number>(0)
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
  })

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  })

  useEffect(() => {
    setCartItems(getCartItems())
    const appliedDiscount = localStorage.getItem('appliedDiscount')
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount))
    }
  }, [])

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.stock,
    0
  )

  const total = Number((subTotal - discount).toFixed(2))

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    })
  }

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    }
    setFormErrors(errors)
    return Object.values(errors).every((error) => !error)
  }

  const handlePlaceOrder = async () => {
    const orderData = {
      _type : 'order',
      firstName : formValues.firstName,
      lastName : formValues.lastName,
      email : formValues.email,
      phone : formValues.phone,
      address : formValues.address,
      zipCode : formValues.zipCode,
      city : formValues.city,
      cartItems : cartItems.map((item) => ({
        _type : 'reference',
        _ref : item._id
      })),
      total : total,
      discount : discount,
      orderDate : new Date().toISOString
    }

    try {
      await client.create(orderData)
      localStorage.removeItem('appliedDiscount')
    } 
    catch(error){
      console.error("error creating order", error)
    }
    if (validateForm()) {
      localStorage.removeItem('appliedDiscount')
    Swal.fire("Success", "Order placed successfully!", "success")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top Nav */}
        <nav className="mb-6 text-sm flex items-center">
          <Link href="/cart" className="">
            Cart
          </Link>{' '}
          <ChevronRight className='text-slate-500'/>
           <span className="text-gray-700">Checkout</span>
        </nav>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT: Cart Items */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-4 border p-4 rounded-md bg-white shadow-sm"
                  >
                    <div className="w-24 h-24">
                      {item.image && (
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full rounded"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.stock}
                      </p>
                      <p className="font-medium">
                        ${(item.price * item.stock).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="mt-4 border-t pt-4">
                  <p className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subTotal.toFixed(2)}</span>
                  </p>
                  <p className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>− ${discount.toFixed(2)}</span>
                  </p>
                  <p className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total}</span>
                  </p>
                </div>
              </div>
            ) : (
              <p>No items in the cart</p>
            )}
          </div>

          {/* RIGHT: Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Shipping Info</h2>
            <div className="space-y-4">
              {Object.entries(formValues).map(([key, value]) => (
                <div key={key}>
                  <input
                    id={key}
                    type="text"
                    placeholder={key.replace(/([A-Z])/g, ' $1')}
                    value={value}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded ${
                      formErrors[key as keyof typeof formErrors]
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                  />
                  {formErrors[key as keyof typeof formErrors] && (
                    <p className="text-red-500 text-sm mt-1">
                      This field is required.
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-6 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

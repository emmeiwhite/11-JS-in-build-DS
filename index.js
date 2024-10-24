/* ---
const cart = new Map()

cart.set('product1', { id: 'product1', name: 'samsung', price: 399, quantity: 1 })
cart.set('product2', { id: 'product2', name: 'iphone', price: 899, quantity: 1 })
cart.set('product3', { id: 'product3', name: 'vivo', price: 299, quantity: 1 })

--- */
// console.log(cart)
// console.log(cart.get('product3'))

/**  ---
console.log('before delete:')
console.log(cart.size)
cart.delete('product3')
console.log('after delete')
console.log(cart.size)
 --- */

/* ---
console.log(cart.has('product3'))
cart.delete('product2')
console.log(cart.has('product2'))
--- */

/** Iterating over the Map using for-of */

/* ---
// we are de-structuring right away {name, price, quantity} here
for (let [key, { name, price, quantity }] of cart) {
  console.log(key.toUpperCase())
  console.log('============================')
  console.log(`name: ${name}`)
  console.log(`price: ${price}`)
  console.log(`quantity: ${quantity}`)
}

---*/

/** Converting Array to Map */
const items = [
  { id: 1, name: 'first', price: 10 },
  { id: 2, name: 'second', price: 20 }
]

const cartItems = items.map(item => [item.id, item])
console.log(cartItems)

// A) We receive the following output:

// prints:
// [
//   [1, { id: 1, name: 'first', price: 10 }],
//   [2, { id: 2, name: 'second', price: 20 }],
// ];

// B) We will pass the cartItems to the Map() constructor

// Create a new Map instance
const cart = new Map(cartItems)
console.log(cart)

// To iterate we'll need to convert back into Array format from the Map instance

const cartArray = Array.from(cart.entries())
console.log(cartArray)

const cart = new Map()

cart.set('product1', { id: 'product1', name: 'samsung', price: 399, quantity: 1 })
cart.set('product2', { id: 'product2', name: 'iphone', price: 899, quantity: 1 })
cart.set('product3', { id: 'product3', name: 'vivo', price: 299, quantity: 1 })
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

// we are de-structuring right away {name, price, quantity} here
for (let [key, { name, price, quantity }] of cart) {
  console.log(key.toUpperCase())
  console.log('============================')
  console.log(`name: ${name}`)
  console.log(`price: ${price}`)
  console.log(`quantity: ${quantity}`)
}

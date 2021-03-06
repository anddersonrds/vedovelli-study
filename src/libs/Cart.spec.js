import Cart from './Cart'

describe('Cart', () => {
  let cart
  let product = {
    title: 'Hunter x Hunter - The Final',
    price: 35388
  }

  beforeEach(() => {
    cart = new Cart()
  })

  it('should return 0 when getTotal() is executed in newly create instace', () => {

    expect(cart.getTotal()).toEqual(0)
  });

  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product,
      quantity: 2
    }

    cart.add(item)

    expect(cart.getTotal()).toEqual(70776)
  });

  it('should ensure no more than on product exists at a line', () => {
    cart.add({
      product,
      quantity: 2
    })

    cart.add({
      product,
      quantity: 1
    })

    expect(cart.getTotal()).toEqual(35388)
  });
});

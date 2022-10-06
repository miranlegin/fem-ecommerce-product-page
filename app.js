const app = Vue.createApp({
  data() {
    return {
      // for showing/hiding cart
      showCart: false,
      priceFull: 250,
      discount: 50,
      quantity: 0,
      cartItems: 0,
      amountTotal: 0,
      image: './images/image-product-1.jpg',
      productName: 'Fall Limited Edition Sneakers',
      gallery: [
        {
          id: 1,
          thumb: './images/image-product-1-thumbnail.jpg',
          src: './images/image-product-1.jpg',
        },
        {
          id: 2,
          thumb: './images/image-product-2-thumbnail.jpg',
          src: './images/image-product-2.jpg',
        },
        {
          id: 3,
          thumb: './images/image-product-3-thumbnail.jpg',
          src: './images/image-product-3.jpg',
        },
        {
          id: 4,
          thumb: './images/image-product-4-thumbnail.jpg',
          src: './images/image-product-4.jpg',
        },
      ],
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity < 1) return;
      this.quantity--;
    },
    addToCart() {
      if (this.quantity < 1) return;
      this.cartItems += this.quantity;
      this.quantity = 0;
    },
    removeFromCart() {
      this.cartItems = 0;
    },
    updateImage(clickedImage) {
      this.image = clickedImage;
    },
  },
  computed: {
    priceFullString() {
      return `$${this.priceFull.toFixed(2)}`;
    },
    discountString() {
      return `${this.discount}%`;
    },
    discountPrice() {
      const val = ((100 - this.discount) / 100) * this.priceFull;
      return `${val}`;
    },
    discountPriceString() {
      const val = ((100 - this.discount) / 100) * this.priceFull;
      return `$${val.toFixed(2)}`;
    },
    calculateTotal() {
      this.amountTotal = this.discountPrice * this.cartItems;
      return `$${this.amountTotal.toFixed(2)}`;
    },
  },
});

const mountedApp = app.mount('#app');

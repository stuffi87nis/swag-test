export {
    dropDownMenuElements,
    menuForSortingitems, 
    inventoryElements, 
    addToCartButton, 
    cartLinkElement, 
    removeButton,
    cartElements,
    checkOutElements,
    checkOutErrorMessages
    }


const dropDownMenuElements = {
    openDropDownMenu : '.bm-burger-button',
    allItemsLink : '#about_sidebar_link',
    aboutLink : '#about_sidebar_link',
    logOutLink : '#logout_sidebar_link',
    resetAppStateLink : '#reset_sidebar_link',
    buttonToCloseDropDownMenu : '.bm-cross-button'
}

const menuForSortingitems = {
    linkForSortingItems : '[data-test="product_sort_container"]'
}

const inventoryElements = {
    containerForItems : '.inventory_list',
    itemsFromContainer : '.inventory_item',
    imgLink : '#item_4_img_link',
    imageDetail : '.inventory_details_img',
    inventoryDetailContainer : '.inventory_details_desc_container'
} 

const addToCartButton = {
    sauceLabBackPackAddButton : '[data-test="add-to-cart-sauce-labs-backpack"]',
    sauceLabBikeLightAddButton : '[data-test="add-to-cart-sauce-labs-bike-light"]',
    sauceBoltTShirtAddButton : '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
    sauceLabsFleeJacketAddButton : '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
    sauceLabsOnesieAddButton : '[data-test="add-to-cart-sauce-labs-onesie"]',
    sauceRedTshirt : '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
}


const cartLinkElement = {
    cartLink : '.shopping_cart_link',
    numberOfItemsLink : '.shopping_cart_badge'
}

const removeButton = {
    sauceLabBackPackRemoveButton : '[data-test="remove-sauce-labs-backpack"]',
    sauceLabBikeLightRemoveButton : '[data-test="remove-sauce-labs-bike-light"]',
    sauceBoltTShirtRemoveButton : '[data-test="remove-sauce-labs-bolt-t-shirt"]',
    sauceLabsFleeJacketRemoveButton : '[data-test="remove-sauce-labs-fleece-jacket"]',
    sauceLabsOnesieRemoveButton : '[data-test="remove-sauce-labs-onesie"]',
    sauceRedTshirtRemoveButton : '[data-test="remove-test.allthethings()-t-shirt-(red)"]'
}

const cartElements = {
    itemsInCartList : '.cart_list',
    cartItem : '.cart_item',
    infroAboutItem : 'div > .cart_item_label'
}

const checkOutElements = {
    checkOutButton : '[data-test="checkout"]',
    fristNameCheckOut : '[data-test="firstName"]',
    lastNameCheckOut : '[data-test="lastName"]',
    zipCodeCheckout : '[data-test="postalCode"]',
    continueCheckOutButton : '[data-test="continue"]',
    finishCheckOutButton : '[data-test="finish"]',
    backToHomeCheckoutButton : '[data-test="back-to-products"]'
}

const checkOutErrorMessages = {
    errorMessageCheckOut : '[data-test="error"]'
}
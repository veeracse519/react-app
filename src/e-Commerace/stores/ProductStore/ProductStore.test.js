import React from "react";

import ProductService from "../../services/ProductServices/productService";
import ProductStore from "./productStore";
import getUserResponse from "../../fixtures/getUserResponse.json";
describe("Product Store Test:", () => {
  let order = "DESCENDING";
  let productAPI;
  let productStore;
  let productList = [];
  beforeEach(() => {
    productAPI = new ProductService();
    productStore = new ProductStore(productAPI);
  });
  it("Sorting dessecending order test case:", () => {
    productStore.productList = [getUserResponse[0], getUserResponse[1]];
    // console.log(productStore.productList)

    productStore.onChangeSortBy(order);
    expect(productStore.sortBy).toBe(order);
    expect(productStore.sortedAndFilteredProducts).toStrictEqual([
      getUserResponse[1],
      getUserResponse[0],
    ]);
    // productStore.sortedAndFilteredProducts
  });
  it("Sorting asseceding order test case:", () => {
    order = "ASCENDING";
    productStore.productList = [getUserResponse[1], getUserResponse[0]];
    productStore.onChangeSortBy(order);
    expect(productStore.sortBy).toBe(order);
    expect(productStore.sortedAndFilteredProducts).toEqual([
      getUserResponse[0],
      getUserResponse[1],
    ]);
    // productStore.sortedAndFilteredProduct
  });
  it("Sorting Size filter and Price Order", () => {
    let size = ["XS"];
    let order = ["ASCENDING"];
    productStore.productList = [getUserResponse];
    productStore.onChangeSortBy(order);
    productStore.onSelectSize(size);
  });
});

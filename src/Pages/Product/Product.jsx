import React from "react";
import "./Product.css";
import { Footer } from "../../Components/Footer/Footer";
import ProductCard from "./ProductCard";
import Axios from "axios";
import { API_URL } from "../../Supports/Constants/UrlAPI";

class Product extends React.Component {
  state = {
    productList: [],
    filteredProductList: [],
    page: 1,
    maxPage: 0,
    itemPerPage: 9,
    searchProductName: "",
    searchCategory: "",
    sortBy: "",
  };

  fetchProducts = () => {
    Axios.get(API_URL + "/products").then((result) => {
      // alert("berhasil");
      this.setState({
        productList: result.data,
        maxPage: Math.ceil(result.data.length / this.state.itemPerPage),
        filteredProductList: result.data,
      });
    });
    // .catch(() => {
    //   alert("Terjadi kesalahan di server");
    // });
  };

  renderProducts = () => {
    const beginningIndex = (this.state.page - 1) * this.state.itemPerPage;
    let rawData = [...this.state.filteredProductList];

    const compareString = (a, b) => {
      if (a.Name < b.Name) {
        return -1;
      }

      if (a.Name > b.Name) {
        return 1;
      }

      return 0;
    };

    switch (this.state.sortBy) {
      case "lowPrice":
        rawData.sort((a, b) => a.Price - b.Price);
        break;
      case "highPrice":
        rawData.sort((a, b) => b.Price - a.Price);
        break;
      case "az":
        rawData.sort(compareString);
        break;
      case "za":
        rawData.sort((a, b) => compareString(b, a));
        break;
      default:
        rawData = [...this.state.filteredProductList];
        break;
    }

    const currentData = rawData.slice(
      beginningIndex,
      beginningIndex + this.state.itemPerPage
    );
    return currentData.map((val) => {
      return <ProductCard productData={val} />;
    });
  };

  nextPageHandler = () => {
    if (this.state.page < this.state.maxPage) {
      this.setState({ page: this.state.page + 1 });
    }
  };
  prevPageHandler = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  searchInputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  searchBtnHandler = () => {
    const filteredProductList = this.state.productList.filter((val) => {
      return (
        val.Name.toLowerCase().includes(
          this.state.searchProductName.toLowerCase()
        ) &&
        val.Category_ID.toLowerCase().includes(
          this.state.searchCategory.toLowerCase()
        )
      );
    });
    this.setState({
      filteredProductList,
      maxPage: Math.ceil(filteredProductList.length / this.state.itemPerPage),
      page: 1,
    });
  };

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <>
        <div className="product-page-container container mt-5">
          <div className="row">
            <div className="col-3 product-filter-container">
              <div className="card">
                <div className="card-header">
                  <strong>Filter Produk</strong>
                </div>
                <div className="card-body">
                  <label htmlFor="searchProductName">Nama Produk</label>
                  <input
                    onChange={this.searchInputHandler}
                    name="searchProductName"
                    type="text"
                    className="form-control mb-3"
                  />
                  <label htmlFor="searchCategory">Kategori Produk</label>
                  <select
                    onChange={this.searchInputHandler}
                    name="searchCategory"
                    className="form-control form-select"
                  >
                    <option value="">Semua</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Kapsul">Kapsul</option>
                    <option value="Sirup">Sirup</option>
                    <option value="Obat tetes">Obat Tetes</option>
                    <option value="Salep">Salep</option>
                    <option value="Serbuk">Serbuk</option>
                  </select>
                  <button
                    onClick={this.searchBtnHandler}
                    className=" btn btn-primary mt-3 product-search-button"
                  >
                    Cari Produk
                  </button>
                </div>
              </div>
              <div className="card mt-4">
                <div className="card-header">
                  <strong>Urutkan Produk</strong>
                </div>
                <div className="card-body">
                  <label htmlFor="sortBy">Urut Berdasarkan</label>
                  <select
                    onChange={this.searchInputHandler}
                    name="sortBy"
                    className="form-control form-select"
                  >
                    <option value="">Urutan</option>
                    <option value="lowPrice">Harga Terendah</option>
                    <option value="highPrice">Harga Tertinggi</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                  </select>
                </div>
              </div>
              <div className="mt-3 ">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <button
                    disabled={this.state.page === 1}
                    onClick={this.prevPageHandler}
                    className="btn btn-dark "
                  >
                    {"<"}
                  </button>
                  <div className="text-center">
                    {this.state.page} of {this.state.maxPage}
                  </div>
                  <button
                    disabled={this.state.page === this.state.maxPage}
                    onClick={this.nextPageHandler}
                    className="btn btn-dark"
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="d-flex flex-wrap flex-row">
                {/* <ProductCard /> */}
                {/* //////// render products here */}
                {this.renderProducts()}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Product;

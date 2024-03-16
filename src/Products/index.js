import { Component } from "react"
import {Audio} from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import ProductCard from "../ProductCard/index"


import "./index.css"

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProgress: 'IN_PROGRESS',
  }

const categoryOptions = [
    {
        name : 'Category',
        optionId:''
    },
    {
        name:'Electronics',
        optionId :"electronics"
    },
    {
        name:"Jewelery",
        optionId:"jewelery"
    },
    {
        name:"Men's Clothing",
        optionId:"men's clothing"
    },
    {
        name:"Women's Clothing",
        optionId:"women's clothing"
    }
]

class Products extends Component{
    state = {
        productsList:[],
        searchInput:'',
        apiStatus: apiStatusConstants.initial,
        activeOptionId:''
    }

    componentDidMount(){
        this.getProducts()
    }

    getProducts = async () => {
        this.setState({apiStatus:apiStatusConstants.inProgress})
        const {activeOptionId} = this.state;
        const apiUrl = activeOptionId? `https://fakestoreapi.com/products/category/${activeOptionId}`:"https://fakestoreapi.com/products"
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
        this.setState({
            productsList: [...data],apiStatus:apiStatusConstants.success
        });
    };

      renderLoader = () => (
        <div className="products-loader-container" data-testid="loader">
          <Audio type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div> // rendering the loader untill the api response came `
      )



    notResultFound = ()=>(
        <>
             <div className="no-products-view">
                <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
                className="no-products-img"
                alt="no products"
                />
                <h1 className="no-products-heading">No Products Found</h1>
                <p className="no-products-description">
                We could not find any products. Try other filters.
                </p>
            </div>
        </>
    )

    filterApply = () => {
        const { productsList, searchInput } = this.state;
        // console.log(productsList)
        const filteredProduct = productsList.filter((product) =>
          product.title.toLowerCase().includes(searchInput.toLowerCase())
        ); // filter the products based on the search results in input filed 
        return filteredProduct
      };

    renderProductCard = () =>{
        const fitlers = this.filterApply()
        if (fitlers.length===0){
            return this.notResultFound() // if no search result exists then rendering the not found route
        }
        return (
            <div>
                <ul className="products-container">
                    {fitlers.map(product => (
                    <ProductCard productData={product} key={product.id} />
                ))}
                </ul>
            </div>
        )
    }

    changeActvieOptionId = (event)=>{
        this.setState({activeOptionId:event.target.value},this.getProducts) // updating the category and calling the api by using getProucts function
    }

    changeProductsBySearch = (event) => {
        this.setState({ searchInput :event.target.value}); // updating the search input by using the setState method
      };

    renderFilters = ()=>{
        const {searchInput,activeOptionId} =  this.state
        return (
            <div className="filter-container">
                
                <select className="drop-down" value={activeOptionId} onChange={this.changeActvieOptionId} >
                    {categoryOptions.map(optionItem=>(
                        <option key = {optionItem.optionId}  value={optionItem.optionId} >{optionItem.name}</option>
                    ))}
                        
                </select>
                
                <div className="search-input-container">
                    <input
                    type = "search"
                    placeholder="Search"
                    className="search-input"
                    value={searchInput}
                    onChange={this.changeProductsBySearch}
                    />
                    <BsSearch className="search-icon" />
                </div>
            </div>

        )
    }

    render(){
        const { apiStatus ,activeOptionId } = this.state
        console.log(activeOptionId)
        return (
            <div>
                 {this.renderFilters()}
                 {apiStatus === "SUCCESS" ? this.renderProductCard() : (
                    apiStatus === "IN_PROGRESS" ? this.renderLoader() : null
                )} 
            </div>
        )
    }
}
export default Products





  

import React from 'react';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Items from './Components/Items';
import Categories from './Components/Categories';
import ShowFullItem from './Components/ShowFullItem';



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [

        {
          id: 1,
          title: 'Стул',
          img: 'foto1.jpg',
          desc: 'Материал: массив дерева, ткань: алькантара, серия: home-stile',
          category: 'Кухня',
          price: '49.99'
        },

        {
          id: 2,
          title: 'Кровать',
          img: 'foto2.jpg',
          desc: 'Материал: массив дерева, ткань: алькантара, серия: home-hit',
          category: 'Детская',
          price: '69.99'
        },

        {
          id: 3,
          title: 'Кресло',
          img: 'foto3.jpg',
          desc: 'Материал: массив дерева, ткань: алькантара, серия: home-modern',
          category: 'Кухня',
          price: '85.59'
        },

        {
          id: 4,
          title: 'Торшер',
          img: 'foto4.jpg',
          desc: 'Материал: металл, цвет: чёрный, серия: home-modern',
          category: 'Спальня',
          price: '105.99'
        },

        {
          id: 5,
          title: 'Диван',
          img: 'foto5.jpg',
          desc: 'Материал: массив дерева, ткань: алькантара, мест: 2, серия: home-stile',
          category: 'Зал',
          price: '67.95'
        },

        {
          id: 6,
          title: 'Стол',
          img: 'foto6.jpg',
          desc: 'Материал: массив дерева, ткань: алькантара, серия: home-hit',
          category: 'Кухня',
          price: '205.19'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.shooseCategory = this.shooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories shooseCategory={this.shooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}

        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})    
  }

  shooseCategory(category){
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })

    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }

}

export default App;

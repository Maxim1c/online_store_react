import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },

                {
                    key: 'Кухня',
                    name: 'Кухня'
                },

                {
                    key: 'Детская',
                    name: 'Детская'
                },

                {
                    key: 'Спальня',
                    name: 'Спальня'
                },

                {
                    key: 'Зал',
                    name: 'Зал'
                },
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div rey={el.key} onClick={() => this.props.shooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories

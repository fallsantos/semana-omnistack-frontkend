import React, { Component } from 'react'

import './New.css'

import  api from '../services/api'

class New extends Component{

    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: ''
    }

    handleChange = e => {// arrow functions acessam o valor do this*.
        this.setState({ [e.target.name]: e.target.value  })
    }

    handleImageChange= e => {// O input de imagem ven no formato de array.
        this.setState({ image: e.target.files[0] })
    }

    handleSubmit = async e => {
        e.preventDefault()// Impede o comportamento padrão do submit de atualizar a página ou redirecionar opara outra página.
        
        //console.log(this.state)

        //-------------- Enviar arquivos no formato FormData ----------
        const data = new FormData()

        data.append('image', this.state.image)
        data.append('author', this.state.author)
        data.append('place', this.state.place)
        data.append('description', this.state.description)
        data.append('hashtags', this.state.hashtags)
        //-------------------------------------------------------------

        await api.post('posts', data) 

        this.props.history.push('/')
    }

    render(){
        return(
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input 
                    type="file"
                    name=" "
                    id="" 
                    onChange={this.handleImageChange}/>

                <input 
                    type="text" 
                    name="author"
                    placeholder="Autor" 
                    id=""
                    value={this.state.author}
                    onChange={this.handleChange}/>

                <input 
                    type="text" 
                    name="place"
                    placeholder="Local" 
                    id=""
                    value={this.state.place}
                    onChange={this.handleChange}/>

                <input 
                    type="text" 
                    name="description"
                    placeholder="Descrição" 
                    id=""
                    value={this.state.description}
                    onChange={this.handleChange}/>

                <input 
                    type="text" 
                    name="hashtags"
                    placeholder="Hashtags" 
                    id=""
                    
                    value={this.state.hashtags}
                    onChange={this.handleChange}/> 

                    <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default New
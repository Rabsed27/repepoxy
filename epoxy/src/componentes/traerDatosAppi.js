import React from 'react'


class traerDatosAppi extends React.Component {
        state = {
            data:[]
    }
async componentDidMount(){
    await this.buscaproductos()

}
    buscaproductos = async () => {
        let res = await fetch('http://localhost:8000/api/productos/all');
        let data = await res.json();

        console.log(data)
    }

    // render()

    // {
    // return(this.data)
    // }

}

export default traerDatosAppi
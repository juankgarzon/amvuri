import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getFichas(){
    try{
        const response = await axios({
            url: `${baseUrl}/fichas`,
            method: "GET",
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function updateFichas(ficha :any, datosNuevo :any){
    try{
        const response = await axios({
            url: `${baseUrl}/fichas/${ficha}`,
            method: "PUT",
            data: datosNuevo
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

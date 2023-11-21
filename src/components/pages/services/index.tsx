import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

interface FichasData {
    idficha: string;
    fecha: string;
    hora: string;
    departamento: string;
    ciudad: string;
    barrio: string;
    direccion: string;
    coord_este: string;
    coord_noorte: string;
    coord_cota: string;
    responsable: string;
  }

 interface ImagenData {
    idFicha: string;
    imagen: string;
 } 

export async function getFichas(){
    try{
        const response = await axios({
            url: `${baseUrl}/fichas`,
            method: "GET",
        })
        return response;
    }
    catch (e) {
        console.log(e)
    }
}

export async function getImagenes(fichaId: any){
    try{
        const response = await axios({
            url: `${baseUrl}/imagenes/${fichaId}`,
            method: "GET",
        })
        return response;
    }
    catch (e) {
        console.log(e)
    }
}

export async function saveFichas(fichasData: FichasData){
    const formData = new FormData();
    formData.append("idFicha", fichasData.idficha )
    formData.append("fecha", fichasData.fecha )
    formData.append("hora", fichasData.hora )
    formData.append("departamento", fichasData.departamento )
    formData.append("ciudad", fichasData.ciudad )
    formData.append("barrio", fichasData.barrio )
    formData.append("direccion", fichasData.direccion )
    formData.append("coord_este", fichasData.coord_este )
    formData.append("coord_noorte", fichasData.coord_noorte )
    formData.append("coord_cota", fichasData.coord_cota )
    formData.append("responsable", fichasData.responsable )
    
    try{
        const response = await axios({
            url: `${baseUrl}/fichas`,
            method: "POST",
            data: formData
        })
        return response
    }
    catch(e){
        console.log(e);
    }
}

export async function saveImagen(fichaId: any, imagenData: ImagenData){
        
    console.log('Edy', fichaId, imagenData, imagenData.imagen);

    const formData = new FormData();
    formData.append("idFicha", imagenData.idFicha )
    formData.append("imagen", imagenData.imagen )

    console.log('Objeto', formData.values());

    try{
        console.log('Edy 2', fichaId, imagenData);
        const response = await axios({
            url: `${baseUrl}/imagenes/${fichaId}`,
            method: "POST",
            data: formData
        })
        return response
    }
    catch(e){
        console.log(e);
    }
}

export async function getFichaById(fichaId: any) {
   
    try{
        const response = await axios({
            url: `${baseUrl}/fichas/${fichaId}`,
            method: "GET",
        })
     
        return response;
    }
    catch (e) {
        console.log(e);
    }
}

export async function updateFichas(ficha :any, datosNuevo :any){
    try{
        console.log(ficha);
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

export async function deleteFichas(ficha: any) {
    try{
        const response = await axios({
            url: `${baseUrl}/fichas/${ficha}`,
            method: "DELETE"
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}
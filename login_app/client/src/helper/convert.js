import { resolveTo } from "@remix-run/router";

/**image auto base64 */
export default function convertToBase64(file){
    return new Promise ((resolve,reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload= () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = (error) =>{
            reject(error)
        }
    })
}
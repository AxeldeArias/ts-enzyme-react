export const fileUpload = async (file: File) => {
    const cloudUrl = "https://api.cloudinary.com/v1_1/dpjphorzs/image/upload"
    const formData = new FormData()
    formData.append("upload_preset", "react-journal");
    formData.append("file", file);
    try{
        const resp = await fetch(cloudUrl, {
            method: "POST",
            body:formData
        })
        if(resp.ok){
            const cloudResp: {secure_url:string} = await resp.json();
            return cloudResp.secure_url
        }else{
            return null;
        }
    }catch (e){
        console.log(e)

    }

}
import {fileUpload} from '../../helpers/fileUpload'
describe('cloudinary', () => {
    test('should upload file', async () => {
        
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png')
       const blob = await resp.blob();
       const file = new File([blob],"foto.png");
       const url = await fileUpload(file);
       expect(typeof url).toBe("string");
    })
    
    
})

const assert = require('assert');
const page = require ('../page-object');
    
describe('Annotation interface', () => {

beforeAll(
    function pepe(){
        browser.url('/');
        browser.maximizeWindow()
    }
)

it('should display annotated entities', async () => {

    const textArea = await $('textarea');
    const annotation = await $$('div textarea ~ div span[style]');
    const annotationLocation =  await annotation[4].getLocation()    
    //await textArea.click({x: parseInt(annotationLocation.x,10)+1, y: parseInt(annotationLocation.y,10)+1})
   // await textArea.click({x: 530 , y: 253})
   await console.log(annotation.Element)
   await textArea.click()
    //await browser.pause(90000)
    
    });

    xit('should change entity annotation', () => {

    });

    xit('should delete entity annotation', () => {
        
    });
});
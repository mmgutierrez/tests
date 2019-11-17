Feature('Entities');

//Text extrictly related to the text, however it can be moved to a sepparte file for reuse.
const existingAnnotation = 'very important'
const newAnnotation = 'Label1'

Before((I) => { 
    I.amOnPage('/');
  });

Scenario('Should display annotated entity', (I, EntitiesPage) => {
    I.click(EntitiesPage.annotatedText)

    I.see(existingAnnotation, EntitiesPage.annotationLabel)
});

Scenario('Should add entity annotation', (I, EntitiesPage) => { //Not possible to change annotation, only add.
    EntitiesPage.addAnnotationOnText(newAnnotation)

    //Verify annotation is displayed on text
    I.click(EntitiesPage.annotatedText)
    I.see(newAnnotation, EntitiesPage.annotationLabel)
});

Scenario('Should delete entity annotation', (I) => {
    EntitiesPage.addAnnotationOnText(newAnnotation)

    //Click on newly added annotation
    I.click(EntitiesPage.selectedText)

    //Delete annotation
    I.click(EntitiesPage.deleteAnnotationButton)

    I.dontSee(newAnnotation, EntitiesPage.annotationLabel)
})
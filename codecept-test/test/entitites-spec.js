Feature('Entities');

//Text extrictly related to the test, however it can be moved to a sepparte file for reuse.
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

    //Verify annotation is displayed on text.
    I.click(EntitiesPage.lastAnnotation)
    I.see(newAnnotation, EntitiesPage.annotationLabel)
});

Scenario('Should delete entity annotation', (I, EntitiesPage) => {
    EntitiesPage.addAnnotationOnText(newAnnotation)

    //Click on tex with added annotation and remove the annotation.
    I.click(EntitiesPage.lastAnnotation)
    I.click(EntitiesPage.deleteAnnotationButton)

    I.dontSeeElement(EntitiesPage.annotationLabel)
})
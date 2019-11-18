Feature('Entities');

//Text extrictly related to the test, however it can be moved to a sepparte file for reuse.
const existingAnnotation = 'very important'
const annotation1 = 'Label1'
const annotation2 = 'Label2'

Before((I) => { 
    I.amOnPage('/')
  });

Scenario('Should display annotated entity', (I, EntitiesPage) => {
    I.click(EntitiesPage.annotatedText)

    I.see(existingAnnotation, EntitiesPage.annotationLabel)
});

Scenario('Should add entity annotation', (I, EntitiesPage) => { //Not possible to change annotation, only add.
    EntitiesPage.addAnnotationOnText(annotation1)

    //Verify annotation is displayed on text.
    I.click(EntitiesPage.lastAnnotation)
    I.see(annotation1, EntitiesPage.annotationLabel)
});

Scenario('Should delete all entity annotations', (I, EntitiesPage) => {
    EntitiesPage.addAnnotationOnText(annotation1)
    EntitiesPage.removeLastAnnotation()

    I.dontSeeElement(EntitiesPage.annotationLabel)
});

Scenario('Should delete single entity annotation', (I, EntitiesPage) => {
    //Create two annotations.
    EntitiesPage.addAnnotationOnText(annotation1)
    EntitiesPage.addAnnotationOnText(annotation2)

    EntitiesPage.removeLastAnnotation()

    I.dontSee(annotation1, EntitiesPage.annotationLabel)
});
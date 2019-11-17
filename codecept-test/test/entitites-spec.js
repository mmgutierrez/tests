
Feature('Entities');

Before((I) => { 
    I.amOnPage('/');
  });

xScenario('Should display annotated entity', (I) => {
    I.click('textarea ~ div span[style]');

    I.see('graphical user interface (very important)', 'section > div > div > span')
});

xScenario('Should change entity annotation', (I) => {
    //Select text and add annotation
    I.doubleClick('Venture', 'textarea ~ div span');
    I.click('[type="text"]')
    I.appendField('[type="text"]', 'Label1');
    I.click({ css: 'button' })

    //Verify annotation is displayed on text
    I.click('Venture', 'textarea ~ div span')
    I.see('Label1', 'section > div > div > span')
});

Scenario('Should delete entity annotation', (I) => {
    //Select text and add annotation
    pause()
    I.doubleClick('Venture', 'textarea ~ div span');
    I.click('[type="text"]')
    I.appendField('[type="text"]', 'Label1');
    I.click({ css: 'button' })
    I.click('Venture', 'textarea ~ div span')

    //Delete annotation
    I.click('[aria-label="Delete"]')

    I.dontSee('Label1', 'section > div > div > span')
})
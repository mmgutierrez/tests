const { I } = inject();

module.exports = {

  annotatedText: 'textarea ~ div span[style]',
  annotationLabel: 'section > div > div > span',
  textField: '[type="text"]',
  addEntityButton: { css: 'button' },
  deleteAnnotationButton: '[aria-label="Delete"]',
  lastAnnotation: 'textarea ~ div:last-child > span[style]',

  addAnnotationOnText(annotationText){
    I.setSelection(30, 38);
    I.click(this.textField)
    I.appendField(this.textField, annotationText);
    I.click(this.addEntityButton)
  }
}

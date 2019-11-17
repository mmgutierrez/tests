const { I } = inject();

module.exports = {

  annotatedText: 'textarea ~ div span[style]',
  annotationLabel: 'section > div > div > span',
  selectedText: 'textarea ~ div span',
  textField: '[type="text"]',
  addEntityButton: { css: 'button' },
  deleteAnnotationButton: '[aria-label="Delete"]',

  addAnnotationOnText(annotationText){
    I.doubleClick(this.selectedText);
    I.click(this.textField)
    I.appendField(this.textField, annotationText);
    I.click(this.addEntityButton)
  }
}

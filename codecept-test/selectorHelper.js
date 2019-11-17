const Helper = codeceptjs.helper

class SelectorHelper extends Helper {
  async setSelection(start, end) {
    const { page } = this.helpers.Puppeteer
    await page.evaluate( (start, end) => {
      const textarea = document.querySelector('textarea')
      textarea.setSelectionRange(start, end)
    }, start, end)
  }
}

module.exports = SelectorHelper
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
  install (Vue, options) {
    Vue.prototype.getPdf = function () {
      let title = this.htmlTitle
      html2Canvas(document.querySelector('#pdfDom'), {
        allowTaint: true
      }).then(function (canvas) {
        console.log(1)
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        let pageHeight = contentWidth / 592.28 * 841.89
        let leftHeight = contentHeight
        let position = 0
        let imgWidth = 595.28
        let imgHeight = 595.28 / contentWidth * contentHeight
        let pageData = canvas.toDataURL('image/jpeg', 1.0)
        let PDF = new JsPDF('', 'pt', 'a4')
        console.log(2)
        if (leftHeight < pageHeight) {
          console.log(3)
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          console.log(4)
          while (leftHeight > 0) {
            console.log(5)
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight = leftHeight - pageHeight
            position = position - 841.89
            if (leftHeight > 0) {
              console.log(6)
              PDF.addPage()
            }
          }
        }
        console.log(7)
        PDF.save(title + '.pdf')
      })
    }
  }
}

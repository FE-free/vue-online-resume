/*
 * @Author: honghong
 * @Date: 2019-09-05 15:25:54
 * @LastEditors: honghong
 * @LastEditTime: 2019-09-10 18:01:07
 * @Description:
 * @email: 3300536651@qq.com
 */
import * as jsPDF from 'jspdf';

import html2canvas from 'html2canvas';
export function exportPdf(elementName, fileName, isClass) {
  console.log('导出开始');
  global.html2canvas = html2canvas; // 解决html2canvas is not a function的问题

  let element = document.getElementById(elementName); // 这个dom元素是要导出pdf的div容器
  if (isClass) {
    element = document.getElementsByClassName(elementName)[0];
    console.log(element);
  }
  html2canvas(element).then(function (canvas) {
    var contentWidth = canvas.width;
    var contentHeight = canvas.height;
    // 一页pdf显示html页面生成的canvas高度;
    var pageHeight = contentWidth / 592.28 * 841.89;
    // 未生成pdf的html页面高度
    var leftHeight = contentHeight;
    // 页面偏移
    var position = 0;
    // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    var imgWidth = 595.28;
    var imgHeight = 592.28 / contentWidth * contentHeight;

    var pageData = canvas.toDataURL('image/jpeg', 1.0);
    // eslint-disable-next-line
    var pdf = new jsPDF('', 'pt', 'a4');

    // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    // 当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
    } else {
      while (leftHeight > 0) {
        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
        leftHeight -= pageHeight;
        position -= 841.89;
        // 避免添加空白页
        if (leftHeight > 0) {
          pdf.addPage();
        }
      }
    }
    if (!fileName) {
      fileName = '在线编辑PDF';
    }
    pdf.save(fileName + '.pdf');
  });
}

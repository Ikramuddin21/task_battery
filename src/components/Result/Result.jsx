import React, { useRef } from "react";
import "../../css/Result.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Result = ({ allInputValue }) => {
  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const imgWidth = 600;
      const pageHeight = 400;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      const pdf = new jsPDF("l", "px");
      pdf.addImage(imgData, "PNG", 10, 20, imgWidth, imgHeight + 25);
      heightLeft -= pageHeight;
      pdf.save("download.pdf");
    });
  };

  return (
    <div className="result">
      {!!Object.values(allInputValue).length ? (
        <>
          <table ref={pdfRef}>
            <thead>
              <tr>
                {Object.keys(allInputValue)?.map(
                  (th, index) =>
                    allInputValue[th] && <th key={index}>{th.toUpperCase()}</th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.values(allInputValue)?.map(
                  (th, index) => th && <td key={index}>{th}</td>
                )}
              </tr>
            </tbody>
          </table>
          <button onClick={downloadPDF} className="download_btn">
            Download
          </button>
        </>
      ) : (
        <h2>Please back home, and form submit.</h2>
      )}
    </div>
  );
};

export default Result;

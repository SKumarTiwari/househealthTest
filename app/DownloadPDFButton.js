import React from 'react';
import jsPDF from 'jspdf';

const DownloadPDFButton = ({ totalAmount }) => {
  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    pdf.text('Total Estimated Cost:', 10, 10);
    pdf.text(`$${totalAmount}`, 10, 20);

    const blob = pdf.output('blob');
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'total_cost_estimation.pdf';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownloadPDF}>Download PDF</button>
  );
};

export default DownloadPDFButton;

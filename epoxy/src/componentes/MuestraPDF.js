import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom'

function MuestraPDF(){
    const {objeto} = useParams()
    const App = () => (
        <PDFViewer>
          {objeto}
        </PDFViewer>
      );
      return(App)
}

export default MuestraPDF
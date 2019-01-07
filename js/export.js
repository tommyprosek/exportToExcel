var table = document.getElementById('books');

var instance = new TableExport(table, {
    formats: ['xls'],
    exportButtons: false
});

//                                        // "id" of selector    // format1
var exportData = instance.getExportData()['books']['xls'];

var XLSbutton = document.getElementById('btnExport');

XLSbutton.addEventListener('click', function (e) {
    //                   // data          // mime              // name              // extension
    instance.export2file(exportData.data, exportData.mimeType, exportData.filename, exportData.fileExtension);
});

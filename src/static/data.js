function createData(nisn, nama, tanggal, tglLhir, jenkel, nohp, kelas, keterangan, hadir, pulang) {
  return { nisn, nama, tanggal, tglLhir, jenkel, nohp, kelas, keterangan, hadir, pulang};
}

const rows = [
  createData('12345', 'GUIDO WINATA PUTRA', '12 Agustus 2024', '06-10-2006', 'Pria', '0898765533123', 'XII RPL 1', 'Hadir', '06.30', '15.00'),
  createData('54321', 'JEAN SAMUEL PUTRA', '12 Agustus 2024', '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Alpha', 'Tdk Absen', 'Tdk Absen'),
  createData('54321', 'FERREN DIOVALDA', '12 Agustus 2024', '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Hadir', '06.30', '15.00'),
  createData('56789', 'DIMAS ANDREYAWAN', '12 Agustus 2024', '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Hadir', '06.45', '15.00'),
  createData('09876', 'JULIAN TRIS PRATAMA', '12 Agustus 2024', '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Telat', '10.30', '15.00'),
  createData('09876', 'ALAMANUEL RUI PASKA', '12 Agustus 2024',  '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Hadir', '06.30', '15.00'),
  createData('09876', 'FAJAR RAMADHAN', '12 Agustus 2024',  '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Hadir', '06.30', '15.00'),
  createData('09876', 'DENNY NURYANTO', '12 Agustus 2024',  '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Hadir', '06.30', '15.00'),
  createData('09876', 'ALTHAF AKMALUL ZUHAIR', '12 Agustus 2024',  '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Hadir', '06.30', '15.00'),
  createData('09876', 'MOCHAMMED SULTHAN AZ-ZACHRIE', '12 Agustus 2024',  '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Hadir', '06.30', '15.00'),
  createData('09876', 'DONI SAPUTRA', '12 Agustus 2024',  '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Hadir', '06.30', '15.00'),
  createData('09876', 'MIKO NUR WALUYO', '12 Agustus 2024',  '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Telat', '07.30', '15.00'),
  createData('09876', 'Paskah', '12 Agustus 2024',  '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Hadir',  '06.30', '15.00'),
  createData('09876', 'Paskah', '12 Agustus 2024',  '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Telat', '07.30', '15.00'),
  createData('09876', 'Paskah', '12 Agustus 2024',  '04-01-2007', 'Pria', '081357002028', 'XII RPL 1', 'Alpha', 'Tdk Absen', 'Tdk Absen'),
  createData('09876', 'Dodo', '12 Agustus 2024', 'Hadir', '06.30', '15.00'),
];

export default rows;

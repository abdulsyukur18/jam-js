let jam = document.querySelector('.waktu')
let tgl = document.querySelector('.tgl')


function masa() {
    let waktu = new Date();
    const j = waktu.getHours();
    const m = waktu.getMinutes();
    const d = waktu.getSeconds();

    let total = `${j} : ${m} : ${d}`;
    jam.innerHTML = total;
    
        // const hari2 =['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'juma"t', 'sabtu'];
        // const bulan2 =['januari', 'februari', 'maret', 'april', 'mei', 'agustus', 'september', 'oktober', 'november', 'desember'];
        // let hari = waktu.getDate();
        // let bulan = waktu.getMounth();
        
        // let th = waktu.getYear();
        // let tahun = (th < 1000) ? th + 1900 : th;
    
        // let a = `${hari[hari2]} ${bulan2[bulan]} ${tahun}`;
        // tgl.innerHTML = a;
}



setInterval('masa()', 1000);
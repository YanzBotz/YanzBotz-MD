const dar = [
            'Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu',
            "telfon crush/pacar sekarang dan ss ke pemain",
            "pap ke salah satu anggota grup",
            'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo',
            "ss recent call whatsapp",
            'drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari',
            "kirim voice note bilang can i call u baby?",
            "drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu",
            "pake foto sule sampe 3 hari",
            "ketik pake bahasa daerah 24 jam",
            'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
            'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucmek to hv you',
            'prank chat mantan dan bilang " i love u, pgn balikan',
            "record voice baca surah al-kautsar",
            'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini',
            "sebutkan tipe pacar mu!",
            "snap/post foto pacar/crush",
            "teriak gajelas lalu kirim pake vn kesini",
            "pap mukamu lalu kirim ke salah satu temanmu",
            "kirim fotomu dengan caption, aku anak pungut",
            "teriak pake kata kasar sambil vn trus kirim kesini",
            'teriak " anjimm gabutt anjimmm " di depan rumah mu',
            'ganti nama jadi " BOWO " selama 24 jam',
            "Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll",
          ];
          const trut = [
            "Pernah suka sama siapa aja? berapa lama?",
            "Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)",
            "apa ketakutan terbesar kamu?",
            "pernah suka sama orang dan merasa orang itu suka sama kamu juga?",
            "Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
            "pernah gak nyuri uang nyokap atau bokap? Alesanya?",
            "hal yang bikin seneng pas lu lagi sedih apa",
            "pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?",
            "pernah jadi selingkuhan orang?",
            "hal yang paling ditakutin",
            "siapa orang yang paling berpengaruh kepada kehidupanmu",
            "hal membanggakan apa yang kamu dapatkan di tahun ini",
            "siapa orang yang bisa membuatmu sange",
            "siapa orang yang pernah buatmu sange",
            "(bgi yg muslim) pernah ga solat seharian?",
            "Siapa yang paling mendekati tipe pasangan idealmu di sini",
            "suka mabar(main bareng)sama siapa?",
            "pernah nolak orang? alasannya kenapa?",
            "Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget",
            "pencapaian yang udah didapet apa aja ditahun ini?",
            "kebiasaan terburuk lo pas di sekolah apa?",
          ];
function truth(){
const der = trut[Math.floor(Math.random() * trut.length)];
res = {}
res.creator = 'RzkyFdlh'
res.result = der
return res
}
function dare(){
const de = dar[Math.floor(Math.random() * dar.length)];
res = {}
res.creator = 'RzkyFdlh'
res.result = de
return res
}

module.exports = { truth, dare }
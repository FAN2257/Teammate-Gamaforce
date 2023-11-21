import Swal from "sweetalert2";
import home from "../assets/home.png";
import add from "../assets/add.png";
import hapus from "../assets/delete.png";

async function missionFunction() {
    const {value: newMission} = await Swal.fire({
        title: "Masukkan Misi",
        input: "text",
        showCancelButton: true,
        inputValidator: (value) => {
            if(!value) {
                return "Misi tidak boleh kosong!";
            }
        }
    });
    if(newMission) {
        Swal.fire(`Misi ${newMission} telah berhasil!`)
    }
}

async function missionDelete() {
    await Swal.fire({
        title: "Anda yakin akan menghapus misi?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
    });
}

async function homeFunction() {
    Swal.fire({
        title: "Beranda",
        icon: "success",
    })
}

export default function Sidebar() {

    /*const misiPertama = (index) => (
        alert(`Misi ${index} selesai.`)
    )*/

    return(
        <div className="flex flex-col text-center bg-blue-50 w-64 h-screen py-5 gap-3.5">
            <p className="font-bold">Pengaturan Misi</p>
            <div id="home" className="flex flex-row px-8">
                <img src={home} width={18}></img>
                <button onClick={() => homeFunction()} className="hover:text-blue-600 px-5">Beranda</button> 
            </div>
            <div id="add" className="flex flex-row px-8">
                <img src={add} width={18}></img>
                <button onClick={() => missionFunction()} className="hover:text-blue-600 px-5">Tambah Misi</button> 
            </div>
            <div id="hapus" className="flex flex-row px-8">
                <img src={hapus} width={16}></img>
                <button onClick={() => missionDelete()} className="hover:text-blue-600 px-6"> Hapus Misi </button>
            </div>
        </div>
    );
}
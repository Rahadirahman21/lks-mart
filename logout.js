async function logout(urlLogout) {

    const userID = localStorage.getItem("idUser");
    const date = new Date();

    const {d,e } = await supabase.from('tbl_log').insert([{
        id_user: userID,
        aktivitas: "Logout",
        waktu: date,

    }])

    if(!e){
        localStorage.removeItem("idUser");
        window.location.href = urlLogout;
        return
    }
    return
}
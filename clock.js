function clocktime(){
    const now = new Date();

    let hours = now.getHours().toString().padStart(2,'0');
    let minute = now.getMinutes().toString().padStart(2,'0');
    let seconds = now.getSeconds().toString().padStart(2,'0');

    const timee = `${hours}:${minute}:${seconds}`;
    document.getElementById("time").textContent = timee;

}

setInterval(clocktime,1000);
clocktime();
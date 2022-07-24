const xiaomi = new Celular ("Xiaomi", "negro", "180 gr", "24 mpx", "720p", "8 Gb");
const motorola = new Celular ("Motorola", "azul", "176 gr", "18 mpx", "1080p", "6 Gb");
const poco = new Celular ("Poco", "gris", "164 gr", "16 mpx", "720p", "8 Gb");
const iphone = new AltaGama ("Iphone", "plomo","158 gr", "17 mpx", "1080p", "16 Gb", "8mpx");


function infoXiaomi() {
    alert(xiaomi.info);
}
const encenderXiaomi = () => xiaomi.encender();
const resetXiaomi = () => xiaomi.reiniciar();
const fotoXiaomi = () => xiaomi.foto();
const videoXiaomi = () => xiaomi.grabar();
const apagarXiaomi = () => xiaomi.apagar();

const infoMoto = () => alert(motorola.info);
const encenderMoto = () => motorola.encender();
const resetMoto = () => motorola.reiniciar();
const fotoMoto = () => motorola.foto();
const videoMoto = () => motorola.grabar();
const apagarMoto = () => motorola.apagar();

const infoPoco = () => alert(poco.info);
const encenderPoco = () => poco.encender();
const resetPoco = () => poco.reiniciar();
const fotoPoco = () => poco.foto();
const videoPoco = () => poco.grabar();
const apagarPoco = () => poco.apagar();


const infoIphone = () => alert(iphone.info);
const encenderIphone = () => iphone.encender();
const resetIphone = () => iphone.reiniciar();
const fotoIphone = () => iphone.foto();
const videoIphone = () => iphone.grabar();
const apagarIphone = () => iphone.apagar();

const infoSamsung = () => alert(poco.info);
const encenderSamsung = () => poco.encender();
const resetSamsung = () => poco.reiniciar();
const fotoSamsung = () => poco.foto();
const videoSamsung = () => poco.grabar();
const apagarSamsung = () => poco.apagar();

// console.log(xiaomi);
// document.write(xiaomi.info);
// xiaomi.encender();
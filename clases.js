// var encendido = false;
let imagenes = "vaca.png";
class Celular {
    constructor(marca, color, peso, camara, pantalla, ram)
    {
        this.fotoPrueba = new Image();
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.camara = camara;
        this.pantalla = pantalla;
        this.ram = ram;
        this.fotoPrueba.src = imagenes;
        this.info = `Es un ${this.marca}, de color ${this.color}, tiene un peso de ${this.peso}, una camara de ${this.camara}, una resolución de pantalla de ${this.pantalla} y memoria ram de ${this.ram}`;
        this.encendido = false;
    }
    encender() 
    {
        if (this.encendido == false)
        {
            this.encendido = prompt(`¿Desea encender el celular ${this.marca}? 1: Si 2: No`);
                if (this.encendido == 1) 
                {
                    alert(`Has encendido el equipo`);
                    return this.encendido = true;
                }
                else alert(`Has dejado el celular en su sitio`);
        }
        else {
            alert("El equipo ya se encuentra encendido");
        }
    }
    reiniciar()
    {
        if (this.encendido == true)
        {
            let reinicio = prompt(`¿Desea reiniciar el celular? 1: Si 2: No`);
            if(reinicio == 1)
            {
                alert(`Has reiniciado el celular`);
            }
            else
                alert(`Has dejado el celular en su sitio`);
        }
        else
        {
            alert(`No puedes reiniciar el equipo, se encuentra apagado`);
        }
    }
    foto()
    {
        if (this.encendido == true)
        {
            alert(`Has tomado una foto`);
            //document.body.appendChild(this.fotoPrueba);
        }
        else 
        {
            alert(`No puedes tomar una fotografía con el teléfono apagado`);
        }
    }
    grabar()
    {
        if(this.encendido == true)
        {
            alert(`Has tomado un video`);
        }
        else 
        {
            alert(`No puedes tomar un video con el teléfono apagado`);
        }
    }
    apagar()
    {
        if (this.encendido == true)
        {
            this.encendido = prompt(`¿Desea apagar el celular ${this.marca}? 1: Si 2: No`);
                if (this.encendido == 1) 
                {
                    alert(`Has apagado el equipo`);
                    return encendido = false;
                }
                else alert(`Has dejado el celular en su sitio`);
        }
        else {
            alert("El equipo ya se encuentra apagado");
        }
    }
}
class AltaGama extends Celular
{
    constructor(marca, color, peso, camara, pantalla, ram, frontal)
    {
    super(marca, color, peso, camara, pantalla, ram);
    this.frontal = frontal;
    this.encendido = false;
    }
    facial()
    {
        if (this.encendido == true)
        {
            alert(`Tu ${this.marca} ha reconocido tu rostro`);
        }
        else {
            alert("El equipo se encuentra apagado");
        }
    }
    lenta()
    {
        if(this.encendido == true)
        {
            alert(`Has tomado un video en camara ultra lenta`);
        }
        else 
        {
            alert(`El equipo se encuentra apagado`);
        }
    }
    frontal()
    {
        if(this.encendido == true)
        {
            alert(`Has tomado una foto con la camara frontal`);
        }
        else 
        {
            alert(`El equipo se encuentra apagado`);
        }
    }
}
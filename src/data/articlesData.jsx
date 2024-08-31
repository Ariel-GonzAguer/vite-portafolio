import servicio_terminado from "./media/servicio_terminado.png";
import default_template_emailJS from "./media/default_template_emailJS.png";
import contact_template_emailJS from "./media/contact_template_emailJS.png";
import autoreplay_emailJS from "./media/autoreplay_emailJS.png";
import autoreplay_autoreplay_emailJS from "./media/autoreplay_autoreplay_emailJS.png";
import autoreplay_contact_emailJS from "./media/autoreplay_contact_emailJS.png";
import componente_emailJS from "./media/componente_emailJS.png";
import componente_final from "./media/componente_final.png";

export const articles = {
  0: {
    title: "EmailJS - Caso de uso básico",
    content: (
      <>
        <h3>
          {"<"} Intro {"/>"}
        </h3>
        <p>
          Un componente común en páginas de contacto es un formulario para
          enviar un mensaje desde la página web. Si bien esto se puede realizar
          con Back End, existen librerías que nos ayudan a lograrlo desde el
          lado del cliente.
          <br />
          Hoy vamos a usar <strong>EmailJS</strong>, una librería que hace mucho
          tenía guardada en mis marcadores para verla después, pero que hasta
          poco que actualice mi portafolio, utilicé, y la verdad no puedo pedir
          más, soluciona mi problema.
          <br />
          Primero vamos a conocer un poco sobre EmailJS, después vamos a
          configurar la cuenta y crear los templates. Veremos el componente de
          ejemplo que nos da EmailJS, para después tomar este ejemplo y
          aplicarle algunas pequeñas modificaciones que nos sirven para nuestro
          caso de uso, además agregaremos algunos atributos que mejoren la
          accesibilidad del componente.
        </p>

        <p>
          **Conocimientos Prerrequisito (todos en realidad en nivel muy básico):
        </p>
        <ul>
          <li>1. React. Para crear los componentes.</li>
          <li>2. Uso de NPM. Para instalar librerías.</li>
          <li>3. Uso de NodeJS. Para ejecutar comandos en la consola.</li>
        </ul>

        <p>**Herramientas que usaremos:</p>
        <ul>
          <li>1. VS Code. Como nuestro IDE.</li>
          <li>2. Vite. Como herramienta de compilación.</li>
          <li>
            3. Sooner. Es opcional, pero ayudará con la retroalimentación
            inmediata a la persona usuaria.
          </li>
        </ul>
        <p>
          Mi manera de estilizar los componentes es mediante sus respectivos
          archivos CSS, dentro de la carpeta de cada componente. Aunque esto no
          es relevante para el tutorial, me parece importante mencionarlo, pues
          habrá quien espere ver CSS-in-JS, Tailwind o algo por estilo.
          <br />
          <br />
          Sin más que agregar, comencemos...
        </p>

        <h3>
          {"<"} EmailJS {"/>"}
        </h3>
        <p>
          “EmailJS ayuda a enviar correos electrónicos utilizando únicamente
          tecnologías del lado del cliente. No se requiere ningún servidor: solo
          conecte EmailJS a uno de los servicios de correo electrónico
          compatibles, cree una plantilla de correo electrónico y utilice una de
          nuestras bibliotecas SDK para activar un correo electrónico.” -
          <a
            href="https://www.emailjs.com/docs/introduction/how-does-emailjs-work/"
            target="_blank"
          >
            del sitio oficial de EmailJS
          </a>
          .
          <br />
          <br />
          Esta librería nos permite adjuntar imágenes a los correos, enviar un
          mensaje de confirmación a la persona usuaria, agregar CAPTCHAS y más,
          aunque en este tutorial nos centraremos solo en un caso de uso básico:
          que el cliente nos pueda enviar un mensaje desde nuestra web, y reciba
          un mensaje de confirmación al correo que proporciona.
        </p>

        <h3>
          {"<"} Configuración de cuenta y Servicio {"/>"}
        </h3>
        <p>
          Lo primero es crear una cuenta en{" "}
          <a href="https://dashboard.emailjs.com/sign-up" target="_blank">
            EmailJS
          </a>
          . Cuando ya tenemos nuestra cuenta, podemos acceder al dashboard de
          EmailJS donde añadiremos nuestro servicio de correo electrónico.
          Simplemente presionamos <strong>Add New Service</strong>, elegimos
          nuestro tipo de servicio, que para el caso de este tutorial será
          Gmail. Elegimos un nombre para nuestro servicio y también un ID para
          este. El ID Service lo usaremos más tarde.
          <br />
          <br /> Lo siguiente por hacer, en esta misma ventana, es conectar
          nuestro servicio a nuestra cuenta de Gmail. Otorgamos los permisos a
          EmailJS, y después damos click en Create Service. Algo interesante de
          hacer acá, es dejar seleccionada la opción{" "}
          <strong>Send test email to verify configuration</strong>, para
          confirmar que vamos por buen camino. Ahora, en nuestro dashboard,
          deberíamos ver algo como esto:
        </p>
        <img src={servicio_terminado} alt="ejemplo de servicio terminado" />
        <h3>
          {"<"} Creación de Templates {"/>"}
        </h3>
        <h4>a. El correo que recibiremos.</h4>
        <p>
          Una vez establecido nuestro servicio correctamente, lo siguiente es el
          mensaje que vamos a recibir en nuestro correo. Para hacer esto vamos a
          la sección <strong>Email Templates</strong> y hacemos click en{" "}
          <strong>Create New Template</strong>.
          <br />
          Importantísimo notar en esta sección:
        </p>
        <ul>
          <li>
            • el uso de variables dinámicas (
            <a href="https://www.emailjs.com/docs/user-guide/dynamic-variables-templates/">
              ver más acá
            </a>
            ).
          </li>
          <li>
            • definir el ID del template (este ID también lo usaremos más
            tarde).
          </li>
        </ul>

        <p>Así se mira el template que nos da EmailJS por default:</p>
        <br />
        <img src={default_template_emailJS} alt="template por default" />
        <p>
          En la pestaña de Auto-Replay, por default, no viene nada, pero esto lo
          cambiaremos después. En la opción de settings le damos un nombre y ID
          apropiado al template. No olvide llenar el campo de{" "}
          <strong>To Email</strong>, que es donde recibirá los mensajes enviados
          desde la página web.
          <br />
          Para mi caso de uso, así queda el template:
        </p>
        <img src={contact_template_emailJS} alt="template de contacto" />
        <p>
          ¡Bastante sencilla! Como solo necesito saber quién me envió un
          mensaje, además del mensaje, con esa configuración estoy satisfecho.
          Las variables {"{{"} message {"}}"} y {"{{"} user_email {"}}"} las
          obtendremos del formulario que la persona usuaria llenara.
          <br />
          La opción de auto-replay la vamos a configurar en el siguiente paso.
        </p>

        <h4>b. Auto-Replay: el correo que recibe la persona usuaria.</h4>
        <p>
          Ahora vamos a configurar el template de auto-replay. En realidad, solo
          se debe hacer lo mismo que en el paso anterior, teniendo en cuenta que
          es la persona usuaria quién recibirá este mensaje.
          <br /> Mi auto-replay se mira así:
        </p>
        <img src={autoreplay_emailJS} alt="template de auto-replay" />
        <p>
          De nuevo, bastante sencillo. Solo utilizo dos variables dinámicas:
          {" {{"} user_name {"}}"} dentro del mensaje para que no sea tan
          impersonal, y{" {{"} user_email {"}}"} en la sección de To Email, para
          que la persona usuaria reciba el correo. Si se deja nuestro correo en
          esta sección, la persona usuaria nunca recibirá su mensaje de
          confirmación, pues llegará a nuestra bandeja de entrada.
        </p>

        <h4>c. Conectar templates</h4>
        <p>
          Ya estamos cerca de entrar a VS Code, pero antes debemos conectar
          ambos templates.
          <br />
          Para ello primero vamos a nuestro primer template, en mi caso el que
          tiene el ID portafolio_template_1. Seleccionamos la pestaña de
          Auto-Replay, y elegimos el segundo template que creamos, en mi caso,
          el que tiene el ID template_autoreplay. Le damos click al botón Save,
          y hacemos los mismo con el segundo template, pero seleccionamos en la
          opción de Auto-replay, nuestro primer template. Es decir, un template
          es el auto-replay del otro, y viceversa. Como estamos con la cuenta
          gratis, solo podemos crear dos templates, lo que convenientemente para
          este tutorial, facilita el no confundirse entre varias opciones.
          <br />
          Pero para tenerlo más claro, así se ve la sección de Auto-Replay de mi
          template_autoreplay:
        </p>
        <img
          src={autoreplay_autoreplay_emailJS}
          alt="autoreplay de autoreplay"
        />

        <p>Y así se mira la misma sección, pero en mi portafolio_template_1:</p>

        <img src={autoreplay_contact_emailJS} alt="autoreplay de contacto" />

        <p>
          <strong>Antes de escribir el componte…</strong>
        </p>
        <ul>
          <li>
            • instalar la librería de EmailJS: npm install
            @emailjs/browser
          </li>
          <li>
            • Opcionalmente, también instalar sonner: npm install sonner
          </li>
        </ul>

        <h3>
          {"<"} Componente de ejemplo de EmailJS {"/>"}
        </h3>
        <p>
          EmailJS, nos facilita más la vida dándonos un{" "}
          <a
            href="https://www.emailjs.com/docs/examples/reactjs/"
            target="_blank"
          >
            componente
          </a>{" "}
          funcional listo para pegar en nuestro código
        </p>
        <img
          src={componente_emailJS}
          alt="codigo del componente ejemplo de emailJS"
        />
        <p>
          Acá un enlace al hook{" "}
          <a href="https://es.react.dev/reference/react/useRef" target="_blank">
            userRef
          </a>
          . En poquísimas palabras, este hook nos permite referenciar un valor
          que no es necesario para el renderizado.
          <br />
          Este componente podría funcionar según el uso de caso que se dé,
          aunque si es importantísimo notar la falta de atributos que le den
          accesibilidad. Además, usa promesas y el método .then, que desde hace
          mucho lo evito, me gusta más async/await, me parece más limpio y
          legible.
          <br />
          Por sí mismo este componente no da retroalimentación a la persona
          usuaria (es muy poco probable que revisen la consola del navegador),
          por lo que esta no puede saber en el momento si hubo algún error o si
          todo salió bien.
        </p>

        <h3>
          {"<"} Componente Personalizado {"/>"}
        </h3>
        <p>
          LOs anteriores detalles los soluciono con los siguientes cambios en mi
          componente
        </p>
        <img src={componente_final} alt="componente final personalizado" />
        <p>Los cambios principales que hice fueron:</p>
        <ul>
          <li>
            • Agregué atributos aria, id y htmlFor a los elementos
            correspondientes para mejorar la accesibilidad.
          </li>
          <li>
            • Usé Sonner para dar retroalimentación inmediata a la persona
            usuaria.
          </li>
        </ul>

        <h3>
          {"<"} Consideraciones {"/>"}
        </h3>
        <ul>
          <li>
            • La cuenta gratuita de EmailJS nos da 200 mensajes mensuales,
            cualquier mensaje que sobrepase ese número, no lo recibiremos. Los
            mensajes de Auto-Replay también se cuentan.
          </li>
          <li>
            • La PUBLIC-KEY se encuentra en la sección Account del Dashboard,
            casi al final del slider vertical donde está la sección de crear
            templates.
          </li>
          <li>
            • Se pueden enviar imágenes junto a los mensajes. Para esta opción
            revise la documentación{" "}
            <a
              href="https://www.emailjs.com/docs/faq/is-it-possible-to-send-embedded-attachments/"
              target="_blank"
            >
              oficial
            </a>
            .{" "}
          </li>
        </ul>

        <h3>
          {"<"} Siguientes Pasos {"/>"}
        </h3>
        <ul>
          <li>• Agregar unit tests.</li>
          <li>• Revisar la documentación completa.</li>
          <li>• Experimentar con las opciones de CAPTCHA.</li>
        </ul>

        <h3>
          {"<"} Conclusión {"/>"}
        </h3>
        <p>
          Una librería fácil de usar, con buena documentación, que resuelve un
          problema de manera efectiva, incluso con una opción gratuita, eso es
          EmailJS. Úsela en su próximo proyecto y etiquéteme si hace alguna
          publicación 😸
        </p>
      </>
    ),
  },
  1: {
    title: "Comming soon",
    content: "Comming soon",
  },
  2: {
    title: "Comming soon",
    content: "Comming soon",
  },
  3: {
    title: "Comming soon",
    content: "Comming soon",
  },
  4: {
    title: "Comming soon",
    content: "Comming soon",
  },
  5: {
    title: "Comming soon",
    content: "Comming soon",
  },
  6: {
    title: "Comming soon",
    content: "Comming soon",
  },
  7: {
    title: "Comming soon",
    content: "Comming soon",
  },
  8: {
    title: "Comming soon",
    content: "Comming soon",
  },
  9: {
    title: "Comming soon",
    content: "Comming soon",
  },
  10: {
    title: "Comming soon",
    content: "Comming soon",
  },
};

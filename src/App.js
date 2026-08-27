import React, { useState, useEffect } from "react";
import {
  Check,
  X,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Play,
  Trophy,
  Star,
  Clock,
  Target,
  Brain,
  TrendingUp,
  Award,
  BookOpen,
} from "lucide-react";

// ===== DATOS DE LECTURA CRÍTICA =====
const readingStories = [
  // Nivel 1 - Básico (comprensión literal)
  {
    id: "leon-raton",
    level: 1,
    levelName: "Básico",
    title: "El León y el Ratón",
    emoji: "🦁",
    paragraphs: [
      "Un día, un ratón pequeño despertó a un poderoso león corriendo sobre su nariz mientras dormía. El león, muy enojado, atrapó al pequeño ratón entre sus enormes garras.",
      '"¡Por favor, no me mates!" rogó el ratón temblando. "Si me perdonas la vida, prometo que algún día te ayudaré." El león soltó una gran carcajada porque le parecía imposible que un ratón tan pequeño pudiera ayudar al rey de la selva. Pero con buen humor, lo soltó.',
      "Tiempo después, unos cazadores atraparon al poderoso león en una enorme red de cuerdas gruesas. El pobre animal rugía sin poder escapar. Al escuchar los rugidos, el ratón corrió hasta donde estaba su amigo.",
      'Con sus pequeños pero afilados dientes, el ratón royó las cuerdas una por una hasta abrir un hueco por donde el león pudo escapar libre. "Tenías razón, amigo," dijo el agradecido león. "Los amigos pequeños también pueden ser los mejores salvadores del mundo."',
    ],
    questions: [
      {
        question: "¿Cómo despertó el ratón al león?",
        options: ["Chillando muy fuerte cerca de su oreja", "Corriendo sobre su nariz mientras dormía", "Mordiéndole la cola"],
        correct: 1,
        paragraphRef: 0,
      },
      {
        question: "¿Qué prometió el ratón si el león lo dejaba ir?",
        options: ["Traerle comida todos los días", "Que algún día lo ayudaría", "Ser su mascota para siempre"],
        correct: 1,
        paragraphRef: 1,
      },
      {
        question: "¿Cómo quedó atrapado el león?",
        options: ["En una trampa de madera en el suelo", "En una cueva oscura", "En una red de cuerdas de cazadores"],
        correct: 2,
        paragraphRef: 2,
      },
      {
        question: "¿Cómo liberó el ratón al león de la red?",
        options: ["Llamando a otros animales del bosque", "Royendo las cuerdas con sus dientes", "Empujando la red con mucha fuerza"],
        correct: 1,
        paragraphRef: 3,
      },
    ],
  },
  {
    id: "tortuga-liebre",
    level: 1,
    levelName: "Básico",
    title: "La Tortuga y la Liebre",
    emoji: "🐢",
    paragraphs: [
      "Una liebre muy veloz siempre se burlaba de la tortuga por lo lenta que caminaba. Un día, la tortuga, cansada de las burlas, la desafió a una carrera para demostrar quién era mejor.",
      "Todos los animales del bosque se reunieron para ver la carrera. La liebre arrancó a toda velocidad y pronto dejó a la tortuga muy atrás. Se sentía tan segura de ganar que decidió descansar bajo la sombra de un árbol.",
      'La tortuga, sin rendirse ni un momento, siguió caminando despacio pero sin parar jamás. "Lenta pero segura," repetía para sí misma mientras avanzaba paso a paso hacia la meta.',
      "Cuando la liebre despertó de su siesta, vio con horror que la tortuga estaba a punto de cruzar la línea de llegada. Corrió lo más rápido que pudo, pero era demasiado tarde. La tortuga cruzó la meta primero entre los aplausos de todos los animales del bosque.",
    ],
    questions: [
      {
        question: "¿Por qué la tortuga desafió a la liebre a una carrera?",
        options: ["Porque quería ser famosa en el bosque", "Porque estaba cansada de las burlas de la liebre", "Porque le gustaba mucho correr"],
        correct: 1,
        paragraphRef: 0,
      },
      {
        question: "¿Qué hizo la liebre cuando llevaba mucha ventaja en la carrera?",
        options: ["Siguió corriendo todavía más rápido", "Se detuvo a comer frutos del bosque", "Se quedó dormida bajo la sombra de un árbol"],
        correct: 2,
        paragraphRef: 1,
      },
      {
        question: "¿Qué decía la tortuga mientras avanzaba?",
        options: ['"Rápido como el viento"', '"Lenta pero segura"', '"Nunca me daré por vencida"'],
        correct: 1,
        paragraphRef: 2,
      },
      {
        question: "¿Quién ganó la carrera al final?",
        options: ["La liebre por muy poco", "Empataron en la meta", "La tortuga cruzó primero la meta"],
        correct: 2,
        paragraphRef: 3,
      },
    ],
  },
  {
    id: "patito-feo",
    level: 1,
    levelName: "Básico",
    title: "El Patito Feo",
    emoji: "🦢",
    paragraphs: [
      "En una granja junto a un lago nació una familia de patitos. Todos eran amarillos y bonitos, excepto el último en salir del cascarón, que era grande, gris y diferente a todos los demás.",
      "Los otros animales de la granja se burlaban de él todo el tiempo. \"¡Qué feo eres!\", le decían los patos. El patito se sentía muy triste y solo, y un día decidió escaparse de la granja para buscar un lugar mejor.",
      "Durante el otoño y el invierno, el patito vivió completamente solo, pasando mucho frío y hambre. Nadie quería estar con él porque todos pensaban que era raro y feo.",
      "Cuando llegó la primavera, el patito se acercó a un lago cristalino. Al ver su reflejo en el agua tranquila, no podía creer lo que veía: ya no era un patito feo, ¡se había convertido en un hermoso cisne blanco! Los otros cisnes lo recibieron con alegría y el cisne comprendió que cada uno tiene su propio tiempo para brillar.",
    ],
    questions: [
      {
        question: "¿En qué era diferente el último patito de los demás?",
        options: ["Era más pequeño que todos los otros", "Era grande, gris y diferente a los demás", "Tenía las alas rotas y no podía volar"],
        correct: 1,
        paragraphRef: 0,
      },
      {
        question: "¿Por qué el patito se escapó de la granja?",
        options: ["Quería explorar el mundo entero", "Porque los animales se burlaban de él y se sentía solo", "Porque tenía mucha hambre y no había comida"],
        correct: 1,
        paragraphRef: 1,
      },
      {
        question: "¿Qué pasó durante el otoño e invierno después de escapar?",
        options: ["Encontró amigos nuevos en el bosque", "Vivió solo pasando frío y hambre", "Regresó a la granja arrepentido"],
        correct: 1,
        paragraphRef: 2,
      },
      {
        question: "¿Qué descubrió el patito al ver su reflejo en el lago en primavera?",
        options: ["Que seguía siendo igual de feo", "Que se había convertido en un hermoso cisne blanco", "Que había crecido mucho pero seguía siendo pato"],
        correct: 1,
        paragraphRef: 3,
      },
    ],
  },
  // Nivel 2 - Intermedio (comprensión inferencial)
  {
    id: "cigarra-hormiga",
    level: 2,
    levelName: "Intermedio",
    title: "La Cigarra y la Hormiga",
    emoji: "🐜",
    paragraphs: [
      "Durante todo el verano, mientras el sol brillaba y hacía calor, la cigarra pasaba los días cantando y descansando bajo la sombra de los árboles. Disfrutaba de la música y no se preocupaba por nada del futuro.",
      'Su vecina, la hormiga, trabajaba sin descanso todos los días. Cargaba granos de comida y los guardaba en su hormiguero para cuando llegara el frío. "Deberías prepararte para el invierno," le decía la hormiga a la cigarra. "El invierno es largo y muy frío."',
      '"¡Bah! El invierno está muy lejos," respondía la cigarra riendo. "¡Hay tiempo de sobra para trabajar! Mejor ven a cantar conmigo." Pero la hormiga seguía trabajando sin hacerle caso a los consejos de la cigarra.',
      "Cuando llegó el invierno, la nieve cubrió todo el campo y la cigarra no tenía comida ni refugio. Comenzó a pasar mucho frío y hambre. Avergonzada, fue a la puerta del hormiguero a pedir ayuda a su vecina.",
      'La hormiga la dejó entrar y le dio comida caliente, pero le dijo con sabiduría: "Recuerda que en la vida hay un tiempo para trabajar y también un tiempo para descansar. Lo importante es encontrar el equilibrio entre los dos."',
    ],
    questions: [
      {
        question: "¿Qué hacía la cigarra durante todo el verano?",
        options: ["Trabajaba y guardaba comida para el invierno", "Cantaba y descansaba sin preocuparse", "Viajaba por el bosque buscando comida"],
        correct: 1,
        paragraphRef: 0,
      },
      {
        question: "¿Por qué la hormiga guardaba comida durante el verano?",
        options: ["Para venderla después y ganar dinero", "Para prepararse para el largo y frío invierno", "Porque le gustaba coleccionar muchas cosas"],
        correct: 1,
        paragraphRef: 1,
      },
      {
        question: "Si la hormiga no hubiera ayudado a la cigarra, ¿qué le habría pasado probablemente?",
        options: ["Habría encontrado otro lugar cálido donde vivir", "Habría sufrido mucho más frío y hambre en el invierno", "Habría aprendido a conseguir comida sola rápidamente"],
        correct: 1,
        paragraphRef: 3,
      },
      {
        question: "¿Qué sabiduría importante le compartió la hormiga a la cigarra al final?",
        options: ["Que cantar es una pérdida total de tiempo", "Que hay un tiempo para trabajar y uno para descansar, y hay que encontrar el equilibrio", "Que los inviernos no son tan malos si uno es valiente"],
        correct: 1,
        paragraphRef: 4,
      },
      {
        question: "¿Por qué crees que la cigarra fue a pedir ayuda \"avergonzada\"?",
        options: ["Porque no le gustaba hablar con la hormiga", "Porque no había seguido los consejos de su vecina y ahora necesitaba su ayuda", "Porque tenía miedo de que la hormiga no estuviera en casa"],
        correct: 1,
        paragraphRef: 3,
      },
    ],
  },
  {
    id: "nino-lobo",
    level: 2,
    levelName: "Intermedio",
    title: "El Niño que Gritó Lobo",
    emoji: "🐺",
    paragraphs: [
      "Un joven pastor cuidaba las ovejas de su aldea en las colinas. El trabajo era tranquilo y bastante aburrido, así que el niño decidió divertirse un poco jugando una broma a los aldeanos.",
      "Corrió al pueblo gritando: \"¡El lobo! ¡Un lobo está atacando mis ovejas!\" Todos los aldeanos dejaron lo que hacían y corrieron a ayudarlo con herramientas y palos. Pero no había ningún lobo por ningún lado. El niño se rió mucho de la broma que les había jugado.",
      "Al día siguiente, el niño volvió a gritar lo mismo. Los aldeanos corrieron de nuevo hacia las colinas, pero otra vez no había ningún lobo. Algunos se molestaron bastante, pero pensaron que era solo un niño travieso.",
      "Una tarde, un lobo de verdad apareció entre las ovejas hambriento y peligroso. El niño, aterrorizado, gritó con todas sus fuerzas: \"¡El lobo! ¡Esta vez es de verdad! ¡Por favor, ayúdenme!\" Pero esta vez, nadie del pueblo vino a ayudarlo.",
      "Los aldeanos pensaron que era otra broma más del pastor mentiroso. El lobo dispersó las ovejas y el niño aprendió una lección muy dolorosa: una persona que miente pierde la confianza de los demás, y cuando realmente necesita ayuda, nadie le cree.",
    ],
    questions: [
      {
        question: "¿Por qué el niño inventó que había un lobo la primera vez?",
        options: ["Quería que los aldeanos hicieran ejercicio físico", "Se aburría cuidando ovejas y quería jugar una broma", "Tenía miedo de un animal que vio en las colinas"],
        correct: 1,
        paragraphRef: 0,
      },
      {
        question: "¿Qué hicieron los aldeanos la primera vez que el niño gritó '¡lobo!'?",
        options: ["Ignoraron completamente al niño", "Corrieron a ayudarlo con herramientas y palos", "Le enviaron un mensaje para que esperara tranquilo"],
        correct: 1,
        paragraphRef: 1,
      },
      {
        question: "¿Por qué nadie del pueblo ayudó al niño cuando el lobo apareció de verdad?",
        options: ["Estaban todos muy ocupados con sus trabajos del campo", "Pensaron que era otra broma más del pastor", "No escucharon sus gritos porque estaban muy lejos"],
        correct: 1,
        paragraphRef: 4,
      },
      {
        question: "¿Qué consecuencia tuvo mentir para el niño al final del cuento?",
        options: ["Que los aldeanos se mudaron a otro pueblo", "Perdió la confianza de los demás y nadie le creyó cuando dijo la verdad", "Que el lobo se fue porque lo conocía de antes"],
        correct: 1,
        paragraphRef: 4,
      },
    ],
  },
  {
    id: "traje-emperador",
    level: 2,
    levelName: "Intermedio",
    title: "El Traje Nuevo del Emperador",
    emoji: "👑",
    paragraphs: [
      "Había una vez un emperador que amaba tanto la ropa elegante que gastaba todo su dinero en nuevos trajes lujosos. Un día llegaron al reino dos hombres que decían ser los mejores sastres del mundo entero.",
      "Los sastres dijeron que podían tejer una tela maravillosa con una propiedad especial: era completamente invisible para las personas tontas o que no eran buenas en su trabajo. El emperador, deseoso de descubrir quiénes en su corte no servían, les ordenó que tejieran esa tela.",
      "Los sastres fingían trabajar en sus telares que estaban completamente vacíos. Cuando los ministros del emperador llegaron a inspeccionar el trabajo, no veían absolutamente nada. Pero por miedo a parecer tontos, todos decían: \"¡Qué tela tan hermosa! ¡Qué colores tan brillantes y magníficos!\"",
      "El día del gran desfile, el emperador se puso el supuesto traje invisible y salió a las calles de la ciudad. Todos los ciudadanos, también por miedo a parecer tontos ante los demás, admiraban y elogiaban el traje que no existía. De repente, un niño pequeño e inocente gritó sin miedo: \"¡Pero si el emperador no lleva nada de ropa!\"",
      "Poco a poco, todos comenzaron a repetir en voz alta lo que el niño había dicho con tanta honestidad. El emperador comprendió que había sido completamente engañado y que, por miedo a lo que dirían los demás, muchas personas no se atreven a decir la verdad.",
    ],
    questions: [
      {
        question: "¿Qué propiedad especial decían tener los sastres de su tela mágica?",
        options: ["Era la más abrigada y suave del mundo", "Era invisible para las personas tontas o incompetentes", "Cambiaba de color según el estado de ánimo"],
        correct: 1,
        paragraphRef: 1,
      },
      {
        question: "¿Por qué los ministros dijeron que la tela era hermosa si no veían nada?",
        options: ["Porque realmente podían ver la tela con esfuerzo", "Por miedo a parecer tontos delante del emperador", "Porque querían quedar bien con los dos sastres extranjeros"],
        correct: 1,
        paragraphRef: 2,
      },
      {
        question: "¿Por qué fue tan importante lo que hizo el niño en el desfile?",
        options: ["Porque era el hijo favorito del emperador", "Porque dijo la verdad sin miedo a lo que pensaran los demás", "Porque conocía el secreto de los dos sastres mentirosos"],
        correct: 1,
        paragraphRef: 3,
      },
      {
        question: "¿Qué enseñanza importante nos deja este cuento?",
        options: ["Que debemos confiar siempre en todos los extraños que llegan", "Que la ropa elegante es lo más importante para un líder", "No debemos callar la verdad por miedo a lo que digan los demás"],
        correct: 2,
        paragraphRef: 4,
      },
    ],
  },
  // Nivel 3 - Avanzado (pensamiento crítico)
  {
    id: "arbol-generoso",
    level: 3,
    levelName: "Avanzado",
    title: "El Árbol Generoso",
    emoji: "🌳",
    paragraphs: [
      "Había una vez un árbol de manzanas enorme y feliz que amaba profundamente a un niño. Cada día, el niño venía a jugar: trepaba al árbol, comía sus manzanas y descansaba tranquilo bajo su sombra. Y el árbol era completamente feliz con esa compañía.",
      "Con el tiempo, el niño creció y comenzó a querer cada vez más cosas. Un día volvió al árbol triste y preocupado. \"Necesito dinero,\" dijo. \"Toma todas mis manzanas y véndelas,\" ofreció el árbol generoso. El niño tomó todas las manzanas y se fue durante mucho tiempo. El árbol quedó feliz por haber podido ayudar, aunque se sentía muy solo.",
      "Tiempo después, el hombre regresó. \"Necesito una casa propia,\" dijo. \"Corta mis ramas y construye tu casa,\" dijo el árbol sin dudar. El hombre cortó todas las ramas y se fue. El árbol, aunque quedó reducido a solo un tronco, se sentía feliz de haber podido ayudar a quien tanto amaba.",
      "Muchos años después, el hombre regresó ya anciano y cansado. \"Solo quiero un lugar tranquilo para descansar,\" dijo. \"Mi viejo tronco es perfecto para sentarse y descansar,\" ofreció el árbol. El anciano se sentó en el tronco y descansó en paz junto a su árbol.",
      "El árbol dio absolutamente todo lo que tenía por amor verdadero. Pero si reflexionamos profundamente: ¿fue realmente una relación justa y equilibrada? ¿Cuándo fue la última vez que el niño preguntó al árbol cómo se sentía? Dar es hermoso y generoso, pero en las relaciones que amamos, recibir también es importante.",
    ],
    questions: [
      {
        question: "¿Qué cambió en la relación entre el niño y el árbol cuando el niño fue creciendo?",
        options: ["El niño siguió jugando exactamente igual que antes", "El niño empezó a pedir cosas en lugar de solo disfrutar la compañía del árbol", "El árbol dejó de dar manzanas porque se cansó"],
        correct: 1,
        paragraphRef: 1,
      },
      {
        question: "¿Cómo se sentía el árbol cada vez que ayudaba al niño, aunque quedara con menos?",
        options: ["Triste, enojado y resentido", "Completamente indiferente y sin sentimientos", "Feliz de haber podido ayudar a quien amaba"],
        correct: 2,
        paragraphRef: 2,
      },
      {
        question: "¿Qué pregunta importante y reflexiva plantea el cuento al final?",
        options: ["Por qué el niño nunca le compró otro árbol al bosque", "Si fue una relación justa y si el árbol también necesitaba recibir algo a cambio", "Por qué el árbol siguió dando cuando el niño ya era un adulto grande"],
        correct: 1,
        paragraphRef: 4,
      },
      {
        question: "¿Qué lección más profunda nos enseña este cuento sobre las relaciones con quienes amamos?",
        options: ["Que siempre debemos dar todo sin esperar absolutamente nada", "Que dar es hermoso, pero las relaciones también necesitan ser recíprocas y equilibradas", "Que los árboles son naturalmente más generosos que las personas humanas"],
        correct: 1,
        paragraphRef: 4,
      },
      {
        question: "¿De qué otra manera podría haber actuado el niño para tener una relación más equilibrada con el árbol?",
        options: ["No haberle pedido nunca absolutamente nada al árbol", "Cuidar al árbol, interesarse por él y también dar algo de sí mismo a la relación", "Haber plantado más árboles para no pedirle tanto a uno solo"],
        correct: 1,
        paragraphRef: 4,
      },
    ],
  },
  {
    id: "misterio-rio",
    level: 3,
    levelName: "Avanzado",
    title: "El Misterio del Río Azul",
    emoji: "🏞️",
    paragraphs: [
      "En el pueblo de Villanueva, el río que daba vida a todos los cultivos comenzó a volverse de un extraño color azul oscuro. Los pescadores notaron que los peces desaparecían y las plantas de las orillas empezaban a morir lentamente.",
      "El alcalde reunió a todos los habitantes para buscar una solución urgente. Algunos culpaban a las lluvias extrañas, otros a los espíritus del bosque. Pero la joven Valentina, de doce años, propuso algo completamente diferente: investigar el río desde su nacimiento en las montañas para encontrar la causa real.",
      "Valentina caminó tres días río arriba acompañada de su abuelo. En la montaña, encontraron una fábrica nueva que vertía líquidos de colores directamente al río sin ningún filtro. Los dueños decían que era solo agua limpia de lavado y que no hacía ningún daño al medio ambiente.",
      "Sin embargo, Valentina recogió muestras del agua en frascos y las llevó a la maestra de ciencias del pueblo. La maestra confirmó con sus instrumentos que el agua contenía químicos muy dañinos para los peces y las plantas, y potencialmente peligrosos también para las personas que bebían esa agua.",
      "Con esta evidencia científica clara, el alcalde pudo actuar legalmente para que la fábrica instalara filtros adecuados y dejara de contaminar el río. El río tardó meses en recuperarse completamente, pero lo logró. Valentina aprendió que los problemas grandes se resuelven con observación cuidadosa, investigación y evidencia real, no con suposiciones ni supersticiones.",
    ],
    questions: [
      {
        question: "¿Qué señales indicaban que algo estaba muy mal con el río?",
        options: ["El agua del río estaba muy fría en verano", "El río se volvió azul oscuro, los peces desaparecieron y las plantas morían", "El río se salía de su cauce inundando los campos"],
        correct: 1,
        paragraphRef: 0,
      },
      {
        question: "¿Qué diferenciaba la propuesta de Valentina de las explicaciones de los adultos del pueblo?",
        options: ["Valentina también culpaba a los espíritus del bosque como algunos adultos", "Valentina propuso investigar y buscar la causa real con evidencia en lugar de suponer", "Valentina pidió ayuda inmediata a expertos de otra ciudad más grande"],
        correct: 1,
        paragraphRef: 1,
      },
      {
        question: "¿Por qué fue tan importante que Valentina llevara las muestras de agua a la maestra de ciencias?",
        options: ["Para tener simplemente la opinión de un adulto de confianza del pueblo", "Para obtener evidencia científica comprobada de que el agua era realmente dañina", "Porque solo la maestra podía comunicarse directamente con el alcalde"],
        correct: 1,
        paragraphRef: 3,
      },
      {
        question: "¿Qué nos enseña esta historia sobre la manera correcta de resolver problemas importantes?",
        options: ["Que los niños no deben meterse en asuntos que son solo de adultos", "Que los problemas grandes se resuelven con observación, investigación y evidencia real", "Que siempre hay que esperar pacientemente a que los adultos encuentren la solución"],
        correct: 1,
        paragraphRef: 4,
      },
      {
        question: "¿Qué habría pasado probablemente si el pueblo hubiera seguido creyendo que la lluvia o los espíritus causaban el problema?",
        options: ["El río se habría limpiado solo con el paso del tiempo", "La fábrica habría seguido contaminando sin consecuencias y el río nunca se habría recuperado", "Los peces habrían vuelto solos después de pasar el invierno"],
        correct: 1,
        paragraphRef: 4,
      },
    ],
  },
  {
    id: "semilla-valiente",
    level: 3,
    levelName: "Avanzado",
    title: "La Semilla Valiente",
    emoji: "🌱",
    paragraphs: [
      "En un jardín descuidado y olvidado, entre piedras y maleza seca, cayó una pequeña semilla. A su alrededor, otras semillas le decían que era imposible crecer en ese lugar tan difícil. \"No hay suficiente luz aquí,\" decían. \"La tierra es demasiado dura y seca. Nunca lo lograrás, pequeña.\"",
      "La pequeña semilla escuchaba todas esas voces desanimadoras, y a veces también ella misma dudaba de poder lograrlo. Pero tenía algo especial dentro: una fuerza que no sabía exactamente cómo nombrar, solo podía sentirla. Tomó la difícil decisión de intentarlo de todas formas.",
      "Empezó a empujar hacia arriba, milímetro a milímetro, con enorme esfuerzo cada día. Las piedras eran muy pesadas y la tierra estaba compacta y dura. Pero la semilla seguía avanzando porque había aprendido algo fundamental: rendirse tampoco era una opción que la hiciera sentir bien consigo misma.",
      "Un día especial, una pequeña grieta en el suelo dejó pasar un rayo de luz cálida. La semilla se orientó inmediatamente hacia esa luz y usó toda su energía disponible. Semanas después, un pequeño brote verde y lleno de vida rompió finalmente la superficie del suelo.",
      "Con el tiempo y mucho esfuerzo, aquella semilla se convirtió en un árbol fuerte y hermoso. Las otras semillas que habían dudado de ella aún seguían en el suelo, esperando el momento perfecto que nunca llegaba. El árbol comprendió que el momento perfecto no existe: lo que existe es el momento en que uno decide comenzar, sin importar las dificultades.",
    ],
    questions: [
      {
        question: "¿Qué obstáculos enfrentaba la semilla para poder crecer en ese jardín?",
        options: ["Solo le faltaba un poco más de agua para crecer", "No había suficiente luz, la tierra era muy dura y las otras semillas la desanimaban", "El jardín estaba demasiado lleno de flores y no había espacio suficiente"],
        correct: 1,
        paragraphRef: 0,
      },
      {
        question: "¿Qué hizo la semilla cuando encontró la grieta que dejaba pasar un rayo de luz?",
        options: ["Esperó pacientemente a que la grieta se hiciera más grande con el tiempo", "Se orientó inmediatamente hacia esa luz y usó toda su energía disponible", "Llamó a otras semillas para que la ayudaran a aprovechar la luz"],
        correct: 1,
        paragraphRef: 3,
      },
      {
        question: "¿Por qué las otras semillas seguían en el suelo al final del cuento?",
        options: ["Porque no recibían suficiente agua donde estaban", "Porque esperaban el momento perfecto para comenzar, que nunca llegaba", "Porque el jardín ya no tenía espacio suficiente para más plantas"],
        correct: 1,
        paragraphRef: 4,
      },
      {
        question: "¿Qué nos enseña el árbol sobre el \"momento perfecto\" para empezar algo que queremos hacer?",
        options: ["Que debemos esperar hasta estar completamente seguros y preparados para comenzar", "Que el momento perfecto no existe: lo que existe es el momento en que decidimos comenzar", "Que el mejor momento para comenzar siempre es en la primavera del año"],
        correct: 1,
        paragraphRef: 4,
      },
      {
        question: "¿Qué relación encuentras entre esta historia y los desafíos que enfrentamos en nuestra propia vida?",
        options: ["Que las plantas tienen naturalmente más fuerza interior que los seres humanos", "Que cuando enfrentamos dificultades y voces que nos desaniman, podemos seguir avanzando poco a poco", "Que es mejor no comenzar algo si hay muchos obstáculos en el camino"],
        correct: 1,
        paragraphRef: 2,
      },
    ],
  },
];

const PixelRobotGame = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameMode, setGameMode] = useState("menu"); // menu, pixel, robot, analysis, reading, readingStats
  const [stars, setStars] = useState(0);
  const [readingStats, setReadingStats] = useState(() => {
    try {
      const saved = localStorage.getItem("samu_readingStats");
      return saved ? JSON.parse(saved) : { sessions: [], totalStories: 0, totalCorrect: 0, totalQuestions: 0 };
    } catch (e) {
      return { sessions: [], totalStories: 0, totalCorrect: 0, totalQuestions: 0 };
    }
  });
  const [multiStats, setMultiStats] = useState(() => {
    try {
      const saved = localStorage.getItem("samu_multiStats");
      return saved ? JSON.parse(saved) : { sessions: [], facts: {} };
    } catch (e) {
      return { sessions: [], facts: {} };
    }
  });
  const [longMultiStats, setLongMultiStats] = useState(() => {
    try {
      const saved = localStorage.getItem("samu_longMultiStats");
      return saved ? JSON.parse(saved) : { sessions: [] };
    } catch (e) {
      return { sessions: [] };
    }
  });
  const [gameStats, setGameStats] = useState({
    pixelArt: {
      levelsCompleted: 0,
      totalTime: 0,
      totalAttempts: 0,
      mistakesPerLevel: [],
      timePerLevel: [],
      attemptsPerLevel: [],
      patternsShown: 0,
      completionRate: [],
    },
  });

  // Pixel Art Levels - 6 niveles con 3 dibujos cada uno
  const pixelLevels = [
    // Nivel 1 - Básico (8x8)
    {
      name: "Nivel 1: Figuras Básicas",
      difficulty: 1,
      drawings: [
        {
          name: "Corazón",
          grid: 8,
          pattern: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
          ],
          color: "#ff6b9d",
        },
        {
          name: "Sonrisa",
          grid: 8,
          pattern: [
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 0, 0, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 0, 0, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
          ],
          color: "#ffd700",
        },
        {
          name: "Casa",
          grid: 8,
          pattern: [
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
          ],
          color: "#ff8844",
        },
      ],
    },
    // Nivel 2 - Intermedio (10x10)
    {
      name: "Nivel 2: Formas Intermedias",
      difficulty: 2,
      drawings: [
        {
          name: "Estrella",
          grid: 10,
          pattern: [
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
          ],
          color: "#ffd700",
        },
        {
          name: "Mariposa",
          grid: 10,
          pattern: [
            [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
            [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
            [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
          ],
          color: "#ff6bd5",
        },
        {
          name: "Cohete",
          grid: 10,
          pattern: [
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
          ],
          color: "#ff4444",
        },
      ],
    },
    // Nivel 3 - Avanzado (12x12)
    {
      name: "Nivel 3: Diseños Avanzados",
      difficulty: 3,
      drawings: [
        {
          name: "Nave Espacial",
          grid: 12,
          pattern: [
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
          ],
          color: "#4488ff",
        },
        {
          name: "Árbol",
          grid: 12,
          pattern: [
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
          ],
          color: "#44cc44",
        },
        {
          name: "Trofeo",
          grid: 12,
          pattern: [
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          ],
          color: "#ffd700",
        },
      ],
    },
    // Nivel 4 - Experto (14x14)
    {
      name: "Nivel 4: Desafío Experto",
      difficulty: 4,
      drawings: [
        {
          name: "Dragón",
          grid: 14,
          pattern: [
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
          ],
          color: "#ff4444",
        },
        {
          name: "Castillo",
          grid: 14,
          pattern: [
            [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          ],
          color: "#8844aa",
        },
        {
          name: "Robot Complejo",
          grid: 14,
          pattern: [
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
          ],
          color: "#44ccff",
        },
      ],
    },
    // Nivel 5 - Maestro (16x16)
    {
      name: "Nivel 5: Nivel Maestro",
      difficulty: 5,
      drawings: [
        {
          name: "Caballero Medieval",
          grid: 16,
          pattern: [
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
          ],
          color: "#888888",
        },
        {
          name: "Ciudad Futurista",
          grid: 16,
          pattern: [
            [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0],
          ],
          color: "#44aaff",
        },
        {
          name: "Mandala Complejo",
          grid: 16,
          pattern: [
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
          ],
          color: "#ff44aa",
        },
      ],
    },
    // Nivel 6 - MAESTRO SUPREMO (16x16 - MUY COMPLEJO)
    {
      name: "Nivel 6: Maestro Supremo",
      difficulty: 6,
      drawings: [
        {
          name: "Samurái Legendario",
          grid: 16,
          pattern: [
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
          ],
          color: "#cc0000",
        },
        {
          name: "Templo Antiguo",
          grid: 16,
          pattern: [
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
          ],
          color: "#cc8800",
        },
        {
          name: "Galaxia Espiral",
          grid: 16,
          pattern: [
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
            [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
            [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
            [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
            [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
          ],
          color: "#8844ff",
        },
      ],
    },
  ];

  // Robot Programming Levels - Rediseñados con lógica clara y progresión pedagógica
  const robotLevels = [
    // NIVEL 1: Movimiento básico - Solo avanzar
    {
      name: "Primer Paso",
      difficulty: 1,
      gridSize: 5,
      start: { x: 0, y: 2, dir: 0 }, // Empieza mirando derecha →
      goal: { x: 4, y: 2 },
      obstacles: [],
      maxCommands: 5,
      description: "¡Tu primer programa! Solo avanza en línea recta",
      hint: "4 comandos de AVANZAR",
    },

    // NIVEL 2: Introducción a giros - Una vuelta simple
    {
      name: "Primera Vuelta",
      difficulty: 1,
      gridSize: 5,
      start: { x: 0, y: 0, dir: 0 }, // Mirando derecha →
      goal: { x: 4, y: 4 },
      obstacles: [],
      maxCommands: 10,
      description: "Aprende a girar: ve a la derecha y luego baja",
      hint: "Avanza → Gira derecha → Avanza",
    },

    // NIVEL 3: Forma de L simple
    {
      name: "Camino en L",
      difficulty: 2,
      gridSize: 6,
      start: { x: 0, y: 0, dir: 0 }, // Mirando derecha →
      goal: { x: 5, y: 5 },
      obstacles: [],
      maxCommands: 12,
      description: "Haz una L: derecha y luego abajo",
      hint: "5 avances → Gira → 5 avances más",
    },

    // NIVEL 4: Primer obstáculo - Pared simple
    {
      name: "Esquiva la Pared",
      difficulty: 2,
      gridSize: 6,
      start: { x: 0, y: 2, dir: 0 }, // Mirando derecha →
      goal: { x: 5, y: 2 },
      obstacles: [
        [2, 2],
        [3, 2],
      ], // Pared en el medio
      maxCommands: 12,
      description: "¡Tu primer obstáculo! Rodéalo por arriba o por abajo",
      hint: "Sube o baja antes del obstáculo",
    },

    // NIVEL 5: Camino en zigzag
    {
      name: "Zigzag Simple",
      difficulty: 3,
      gridSize: 7,
      start: { x: 0, y: 0, dir: 0 }, // Mirando derecha →
      goal: { x: 6, y: 6 },
      obstacles: [
        [2, 0],
        [2, 1],
        [2, 2],
        [4, 4],
        [4, 5],
        [4, 6],
      ], // Dos paredes verticales
      maxCommands: 18,
      description: "Pasa entre las paredes haciendo zigzag",
      hint: "Avanza, rodea, avanza, rodea",
    },

    // NIVEL 6: Corredor con obstáculos
    {
      name: "El Corredor",
      difficulty: 3,
      gridSize: 8,
      start: { x: 0, y: 3, dir: 0 }, // Mirando derecha →
      goal: { x: 7, y: 3 },
      obstacles: [
        [1, 2],
        [2, 4],
        [3, 2],
        [4, 4],
        [5, 2],
        [6, 4], // Obstáculos alternados
      ],
      maxCommands: 20,
      description: "Navega por el corredor esquivando obstáculos",
      hint: "Sube y baja para esquivar cada obstáculo",
    },

    // NIVEL 7: Laberinto en U
    {
      name: "Laberinto en U",
      difficulty: 4,
      gridSize: 8,
      start: { x: 0, y: 0, dir: 0 }, // Mirando derecha →
      goal: { x: 0, y: 7 },
      obstacles: [
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5],
        [1, 6], // Pared vertical izquierda
        [6, 1],
        [6, 2],
        [6, 3],
        [6, 4],
        [6, 5],
        [6, 6],
        [6, 7], // Pared vertical derecha
      ],
      maxCommands: 25,
      description: "Forma de U: ve al fondo y vuelve por el otro lado",
      hint: "Derecha → Abajo → Izquierda",
    },

    // NIVEL 8: Laberinto en espiral
    {
      name: "La Espiral",
      difficulty: 4,
      gridSize: 9,
      start: { x: 4, y: 4, dir: 0 }, // Centro, mirando derecha →
      goal: { x: 0, y: 0 },
      obstacles: [
        // Espiral desde el centro hacia afuera
        [3, 3],
        [3, 4],
        [3, 5],
        [4, 5],
        [5, 5],
        [5, 4],
        [5, 3],
        [5, 2],
        [4, 2],
        [3, 2],
        [2, 2],
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6],
        [3, 6],
        [4, 6],
        [5, 6],
        [6, 6],
        [6, 5],
        [6, 4],
        [6, 3],
        [6, 2],
        [6, 1],
        [5, 1],
        [4, 1],
        [3, 1],
      ],
      maxCommands: 30,
      description: "¡Desafío final! Escapa de la espiral",
      hint: "Sigue el único camino disponible",
    },

    // NIVEL 9: Laberinto maestro
    {
      name: "Maestro del Laberinto",
      difficulty: 5,
      gridSize: 10,
      start: { x: 0, y: 0, dir: 0 }, // Esquina superior izquierda →
      goal: { x: 9, y: 9 },
      obstacles: [
        // Laberinto complejo pero siempre solucionable
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [3, 1],
        [3, 2],
        [3, 3],
        [3, 4],
        [3, 5],
        [0, 5],
        [1, 5],
        [2, 5],
        [5, 0],
        [5, 1],
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
        [5, 6],
        [2, 7],
        [3, 7],
        [4, 7],
        [7, 1],
        [7, 2],
        [7, 3],
        [7, 4],
        [7, 5],
        [7, 6],
        [7, 7],
        [7, 8],
        [0, 8],
        [1, 8],
        [2, 8],
        [3, 8],
      ],
      maxCommands: 40,
      description: "¡El desafío supremo! Planifica cada movimiento",
      hint: "Encuentra el camino largo pero seguro",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 p-4">
      <div className="max-w-6xl mx-auto">
        {gameMode === "menu" && (
          <MainMenu setGameMode={setGameMode} stars={stars} />
        )}
        {gameMode === "pixel" && (
          <PixelArtGame
            levels={pixelLevels}
            setGameMode={setGameMode}
            setStars={setStars}
            gameStats={gameStats}
            setGameStats={setGameStats}
          />
        )}
        {gameMode === "robot" && (
          <RobotGame
            levels={robotLevels}
            setGameMode={setGameMode}
            setStars={setStars}
          />
        )}
        {gameMode === "analysis" && (
          <PsychologicalAnalysis stats={gameStats} setGameMode={setGameMode} />
        )}
        {gameMode === "reading" && (
          <ReadingGame
            setGameMode={setGameMode}
            setStars={setStars}
            readingStats={readingStats}
            setReadingStats={setReadingStats}
          />
        )}
        {gameMode === "readingStats" && (
          <ReadingStats readingStats={readingStats} setGameMode={setGameMode} />
        )}
        {gameMode === "multiplication" && (
          <MultiplicationGame
            setGameMode={setGameMode}
            setStars={setStars}
            multiStats={multiStats}
            setMultiStats={setMultiStats}
          />
        )}
        {gameMode === "multiStats" && (
          <MultiplicationStats multiStats={multiStats} setGameMode={setGameMode} />
        )}
        {gameMode === "longMultiplication" && (
          <LongMultiplicationGame
            setGameMode={setGameMode}
            setStars={setStars}
            longMultiStats={longMultiStats}
            setLongMultiStats={setLongMultiStats}
          />
        )}
      </div>
    </div>
  );
};

const MainMenu = ({ setGameMode, stars }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
      <div className="mb-6">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-2">
          Curso Programación para Samu
        </h1>
        <p className="text-gray-600 text-lg">
          ¡Entrena tu cerebro y alcanza la maestría!
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          <span className="text-2xl font-bold text-gray-700">
            {stars} Estrellas
          </span>
        </div>
      </div>

      {/* Juegos principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <button
          onClick={() => setGameMode("pixel")}
          className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left"
        >
          <div className="text-5xl mb-3">🎨</div>
          <h2 className="text-xl font-bold mb-1">Pixel Art Master</h2>
          <p className="text-xs opacity-90">6 Niveles · 18 Dibujos</p>
          <div className="mt-3 text-xs font-semibold bg-white/20 rounded-full px-3 py-1 inline-block">Con Análisis Psicológico</div>
        </button>

        <button
          onClick={() => setGameMode("robot")}
          className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left"
        >
          <div className="text-5xl mb-3">🤖</div>
          <h2 className="text-xl font-bold mb-1">Programa el Robot</h2>
          <p className="text-xs opacity-90">9 Niveles de Lógica</p>
          <div className="mt-3 text-xs font-semibold bg-white/20 rounded-full px-3 py-1 inline-block">Pensamiento Computacional</div>
        </button>

        <button
          onClick={() => setGameMode("multiplication")}
          className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left"
        >
          <div className="text-5xl mb-3">✖️</div>
          <h2 className="text-xl font-bold mb-1">Tablas de Multiplicar</h2>
          <p className="text-xs opacity-90">Práctica · Mixto · Contrarreloj</p>
          <div className="mt-3 text-xs font-semibold bg-white/20 rounded-full px-3 py-1 inline-block">¡Modo velocidad!</div>
        </button>

        <button
          onClick={() => setGameMode("reading")}
          className="bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left"
        >
          <div className="text-5xl mb-3">📚</div>
          <h2 className="text-xl font-bold mb-1">Lectura Crítica</h2>
          <p className="text-xs opacity-90">9 Cuentos · 3 Niveles</p>
          <div className="mt-3 text-xs font-semibold bg-white/20 rounded-full px-3 py-1 inline-block">Comprensión y Análisis</div>
        </button>

        {/* Botones de estadísticas para padres */}
        <button
          onClick={() => setGameMode("readingStats")}
          className="bg-gradient-to-br from-indigo-500 to-purple-700 text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left"
        >
          <div className="text-5xl mb-3">📖</div>
          <h2 className="text-xl font-bold mb-1">Stats Lectura</h2>
          <p className="text-xs opacity-90">Progreso · Errores · Análisis</p>
          <div className="mt-3 text-xs font-semibold bg-white/20 rounded-full px-3 py-1 inline-block">Para Padres</div>
        </button>

        <button
          onClick={() => setGameMode("multiStats")}
          className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left"
        >
          <div className="text-5xl mb-3">🔢</div>
          <h2 className="text-xl font-bold mb-1">Stats Multiplicación</h2>
          <p className="text-xs opacity-90">Tablas difíciles · Aciertos</p>
          <div className="mt-3 text-xs font-semibold bg-white/20 rounded-full px-3 py-1 inline-block">Para Padres</div>
        </button>

        <button
          onClick={() => setGameMode("longMultiplication")}
          className="bg-gradient-to-br from-rose-500 to-pink-700 text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left"
        >
          <div className="text-5xl mb-3">🧮</div>
          <h2 className="text-xl font-bold mb-1">Multiplicación Larga</h2>
          <p className="text-xs opacity-90">64×9 · 672×4 · Con proceso</p>
          <div className="mt-3 text-xs font-semibold bg-white/20 rounded-full px-3 py-1 inline-block">Aprende · Practica · Examen</div>
        </button>

        <p className="md:col-span-3 text-center text-xs text-gray-400 mt-2">
          Created By: Ing Erika Contreras alias tu Mamá
        </p>
      </div>
    </div>
  );
};

const PixelArtGame = ({
  levels,
  setGameMode,
  setStars,
  gameStats,
  setGameStats,
}) => {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [currentDrawingIndex, setCurrentDrawingIndex] = useState(0);
  const [userGrid, setUserGrid] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showPattern, setShowPattern] = useState(true);
  const [attempts, setAttempts] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [mistakes, setMistakes] = useState(0);
  const [patternViewCount, setPatternViewCount] = useState(0);

  const currentLevel = levels[currentLevelIndex];
  const currentDrawing = currentLevel.drawings[currentDrawingIndex];

  useEffect(() => {
    initializeGrid();
    setStartTime(Date.now());
  }, [currentLevelIndex, currentDrawingIndex]);

  const initializeGrid = () => {
    const grid = Array(currentDrawing.grid)
      .fill(null)
      .map(() => Array(currentDrawing.grid).fill(0));
    setUserGrid(grid);
    setIsComplete(false);
    setShowPattern(true);
    setAttempts(0);
    setMistakes(0);
    setPatternViewCount(1);
  };

  const toggleCell = (row, col) => {
    if (showPattern) return;

    const newGrid = [...userGrid];
    newGrid[row][col] = newGrid[row][col] === 0 ? 1 : 0;

    // Count mistakes
    if (newGrid[row][col] !== currentDrawing.pattern[row][col]) {
      setMistakes((prev) => prev + 1);
    }

    setUserGrid(newGrid);
    checkComplete(newGrid);
  };

  const checkComplete = (grid) => {
    const isCorrect = grid.every((row, i) =>
      row.every((cell, j) => cell === currentDrawing.pattern[i][j])
    );

    if (isCorrect) {
      const timeSpent = (Date.now() - startTime) / 1000;
      setIsComplete(true);

      // Update stats
      setGameStats((prev) => ({
        pixelArt: {
          ...prev.pixelArt,
          totalTime: prev.pixelArt.totalTime + timeSpent,
          totalAttempts: prev.pixelArt.totalAttempts + attempts + 1,
          mistakesPerLevel: [...prev.pixelArt.mistakesPerLevel, mistakes],
          timePerLevel: [...prev.pixelArt.timePerLevel, timeSpent],
          attemptsPerLevel: [...prev.pixelArt.attemptsPerLevel, attempts + 1],
          patternsShown: prev.pixelArt.patternsShown + patternViewCount,
          completionRate: [
            ...prev.pixelArt.completionRate,
            (currentDrawing.grid * currentDrawing.grid - mistakes) /
              (currentDrawing.grid * currentDrawing.grid),
          ],
        },
      }));
    }
  };

  const nextDrawing = () => {
    if (isComplete) {
      setStars((prev) => prev + currentLevel.difficulty);
    }

    if (currentDrawingIndex < currentLevel.drawings.length - 1) {
      setCurrentDrawingIndex(currentDrawingIndex + 1);
    } else if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
      setCurrentDrawingIndex(0);
      setGameStats((prev) => ({
        pixelArt: {
          ...prev.pixelArt,
          levelsCompleted: prev.pixelArt.levelsCompleted + 1,
        },
      }));
    } else {
      // Completó todos los niveles
      setGameMode("analysis");
    }
  };

  const startDrawing = () => {
    setShowPattern(false);
    setStartTime(Date.now());
  };

  const viewPatternAgain = () => {
    setShowPattern(true);
    setPatternViewCount((prev) => prev + 1);
  };

  const resetDrawing = () => {
    initializeGrid();
    setAttempts((prev) => prev + 1);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setGameMode("menu")}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 font-semibold"
        >
          ← Menú
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-purple-600">
            {currentLevel.name}
          </h2>
          <p className="text-sm text-gray-600">
            Dibujo {currentDrawingIndex + 1}/3: {currentDrawing.name}
          </p>
        </div>
        <div className="flex gap-1">
          {[...Array(currentLevel.difficulty)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>Progreso del Nivel</span>
          <span>{currentDrawingIndex + 1}/3 dibujos</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
            style={{ width: `${((currentDrawingIndex + 1) / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-blue-50 p-2 rounded-lg text-center">
          <div className="flex items-center justify-center gap-1">
            <Target className="w-4 h-4 text-blue-600" />
            <span className="text-xs text-gray-600">Intentos</span>
          </div>
          <div className="text-lg font-bold text-blue-600">{attempts + 1}</div>
        </div>
        <div className="bg-red-50 p-2 rounded-lg text-center">
          <div className="flex items-center justify-center gap-1">
            <X className="w-4 h-4 text-red-600" />
            <span className="text-xs text-gray-600">Errores</span>
          </div>
          <div className="text-lg font-bold text-red-600">{mistakes}</div>
        </div>
        <div className="bg-purple-50 p-2 rounded-lg text-center">
          <div className="flex items-center justify-center gap-1">
            <Clock className="w-4 h-4 text-purple-600" />
            <span className="text-xs text-gray-600">Vistas</span>
          </div>
          <div className="text-lg font-bold text-purple-600">
            {patternViewCount}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Pattern to copy */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-3 text-center text-gray-700">
            {showPattern ? "📖 Memoriza este patrón" : "💭 Patrón (oculto)"}
          </h3>
          <div className="inline-block border-4 border-purple-400 rounded-lg p-2 bg-gray-100">
            {currentDrawing.pattern.map((row, i) => (
              <div key={i} className="flex">
                {row.map((cell, j) => {
                  const cellSize =
                    currentDrawing.grid >= 14
                      ? "w-5 h-5"
                      : currentDrawing.grid >= 12
                      ? "w-6 h-6"
                      : "w-8 h-8";
                  return (
                    <div
                      key={j}
                      className={`${cellSize} border border-gray-300`}
                      style={{
                        backgroundColor:
                          cell === 1 ? currentDrawing.color : "white",
                        opacity: showPattern ? 1 : 0.2,
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* User's grid */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-3 text-center text-gray-700">
            {showPattern ? "⬜ Tu cuadrícula" : "🎨 Crea el patrón aquí"}
          </h3>
          <div className="inline-block border-4 border-blue-400 rounded-lg p-2 bg-gray-50">
            {userGrid.map((row, i) => (
              <div key={i} className="flex">
                {row.map((cell, j) => {
                  const cellSize =
                    currentDrawing.grid >= 14
                      ? "w-5 h-5"
                      : currentDrawing.grid >= 12
                      ? "w-6 h-6"
                      : "w-8 h-8";
                  const isWrong =
                    !showPattern &&
                    cell !== currentDrawing.pattern[i][j] &&
                    cell === 1;
                  return (
                    <button
                      key={j}
                      onClick={() => toggleCell(i, j)}
                      disabled={showPattern}
                      className={`${cellSize} border transition-all ${
                        showPattern
                          ? "cursor-not-allowed border-gray-300"
                          : "cursor-pointer hover:border-blue-500 border-gray-400"
                      } ${isWrong ? "animate-pulse" : ""}`}
                      style={{
                        backgroundColor:
                          cell === 1 ? currentDrawing.color : "white",
                        borderWidth: "1px",
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-3 flex-wrap">
        {showPattern ? (
          <button
            onClick={startDrawing}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            ¡Empezar a Dibujar!
          </button>
        ) : (
          <>
            <button
              onClick={resetDrawing}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600"
            >
              <RotateCw className="w-5 h-5 inline mr-2" />
              Reiniciar
            </button>
            <button
              onClick={viewPatternAgain}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600"
            >
              👁️ Ver Patrón
            </button>
          </>
        )}
      </div>

      {isComplete && !showPattern && (
        <div className="mt-6 p-6 bg-green-100 border-4 border-green-500 rounded-2xl text-center animate-pulse">
          <Check className="w-16 h-16 text-green-600 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-green-800 mb-2">
            ¡Perfecto! 🎉
          </h3>
          <p className="text-green-700 mb-4">
            Tiempo: {Math.round((Date.now() - startTime) / 1000)}s | Errores:{" "}
            {mistakes} | Vistas: {patternViewCount}
          </p>
          <button
            onClick={nextDrawing}
            className="px-8 py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 shadow-lg"
          >
            {currentDrawingIndex < currentLevel.drawings.length - 1
              ? "Siguiente Dibujo →"
              : currentLevelIndex < levels.length - 1
              ? "¡Siguiente Nivel! 🚀"
              : "¡Ver Mi Análisis! 🏆"}
          </button>
        </div>
      )}
    </div>
  );
};

const PsychologicalAnalysis = ({ stats, setGameMode }) => {
  const pixelStats = stats.pixelArt;

  // Calculate metrics
  const avgTime =
    pixelStats.timePerLevel.length > 0
      ? pixelStats.totalTime / pixelStats.timePerLevel.length
      : 0;
  const avgAttempts =
    pixelStats.attemptsPerLevel.length > 0
      ? pixelStats.totalAttempts / pixelStats.attemptsPerLevel.length
      : 0;
  const avgMistakes =
    pixelStats.mistakesPerLevel.length > 0
      ? pixelStats.mistakesPerLevel.reduce((a, b) => a + b, 0) /
        pixelStats.mistakesPerLevel.length
      : 0;
  const avgCompletion =
    pixelStats.completionRate.length > 0
      ? pixelStats.completionRate.reduce((a, b) => a + b, 0) /
        pixelStats.completionRate.length
      : 0;
  const avgPatternViews =
    pixelStats.patternsShown / pixelStats.timePerLevel.length;

  // Psychological Analysis
  const getConcentrationLevel = () => {
    if (avgMistakes < 5)
      return { level: "Excelente", score: 95, color: "green" };
    if (avgMistakes < 15)
      return { level: "Muy Buena", score: 85, color: "blue" };
    if (avgMistakes < 30) return { level: "Buena", score: 70, color: "yellow" };
    return { level: "En Desarrollo", score: 50, color: "orange" };
  };

  const getMemoryLevel = () => {
    if (avgPatternViews < 2)
      return { level: "Excelente", score: 95, color: "green" };
    if (avgPatternViews < 3)
      return { level: "Muy Buena", score: 80, color: "blue" };
    if (avgPatternViews < 5)
      return { level: "Buena", score: 65, color: "yellow" };
    return { level: "En Desarrollo", score: 50, color: "orange" };
  };

  const getPersistenceLevel = () => {
    if (avgAttempts < 1.5)
      return { level: "Excelente", score: 95, color: "green" };
    if (avgAttempts < 2.5)
      return { level: "Muy Buena", score: 80, color: "blue" };
    if (avgAttempts < 4) return { level: "Buena", score: 65, color: "yellow" };
    return { level: "En Desarrollo", score: 50, color: "orange" };
  };

  const getLearningStyle = () => {
    if (avgPatternViews < 2 && avgMistakes < 10) {
      return {
        style: "Visual Rápido",
        description:
          "Aprende observando una sola vez y tiene excelente memoria visual",
        strengths: [
          "Memoria fotográfica",
          "Atención al detalle",
          "Aprendizaje autónomo",
        ],
        recommendations: [
          "Desafíos visuales más complejos",
          "Juegos de patrones avanzados",
          "Rompecabezas de alto nivel",
        ],
      };
    } else if (avgAttempts < 2 && avgPatternViews >= 2) {
      return {
        style: "Metodológico",
        description:
          "Prefiere estudiar bien el patrón antes de actuar, minimizando errores",
        strengths: ["Planificación", "Precisión", "Pensamiento analítico"],
        recommendations: [
          "Estrategia y planificación",
          "Construcción paso a paso",
          "Proyectos de diseño",
        ],
      };
    } else if (avgAttempts >= 3) {
      return {
        style: "Experimental",
        description:
          "Aprende mediante prueba y error, persistente ante desafíos",
        strengths: ["Resiliencia", "Creatividad", "Resolución de problemas"],
        recommendations: [
          "Juegos de ensayo-error",
          "Desafíos progresivos",
          "Exploración libre",
        ],
      };
    } else {
      return {
        style: "Balanceado",
        description: "Combina observación con experimentación práctica",
        strengths: ["Adaptabilidad", "Versatilidad", "Equilibrio"],
        recommendations: [
          "Variedad de desafíos",
          "Proyectos mixtos",
          "Aprendizaje multisensorial",
        ],
      };
    }
  };

  const concentration = getConcentrationLevel();
  const memory = getMemoryLevel();
  const persistence = getPersistenceLevel();
  const learningStyle = getLearningStyle();

  const getFinalMessage = () => {
    const totalScore =
      (concentration.score + memory.score + persistence.score) / 3;
    if (totalScore >= 90) {
      return {
        title: "¡Maestro Supremo! 🏆",
        message:
          "Tu hijo demuestra habilidades excepcionales en concentración, memoria y persistencia. Está listo para desafíos de nivel avanzado.",
        emoji: "👑",
      };
    } else if (totalScore >= 75) {
      return {
        title: "¡Excelente Progreso! ⭐",
        message:
          "Muestra gran potencial y desarrollo en múltiples áreas cognitivas. Con práctica continua alcanzará la maestría.",
        emoji: "🌟",
      };
    } else if (totalScore >= 60) {
      return {
        title: "¡Buen Desarrollo! 💪",
        message:
          "Está construyendo bases sólidas. La persistencia y práctica lo llevarán al siguiente nivel.",
        emoji: "🚀",
      };
    } else {
      return {
        title: "¡Gran Potencial! 🌱",
        message:
          "Cada intento es aprendizaje. Con apoyo y práctica regular verá mejoras significativas.",
        emoji: "💡",
      };
    }
  };

  const finalMessage = getFinalMessage();

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Brain className="w-20 h-20 mx-auto text-purple-600 mb-4" />
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-2">
          Análisis Psicológico Completo
        </h1>
        <p className="text-gray-600">Evaluación de Habilidades Cognitivas</p>
      </div>

      {/* Final Message */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-6 mb-8 text-center">
        <div className="text-6xl mb-3">{finalMessage.emoji}</div>
        <h2 className="text-3xl font-bold mb-2">{finalMessage.title}</h2>
        <p className="text-lg opacity-90">{finalMessage.message}</p>
      </div>

      {/* Statistics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-purple-50 p-4 rounded-xl text-center">
          <Trophy className="w-8 h-8 mx-auto text-purple-600 mb-2" />
          <div className="text-2xl font-bold text-purple-600">
            {pixelStats.levelsCompleted}
          </div>
          <div className="text-sm text-gray-600">Niveles Completados</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl text-center">
          <Clock className="w-8 h-8 mx-auto text-blue-600 mb-2" />
          <div className="text-2xl font-bold text-blue-600">
            {Math.round(avgTime)}s
          </div>
          <div className="text-sm text-gray-600">Tiempo Promedio</div>
        </div>
        <div className="bg-green-50 p-4 rounded-xl text-center">
          <Target className="w-8 h-8 mx-auto text-green-600 mb-2" />
          <div className="text-2xl font-bold text-green-600">
            {Math.round(avgCompletion * 100)}%
          </div>
          <div className="text-sm text-gray-600">Precisión</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-xl text-center">
          <Star className="w-8 h-8 mx-auto text-yellow-600 mb-2" />
          <div className="text-2xl font-bold text-yellow-600">
            {avgAttempts.toFixed(1)}
          </div>
          <div className="text-sm text-gray-600">Intentos Promedio</div>
        </div>
      </div>

      {/* Skill Ratings */}
      <div className="space-y-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          📊 Evaluación de Habilidades
        </h3>

        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-700">
              🎯 Concentración
            </span>
            <span className={`text-${concentration.color}-600 font-bold`}>
              {concentration.level}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`bg-${concentration.color}-500 h-3 rounded-full transition-all`}
              style={{ width: `${concentration.score}%` }}
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-700">
              🧠 Memoria Visual
            </span>
            <span className={`text-${memory.color}-600 font-bold`}>
              {memory.level}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`bg-${memory.color}-500 h-3 rounded-full transition-all`}
              style={{ width: `${memory.score}%` }}
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-700">💪 Persistencia</span>
            <span className={`text-${persistence.color}-600 font-bold`}>
              {persistence.level}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`bg-${persistence.color}-500 h-3 rounded-full transition-all`}
              style={{ width: `${persistence.score}%` }}
            />
          </div>
        </div>
      </div>

      {/* Learning Style */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-blue-600" />
          Estilo de Aprendizaje
        </h3>
        <div className="bg-white p-4 rounded-xl mb-4">
          <h4 className="text-xl font-bold text-blue-600 mb-2">
            {learningStyle.style}
          </h4>
          <p className="text-gray-700">{learningStyle.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-green-700 mb-2">
              ✅ Fortalezas Identificadas:
            </h5>
            <ul className="space-y-1">
              {learningStyle.strengths.map((strength, i) => (
                <li key={i} className="text-gray-700">
                  • {strength}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-700 mb-2">
              🎯 Actividades Recomendadas:
            </h5>
            <ul className="space-y-1">
              {learningStyle.recommendations.map((rec, i) => (
                <li key={i} className="text-gray-700">
                  • {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Areas for Improvement */}
      <div className="bg-yellow-50 p-6 rounded-2xl mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="w-7 h-7 text-yellow-600" />
          Áreas de Mejora y Desarrollo
        </h3>
        <div className="space-y-3">
          {avgMistakes > 15 && (
            <div className="bg-white p-4 rounded-xl">
              <h4 className="font-bold text-orange-600 mb-2">🎯 Precisión</h4>
              <p className="text-gray-700 text-sm">
                Trabajar en reducir errores observando más detenidamente antes
                de actuar. Practicar la paciencia antes de empezar a dibujar.
              </p>
            </div>
          )}
          {avgPatternViews > 4 && (
            <div className="bg-white p-4 rounded-xl">
              <h4 className="font-bold text-blue-600 mb-2">
                🧠 Memoria de Trabajo
              </h4>
              <p className="text-gray-700 text-sm">
                Fortalecer la retención visual con ejercicios de memoria.
                Intentar recordar secciones del patrón en lugar de verlo
                completo múltiples veces.
              </p>
            </div>
          )}
          {avgAttempts > 3 && (
            <div className="bg-white p-4 rounded-xl">
              <h4 className="font-bold text-purple-600 mb-2">
                📋 Planificación
              </h4>
              <p className="text-gray-700 text-sm">
                Desarrollar estrategias antes de actuar. Dividir tareas
                complejas en pasos más pequeños y manejables.
              </p>
            </div>
          )}
          {concentration.score < 70 && (
            <div className="bg-white p-4 rounded-xl">
              <h4 className="font-bold text-red-600 mb-2">
                ⏰ Concentración Sostenida
              </h4>
              <p className="text-gray-700 text-sm">
                Practicar períodos más largos de atención enfocada. Eliminar
                distracciones durante las actividades de aprendizaje.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Recommendations for Parents */}
      <div className="bg-green-50 p-6 rounded-2xl mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Award className="w-7 h-7 text-green-600" />
          Recomendaciones para Potenciar el Desarrollo
        </h3>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded-xl">
            <h4 className="font-bold text-green-700 mb-2">
              🎮 Gamificación del Aprendizaje
            </h4>
            <p className="text-sm">
              Convertir tareas cotidianas en desafíos con sistema de puntos.
              Esto refuerza la motivación intrínseca.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h4 className="font-bold text-blue-700 mb-2">
              ⏰ Rutinas Consistentes
            </h4>
            <p className="text-sm">
              Establecer horarios fijos para práctica de 15-20 minutos diarios.
              La consistencia es clave para el desarrollo cognitivo.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h4 className="font-bold text-purple-700 mb-2">
              🎯 Desafíos Progresivos
            </h4>
            <p className="text-sm">
              Aumentar dificultad gradualmente. Celebrar pequeños logros para
              construir confianza y autoestima.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h4 className="font-bold text-orange-700 mb-2">
              👨‍👩‍👦 Participación Activa
            </h4>
            <p className="text-sm">
              Jugar juntos y modelar estrategias de resolución de problemas. El
              aprendizaje social es muy efectivo a esta edad.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h4 className="font-bold text-pink-700 mb-2">
              🌟 Refuerzo Positivo
            </h4>
            <p className="text-sm">
              Enfocarse en el esfuerzo más que en el resultado. Frases como "Me
              gusta cómo pensaste en eso" son más efectivas que "Eres muy
              inteligente".
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          🚀 Próximos Pasos Sugeridos
        </h3>
        <ol className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="font-bold text-purple-600">1.</span>
            <span>
              Practicar 15-20 minutos diarios con descansos cada 10 minutos
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-purple-600">2.</span>
            <span>
              Explorar juegos de lógica y programación para niños (Scratch Jr,
              Lightbot)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-purple-600">3.</span>
            <span>
              Rompecabezas físicos de 100-200 piezas para desarrollo espacial
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-purple-600">4.</span>
            <span>
              Juegos de construcción (LEGO, Minecraft) para creatividad y
              planificación
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-purple-600">5.</span>
            <span>Repetir este test mensualmente para trackear progreso</span>
          </li>
        </ol>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setGameMode("menu")}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
        >
          Volver al Menú Principal
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>
          💡 Este análisis está basado en el desempeño observado durante el
          juego.
        </p>
        <p>
          Para una evaluación profesional completa, consulte con un psicólogo
          educativo.
        </p>
      </div>
    </div>
  );
};

const RobotGame = ({ levels, setGameMode, setStars }) => {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [commands, setCommands] = useState([]);
  const [robotPos, setRobotPos] = useState({ x: 0, y: 0, dir: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showError, setShowError] = useState(false);

  const currentLevel = levels[currentLevelIndex];

  useEffect(() => {
    resetLevel();
  }, [currentLevelIndex]);

  const resetLevel = () => {
    setRobotPos(currentLevel.start);
    setCommands([]);
    setIsComplete(false);
    setShowError(false);
    setIsRunning(false);
  };

  const addCommand = (cmd) => {
    if (commands.length < currentLevel.maxCommands && !isRunning) {
      setCommands([...commands, cmd]);
    }
  };

  const removeLastCommand = () => {
    setCommands(commands.slice(0, -1));
  };

  const executeCommands = async () => {
    setIsRunning(true);
    setShowError(false);
    let pos = { ...currentLevel.start };

    for (let cmd of commands) {
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (cmd === "forward") {
        const newPos = { ...pos };
        if (pos.dir === 0) newPos.x++;
        else if (pos.dir === 1) newPos.y++;
        else if (pos.dir === 2) newPos.x--;
        else if (pos.dir === 3) newPos.y--;

        if (
          newPos.x < 0 ||
          newPos.x >= currentLevel.gridSize ||
          newPos.y < 0 ||
          newPos.y >= currentLevel.gridSize ||
          currentLevel.obstacles.some(
            (obs) => obs[0] === newPos.x && obs[1] === newPos.y
          )
        ) {
          setShowError(true);
          setIsRunning(false);
          return;
        }
        pos = newPos;
      } else if (cmd === "turnRight") {
        pos.dir = (pos.dir + 1) % 4;
      } else if (cmd === "turnLeft") {
        pos.dir = (pos.dir + 3) % 4;
      }

      setRobotPos({ ...pos });
    }

    if (pos.x === currentLevel.goal.x && pos.y === currentLevel.goal.y) {
      setIsComplete(true);
    } else {
      setShowError(true);
    }
    setIsRunning(false);
  };

  const nextLevel = () => {
    if (isComplete) {
      setStars((prev) => prev + 2);
    }
    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
    } else {
      setGameMode("menu");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setGameMode("menu")}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 font-semibold"
        >
          ← Menú
        </button>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600">
            Nivel {currentLevelIndex + 1}: {currentLevel.name}
          </h2>
          <p className="text-gray-600 mt-1">{currentLevel.description}</p>
          {currentLevel.hint && (
            <p className="text-sm text-purple-600 mt-1">
              💡 {currentLevel.hint}
            </p>
          )}
        </div>
        <div className="flex gap-1">
          {[...Array(currentLevel.difficulty)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="mb-4 bg-blue-50 rounded-lg p-3">
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span className="font-semibold">
            Progreso: Nivel {currentLevelIndex + 1} de {levels.length}
          </span>
          <span>
            {Math.round((currentLevelIndex / levels.length) * 100)}% completado
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all"
            style={{ width: `${(currentLevelIndex / levels.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4 text-gray-700">
            Campo de Juego
          </h3>
          <div className="inline-block border-4 border-blue-400 rounded-lg p-2 bg-gray-100">
            {[...Array(currentLevel.gridSize)].map((_, y) => (
              <div key={y} className="flex">
                {[...Array(currentLevel.gridSize)].map((_, x) => {
                  const isRobot = robotPos.x === x && robotPos.y === y;
                  const isGoal =
                    currentLevel.goal.x === x && currentLevel.goal.y === y;
                  const isObstacle = currentLevel.obstacles.some(
                    (obs) => obs[0] === x && obs[1] === y
                  );

                  return (
                    <div
                      key={x}
                      className={`w-12 h-12 border border-gray-300 flex items-center justify-center text-2xl ${
                        isObstacle ? "bg-red-400" : "bg-white"
                      }`}
                    >
                      {isGoal && "⭐"}
                      {isRobot && (
                        <span
                          className="text-3xl"
                          style={{
                            transform: `rotate(${robotPos.dir * 90}deg)`,
                          }}
                        >
                          🤖
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-700">
            Comandos ({commands.length}/{currentLevel.maxCommands})
          </h3>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <button
              onClick={() => addCommand("forward")}
              disabled={
                isRunning || commands.length >= currentLevel.maxCommands
              }
              className="p-4 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowUp className="w-6 h-6 mx-auto mb-1" />
              Avanzar
            </button>
            <button
              onClick={() => addCommand("turnLeft")}
              disabled={
                isRunning || commands.length >= currentLevel.maxCommands
              }
              className="p-4 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-6 h-6 mx-auto mb-1" />
              Girar ←
            </button>
            <button
              onClick={() => addCommand("turnRight")}
              disabled={
                isRunning || commands.length >= currentLevel.maxCommands
              }
              className="p-4 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-6 h-6 mx-auto mb-1" />
              Girar →
            </button>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 min-h-32 mb-4">
            <div className="flex flex-wrap gap-2">
              {commands.map((cmd, i) => (
                <span
                  key={i}
                  className="px-3 py-2 bg-blue-200 rounded-lg font-semibold text-sm"
                >
                  {i + 1}.{" "}
                  {cmd === "forward"
                    ? "⬆️ Avanzar"
                    : cmd === "turnLeft"
                    ? "↪️ Girar ←"
                    : "↩️ Girar →"}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={removeLastCommand}
              disabled={isRunning || commands.length === 0}
              className="flex-1 px-4 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Borrar Último
            </button>
            <button
              onClick={resetLevel}
              disabled={isRunning}
              className="flex-1 px-4 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 disabled:opacity-50"
            >
              <RotateCw className="w-5 h-5 inline mr-2" />
              Reiniciar
            </button>
          </div>

          <button
            onClick={executeCommands}
            disabled={isRunning || commands.length === 0}
            className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Play className="w-6 h-6 inline mr-2" />
            {isRunning ? "Ejecutando..." : "¡Ejecutar Programa!"}
          </button>
        </div>
      </div>

      {showError && !isComplete && (
        <div className="mt-6 p-4 bg-red-100 border-2 border-red-500 rounded-xl text-center">
          <X className="w-12 h-12 text-red-600 mx-auto mb-2" />
          <p className="text-red-800 font-bold">¡Ups! Intenta de nuevo</p>
          <p className="text-red-600 text-sm">
            El robot chocó o no llegó a la meta
          </p>
        </div>
      )}

      {isComplete && (
        <div className="mt-6 p-6 bg-green-100 border-4 border-green-500 rounded-2xl text-center animate-pulse">
          <Check className="w-16 h-16 text-green-600 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            ¡Excelente! 🎉
          </h3>
          <p className="text-green-700 mb-4">¡El robot llegó a la meta!</p>
          <button
            onClick={nextLevel}
            className="px-8 py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 shadow-lg"
          >
            {currentLevelIndex < levels.length - 1
              ? "Siguiente Nivel →"
              : "¡Eres un Maestro Programador! 🏆"}
          </button>
        </div>
      )}
    </div>
  );
};

// ===== LECTURA CRÍTICA =====
const levelColors = [
  { bg: "from-green-400 to-emerald-600", badge: "bg-green-100 text-green-800" },
  { bg: "from-yellow-400 to-orange-500", badge: "bg-orange-100 text-orange-800" },
  { bg: "from-purple-500 to-indigo-600", badge: "bg-purple-100 text-purple-800" },
];

const ReadingGame = ({ setGameMode, setStars, readingStats, setReadingStats }) => {
  const [phase, setPhase] = useState("levelSelect");
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [readingStartTime, setReadingStartTime] = useState(null);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const storiesByLevel = [1, 2, 3].map((lvl) =>
    readingStories.filter((s) => s.level === lvl)
  );

  const selectLevel = (level) => {
    setSelectedLevel(level);
    setPhase("storySelect");
  };

  const selectStory = (story) => {
    setSelectedStory(story);
    setReadingStartTime(Date.now());
    setPhase("reading");
  };

  const startQuestions = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowHint(false);
    setQuestionAnswered(false);
    setIsCorrect(null);
    setStartTime(Date.now());
    setPhase("questions");
  };

  const handleAnswer = (answerIndex) => {
    if (questionAnswered) return;
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === selectedStory.questions[currentQuestion].correct;
    setIsCorrect(correct);
    setQuestionAnswered(true);
    if (!correct) setShowHint(true);
  };

  const nextQuestion = () => {
    const newAnswers = [
      ...answers,
      {
        questionIndex: currentQuestion,
        selectedAnswer,
        correct: isCorrect,
        paragraphRef: selectedStory.questions[currentQuestion].paragraphRef,
      },
    ];
    setAnswers(newAnswers);

    if (currentQuestion < selectedStory.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowHint(false);
      setQuestionAnswered(false);
      setIsCorrect(null);
    } else {
      const correctCount = newAnswers.filter((a) => a.correct).length;
      const percentage = Math.round((correctCount / selectedStory.questions.length) * 100);
      const earnedStars = percentage === 100 ? 3 : percentage >= 60 ? 2 : 1;
      setStars((prev) => prev + earnedStars);

      const now = Date.now();
      const sessionData = {
        storyId: selectedStory.id,
        storyTitle: selectedStory.title,
        level: selectedStory.level,
        date: new Date().toLocaleDateString("es-CO"),
        timestamp: now,
        correct: correctCount,
        total: selectedStory.questions.length,
        percentage,
        stars: earnedStars,
        readingSeconds: readingStartTime ? Math.floor((startTime - readingStartTime) / 1000) : 0,
        quizSeconds: Math.floor((now - startTime) / 1000),
      };

      const newStats = {
        sessions: [...(readingStats.sessions || []), sessionData],
        totalStories: (readingStats.totalStories || 0) + 1,
        totalCorrect: (readingStats.totalCorrect || 0) + correctCount,
        totalQuestions: (readingStats.totalQuestions || 0) + selectedStory.questions.length,
      };
      setReadingStats(newStats);
      try {
        localStorage.setItem("samu_readingStats", JSON.stringify(newStats));
      } catch (e) {}

      setPhase("results");
    }
  };

  // ─── Selección de nivel ───────────────────────────────────────────────────
  if (phase === "levelSelect") {
    const levelNames = ["Básico", "Intermedio", "Avanzado"];
    const levelDescs = [
      "Comprensión literal · Preguntas directas sobre el texto",
      "Comprensión inferencial · ¿Qué hay entre líneas?",
      "Pensamiento crítico · Reflexión y análisis profundo",
    ];
    const levelEmojis = ["📗", "📙", "📕"];
    const levelBadges = ["⭐ Ideal para comenzar", "⭐⭐ Un poco más difícil", "⭐⭐⭐ Para mentes curiosas"];
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => setGameMode("menu")} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">←</button>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">📚 Lectura Crítica</h2>
            <p className="text-gray-500">Elige tu nivel de lectura</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((level, i) => (
            <button
              key={level}
              onClick={() => selectLevel(level)}
              className={`bg-gradient-to-br ${levelColors[i].bg} text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left`}
            >
              <div className="text-5xl mb-3">{levelEmojis[i]}</div>
              <h3 className="text-xl font-bold mb-1">Nivel {level}: {levelNames[i]}</h3>
              <p className="text-sm opacity-90 mb-2">{storiesByLevel[i].length} cuentos</p>
              <p className="text-xs opacity-80 mb-4">{levelDescs[i]}</p>
              <div className="text-xs bg-white/20 rounded-full px-3 py-1 inline-block font-semibold">
                {levelBadges[i]}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ─── Selección de cuento ──────────────────────────────────────────────────
  if (phase === "storySelect") {
    const stories = storiesByLevel[selectedLevel - 1];
    const color = levelColors[selectedLevel - 1];
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => setPhase("levelSelect")} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">←</button>
          <h2 className="text-2xl font-bold text-gray-800">Nivel {selectedLevel} · Elige un cuento</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stories.map((story) => {
            const sessions = (readingStats.sessions || []).filter((s) => s.storyId === story.id);
            const best = sessions.length > 0
              ? sessions.reduce((b, s) => (s.percentage > b.percentage ? s : b), sessions[0])
              : null;
            return (
              <button
                key={story.id}
                onClick={() => selectStory(story)}
                className={`bg-gradient-to-br ${color.bg} text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left`}
              >
                <div className="text-5xl mb-3">{story.emoji}</div>
                <h3 className="text-lg font-bold mb-1">{story.title}</h3>
                <p className="text-xs opacity-80 mb-3">
                  {story.paragraphs.length} párrafos · {story.questions.length} preguntas
                </p>
                {best && (
                  <div className="text-xs bg-white/20 rounded-full px-2 py-1 inline-block font-semibold">
                    {"⭐".repeat(best.stars)} Mejor: {best.percentage}%
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ─── Lectura del cuento ───────────────────────────────────────────────────
  if (phase === "reading") {
    const color = levelColors[selectedLevel - 1];
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setPhase("storySelect")} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">←</button>
            <span className="text-4xl">{selectedStory.emoji}</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{selectedStory.title}</h2>
              <span className={`text-xs font-semibold ${color.badge} px-2 py-1 rounded-full`}>
                Nivel {selectedStory.level}: {selectedStory.levelName}
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-500">📖 Lee con cuidado</div>
        </div>

        <div className="space-y-5 mb-8">
          {selectedStory.paragraphs.map((para, idx) => (
            <div key={idx} className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="text-xs font-bold text-gray-400 mt-1 w-5 flex-shrink-0">{idx + 1}</span>
              <p className="text-gray-700 leading-relaxed text-lg">{para}</p>
            </div>
          ))}
        </div>

        <button
          onClick={startQuestions}
          className={`w-full bg-gradient-to-r ${color.bg} text-white py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-lg`}
        >
          ✅ ¡Ya leí el cuento! Responder preguntas
        </button>
      </div>
    );
  }

  // ─── Preguntas ────────────────────────────────────────────────────────────
  if (phase === "questions") {
    const question = selectedStory.questions[currentQuestion];
    const color = levelColors[selectedLevel - 1];
    const letters = ["A", "B", "C"];
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{selectedStory.emoji}</span>
            <h2 className="text-xl font-bold text-gray-800">{selectedStory.title}</h2>
          </div>
          <div className="text-sm text-gray-600 font-semibold">
            {currentQuestion + 1} / {selectedStory.questions.length}
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div
            className={`h-3 rounded-full bg-gradient-to-r ${color.bg} transition-all duration-500`}
            style={{ width: `${(currentQuestion / selectedStory.questions.length) * 100}%` }}
          />
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <p className="text-xl font-semibold text-gray-800">{question.question}</p>
        </div>

        <div className="space-y-3 mb-6">
          {question.options.map((option, idx) => {
            let cls = "w-full text-left p-4 rounded-xl border-2 font-medium transition-all ";
            if (!questionAnswered) {
              cls += "border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 cursor-pointer";
            } else if (idx === question.correct) {
              cls += "border-green-500 bg-green-50 text-green-800";
            } else if (idx === selectedAnswer && !isCorrect) {
              cls += "border-red-400 bg-red-50 text-red-700";
            } else {
              cls += "border-gray-200 text-gray-400 cursor-default";
            }
            return (
              <button key={idx} onClick={() => handleAnswer(idx)} className={cls} disabled={questionAnswered}>
                <span className="font-bold mr-3">{letters[idx]}.</span>
                {option}
                {questionAnswered && idx === question.correct && <span className="ml-2 text-green-600">✓</span>}
                {questionAnswered && idx === selectedAnswer && !isCorrect && <span className="ml-2 text-red-500">✗</span>}
              </button>
            );
          })}
        </div>

        {questionAnswered && (
          <div className={`rounded-2xl p-4 mb-4 ${isCorrect ? "bg-green-50 border-2 border-green-300" : "bg-orange-50 border-2 border-orange-300"}`}>
            {isCorrect ? (
              <p className="text-green-800 font-bold text-lg">🎉 ¡Correcto! ¡Muy bien!</p>
            ) : (
              <div>
                <p className="text-orange-800 font-bold text-lg mb-1">
                  💡 ¡Casi! La respuesta correcta es la {letters[question.correct]}.
                </p>
                <p className="text-orange-700 text-sm font-semibold">
                  📖 Pista: Lee el párrafo {question.paragraphRef + 1} nuevamente:
                </p>
              </div>
            )}
          </div>
        )}

        {showHint && (
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-4 mb-4">
            <p className="text-yellow-700 font-bold text-sm mb-2">📌 Párrafo {question.paragraphRef + 1}:</p>
            <p className="text-gray-700 italic leading-relaxed text-sm">
              "{selectedStory.paragraphs[question.paragraphRef]}"
            </p>
          </div>
        )}

        {questionAnswered && (
          <button
            onClick={nextQuestion}
            className={`w-full bg-gradient-to-r ${color.bg} text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg`}
          >
            {currentQuestion < selectedStory.questions.length - 1 ? "Siguiente pregunta →" : "Ver resultados 🏆"}
          </button>
        )}
      </div>
    );
  }

  // ─── Resultados ───────────────────────────────────────────────────────────
  if (phase === "results") {
    const correctCount = answers.filter((a) => a.correct).length;
    const percentage = Math.round((correctCount / selectedStory.questions.length) * 100);
    const earnedStars = percentage === 100 ? 3 : percentage >= 60 ? 2 : 1;
    const color = levelColors[selectedLevel - 1];
    const trophy = percentage === 100 ? "🏆" : percentage >= 60 ? "🎉" : "💪";
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto text-center">
        <div className="text-6xl mb-4">{trophy}</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-1">¡Cuento terminado!</h2>
        <p className="text-gray-500 mb-4 text-lg">{selectedStory.title}</p>

        <div className="text-4xl mb-6">
          {"⭐".repeat(earnedStars)}{"☆".repeat(3 - earnedStars)}
        </div>

        {/* Tarjetas de resumen: correctas / % / errores */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 text-center">
            <div className="text-4xl font-bold text-green-700">{correctCount}</div>
            <div className="text-sm text-green-600 font-semibold mt-1">✓ Correctas</div>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 text-center">
            <div
              className="text-4xl font-bold"
              style={{ color: percentage >= 80 ? "#16a34a" : percentage >= 60 ? "#d97706" : "#dc2626" }}
            >
              {percentage}%
            </div>
            <div className="text-sm text-gray-500 font-semibold mt-1">Acierto</div>
          </div>
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-center">
            <div className="text-4xl font-bold text-red-600">
              {selectedStory.questions.length - correctCount}
            </div>
            <div className="text-sm text-red-500 font-semibold mt-1">✗ Errores</div>
          </div>
        </div>

        <div className={`rounded-2xl p-4 mb-6 text-left ${percentage === 100 ? "bg-green-50 text-green-800" : percentage >= 60 ? "bg-yellow-50 text-yellow-800" : "bg-orange-50 text-orange-800"}`}>
          {percentage === 100 && <p className="font-bold">🌟 ¡Perfecto! Sin ningún error. ¡Eres un lector increíble!</p>}
          {percentage >= 60 && percentage < 100 && <p className="font-bold">👍 ¡Muy bien! Revisa los errores para mejorar la próxima vez.</p>}
          {percentage < 60 && <p className="font-bold">📚 ¡Buen intento! Practica leyendo más despacio. ¿Quieres intentarlo de nuevo?</p>}
        </div>

        {/* Detalle pregunta por pregunta */}
        <p className="text-sm font-bold text-gray-500 mb-2 text-left">Detalle por pregunta:</p>
        <div className="grid grid-cols-5 gap-2 mb-6">
          {answers.map((a, i) => (
            <div key={i} className={`rounded-xl p-3 text-center ${a.correct ? "bg-green-100" : "bg-red-100"}`}>
              <div className="font-bold text-sm text-gray-600">P{i + 1}</div>
              <div className="text-lg font-bold">{a.correct ? <span className="text-green-600">✓</span> : <span className="text-red-500">✗</span>}</div>
              {!a.correct && (
                <div className="text-xs text-red-400 font-semibold">§{a.paragraphRef + 1}</div>
              )}
            </div>
          ))}
        </div>
        {answers.some((a) => !a.correct) && (
          <p className="text-xs text-gray-400 mb-4 text-left">§N = párrafo donde estaba la respuesta correcta</p>
        )}

        <div className="flex flex-col md:flex-row gap-3">
          <button
            onClick={() => { setPhase("reading"); setAnswers([]); setReadingStartTime(Date.now()); }}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-colors"
          >
            🔄 Leer otra vez
          </button>
          <button
            onClick={() => setPhase("storySelect")}
            className={`flex-1 bg-gradient-to-r ${color.bg} text-white py-3 rounded-xl font-bold hover:scale-105 transition-transform`}
          >
            📚 Otro cuento
          </button>
          <button
            onClick={() => setGameMode("menu")}
            className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors"
          >
            🏠 Menú principal
          </button>
        </div>
      </div>
    );
  }

  return null;
};

// ===== ESTADÍSTICAS PARA PADRES =====
const ReadingStats = ({ readingStats, setGameMode }) => {
  const sessions = readingStats.sessions || [];
  const totalStories = readingStats.totalStories || 0;
  const totalCorrect = readingStats.totalCorrect || 0;
  const totalQuestions = readingStats.totalQuestions || 0;
  const overallPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const byLevel = [1, 2, 3].map((level) => {
    const lvlSessions = sessions.filter((s) => s.level === level);
    const avg = lvlSessions.length > 0
      ? Math.round(lvlSessions.reduce((sum, s) => sum + s.percentage, 0) / lvlSessions.length)
      : 0;
    return { level, lvlSessions, avg };
  });

  const levelNames = ["Básico", "Intermedio", "Avanzado"];
  const levelEmojis = ["📗", "📙", "📕"];

  // ── Racha de días consecutivos ────────────────────────────────────────────
  const uniqueDays = [...new Set(sessions.map((s) => s.date))];
  let streak = 0;
  if (uniqueDays.length > 0) {
    const todayStr = new Date().toLocaleDateString("es-CO");
    const yestStr = (() => { const d = new Date(); d.setDate(d.getDate() - 1); return d.toLocaleDateString("es-CO"); })();
    const anchor = uniqueDays.includes(todayStr) ? new Date() : uniqueDays.includes(yestStr) ? (() => { const d = new Date(); d.setDate(d.getDate() - 1); return d; })() : null;
    if (anchor) {
      for (let i = 0; i < 365; i++) {
        const d = new Date(anchor);
        d.setDate(d.getDate() - i);
        if (uniqueDays.includes(d.toLocaleDateString("es-CO"))) streak++;
        else break;
      }
    }
  }

  // ── Meta semanal (lunes a domingo actual) ────────────────────────────────
  const weeklyGoal = 3;
  const monday = (() => { const d = new Date(); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); d.setHours(0,0,0,0); return d; })();
  const thisWeekSessions = sessions.filter((s) => new Date(s.timestamp) >= monday).length;

  // ── Última sesión ─────────────────────────────────────────────────────────
  const lastSession = sessions.length > 0 ? sessions[sessions.length - 1] : null;
  const daysSinceLast = lastSession
    ? Math.floor((Date.now() - lastSession.timestamp) / 86400000)
    : null;

  const loadDemoData = () => {
    const makeDate = (daysAgo) => { const d = new Date(); d.setDate(d.getDate() - daysAgo); return d.toLocaleDateString("es-CO"); };
    const makeTs  = (daysAgo) => { const d = new Date(); d.setDate(d.getDate() - daysAgo); return d.getTime(); };
    const demo = [
      { storyId:"leon-raton",      storyTitle:"El León y el Ratón",        level:1, date:makeDate(13), timestamp:makeTs(13), correct:3, total:4, percentage:75,  stars:2, readingSeconds:95,  quizSeconds:45 },
      { storyId:"tortuga-liebre",  storyTitle:"La Tortuga y la Liebre",    level:1, date:makeDate(11), timestamp:makeTs(11), correct:4, total:4, percentage:100, stars:3, readingSeconds:80,  quizSeconds:38 },
      { storyId:"patito-feo",      storyTitle:"El Patito Feo",             level:1, date:makeDate(9),  timestamp:makeTs(9),  correct:3, total:4, percentage:75,  stars:2, readingSeconds:110, quizSeconds:50 },
      { storyId:"cigarra-hormiga", storyTitle:"La Cigarra y la Hormiga",   level:2, date:makeDate(7),  timestamp:makeTs(7),  correct:3, total:5, percentage:60,  stars:2, readingSeconds:145, quizSeconds:65 },
      { storyId:"nino-lobo",       storyTitle:"El Niño que Gritó Lobo",    level:2, date:makeDate(5),  timestamp:makeTs(5),  correct:3, total:4, percentage:75,  stars:2, readingSeconds:130, quizSeconds:55 },
      { storyId:"leon-raton",      storyTitle:"El León y el Ratón",        level:1, date:makeDate(3),  timestamp:makeTs(3),  correct:4, total:4, percentage:100, stars:3, readingSeconds:75,  quizSeconds:35 },
      { storyId:"cigarra-hormiga", storyTitle:"La Cigarra y la Hormiga",   level:2, date:makeDate(1),  timestamp:makeTs(1),  correct:4, total:5, percentage:80,  stars:2, readingSeconds:120, quizSeconds:48 },
      { storyId:"arbol-generoso",  storyTitle:"El Árbol Generoso",         level:3, date:makeDate(0),  timestamp:makeTs(0),  correct:3, total:5, percentage:60,  stars:2, readingSeconds:180, quizSeconds:75 },
    ];
    const st = { sessions: demo, totalStories: demo.length, totalCorrect: demo.reduce((s,x)=>s+x.correct,0), totalQuestions: demo.reduce((s,x)=>s+x.total,0) };
    localStorage.setItem("samu_readingStats", JSON.stringify(st));
    window.location.reload();
  };

  const clearStats = () => {
    if (window.confirm("¿Seguro que quieres borrar todas las estadísticas de lectura?")) {
      localStorage.removeItem("samu_readingStats");
      window.location.reload();
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
      {/* Encabezado */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={() => setGameMode("menu")} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">←</button>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">📊 Estadísticas de Lectura</h2>
            <p className="text-gray-500 text-sm">Para padres · Seguimiento del progreso</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {sessions.length === 0 && (
            <button onClick={loadDemoData} className="text-xs bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-3 py-1.5 rounded-full font-semibold">
              Ver ejemplo de datos
            </button>
          )}
          {sessions.length > 0 && (
            <button onClick={clearStats} className="text-xs text-red-400 hover:text-red-600 underline">
              Borrar datos
            </button>
          )}
        </div>
      </div>

      {sessions.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-xl font-semibold text-gray-600">Aún no hay sesiones registradas.</p>
          <p className="text-sm mt-2 mb-6">Las estadísticas aparecerán aquí después de que Samuel complete cuentos.</p>
          <button onClick={loadDemoData} className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
            👀 Ver cómo lucirán las estadísticas
          </button>
        </div>
      ) : (
        <>
          {/* ── Hábito y seguimiento semanal ─────────────────────────────── */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Racha */}
            <div className={`rounded-2xl p-4 text-center border-2 ${streak >= 3 ? "bg-orange-50 border-orange-300" : "bg-gray-50 border-gray-200"}`}>
              <div className={`text-4xl font-bold ${streak >= 3 ? "text-orange-500" : "text-gray-500"}`}>
                {streak > 0 ? `🔥 ${streak}` : "—"}
              </div>
              <div className={`text-sm font-semibold mt-1 ${streak >= 3 ? "text-orange-600" : "text-gray-500"}`}>
                Día{streak !== 1 ? "s" : ""} seguido{streak !== 1 ? "s" : ""}
              </div>
              {streak === 0 && <div className="text-xs text-gray-400 mt-1">Lee hoy para empezar</div>}
            </div>

            {/* Meta semanal */}
            <div className={`rounded-2xl p-4 text-center border-2 ${thisWeekSessions >= weeklyGoal ? "bg-green-50 border-green-300" : "bg-yellow-50 border-yellow-300"}`}>
              <div className="flex justify-center gap-1 mb-1">
                {Array.from({ length: weeklyGoal }).map((_, i) => (
                  <span key={i} className={`text-2xl ${i < thisWeekSessions ? "opacity-100" : "opacity-25"}`}>📗</span>
                ))}
              </div>
              <div className={`text-sm font-semibold ${thisWeekSessions >= weeklyGoal ? "text-green-700" : "text-yellow-700"}`}>
                {thisWeekSessions >= weeklyGoal ? "¡Meta semanal lograda! 🎉" : `${thisWeekSessions} de ${weeklyGoal} cuentos esta semana`}
              </div>
            </div>

            {/* Última sesión */}
            <div className={`rounded-2xl p-4 text-center border-2 ${daysSinceLast === 0 ? "bg-green-50 border-green-300" : daysSinceLast === 1 ? "bg-yellow-50 border-yellow-200" : "bg-red-50 border-red-200"}`}>
              <div className={`text-3xl font-bold ${daysSinceLast === 0 ? "text-green-600" : daysSinceLast === 1 ? "text-yellow-600" : "text-red-500"}`}>
                {daysSinceLast === 0 ? "Hoy ✓" : daysSinceLast === 1 ? "Ayer" : `Hace ${daysSinceLast}d`}
              </div>
              <div className="text-sm text-gray-500 mt-1">Última lectura</div>
              {daysSinceLast > 2 && <div className="text-xs text-red-400 mt-1">¡Es hora de leer!</div>}
            </div>
          </div>

          {/* ── Tarjetas de rendimiento global ───────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-purple-50 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-purple-700">{totalStories}</div>
              <div className="text-sm text-purple-600">Cuentos leídos</div>
            </div>
            <div className="bg-green-50 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-green-700">{overallPct}%</div>
              <div className="text-sm text-green-600">✓ Aciertos global</div>
            </div>
            <div className="bg-red-50 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-red-600">{totalQuestions - totalCorrect}</div>
              <div className="text-sm text-red-500">✗ Errores total</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-700">
                {sessions.filter((s) => s.stars === 3).length}
              </div>
              <div className="text-sm text-blue-600">🏆 Sin errores</div>
            </div>
          </div>

          {/* Progreso por nivel con errores */}
          <h3 className="text-lg font-bold text-gray-700 mb-4">Progreso por nivel</h3>
          <div className="space-y-4 mb-8">
            {byLevel.map(({ level, lvlSessions, avg }) => {
              const lvlErrors = lvlSessions.reduce((sum, s) => sum + (s.total - s.correct), 0);
              const lvlCorrect = lvlSessions.reduce((sum, s) => sum + s.correct, 0);
              return (
                <div key={level} className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-700">
                      {levelEmojis[level - 1]} Nivel {level}: {levelNames[level - 1]}
                    </span>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-green-600 font-semibold">✓ {lvlCorrect}</span>
                      <span className="text-red-500 font-semibold">✗ {lvlErrors}</span>
                      <span className="text-gray-500">{lvlSessions.length} ses. · {avg}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-red-100 rounded-full h-3 relative overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
                      style={{ width: `${avg}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Historial de sesiones detallado */}
          <h3 className="text-lg font-bold text-gray-700 mb-4">Historial de sesiones</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-400 border-b border-gray-200">
                  <th className="text-left pb-2 font-semibold">Cuento</th>
                  <th className="text-center pb-2 font-semibold">Fecha</th>
                  <th className="text-center pb-2 font-semibold text-green-600">✓ Aciertos</th>
                  <th className="text-center pb-2 font-semibold text-red-500">✗ Errores</th>
                  <th className="text-center pb-2 font-semibold">%</th>
                  <th className="text-center pb-2 font-semibold">Tiempo lectura</th>
                  <th className="text-center pb-2 font-semibold">⭐</th>
                </tr>
              </thead>
              <tbody>
                {[...sessions].reverse().slice(0, 15).map((s, i) => {
                  const errors = s.total - s.correct;
                  return (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 font-semibold text-gray-800">{s.storyTitle}</td>
                      <td className="py-2 text-center text-gray-400">{s.date}</td>
                      <td className="py-2 text-center font-bold text-green-600">{s.correct}</td>
                      <td className="py-2 text-center font-bold text-red-500">{errors}</td>
                      <td className="py-2 text-center font-bold"
                        style={{ color: s.percentage >= 80 ? "#16a34a" : s.percentage >= 60 ? "#d97706" : "#dc2626" }}>
                        {s.percentage}%
                      </td>
                      <td className="py-2 text-center text-blue-400 text-xs">
                        {s.readingSeconds > 0 ? `${Math.floor(s.readingSeconds / 60)}m${s.readingSeconds % 60}s` : "—"}
                      </td>
                      <td className="py-2 text-center">{"⭐".repeat(s.stars)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ═══ ANÁLISIS LECTOR ════════════════════════════════════════════ */}
          {sessions.length >= 2 && (() => {
            // ── Perfil lector ──────────────────────────────────────────────
            const profile =
              overallPct >= 90
                ? { label: "Lector Avanzado", emoji: "🌟", bg: "bg-green-50", border: "border-green-300", titleColor: "text-green-800", desc: "Demuestra una comprensión lectora excelente y muy sólida." }
                : overallPct >= 70
                ? { label: "Lector en Desarrollo", emoji: "📈", bg: "bg-blue-50", border: "border-blue-300", titleColor: "text-blue-800", desc: "Comprende bien los textos con algunas áreas puntuales de mejora." }
                : overallPct >= 50
                ? { label: "Lector en Proceso", emoji: "📚", bg: "bg-yellow-50", border: "border-yellow-300", titleColor: "text-yellow-800", desc: "Va construyendo su comprensión lectora con práctica constante." }
                : { label: "Lector Inicial", emoji: "🌱", bg: "bg-orange-50", border: "border-orange-300", titleColor: "text-orange-800", desc: "Está en las primeras etapas del desarrollo lector. Necesita acompañamiento activo." };

            // ── Tendencia (últimas 3 sesiones vs anteriores) ───────────────
            const recent = sessions.slice(-3);
            const older = sessions.slice(0, -3);
            const recentAvg = Math.round(recent.reduce((s, x) => s + x.percentage, 0) / recent.length);
            const olderAvg = older.length > 0
              ? Math.round(older.reduce((s, x) => s + x.percentage, 0) / older.length)
              : recentAvg;
            const diff = recentAvg - olderAvg;
            const trend =
              diff >= 6  ? { label: "Mejorando 📈", color: "text-green-600", note: `Subió ${diff} puntos respecto a sesiones anteriores.` }
              : diff <= -6 ? { label: "Bajando 📉", color: "text-red-500", note: `Bajó ${Math.abs(diff)} puntos respecto a sesiones anteriores.` }
              : { label: "Estable ➡️", color: "text-blue-600", note: "Rendimiento consistente entre sesiones." };

            // ── Mejor y peor nivel ─────────────────────────────────────────
            const levelsWithData = byLevel.filter((l) => l.lvlSessions.length > 0);
            const bestLvl = levelsWithData.length > 0 ? [...levelsWithData].sort((a, b) => b.avg - a.avg)[0] : null;
            const worstLvl = levelsWithData.length > 1 ? [...levelsWithData].sort((a, b) => a.avg - b.avg)[0] : null;

            // ── Velocidad lectora ──────────────────────────────────────────
            const sessWithTime = sessions.filter((s) => s.readingSeconds > 0);
            const avgSecs = sessWithTime.length > 0
              ? Math.round(sessWithTime.reduce((s, x) => s + x.readingSeconds, 0) / sessWithTime.length)
              : 0;
            const rushesReading = avgSecs > 0 && avgSecs < 60 && overallPct < 70;

            // ── Tipo de error predominante ─────────────────────────────────
            const lvl1Avg = byLevel[0].lvlSessions.length > 0 ? byLevel[0].avg : null;
            const lvl2Avg = byLevel[1].lvlSessions.length > 0 ? byLevel[1].avg : null;
            const lvl3Avg = byLevel[2].lvlSessions.length > 0 ? byLevel[2].avg : null;

            // ── Evidencias ─────────────────────────────────────────────────
            const evidencias = [];
            evidencias.push(`Ha completado ${totalStories} cuento${totalStories !== 1 ? "s" : ""} en total.`);
            if (sessions.filter((s) => s.stars === 3).length > 0)
              evidencias.push(`Obtuvo ${sessions.filter((s) => s.stars === 3).length} resultado${sessions.filter((s) => s.stars === 3).length !== 1 ? "s" : ""} perfectos (sin errores).`);
            if (bestLvl)
              evidencias.push(`Su nivel más fuerte es el Nivel ${bestLvl.level} (${["Básico", "Intermedio", "Avanzado"][bestLvl.level - 1]}) con un promedio de ${bestLvl.avg}%.`);
            if (worstLvl && worstLvl.level !== bestLvl?.level)
              evidencias.push(`El Nivel ${worstLvl.level} (${["Básico", "Intermedio", "Avanzado"][worstLvl.level - 1]}) es el que más le cuesta: ${worstLvl.avg}% de aciertos.`);
            if (sessions.length >= 3)
              evidencias.push(`Tendencia reciente: ${trend.label}. ${trend.note}`);
            if (avgSecs > 0)
              evidencias.push(`Tiempo promedio dedicado a leer cada cuento: ${Math.floor(avgSecs / 60)}m ${avgSecs % 60}s.`);
            if (rushesReading)
              evidencias.push("Lee muy rápido (menos de 1 minuto) y comete bastantes errores, lo que indica que puede estar leyendo sin concentrarse bien.");
            if (lvl1Avg !== null && lvl1Avg < 60)
              evidencias.push("Muestra dificultad para encontrar información explícita en el texto (comprensión literal).");
            if (lvl2Avg !== null && lvl2Avg < 60)
              evidencias.push("Tiene dificultad para inferir lo que no está escrito directamente (comprensión inferencial).");
            if (lvl3Avg !== null && lvl3Avg < 60)
              evidencias.push("Le cuesta reflexionar críticamente sobre el mensaje y las consecuencias de los textos.");

            // ── Qué reforzar ───────────────────────────────────────────────
            const refuerzos = [];
            if (rushesReading)
              refuerzos.push({ emoji: "⏱️", titulo: "Leer más despacio", detalle: "Antes de responder, anima a tu hijo a releer el párrafo con calma. La velocidad no importa; importa entender." });
            if (lvl1Avg !== null && lvl1Avg < 70)
              refuerzos.push({ emoji: "🔍", titulo: "Comprensión literal", detalle: "Practica preguntar: ¿Quién? ¿Qué pasó? ¿Dónde? ¿Cuándo? directamente del texto. Señalen juntos la frase exacta que responde." });
            if (lvl2Avg !== null && lvl2Avg < 70)
              refuerzos.push({ emoji: "💭", titulo: "Comprensión inferencial", detalle: "Practica preguntar: ¿Por qué crees que el personaje hizo eso? ¿Qué habría pasado si...? Esto entrena leer entre líneas." });
            if (lvl3Avg !== null && lvl3Avg < 70)
              refuerzos.push({ emoji: "🧠", titulo: "Pensamiento crítico", detalle: "Luego de leer, pregunta: ¿Estás de acuerdo con lo que hizo el personaje? ¿Qué hubieras hecho tú? ¿Cuál es la enseñanza?" });
            if (sessions.filter((s) => s.stars === 3).length === 0)
              refuerzos.push({ emoji: "🔄", titulo: "Releer los cuentos con errores", detalle: "Releer un cuento ya hecho pero prestando atención a los párrafos donde falló, refuerza la memoria lectora." });
            if (diff <= -6)
              refuerzos.push({ emoji: "💪", titulo: "Retomar cuentos del nivel más fácil", detalle: "Cuando el rendimiento baja, volver al Nivel 1 reconstruye la confianza antes de intentar niveles más difíciles." });
            refuerzos.push({ emoji: "📖", titulo: "Leer en voz alta juntos", detalle: "Leer un párrafo en voz alta (tú o él) activa la atención auditiva y mejora la comprensión global del texto." });

            return (
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-700 mb-4">🔬 Análisis de Lectura</h3>

                {/* Perfil */}
                <div className={`${profile.bg} border-2 ${profile.border} rounded-2xl p-5 mb-5`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{profile.emoji}</span>
                    <div>
                      <p className={`text-xl font-bold ${profile.titleColor}`}>{profile.label}</p>
                      <p className="text-gray-600 text-sm">{profile.desc}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <span className="text-3xl font-bold" style={{ color: overallPct >= 80 ? "#16a34a" : overallPct >= 60 ? "#d97706" : "#dc2626" }}>
                        {overallPct}%
                      </span>
                      <p className="text-xs text-gray-400">promedio global</p>
                    </div>
                  </div>
                </div>

                {/* Evidencias */}
                <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-5 mb-5">
                  <h4 className="text-indigo-800 font-bold mb-3 text-base">📋 Lo que evidencia su lectura</h4>
                  <ul className="space-y-2">
                    {evidencias.map((e, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Qué reforzar */}
                <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
                  <h4 className="text-amber-800 font-bold mb-3 text-base">🎯 Qué reforzar en casa</h4>
                  <div className="space-y-3">
                    {refuerzos.map((r, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-sm">
                        <span className="text-2xl flex-shrink-0">{r.emoji}</span>
                        <div>
                          <p className="font-bold text-gray-800 text-sm">{r.titulo}</p>
                          <p className="text-gray-600 text-xs leading-relaxed mt-0.5">{r.detalle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </>
      )}
    </div>
  );
};

const PENITENCIAS = [
  { emoji: "🐔", texto: "¡Canta como gallina 5 veces!\n«¡Clo clo clo clo clo!»" },
  { emoji: "🐸", texto: "¡Salta como rana 10 veces\nsin parar!" },
  { emoji: "🦁", texto: "¡Ruge como león 3 veces\nlo más fuerte que puedas!" },
  { emoji: "🐧", texto: "¡Camina como pingüino\nhasta la puerta y vuelve!" },
  { emoji: "🙈", texto: "¡Imita a un mono\npor 15 segundos!" },
  { emoji: "💃", texto: "¡Baila sin parar\npor 20 segundos!" },
  { emoji: "🐢", texto: "¡Camina MUY lento\ncomo tortuga por 30 segundos!" },
  { emoji: "🦆", texto: "¡Grazna como pato\n7 veces: «¡Cuac cuac!»" },
  { emoji: "🐘", texto: "¡Mueve el brazo como trompa\nde elefante y di «¡Barrido!»" },
  { emoji: "🐝", texto: "¡Zumba como abeja\ny vuela por el cuarto 15 seg!" },
  { emoji: "🎤", texto: "¡Di el chiste más gracioso\nque sepas!" },
  { emoji: "🐦", texto: "¡Agita los brazos como pájaro\ny vuela por el cuarto!" },
  { emoji: "🦊", texto: "¡Camina en cuatro patas\nde un lado al otro!" },
  { emoji: "😜", texto: "¡Haz 3 caras chistosas\ndiferentes!" },
  { emoji: "🌀", texto: "¡Da 5 vueltas girando\nsin marearte!" },
  { emoji: "🤖", texto: "¡Actúa como robot\npor 20 segundos!" },
  { emoji: "🦸", texto: "¡Muestra tus músculos\ny grita «¡Soy el más fuerte!»" },
  { emoji: "🤸", texto: "¡Haz 5 sentadillas\ncantando 1, 2, 3, 4, 5!" },
  { emoji: "🦋", texto: "¡Vuela como mariposa\nbatiendo los brazos despacio!" },
  { emoji: "🐍", texto: "¡Arrastra la pancita\npor el suelo como serpiente!" },
];

// ===== TABLAS DE MULTIPLICAR =====
const MultiplicationGame = ({ setGameMode, setStars, multiStats, setMultiStats }) => {
  const [phase, setPhase] = useState("menu");
  const [mode, setMode] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerActive, setTimerActive] = useState(false);
  const [seenTables, setSeenTables] = useState([]); // tablas practicadas en esta sesión
  const sessionRef = React.useRef([]);
  const currentQRef = React.useRef(0);
  const modeRef = React.useRef(null);

  // Tabla o Reto
  const [trPhase, setTrPhase] = useState("select");
  const [trN, setTrN] = useState(2);
  const [trStudyTime, setTrStudyTime] = useState(60);
  const [trStudyActive, setTrStudyActive] = useState(false);
  const [trTime, setTrTime] = useState(120);
  const [trTimerActive, setTrTimerActive] = useState(false);
  const [trQuestions, setTrQuestions] = useState([]);
  const [trQIdx, setTrQIdx] = useState(0);
  const [trInput, setTrInput] = useState("");
  const [trAnswers, setTrAnswers] = useState([]);
  const trAnswersRef = React.useRef([]);
  const trQIdxRef = React.useRef(0);
  const trInputRef = React.useRef(null);

  useEffect(() => { currentQRef.current = currentQ; }, [currentQ]);
  useEffect(() => { modeRef.current = mode; }, [mode]);

  // Contador 60s
  useEffect(() => {
    if (!timerActive) return;
    if (timeLeft <= 0) { setTimerActive(false); endGame(); return; }
    const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerActive, timeLeft]);

  // Tabla o Reto: timer de estudio
  useEffect(() => {
    if (!trStudyActive) return;
    if (trStudyTime <= 0) { setTrStudyActive(false); setTrPhase("studyDone"); return; }
    const t = setTimeout(() => setTrStudyTime(p => p - 1), 1000);
    return () => clearTimeout(t);
  }, [trStudyActive, trStudyTime]);

  // Tabla o Reto: timer del reto
  useEffect(() => {
    if (!trTimerActive) return;
    if (trTime <= 0) {
      setTrTimerActive(false);
      setTrAnswers(trAnswersRef.current);
      setTrPhase("retoResults");
      return;
    }
    const t = setTimeout(() => setTrTime(p => p - 1), 1000);
    return () => clearTimeout(t);
  }, [trTimerActive, trTime]);

  const genOptions = (correct) => {
    const opts = new Set([correct]);
    const pool = [correct - 1, correct + 1, correct - 2, correct + 2, correct - 5, correct + 5, correct - 3, correct + 3, correct + 10, correct - 10].filter((n) => n > 0 && n !== correct);
    for (const c of pool.sort(() => Math.random() - 0.5)) {
      if (opts.size >= 4) break;
      opts.add(c);
    }
    while (opts.size < 4) { const v = Math.floor(Math.random() * 80) + 4; if (v !== correct) opts.add(v); }
    return [...opts].sort(() => Math.random() - 0.5);
  };

  const makeQ = (a, b) => ({ a, b, answer: a * b, options: genOptions(a * b) });

  const launchGame = (modeType, table, qs) => {
    sessionRef.current = [];
    currentQRef.current = 0;
    modeRef.current = modeType;
    setMode(modeType);
    setSelectedTable(table);
    setQuestions(qs);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setIsCorrect(null);
    if (modeType === "speed") { setTimeLeft(60); setTimerActive(true); }
    setPhase("playing");
  };

  const startTable = (n) => {
    setSeenTables((prev) => prev.includes(n) ? prev : [...prev, n]);
    const qs = [];
    for (let b = 1; b <= 10; b++) qs.push(makeQ(n, b));
    launchGame("table", n, qs.sort(() => Math.random() - 0.5));
  };

  const startMixed = () => {
    const qs = [];
    for (let i = 0; i < 20; i++) { const a = Math.floor(Math.random() * 9) + 2; const b = Math.floor(Math.random() * 9) + 2; qs.push(makeQ(a, b)); }
    launchGame("mixed", null, qs);
  };

  const startSpeed = (tables) => {
    // Usa las tablas pasadas, las vistas en sesión, o todas si ninguna
    const pool = tables || (seenTables.length > 0 ? seenTables : null);
    const qs = [];
    for (let i = 0; i < 100; i++) {
      const a = pool ? pool[Math.floor(Math.random() * pool.length)] : Math.floor(Math.random() * 9) + 2;
      const b = Math.floor(Math.random() * 9) + 2;
      qs.push(makeQ(a, b));
    }
    launchGame("speed", pool ? pool.join(",") : null, qs);
  };

  const handleAnswer = (ans) => {
    if (answered) return;
    const q = questions[currentQRef.current];
    const correct = ans === q.answer;
    setSelectedAnswer(ans);
    setIsCorrect(correct);
    setAnswered(true);
    sessionRef.current = [...sessionRef.current, { correct, a: q.a, b: q.b, answer: q.answer, chosen: ans }];

    // Actualizar estadística de hecho específico
    const key = `${q.a}x${q.b}`;
    setMultiStats((prev) => {
      const facts = { ...(prev.facts || {}) };
      const pf = facts[key] || { correct: 0, wrong: 0 };
      facts[key] = { correct: pf.correct + (correct ? 1 : 0), wrong: pf.wrong + (correct ? 0 : 1) };
      const next = { ...prev, facts };
      try { localStorage.setItem("samu_multiStats", JSON.stringify(next)); } catch (e) {}
      return next;
    });

    if (modeRef.current === "speed") setTimeout(() => goNext(), 500);
  };

  const goNext = () => {
    const nextIdx = currentQRef.current + 1;
    if (nextIdx >= questions.length) { endGame(); return; }
    if (modeRef.current !== "speed" && nextIdx >= questions.length) { endGame(); return; }
    currentQRef.current = nextIdx;
    setCurrentQ(nextIdx);
    setSelectedAnswer(null);
    setAnswered(false);
    setIsCorrect(null);
  };

  const endGame = () => {
    setTimerActive(false);
    const answers = sessionRef.current;
    const correct = answers.filter((a) => a.correct).length;
    const total = answers.length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const earnedStars = pct === 100 ? 3 : pct >= 70 ? 2 : 1;
    setStars((s) => s + earnedStars);
    const session = {
      mode: modeRef.current,
      table: selectedTable,
      date: new Date().toLocaleDateString("es-CO"),
      timestamp: Date.now(),
      correct, total, percentage: pct, stars: earnedStars,
    };
    setMultiStats((prev) => {
      const next = { ...prev, sessions: [...(prev.sessions || []), session] };
      try { localStorage.setItem("samu_multiStats", JSON.stringify(next)); } catch (e) {}
      return next;
    });
    setPhase("results");
  };

  const startTablaReto = (n) => {
    setTrN(n);
    setTrStudyTime(60);
    setTrStudyActive(true);
    setTrPhase("study");
  };

  const startReto = () => {
    const shuffled = [1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5);
    setTrQuestions(shuffled);
    trQIdxRef.current = 0;
    setTrQIdx(0);
    trAnswersRef.current = [];
    setTrAnswers([]);
    setTrInput("");
    setTrTime(120);
    setTrTimerActive(true);
    setTrPhase("reto");
    setTimeout(() => trInputRef.current?.focus(), 80);
  };

  const submitRetoAnswer = (n, questions, qIdx, input) => {
    const b = questions[qIdx];
    const given = parseInt(input, 10);
    const correct = !isNaN(given) && given === n * b;
    const record = { b, answer: n * b, given: isNaN(given) ? "" : given, correct };
    const newAnswers = [...trAnswersRef.current, record];
    trAnswersRef.current = newAnswers;
    const nextIdx = qIdx + 1;
    if (nextIdx >= questions.length) {
      setTrTimerActive(false);
      setTrAnswers(newAnswers);
      setTrPhase("retoResults");
    } else {
      trQIdxRef.current = nextIdx;
      setTrQIdx(nextIdx);
      setTrInput("");
      setTimeout(() => trInputRef.current?.focus(), 50);
    }
  };

  // ─── Tabla o Reto ─────────────────────────────────────────────────────────
  if (phase === "tablaReto") {
    // ── Seleccionar tabla ──
    if (trPhase === "select") return (
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => setPhase("menu")} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">←</button>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">📖 Tabla o Reto</h2>
            <p className="text-gray-500 text-sm">¿Qué tabla quieres estudiar hoy?</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[2,3,4,5,6,7,8,9].map((n) => (
            <button key={n} onClick={() => startTablaReto(n)}
              className="bg-gradient-to-br from-teal-400 to-cyan-600 text-white rounded-2xl p-5 hover:scale-110 transition-transform shadow-md text-center">
              <div className="text-4xl font-black">×{n}</div>
              <div className="text-xs mt-1 opacity-80">Tabla del {n}</div>
            </button>
          ))}
        </div>
      </div>
    );

    // ── Estudio ──
    if (trPhase === "study") return (
      <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => { setTrStudyActive(false); setTrPhase("select"); }} className="text-gray-400 hover:text-gray-600 font-bold text-xl">←</button>
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">📖 Tabla del ×{trN}</h2>
            <p className="text-xs text-gray-400">¡Memorízala bien!</p>
          </div>
          <div className={`text-3xl font-black tabular-nums ${trStudyTime <= 10 ? "text-red-500" : trStudyTime <= 20 ? "text-orange-500" : "text-teal-600"}`}>{trStudyTime}s</div>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 mb-6">
          <div className={`h-3 rounded-full transition-all ${trStudyTime <= 10 ? "bg-red-500" : trStudyTime <= 20 ? "bg-orange-400" : "bg-teal-500"}`}
            style={{ width: `${(trStudyTime / 60) * 100}%` }} />
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[1,2,3,4,5,6,7,8,9].map((b) => (
            <div key={b} className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-4 text-center">
              <div className="text-gray-500 text-sm font-semibold">{trN} × {b}</div>
              <div className="text-3xl font-black text-teal-700 mt-1">{trN * b}</div>
            </div>
          ))}
        </div>
        <button onClick={() => { setTrStudyActive(false); setTrPhase("studyDone"); }}
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-2xl font-bold hover:scale-105 transition-transform">
          Ya la sé · Ir al Reto ⚡
        </button>
      </div>
    );

    // ── Estudio terminado ──
    if (trPhase === "studyDone") return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto text-center">
        <div className="text-6xl mb-3">⏰</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">¡Tiempo de estudio!</h2>
        <p className="text-gray-500 mb-6">¿Lista para demostrar que sabes la tabla del ×{trN}?</p>
        <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-4 mb-6">
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3,4,5,6,7,8,9].map((b) => (
              <div key={b} className="text-sm font-bold text-teal-700">{trN}×{b}={trN*b}</div>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={() => { setTrStudyTime(60); setTrStudyActive(true); setTrPhase("study"); }}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-bold hover:bg-gray-200">
            🔄 Ver de nuevo
          </button>
          <button onClick={startReto}
            className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-2xl font-bold hover:scale-105 transition-transform">
            ⚡ ¡Hacer el Reto!
          </button>
        </div>
      </div>
    );

    // ── Reto ──
    if (trPhase === "reto") {
      const b = trQuestions[trQIdx];
      const timerColor = trTime <= 20 ? "text-red-600" : trTime <= 40 ? "text-orange-500" : "text-gray-700";
      return (
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => { setTrTimerActive(false); setPhase("menu"); }} className="text-gray-400 hover:text-gray-600 font-bold text-xl">←</button>
            <div className="text-center">
              <p className="text-xs text-gray-400 font-semibold">⚡ Reto · Tabla del ×{trN}</p>
              <p className="text-xs text-gray-400">{trQIdx + 1} de 9</p>
            </div>
            <div className={`text-4xl font-black tabular-nums ${timerColor}`}>{trTime}s</div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 mb-6">
            <div className={`h-3 rounded-full transition-all ${trTime <= 20 ? "bg-red-500" : trTime <= 40 ? "bg-orange-400" : "bg-green-500"}`}
              style={{ width: `${(trTime / 120) * 100}%` }} />
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 mb-6 text-center">
            <p className="text-gray-400 text-sm mb-2">¿Cuánto es?</p>
            <p className="text-5xl font-black text-gray-800">{trN} × {b} =</p>
          </div>
          <div className="flex gap-3 mb-3">
            <input
              ref={trInputRef}
              type="number"
              value={trInput}
              onChange={(e) => setTrInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && trInput !== "") submitRetoAnswer(trN, trQuestions, trQIdx, trInput); }}
              placeholder="Tu respuesta..."
              autoFocus
              className="flex-1 text-center text-3xl font-black rounded-2xl border-2 border-teal-300 py-4 focus:border-teal-500 outline-none"
            />
            <button
              onClick={() => { if (trInput !== "") submitRetoAnswer(trN, trQuestions, trQIdx, trInput); }}
              disabled={trInput === ""}
              className="bg-teal-600 text-white px-6 rounded-2xl font-bold text-xl hover:bg-teal-700 disabled:opacity-40 transition-colors"
            >✓</button>
          </div>
          <p className="text-center text-xs text-gray-400">Presiona Enter para confirmar</p>
        </div>
      );
    }

    // ── Resultados del Reto ──
    if (trPhase === "retoResults") {
      const allCorrect = trAnswers.length === 9 && trAnswers.every(a => a.correct);
      const wrongCount = trAnswers.filter(a => !a.correct).length;
      const penitencia = allCorrect ? null : PENITENCIAS[(wrongCount * 7 + trN * 3) % PENITENCIAS.length];
      const confettiItems = [
        { e: "💣", l: "8%", d: "0s" }, { e: "🎉", l: "22%", d: "0.3s" },
        { e: "⭐", l: "38%", d: "0.1s" }, { e: "🎊", l: "55%", d: "0.4s" },
        { e: "💣", l: "70%", d: "0.2s" }, { e: "🌟", l: "85%", d: "0.5s" },
      ];
      const rainItems = [
        { e: "💧", l: "5%", d: "0s" }, { e: "🌧️", l: "20%", d: "0.25s" },
        { e: "💧", l: "38%", d: "0.1s" }, { e: "💧", l: "55%", d: "0.4s" },
        { e: "🌧️", l: "72%", d: "0.2s" }, { e: "💧", l: "88%", d: "0.35s" },
      ];
      return (
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto text-center relative overflow-hidden">
          {/* Animación */}
          {allCorrect ? confettiItems.map((c, i) => (
            <div key={i} className="absolute text-3xl animate-bounce pointer-events-none"
              style={{ left: c.l, top: "-10px", animationDelay: c.d, animationDuration: "1s" }}>{c.e}</div>
          )) : rainItems.map((r, i) => (
            <div key={i} className="absolute text-2xl animate-bounce pointer-events-none"
              style={{ left: r.l, top: "-5px", animationDelay: r.d, animationDuration: "0.8s" }}>{r.e}</div>
          ))}

          <div className="text-6xl mb-3 mt-4">{allCorrect ? "🏆" : "😅"}</div>
          <h2 className={`text-3xl font-black mb-1 ${allCorrect ? "text-green-600" : "text-orange-500"}`}>
            {allCorrect ? "¡FELICITACIONES!" : "VUELVE A INTENTARLO"}
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            {allCorrect ? `¡Sabes perfectamente la tabla del ×${trN}! 🌟` : `Sigue practicando la tabla del ×${trN} 💪`}
          </p>

          {/* Penitencia */}
          {penitencia && (
            <div className="bg-yellow-50 border-3 border-yellow-400 rounded-2xl p-4 mb-4 animate-pulse"
              style={{ border: "3px solid #facc15" }}>
              <p className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-1">⚠️ ¡Tu penitencia!</p>
              <div className="text-4xl mb-1">{penitencia.emoji}</div>
              <p className="text-base font-black text-yellow-800 whitespace-pre-line leading-snug">{penitencia.texto}</p>
            </div>
          )}

          {/* Resumen */}
          <div className="bg-gray-50 rounded-2xl p-4 mb-5 text-left">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Resumen</p>
            <div className="grid grid-cols-3 gap-2">
              {[1,2,3,4,5,6,7,8,9].map((b) => {
                const ans = trAnswers.find(a => a.b === b);
                const ok = ans?.correct;
                const given = ans?.given;
                return (
                  <div key={b} className={`rounded-xl p-2 text-center text-sm border-2 ${ok ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"}`}>
                    <div className="font-bold text-gray-600">{trN}×{b}</div>
                    <div className={`font-black ${ok ? "text-green-700" : "text-red-600"}`}>{trN * b}</div>
                    {!ok && given !== undefined && given !== "" && (
                      <div className="text-xs text-red-400 line-through">{given}</div>
                    )}
                    <div className="text-base">{ok ? "✅" : "❌"}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => { setTrStudyTime(60); setTrStudyActive(true); setTrPhase("study"); }}
              className="flex-1 bg-teal-500 text-white py-3 rounded-2xl font-bold hover:bg-teal-600">
              📖 Estudiar
            </button>
            <button onClick={startReto}
              className="flex-1 bg-orange-500 text-white py-3 rounded-2xl font-bold hover:bg-orange-600">
              ⚡ Repetir
            </button>
            <button onClick={() => setPhase("menu")}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-2xl font-bold hover:bg-gray-300">
              Menú
            </button>
          </div>
        </div>
      );
    }
  }

  // ─── Menú ─────────────────────────────────────────────────────────────────
  if (phase === "menu") return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => setGameMode("menu")} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">←</button>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">✖️ Tablas de Multiplicar</h2>
          <p className="text-gray-500">¡Practica y conviértete en un campeón!</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button onClick={() => setPhase("selectTable")}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left">
          <div className="text-5xl mb-3">📊</div>
          <h3 className="text-xl font-bold mb-1">Practica una tabla</h3>
          <p className="text-sm opacity-90 mb-2">Elige la tabla que quieres repasar</p>
          <p className="text-xs opacity-75">10 preguntas · opción múltiple</p>
          <div className="mt-4 text-xs bg-white/20 rounded-full px-3 py-1 inline-block font-semibold">Tablas del ×2 al ×12</div>
        </button>
        <button onClick={startMixed}
          className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left">
          <div className="text-5xl mb-3">🎲</div>
          <h3 className="text-xl font-bold mb-1">Desafío mixto</h3>
          <p className="text-sm opacity-90 mb-2">Mezcla de todas las tablas</p>
          <p className="text-xs opacity-75">20 multiplicaciones al azar</p>
          <div className="mt-4 text-xs bg-white/20 rounded-full px-3 py-1 inline-block font-semibold">Para repasar todo</div>
        </button>
        <button onClick={() => startSpeed()}
          className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left">
          <div className="text-5xl mb-3">⚡</div>
          <h3 className="text-xl font-bold mb-1">Contrarreloj</h3>
          <p className="text-sm opacity-90 mb-2">60 segundos, ¡todo lo que puedas!</p>
          <p className="text-xs opacity-75">Avance automático</p>
          <div className="mt-4 text-xs bg-white/20 rounded-full px-3 py-1 inline-block font-semibold">
            {seenTables.length > 0
              ? `Solo ×${seenTables.sort((a,b)=>a-b).join(" · ×")}`
              : "¡Modo velocidad!"}
          </div>
        </button>
        <button onClick={() => { setTrPhase("select"); setPhase("tablaReto"); }}
          className="md:col-span-3 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg text-left flex items-center gap-6">
          <div className="text-6xl">📖</div>
          <div>
            <h3 className="text-xl font-bold mb-1">Tabla o Reto</h3>
            <p className="text-sm opacity-90 mb-1">Aprende la tabla completa y luego demuestra que la sabes de memoria</p>
            <p className="text-xs opacity-75">Estudia 60 s · Luego responde todas en 60 s</p>
          </div>
        </button>
      </div>
    </div>
  );

  // ─── Seleccionar tabla ────────────────────────────────────────────────────
  if (phase === "selectTable") {
    const facts = multiStats.facts || {};
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => setPhase("menu")} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">←</button>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">¿Qué tabla quieres practicar?</h2>
            <p className="text-gray-500 text-sm">🟢 Dominada · 🟡 En proceso · 🔴 Necesita práctica</p>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {
            const tableFacts = Object.entries(facts).filter(([k]) => k.startsWith(`${n}x`));
            const totalW = tableFacts.reduce((s, [, v]) => s + v.wrong, 0);
            const totalA = tableFacts.reduce((s, [, v]) => s + v.correct + v.wrong, 0);
            const errPct = totalA > 0 ? Math.round((totalW / totalA) * 100) : null;
            const color = errPct === null ? "from-blue-400 to-indigo-500"
              : errPct >= 35 ? "from-red-400 to-red-600"
              : errPct >= 15 ? "from-yellow-400 to-orange-500"
              : "from-green-400 to-emerald-500";
            return (
              <button key={n} onClick={() => startTable(n)}
                className={`bg-gradient-to-br ${color} text-white rounded-2xl p-4 hover:scale-110 transition-transform shadow-md text-center`}>
                <div className="text-3xl font-black">×{n}</div>
                {errPct !== null
                  ? <div className="text-xs mt-1 opacity-90">{100 - errPct}% acierto</div>
                  : <div className="text-xs mt-1 opacity-70">Nueva ✨</div>}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ─── Jugando ──────────────────────────────────────────────────────────────
  if (phase === "playing") {
    const q = questions[currentQ];
    if (!q) return null;
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl mx-auto">
        {/* Cabecera */}
        <div className="flex items-center justify-between mb-4">
          <div>
            {mode === "table" && <span className="bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full text-sm">Tabla ×{selectedTable}</span>}
            {mode === "mixed" && <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">🎲 Mixto</span>}
            {mode === "speed" && (
              <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-sm">
                ⚡ {selectedTable ? `×${String(selectedTable).split(",").map(Number).sort((a,b)=>a-b).join(" · ×")}` : "Contrarreloj"}
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            {mode === "speed" && (
              <span className={`text-2xl font-black ${timeLeft <= 10 ? "text-red-500" : "text-gray-700"}`}>⏱️ {timeLeft}s</span>
            )}
            {mode !== "speed" && (
              <span className="text-sm font-semibold text-gray-500">{currentQ + 1} / {questions.length}</span>
            )}
            {mode === "speed" && (
              <span className="text-sm font-semibold text-green-600">✓ {sessionRef.current.filter((a) => a.correct).length}</span>
            )}
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
          <div className={`h-3 rounded-full transition-all duration-500 ${mode === "speed" ? (timeLeft <= 10 ? "bg-red-500" : "bg-orange-400") : "bg-blue-500"}`}
            style={{ width: `${mode === "speed" ? (timeLeft / 60) * 100 : (currentQ / questions.length) * 100}%` }} />
        </div>

        {/* Pregunta */}
        <div className={`rounded-3xl p-8 mb-8 text-center transition-colors duration-300 ${answered ? (isCorrect ? "bg-green-50 border-2 border-green-300" : "bg-red-50 border-2 border-red-300") : "bg-gray-50"}`}>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-7xl font-black text-gray-800">{q.a}</span>
            <span className="text-5xl font-black text-gray-400">×</span>
            <span className="text-7xl font-black text-gray-800">{q.b}</span>
            <span className="text-5xl font-black text-gray-400">=</span>
            <span className="text-7xl font-black" style={{ color: answered ? (isCorrect ? "#16a34a" : "#dc2626") : "#94a3b8" }}>
              {answered ? q.answer : "?"}
            </span>
          </div>
          {answered && !isCorrect && (
            <div className="mt-4">
              <p className="text-red-600 font-bold text-lg">Pusiste <span className="line-through">{selectedAnswer}</span></p>
              <p className="text-green-700 font-bold text-lg">La respuesta es {q.answer} ✓</p>
              <p className="text-gray-500 text-sm mt-1">💡 {q.a} grupos de {q.b} = {q.answer}</p>
            </div>
          )}
          {answered && isCorrect && <p className="text-green-700 font-black text-2xl mt-4">🎉 ¡Correcto!</p>}
        </div>

        {/* Opciones */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {q.options.map((opt, i) => {
            let cls = "py-6 rounded-2xl text-4xl font-black border-2 transition-all ";
            if (!answered) cls += "border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 cursor-pointer hover:scale-105";
            else if (opt === q.answer) cls += "border-green-500 bg-green-100 text-green-700";
            else if (opt === selectedAnswer && !isCorrect) cls += "border-red-400 bg-red-100 text-red-600";
            else cls += "border-gray-200 text-gray-300 cursor-default";
            return (
              <button key={i} onClick={() => handleAnswer(opt)} className={cls} disabled={answered}>{opt}</button>
            );
          })}
        </div>

        {/* Siguiente (modo no-speed) */}
        {answered && mode !== "speed" && (
          <button onClick={() => { if (currentQ + 1 >= questions.length) endGame(); else goNext(); }}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors">
            {currentQ + 1 >= questions.length ? "Ver resultados 🏆" : "Siguiente →"}
          </button>
        )}
      </div>
    );
  }

  // ─── Resultados ───────────────────────────────────────────────────────────
  if (phase === "results") {
    const answers = sessionRef.current;
    const correctCount = answers.filter((a) => a.correct).length;
    const total = answers.length;
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const stars = pct === 100 ? 3 : pct >= 70 ? 2 : 1;
    const wrongAnswers = answers.filter((a) => !a.correct);
    const speedTablesLabel = mode === "speed" && selectedTable
      ? `×${String(selectedTable).split(",").map(Number).sort((a,b)=>a-b).join(" · ×")}`
      : null;
    const modeLabel = mode === "table" ? `Tabla ×${selectedTable}` : mode === "speed" ? `⚡ Contrarreloj${speedTablesLabel ? ` · ${speedTablesLabel}` : ""}` : "🎲 Mixto";
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl mx-auto text-center">
        <div className="text-6xl mb-3">{pct === 100 ? "🏆" : pct >= 70 ? "🎉" : "💪"}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{modeLabel}</h2>
        <div className="text-4xl mb-5">{"⭐".repeat(stars)}{"☆".repeat(3 - stars)}</div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4">
            <div className="text-4xl font-bold text-green-700">{correctCount}</div>
            <div className="text-xs text-green-600 font-semibold mt-1">✓ Correctas</div>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4">
            <div className="text-4xl font-bold" style={{ color: pct >= 80 ? "#16a34a" : pct >= 60 ? "#d97706" : "#dc2626" }}>{pct}%</div>
            <div className="text-xs text-gray-500 font-semibold mt-1">Acierto</div>
          </div>
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
            <div className="text-4xl font-bold text-red-600">{total - correctCount}</div>
            <div className="text-xs text-red-500 font-semibold mt-1">✗ Errores</div>
          </div>
        </div>

        {mode === "speed" && (
          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-3 mb-5">
            <p className="text-orange-800 font-bold">⚡ Respondiste {total} multiplicaciones en 60 segundos</p>
          </div>
        )}

        {wrongAnswers.length === 0 ? (
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-4 mb-5">
            <p className="text-green-800 font-bold text-lg">🌟 ¡Sin errores! ¡Eres un campeón de las tablas!</p>
          </div>
        ) : (
          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 mb-5 text-left">
            <h3 className="font-bold text-orange-800 mb-3">📌 Repasa estas multiplicaciones:</h3>
            <div className="grid grid-cols-2 gap-2">
              {wrongAnswers.map((w, i) => (
                <div key={i} className="bg-white rounded-xl px-3 py-2 flex justify-between items-center">
                  <span className="font-black text-gray-800">{w.a} × {w.b} = <span className="text-green-700">{w.answer}</span></span>
                  <span className="text-red-400 text-xs">Dijiste: {w.chosen}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button onClick={() => mode === "table" ? startTable(selectedTable) : mode === "speed" ? startSpeed(selectedTable ? selectedTable.split(",").map(Number) : null) : startMixed()}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">🔄 Repetir</button>
          <button onClick={() => setPhase("menu")}
            className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors">🎮 Otro modo</button>
          <button onClick={() => setGameMode("menu")}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-colors">🏠 Inicio</button>
        </div>
      </div>
    );
  }

  return null;
};

// ===== ESTADÍSTICAS MULTIPLICACIÓN PARA PADRES =====
const MultiplicationStats = ({ multiStats, setGameMode }) => {
  const sessions = multiStats.sessions || [];
  const facts = multiStats.facts || {};

  const tableStats = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {
    const tf = Object.entries(facts).filter(([k]) => k.startsWith(`${n}x`));
    const correct = tf.reduce((s, [, v]) => s + v.correct, 0);
    const wrong = tf.reduce((s, [, v]) => s + v.wrong, 0);
    const total = correct + wrong;
    const pct = total > 0 ? Math.round((correct / total) * 100) : null;
    return { n, correct, wrong, total, pct };
  });

  const weakFacts = Object.entries(facts)
    .map(([k, v]) => { const [a, b] = k.split("x").map(Number); return { key: k, a, b, ...v, errPct: v.wrong + v.correct > 0 ? Math.round((v.wrong / (v.wrong + v.correct)) * 100) : 0 }; })
    .filter((f) => f.wrong > 0)
    .sort((a, b) => b.errPct - a.errPct)
    .slice(0, 12);

  const loadDemo = () => {
    const demoFacts = {};
    const hard = ["7x8","8x7","6x9","9x6","7x9","9x7","8x6","6x8","7x7","8x8","9x9","6x7","7x6","9x8","8x9"];
    const medium = ["4x7","7x4","6x4","4x6","8x4","4x8","3x9","9x3"];
    for (let a = 2; a <= 12; a++) {
      for (let b = 2; b <= 10; b++) {
        const key = `${a}x${b}`;
        const isHard = hard.includes(key);
        const isMed = medium.includes(key);
        const wrong = isHard ? Math.floor(Math.random() * 5) + 2 : isMed ? Math.floor(Math.random() * 2) + 1 : 0;
        const correct = Math.floor(Math.random() * 4) + 2;
        if (wrong > 0 || correct > 0) demoFacts[key] = { correct, wrong };
      }
    }
    const md = (d) => { const x = new Date(); x.setDate(x.getDate() - d); return x.toLocaleDateString("es-CO"); };
    const mt = (d) => { const x = new Date(); x.setDate(x.getDate() - d); return x.getTime(); };
    const st = {
      facts: demoFacts,
      sessions: [
        { mode:"table", table:3, date:md(9), timestamp:mt(9), correct:8, total:10, percentage:80, stars:2 },
        { mode:"mixed", table:null, date:md(7), timestamp:mt(7), correct:13, total:20, percentage:65, stars:2 },
        { mode:"speed", table:null, date:md(5), timestamp:mt(5), correct:19, total:26, percentage:73, stars:2 },
        { mode:"table", table:7, date:md(4), timestamp:mt(4), correct:5, total:10, percentage:50, stars:1 },
        { mode:"table", table:7, date:md(2), timestamp:mt(2), correct:8, total:10, percentage:80, stars:2 },
        { mode:"speed", table:null, date:md(0), timestamp:mt(0), correct:24, total:30, percentage:80, stars:2 },
      ],
    };
    localStorage.setItem("samu_multiStats", JSON.stringify(st));
    window.location.reload();
  };

  const clearStats = () => {
    if (window.confirm("¿Borrar estadísticas de multiplicación?")) {
      localStorage.removeItem("samu_multiStats");
      window.location.reload();
    }
  };

  const hasData = sessions.length > 0 || Object.keys(facts).length > 0;
  const totalCorrect = sessions.reduce((s, x) => s + x.correct, 0);
  const totalAnswered = sessions.reduce((s, x) => s + x.total, 0);
  const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={() => setGameMode("menu")} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">←</button>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">🔢 Stats Multiplicación</h2>
            <p className="text-gray-500 text-sm">Para padres · Qué tablas necesita reforzar</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          {!hasData && <button onClick={loadDemo} className="text-xs bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full font-semibold hover:bg-amber-200">Ver ejemplo</button>}
          {hasData && <button onClick={clearStats} className="text-xs text-red-400 hover:text-red-600 underline">Borrar</button>}
        </div>
      </div>

      {!hasData ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">✖️</div>
          <p className="text-xl font-semibold text-gray-600">Aún no hay datos de multiplicación.</p>
          <p className="text-sm text-gray-400 mt-2 mb-6">Aparecerán aquí después de que Samuel practique las tablas.</p>
          <button onClick={loadDemo} className="bg-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-600 transition-colors">
            👀 Ver cómo lucirán las estadísticas
          </button>
        </div>
      ) : (
        <>
          {/* Resumen global */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-orange-50 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-orange-700">{sessions.length}</div>
              <div className="text-sm text-orange-600">Sesiones jugadas</div>
            </div>
            <div className="bg-green-50 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-green-700">{overallPct}%</div>
              <div className="text-sm text-green-600">✓ Aciertos global</div>
            </div>
            <div className="bg-red-50 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-red-600">{totalAnswered - totalCorrect}</div>
              <div className="text-sm text-red-500">✗ Errores total</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-700">{sessions.filter((s) => s.stars === 3).length}</div>
              <div className="text-sm text-blue-600">🏆 Sin errores</div>
            </div>
          </div>

          {/* Mapa de calor por tabla */}
          <h3 className="text-lg font-bold text-gray-700 mb-4">Rendimiento por tabla</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mb-8">
            {tableStats.map(({ n, pct, wrong, correct, total }) => {
              const bg = pct === null ? "bg-gray-100 border-gray-200 text-gray-400"
                : pct >= 85 ? "bg-green-100 border-green-300 text-green-800"
                : pct >= 60 ? "bg-yellow-100 border-yellow-300 text-yellow-800"
                : "bg-red-100 border-red-300 text-red-800";
              return (
                <div key={n} className={`rounded-xl p-3 text-center border-2 ${bg}`}>
                  <div className="text-xl font-black">×{n}</div>
                  {pct !== null ? (
                    <>
                      <div className="text-base font-bold">{pct}%</div>
                      <div className="text-xs">✓{correct} ✗{wrong}</div>
                    </>
                  ) : <div className="text-xs mt-1">Sin datos</div>}
                </div>
              );
            })}
          </div>

          {/* Multiplicaciones más difíciles */}
          {weakFacts.length > 0 && (
            <>
              <h3 className="text-lg font-bold text-gray-700 mb-4">🔴 Las que más le cuestan (ordenadas por error)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {weakFacts.map(({ key, a, b, correct, wrong, errPct }) => (
                  <div key={key} className={`rounded-xl p-3 border-2 flex items-center justify-between ${errPct >= 50 ? "bg-red-50 border-red-300" : "bg-yellow-50 border-yellow-300"}`}>
                    <div>
                      <span className="text-xl font-black text-gray-800">{a} × {b} = {a * b}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-red-500 font-bold">✗ {wrong} veces</div>
                      <div className="text-xs text-green-600">✓ {correct} veces</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Historial de sesiones */}
          {sessions.length > 0 && (
            <>
              <h3 className="text-lg font-bold text-gray-700 mb-4">Historial de sesiones</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-xs text-gray-400 border-b border-gray-200">
                      <th className="text-left pb-2 font-semibold">Modo</th>
                      <th className="text-center pb-2 font-semibold">Fecha</th>
                      <th className="text-center pb-2 font-semibold text-green-600">✓</th>
                      <th className="text-center pb-2 font-semibold text-red-500">✗</th>
                      <th className="text-center pb-2 font-semibold">%</th>
                      <th className="text-center pb-2 font-semibold">⭐</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...sessions].reverse().slice(0, 15).map((s, i) => {
                      const label = s.mode === "table" ? `Tabla ×${s.table}` : s.mode === "speed" ? "⚡ Contrarreloj" : "🎲 Mixto";
                      return (
                        <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-2 font-semibold text-gray-800">{label}</td>
                          <td className="py-2 text-center text-gray-400">{s.date}</td>
                          <td className="py-2 text-center font-bold text-green-600">{s.correct}</td>
                          <td className="py-2 text-center font-bold text-red-500">{s.total - s.correct}</td>
                          <td className="py-2 text-center font-bold" style={{ color: s.percentage >= 80 ? "#16a34a" : s.percentage >= 60 ? "#d97706" : "#dc2626" }}>{s.percentage}%</td>
                          <td className="py-2 text-center">{"⭐".repeat(s.stars)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Recomendación automática */}
              {weakFacts.length > 0 && (
                <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
                  <h4 className="text-amber-800 font-bold mb-3">🎯 Qué practicar esta semana</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Las multiplicaciones con más errores son: <strong>{weakFacts.slice(0, 3).map((f) => `${f.a}×${f.b}`).join(", ")}</strong>.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-amber-500">▸</span>Practica la tabla ×{weakFacts[0].a} todos los días esta semana.</li>
                    <li className="flex items-start gap-2"><span className="text-amber-500">▸</span>Repite en voz alta: "{weakFacts[0].a} por {weakFacts[0].b} es {weakFacts[0].a * weakFacts[0].b}".</li>
                    <li className="flex items-start gap-2"><span className="text-amber-500">▸</span>Usa el modo Contrarreloj para ganar velocidad una vez que las domine.</li>
                    {tableStats.filter((t) => t.pct !== null && t.pct >= 85).length > 0 && (
                      <li className="flex items-start gap-2 text-green-700"><span className="text-green-500">✓</span>Ya domina las tablas: {tableStats.filter((t) => t.pct !== null && t.pct >= 85).map((t) => `×${t.n}`).join(", ")}.</li>
                    )}
                  </ul>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

// ===== MULTIPLICACIÓN LARGA (64×9, 672×4) =====
const genLongProblem = (difficulty, multiplier) => {
  const b = multiplier != null ? multiplier : (Math.floor(Math.random() * 8) + 2); // 2-9
  if (difficulty === 1) {
    const a = Math.floor(Math.random() * 81) + 10; // 10-90
    return { a, b };
  } else if (difficulty === 2) {
    const a = Math.floor(Math.random() * 900) + 100; // 100-999
    return { a, b };
  } else {
    const twoOrThree = Math.random() < 0.4;
    const a = twoOrThree ? Math.floor(Math.random() * 81) + 10 : Math.floor(Math.random() * 900) + 100;
    return { a, b };
  }
};

const computeSteps = (a, b) => {
  const digits = String(a).split("").reverse().map(Number);
  let carry = 0;
  const steps = digits.map((d, pos) => {
    const raw = d * b + carry;
    const digit = raw % 10;
    const newCarry = Math.floor(raw / 10);
    const step = { pos, digit: d, multiplier: b, raw, resultDigit: digit, carry, newCarry };
    carry = newCarry;
    return step;
  });
  if (carry > 0) steps.push({ pos: digits.length, digit: 0, multiplier: b, raw: carry, resultDigit: carry % 10, carry: 0, newCarry: Math.floor(carry / 10), isFinalCarry: true });
  return { steps, result: a * b };
};

const LongMultiplicationGame = ({ setGameMode, setStars, longMultiStats, setLongMultiStats }) => {
  const [phase, setPhase] = useState("menu"); // menu | learn | practice | exam | results | speed | speedResults | speedSelect
  const [difficulty, setDifficulty] = useState(1);
  const [problem, setProblem] = useState(null);
  const [learnStep, setLearnStep] = useState(0);
  const [userInputs, setUserInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const [stepErrors, setStepErrors] = useState({});
  const [examProblems, setExamProblems] = useState([]);
  const [examIdx, setExamIdx] = useState(0);
  const [examAnswers, setExamAnswers] = useState([]);
  const [examInputs, setExamInputs] = useState({});
  const [examChecked, setExamChecked] = useState(false);
  // Contrarreloj
  const [speedSelected, setSpeedSelected] = useState([1, 2]); // dificultades elegidas
  const [speedMultipliers, setSpeedMultipliers] = useState([2, 3, 4, 5, 6, 7, 8, 9]); // multiplicadores elegidos
  const [speedProblem, setSpeedProblem] = useState(null);
  const [speedInput, setSpeedInput] = useState("");
  const [speedTimeLeft, setSpeedTimeLeft] = useState(60);
  const [speedScore, setSpeedScore] = useState({ correct: 0, wrong: 0 });
  const [speedFeedback, setSpeedFeedback] = useState(null); // null | "correct" | "wrong"
  const speedTimerRef = React.useRef(null);
  const speedDiffsRef = React.useRef([1]);
  const speedMultRef = React.useRef([2,3,4,5,6,7,8,9]);
  const speedScoreRef = React.useRef({ correct: 0, wrong: 0 });

  useEffect(() => {
    if (phase !== "speed") return;
    speedTimerRef.current = setInterval(() => {
      setSpeedTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(speedTimerRef.current);
          setPhase("speedResults");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(speedTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const startLearn = (diff) => {
    setDifficulty(diff);
    const p = genLongProblem(diff);
    setProblem(p);
    setLearnStep(0);
    setPhase("learn");
  };

  const startPractice = (diff) => {
    setDifficulty(diff);
    const p = genLongProblem(diff);
    setProblem(p);
    setUserInputs({});
    setChecked(false);
    setStepErrors({});
    setPhase("practice");
  };

  const startSpeed = () => {
    const chosenDiffs = speedSelected.length > 0 ? speedSelected : [1];
    const chosenMults = speedMultipliers.length > 0 ? speedMultipliers : [2,3,4,5,6,7,8,9];
    speedDiffsRef.current = chosenDiffs;
    speedMultRef.current = chosenMults;
    speedScoreRef.current = { correct: 0, wrong: 0 };
    setSpeedScore({ correct: 0, wrong: 0 });
    setSpeedFeedback(null);
    setSpeedTimeLeft(60);
    const diff = chosenDiffs[Math.floor(Math.random() * chosenDiffs.length)];
    const mult = chosenMults[Math.floor(Math.random() * chosenMults.length)];
    setSpeedProblem(genLongProblem(diff, mult));
    setSpeedInput("");
    setPhase("speed");
  };

  const nextSpeedProblem = () => {
    const diffs = speedDiffsRef.current;
    const mults = speedMultRef.current;
    const diff = diffs[Math.floor(Math.random() * diffs.length)];
    const mult = mults[Math.floor(Math.random() * mults.length)];
    setSpeedProblem(genLongProblem(diff, mult));
    setSpeedInput("");
    setSpeedFeedback(null);
  };

  const submitSpeed = () => {
    if (!speedProblem || speedFeedback) return;
    const answer = parseInt(speedInput, 10);
    const isCorrect = answer === speedProblem.a * speedProblem.b;
    const next = {
      correct: speedScoreRef.current.correct + (isCorrect ? 1 : 0),
      wrong: speedScoreRef.current.wrong + (isCorrect ? 0 : 1),
    };
    speedScoreRef.current = next;
    setSpeedScore({ ...next });
    setSpeedFeedback(isCorrect ? "correct" : "wrong");
    setTimeout(() => nextSpeedProblem(), isCorrect ? 600 : 1800);
  };

  const nextPractice = () => {
    const p = genLongProblem(difficulty);
    setProblem(p);
    setUserInputs({});
    setChecked(false);
    setStepErrors({});
  };

  const startExam = (diff) => {
    setDifficulty(diff);
    const problems = Array.from({ length: 6 }, () => genLongProblem(diff));
    setExamProblems(problems);
    setExamIdx(0);
    setExamAnswers([]);
    setExamInputs({});
    setExamChecked(false);
    setPhase("exam");
  };

  const checkPractice = () => {
    if (!problem) return;
    const { steps } = computeSteps(problem.a, problem.b);
    const regularSteps = steps.filter((s) => !s.isFinalCarry);
    const lastRegularPos = regularSteps[regularSteps.length - 1]?.pos;
    const errors = {};
    steps.forEach((s) => {
      if (!s.isFinalCarry) {
        const isLastStep = s.pos === lastRegularPos;
        const givenVal = parseInt(userInputs[`digit_${s.pos}`] || "", 10);
        // Último paso con resultado de 2 dígitos: aceptar el valor completo (ej: 15)
        const expected = (isLastStep && s.raw >= 10) ? s.raw : s.resultDigit;
        if (isNaN(givenVal) || givenVal !== expected) errors[`digit_${s.pos}`] = true;
        // Solo pedir acarreo si hay más dígitos por multiplicar después
        if (s.newCarry > 0 && !isLastStep) {
          const givenCarry = parseInt(userInputs[`carry_${s.pos}`] || "", 10);
          if (isNaN(givenCarry) || givenCarry !== s.newCarry) errors[`carry_${s.pos}`] = true;
        }
      }
    });
    const givenResult = parseInt(userInputs["result"] || "", 10);
    if (isNaN(givenResult) || givenResult !== problem.a * problem.b) errors["result"] = true;
    setStepErrors(errors);
    setChecked(true);
  };

  const checkExam = () => {
    if (!examProblems[examIdx]) return;
    const p = examProblems[examIdx];
    const { steps, result } = computeSteps(p.a, p.b);
    const regularStepsE = steps.filter((s) => !s.isFinalCarry);
    const lastRegularPosE = regularStepsE[regularStepsE.length - 1]?.pos;
    const errors = {};
    steps.forEach((s) => {
      if (!s.isFinalCarry) {
        const isLastStepE = s.pos === lastRegularPosE;
        const givenValE = parseInt(examInputs[`digit_${s.pos}`] || "", 10);
        const expectedE = (isLastStepE && s.raw >= 10) ? s.raw : s.resultDigit;
        if (isNaN(givenValE) || givenValE !== expectedE) errors[`digit_${s.pos}`] = true;
        if (s.newCarry > 0 && !isLastStepE) {
          const givenCarry = parseInt(examInputs[`carry_${s.pos}`] || "", 10);
          if (isNaN(givenCarry) || givenCarry !== s.newCarry) errors[`carry_${s.pos}`] = true;
        }
      }
    });
    const givenResult = parseInt(examInputs["result"] || "", 10);
    if (isNaN(givenResult) || givenResult !== result) errors["result"] = true;
    const totalFields = steps.filter((s) => !s.isFinalCarry).length * 2 + 1;
    const errorCount = Object.keys(errors).length;
    const correct = errorCount === 0;
    setStepErrors(errors);
    setExamChecked(true);
    const record = { a: p.a, b: p.b, result, correct, errors: errorCount, totalFields };
    setExamAnswers((prev) => {
      const updated = [...prev, record];
      if (examIdx + 1 >= examProblems.length) {
        const correctCount = updated.filter((x) => x.correct).length;
        const pct = Math.round((correctCount / updated.length) * 100);
        const session = {
          difficulty,
          date: new Date().toLocaleDateString("es-CO"),
          timestamp: Date.now(),
          correct: correctCount,
          total: updated.length,
          percentage: pct,
          stars: pct === 100 ? 3 : pct >= 66 ? 2 : 1,
        };
        setLongMultiStats((prev) => {
          const next = { sessions: [...(prev.sessions || []), session] };
          try { localStorage.setItem("samu_longMultiStats", JSON.stringify(next)); } catch (e) {}
          return next;
        });
        setStars((s) => s + (pct === 100 ? 3 : pct >= 66 ? 2 : 1));
      }
      return updated;
    });
  };

  const nextExam = () => {
    if (examIdx + 1 >= examProblems.length) {
      setPhase("results");
    } else {
      setExamIdx((i) => i + 1);
      setExamInputs({});
      setExamChecked(false);
      setStepErrors({});
    }
  };

  // ─── Menu ───────────────────────────────────────────────
  if (phase === "menu") {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setGameMode("menu")} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">←</button>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">🧮 Multiplicación Larga</h2>
            <p className="text-gray-500 text-sm">Aprende el proceso paso a paso · 64×9 · 672×4</p>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-6 text-sm text-blue-800">
          <p className="font-bold mb-1">¿Cómo funciona?</p>
          <p>Multiplicas cada cifra por separado, de derecha a izquierda, llevando lo que "sobra" (el acarreo) a la siguiente cifra.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <p className="font-bold text-gray-700 text-center">Elige dificultad:</p>
          <div className="grid grid-cols-2 gap-3">
            {[{ d: 1, label: "2 cifras × 1", ex: "64 × 9", color: "green" }, { d: 2, label: "3 cifras × 1", ex: "672 × 4", color: "orange" }].map(({ d, label, ex, color }) => (
              <div key={d} className={`border-2 border-${color}-200 rounded-2xl p-4 bg-${color}-50`}>
                <p className={`font-bold text-${color}-800 text-lg`}>{label}</p>
                <p className={`text-${color}-600 text-sm mb-3`}>Ej: {ex}</p>
                <div className="grid grid-cols-1 gap-2">
                  <button onClick={() => startLearn(d)} className={`bg-${color}-500 text-white py-2 rounded-xl font-bold text-sm hover:bg-${color}-600`}>👁️ Aprende</button>
                  <button onClick={() => startPractice(d)} className={`bg-white border-2 border-${color}-400 text-${color}-700 py-2 rounded-xl font-bold text-sm hover:bg-${color}-100`}>✏️ Practica</button>
                  <button onClick={() => startExam(d)} className="bg-gray-700 text-white py-2 rounded-xl font-bold text-sm hover:bg-gray-800">📝 Examen</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-2">
          <button onClick={() => startExam(3)} className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 rounded-2xl font-bold hover:scale-105 transition-transform">
            🏆 Examen Mixto
          </button>
          <button onClick={() => setPhase("speedSelect")} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-2xl font-bold hover:scale-105 transition-transform">
            ⚡ Contrarreloj
            <span className="block text-xs font-normal opacity-90 mt-0.5">
              {speedMultipliers.length === 8 ? "Todas las tablas" : speedMultipliers.map(m => `×${m}`).join(", ")}
            </span>
          </button>
        </div>
      </div>
    );
  }

  // ─── Learn ──────────────────────────────────────────────
  if (phase === "learn" && problem) {
    const { steps, result } = computeSteps(problem.a, problem.b);
    const aStr = String(problem.a);
    const bStr = String(problem.b);
    const rStr = String(result);
    const currentStep = steps[Math.min(learnStep, steps.length - 1)];
    const isShowingResult = learnStep >= steps.length;

    const partialResult = (() => {
      if (learnStep === 0) return "";
      const digits = steps.slice(0, learnStep).map((s) => s.resultDigit);
      return digits.reverse().join("");
    })();

    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setPhase("menu")} className="text-gray-500 hover:text-gray-700 font-bold text-xl">←</button>
          <h3 className="font-bold text-gray-700 text-lg">👁️ Aprende el proceso</h3>
          <button onClick={() => startLearn(difficulty)} className="text-xs bg-gray-100 px-3 py-1.5 rounded-full font-semibold text-gray-600 hover:bg-gray-200">Nuevo</button>
        </div>

        {/* Problema visual con acarreos encima */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6 font-mono">
          {(() => {
            const regularStepsLn = steps.filter((s) => !s.isFinalCarry);
            const lastPosLn = regularStepsLn[regularStepsLn.length - 1]?.pos;
            // Acarreos ya completados (de pasos anteriores al actual)
            const carryAboveLn = {};
            steps.forEach((s) => {
              if (!s.isFinalCarry && s.newCarry > 0 && s.pos !== lastPosLn && s.pos < learnStep) {
                const digitIdx = aStr.length - 1 - (s.pos + 1);
                if (digitIdx >= 0) carryAboveLn[digitIdx] = s.newCarry;
              }
            });
            return (
              <>
                <div className="flex justify-end items-end pt-6 mb-1">
                  {aStr.split("").map((ch, i) => (
                    <div key={i} className="relative text-center" style={{ minWidth: "2.2rem" }}>
                      {carryAboveLn[i] !== undefined && (
                        <div className="absolute font-black text-red-500" style={{ top: "-1.4rem", left: 0, right: 0, textAlign: "center", fontSize: "1rem" }}>
                          {carryAboveLn[i]}
                        </div>
                      )}
                      <span className="text-4xl font-black text-gray-800">{ch}</span>
                    </div>
                  ))}
                </div>
                <div className="text-4xl font-black text-gray-800 text-right">× {bStr}</div>
                <div className="border-t-4 border-gray-700 my-1"></div>
                {isShowingResult
                  ? <div className="text-4xl font-black text-right text-green-700">{rStr}</div>
                  : <div className="text-4xl font-black text-right text-blue-400 tracking-widest">{partialResult || "?"}</div>
                }
              </>
            );
          })()}
        </div>

        {/* Carry row: solo si había acarreo Y hay más dígitos por multiplicar */}
        {(() => {
          const prevStep = steps[learnStep - 1];
          const regularStepsL = steps.filter((s) => !s.isFinalCarry);
          const lastRegularPosL = regularStepsL[regularStepsL.length - 1]?.pos;
          const isLastStep = prevStep && prevStep.pos === lastRegularPosL;
          return !isShowingResult && learnStep > 0 && prevStep?.newCarry > 0 && !isLastStep ? (
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-3 mb-4 text-center">
              <span className="text-yellow-800 font-bold text-sm">Llevamos <span className="text-2xl">{prevStep.newCarry}</span> a la siguiente cifra</span>
            </div>
          ) : null;
        })()}

        {/* Step explanation */}
        {!isShowingResult ? (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 mb-6">
            <p className="text-blue-800 font-bold text-center text-lg mb-2">
              Paso {learnStep + 1} de {steps.length}
            </p>
            <div className="text-center">
              <span className="text-4xl font-black text-gray-800">{currentStep.digit}</span>
              <span className="text-3xl font-black text-gray-500 mx-2">×</span>
              <span className="text-4xl font-black text-gray-800">{problem.b}</span>
              {currentStep.carry > 0 && <span className="text-2xl font-bold text-yellow-700 ml-2">+ {currentStep.carry} (acarreo)</span>}
              <span className="text-3xl font-black text-gray-500 mx-2">=</span>
              <span className="text-4xl font-black text-blue-700">{currentStep.raw}</span>
            </div>
            {(() => {
              const regularStepsL2 = steps.filter((s) => !s.isFinalCarry);
              const lastPosL2 = regularStepsL2[regularStepsL2.length - 1]?.pos;
              const isLastL2 = currentStep.pos === lastPosL2;
              if (currentStep.raw >= 10 && !isLastL2) {
                return <p className="text-center text-sm text-gray-600 mt-3">Escribimos <strong>{currentStep.resultDigit}</strong> y llevamos <strong>{currentStep.newCarry}</strong></p>;
              } else if (currentStep.raw >= 10 && isLastL2) {
                return <p className="text-center text-sm text-gray-600 mt-3">Escribimos <strong>{currentStep.raw}</strong> directamente (no hay más dígitos que multiplicar)</p>;
              } else {
                return <p className="text-center text-sm text-gray-600 mt-3">Escribimos <strong>{currentStep.resultDigit}</strong></p>;
              }
            })()}
          </div>
        ) : (
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-5 mb-6 text-center">
            <p className="text-green-800 font-black text-2xl">🎉 {problem.a} × {problem.b} = {result}</p>
            <p className="text-green-700 text-sm mt-2">¡Eso es todo el proceso!</p>
          </div>
        )}

        <div className="flex gap-3">
          {!isShowingResult ? (
            <>
              {learnStep > 0 && (
                <button onClick={() => setLearnStep((s) => s - 1)} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300">← Anterior</button>
              )}
              <button onClick={() => setLearnStep((s) => s + 1)} className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">
                {learnStep + 1 >= steps.length ? "Ver resultado →" : "Siguiente paso →"}
              </button>
            </>
          ) : (
            <>
              <button onClick={() => startPractice(difficulty)} className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700">✏️ Practicar ahora</button>
              <button onClick={() => setPhase("menu")} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300">Menú</button>
            </>
          )}
        </div>
      </div>
    );
  }

  // ─── Practice ───────────────────────────────────────────
  if (phase === "practice" && problem) {
    const { steps, result } = computeSteps(problem.a, problem.b);
    const aStr = String(problem.a);
    const bStr = String(problem.b);
    const rLen = String(result).length;
    const correctCount = Object.keys(stepErrors).length === 0 && checked;

    // Build live result preview as user fills in digits
    const liveChars = (() => {
      const chars = Array(rLen).fill(null);
      steps.forEach((s) => {
        const idx = rLen - 1 - s.pos;
        if (idx >= 0 && idx < rLen) {
          if (s.isFinalCarry) {
            const prevStep = steps.find((x) => x.pos === s.pos - 1);
            if (prevStep && userInputs[`digit_${prevStep.pos}`] !== undefined && userInputs[`digit_${prevStep.pos}`] !== "") {
              chars[idx] = String(s.resultDigit);
            }
          } else {
            const typed = userInputs[`digit_${s.pos}`];
            if (typed !== undefined && typed !== "") chars[idx] = typed.slice(-1);
          }
        }
      });
      return chars;
    })();

    const allFilled = liveChars.every((c) => c !== null);
    const liveStr = liveChars.map((c) => c ?? "_").join("");

    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setPhase("menu")} className="text-gray-500 hover:text-gray-700 font-bold text-xl">←</button>
          <h3 className="font-bold text-gray-700 text-lg">✏️ Practica</h3>
          <button onClick={() => startLearn(difficulty)} className="text-xs bg-blue-100 px-3 py-1.5 rounded-full font-semibold text-blue-700 hover:bg-blue-200">👁️ Ver ejemplo</button>
        </div>

        {/* Ecuación con resultado en vivo y acarreos visibles */}
        <div className="bg-gray-50 rounded-2xl p-5 mb-6 font-mono">
          {/* Multiplicando con acarreos encima */}
          {(() => {
            const regularStepsPr = steps.filter((s) => !s.isFinalCarry);
            const lastPosPr = regularStepsPr[regularStepsPr.length - 1]?.pos;
            const carryAbove = {};
            steps.forEach((s) => {
              if (!s.isFinalCarry && s.newCarry > 0 && s.pos !== lastPosPr) {
                const digitTyped = userInputs[`digit_${s.pos}`];
                if (digitTyped !== undefined && digitTyped !== "") {
                  const digitIdx = aStr.length - 1 - (s.pos + 1);
                  if (digitIdx >= 0) carryAbove[digitIdx] = s.newCarry;
                }
              }
            });
            return (
              <div className="flex justify-end items-end pt-6 mb-1">
                {aStr.split("").map((ch, i) => (
                  <div key={i} className="relative text-center" style={{ minWidth: "2rem" }}>
                    {carryAbove[i] !== undefined && (
                      <div className="absolute font-black text-red-500" style={{ top: "-1.4rem", left: 0, right: 0, textAlign: "center", fontSize: "0.9rem" }}>
                        {carryAbove[i]}
                      </div>
                    )}
                    <span className="text-3xl font-black text-gray-800">{ch}</span>
                  </div>
                ))}
              </div>
            );
          })()}
          <div className="text-3xl font-black text-gray-800 text-right">× {bStr}</div>
          <div className="border-t-4 border-gray-700 my-2"></div>
          <div className="text-4xl font-black tracking-widest text-right">
            {liveChars.map((ch, i) => (
              <span key={i} className={
                ch === null ? "text-gray-200"
                : checked
                  ? (String(result)[i] === ch ? "text-green-600" : "text-red-500")
                  : allFilled ? "text-blue-700" : "text-blue-500"
              }>{ch ?? "0"}</span>
            ))}
          </div>
          {allFilled && !checked && (
            <p className="text-xs text-blue-500 font-semibold mt-1 text-right">¿Es {liveStr}? Dale "Verificar" ✓</p>
          )}
          {checked && Object.keys(stepErrors).length === 0 && (
            <p className="text-xs text-green-600 font-bold mt-1 text-right">🎉 ¡Correcto!</p>
          )}
        </div>

        <p className="text-gray-600 font-semibold mb-4 text-sm">Completa cada paso (de derecha a izquierda):</p>

        <div className="space-y-3 mb-6">
          {(() => {
            const regularSteps = steps.filter((s) => !s.isFinalCarry);
            const lastRegularPos = regularSteps[regularSteps.length - 1]?.pos;
            return regularSteps.map((s) => {
              const label = s.pos === 0 ? "unidades" : s.pos === 1 ? "decenas" : "centenas";
              const isLast = s.pos === lastRegularPos;
              // Solo pedir acarreo si hay más dígitos por multiplicar (no en el último paso)
              const needsCarry = s.newCarry > 0 && !isLast;
              const isLastWithDouble = isLast && s.raw >= 10;
              const expectedPr = isLastWithDouble ? s.raw : s.resultDigit;
              return (
                <div key={s.pos} className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold mb-2 uppercase">
                    {label}: {s.digit} × {s.multiplier}{s.carry > 0 ? ` + ${s.carry} (acarreo)` : ""} = {checked ? <span className="text-blue-700">{s.raw}</span> : "?"}
                  </p>
                  {isLastWithDouble && !checked && (
                    <p className="text-xs text-purple-700 font-semibold mb-2 bg-purple-50 rounded-lg px-2 py-1">
                      💡 El resultado tiene 2 dígitos — escríbelos completos
                    </p>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <label className="text-xs text-gray-500">
                        {isLastWithDouble ? "Resultado completo:" : "Dígito resultado:"}
                      </label>
                      <input
                        type="number"
                        min="0"
                        max={isLastWithDouble ? "99" : "9"}
                        value={userInputs[`digit_${s.pos}`] || ""}
                        onChange={(e) => setUserInputs((prev) => ({ ...prev, [`digit_${s.pos}`]: e.target.value }))}
                        disabled={checked}
                        className={`w-full text-center text-2xl font-black rounded-xl border-2 py-2 mt-1 ${checked
                          ? stepErrors[`digit_${s.pos}`] ? "border-red-400 bg-red-50 text-red-700" : "border-green-400 bg-green-50 text-green-700"
                          : "border-gray-300 focus:border-blue-400 outline-none"}`}
                      />
                    </div>
                    {needsCarry && (
                      <div className="flex-1">
                        <label className="text-xs text-yellow-600 font-semibold">Llevo (acarreo):</label>
                        <input
                          type="number"
                          min="0"
                          max="9"
                          value={userInputs[`carry_${s.pos}`] || ""}
                          onChange={(e) => setUserInputs((prev) => ({ ...prev, [`carry_${s.pos}`]: e.target.value }))}
                          disabled={checked}
                          className={`w-full text-center text-2xl font-black rounded-xl border-2 py-2 mt-1 ${checked
                            ? stepErrors[`carry_${s.pos}`] ? "border-red-400 bg-red-50 text-red-700" : "border-yellow-400 bg-yellow-50 text-yellow-700"
                            : "border-yellow-300 focus:border-yellow-500 outline-none bg-yellow-50"}`}
                        />
                      </div>
                    )}
                  </div>
                  {checked && (
                    <p className="text-xs mt-2 font-semibold">
                      {stepErrors[`digit_${s.pos}`]
                        ? <span className="text-red-600">✗ Correcto: {expectedPr}</span>
                        : <span className="text-green-600">✓ {isLastWithDouble ? "Resultado correcto" : "Dígito correcto"}</span>}
                      {needsCarry && " · "}
                      {needsCarry && (stepErrors[`carry_${s.pos}`] ? <span className="text-red-600">✗ Acarreo correcto: {s.newCarry}</span> : <span className="text-green-600">✓ Acarreo correcto</span>)}
                    </p>
                  )}
                </div>
              );
            });
          })()}

          <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
            <label className="text-sm font-bold text-blue-800">Resultado final:</label>
            <input
              type="number"
              value={userInputs["result"] || ""}
              onChange={(e) => setUserInputs((prev) => ({ ...prev, result: e.target.value }))}
              disabled={checked}
              className={`w-full text-center text-3xl font-black rounded-xl border-2 py-3 mt-2 ${checked
                ? stepErrors["result"] ? "border-red-400 bg-red-50 text-red-700" : "border-green-400 bg-green-50 text-green-700"
                : "border-blue-300 focus:border-blue-500 outline-none"}`}
              placeholder="?"
            />
            {checked && (stepErrors["result"] ? <p className="text-red-600 text-xs mt-1 font-semibold">✗ Correcto: {result}</p> : <p className="text-green-600 text-xs mt-1 font-semibold">✓ ¡Correcto!</p>)}
          </div>
        </div>

        {!checked ? (
          <button onClick={checkPractice} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700">Verificar ✓</button>
        ) : (
          <div className="space-y-3">
            {correctCount
              ? <div className="bg-green-100 border-2 border-green-300 rounded-2xl p-4 text-center"><p className="text-green-800 font-black text-xl">🎉 ¡Perfecto! {problem.a} × {problem.b} = {result}</p></div>
              : <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 text-center"><p className="text-orange-800 font-bold">Revisa los errores marcados en rojo ☝️</p></div>
            }
            <div className="flex gap-3">
              <button onClick={nextPractice} className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">Otro →</button>
              <button onClick={() => setPhase("speedSelect")} className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600">⚡ Velocidad</button>
              <button onClick={() => startExam(difficulty)} className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold hover:bg-gray-800">📝 Examen</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ─── Exam ───────────────────────────────────────────────
  if (phase === "exam" && examProblems.length > 0) {
    const p = examProblems[examIdx];
    const { steps, result } = computeSteps(p.a, p.b);
    const aStr = String(p.a);
    const bStr = String(p.b);
    const isLast = examIdx + 1 >= examProblems.length;
    const rLenE = String(result).length;

    const liveCharsE = (() => {
      const chars = Array(rLenE).fill(null);
      steps.forEach((s) => {
        const idx = rLenE - 1 - s.pos;
        if (idx >= 0 && idx < rLenE) {
          if (s.isFinalCarry) {
            const prevStep = steps.find((x) => x.pos === s.pos - 1);
            if (prevStep && examInputs[`digit_${prevStep.pos}`] !== undefined && examInputs[`digit_${prevStep.pos}`] !== "") {
              chars[idx] = String(s.resultDigit);
            }
          } else {
            const typed = examInputs[`digit_${s.pos}`];
            if (typed !== undefined && typed !== "") chars[idx] = typed.slice(-1);
          }
        }
      });
      return chars;
    })();

    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setPhase("menu")} className="text-gray-500 hover:text-gray-700 font-bold text-xl">←</button>
          <h3 className="font-bold text-gray-700 text-lg">📝 Examen · {examIdx + 1}/{examProblems.length}</h3>
          <div className="text-xs bg-gray-100 px-3 py-1.5 rounded-full font-semibold text-gray-500">
            {examAnswers.filter((x) => x.correct).length} correctas
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 mb-6 font-mono">
          {(() => {
            const regularStepsEx = steps.filter((s) => !s.isFinalCarry);
            const lastPosEx = regularStepsEx[regularStepsEx.length - 1]?.pos;
            const carryAboveEx = {};
            steps.forEach((s) => {
              if (!s.isFinalCarry && s.newCarry > 0 && s.pos !== lastPosEx) {
                const digitTyped = examInputs[`digit_${s.pos}`];
                if (digitTyped !== undefined && digitTyped !== "") {
                  const digitIdx = aStr.length - 1 - (s.pos + 1);
                  if (digitIdx >= 0) carryAboveEx[digitIdx] = s.newCarry;
                }
              }
            });
            return (
              <div className="flex justify-end items-end pt-6 mb-1">
                {aStr.split("").map((ch, i) => (
                  <div key={i} className="relative text-center" style={{ minWidth: "2rem" }}>
                    {carryAboveEx[i] !== undefined && (
                      <div className="absolute font-black text-red-500" style={{ top: "-1.4rem", left: 0, right: 0, textAlign: "center", fontSize: "0.9rem" }}>
                        {carryAboveEx[i]}
                      </div>
                    )}
                    <span className="text-3xl font-black text-gray-800">{ch}</span>
                  </div>
                ))}
              </div>
            );
          })()}
          <div className="text-3xl font-black text-gray-800 text-right">× {bStr}</div>
          <div className="border-t-4 border-gray-700 my-2"></div>
          <div className="text-4xl font-black tracking-widest text-right">
            {liveCharsE.map((ch, i) => (
              <span key={i} className={
                ch === null ? "text-gray-200"
                : examChecked
                  ? (String(result)[i] === ch ? "text-green-600" : "text-red-500")
                  : "text-blue-500"
              }>{ch ?? "0"}</span>
            ))}
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {(() => {
            const regularStepsUI = steps.filter((s) => !s.isFinalCarry);
            const lastRegularPosUI = regularStepsUI[regularStepsUI.length - 1]?.pos;
            return regularStepsUI.map((s) => {
              const label = s.pos === 0 ? "unidades" : s.pos === 1 ? "decenas" : "centenas";
              const isLast = s.pos === lastRegularPosUI;
              const needsCarry = s.newCarry > 0 && !isLast;
              const isLastWithDoubleE = isLast && s.raw >= 10;
              const expectedEx = isLastWithDoubleE ? s.raw : s.resultDigit;
              return (
                <div key={s.pos} className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold mb-2 uppercase">
                    {label}: {s.digit} × {s.multiplier}{s.carry > 0 ? ` + ${s.carry} (acarreo)` : ""}
                  </p>
                  {isLastWithDoubleE && !examChecked && (
                    <p className="text-xs text-purple-700 font-semibold mb-2 bg-purple-50 rounded-lg px-2 py-1">
                      💡 El resultado tiene 2 dígitos — escríbelos completos
                    </p>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <label className="text-xs text-gray-500">{isLastWithDoubleE ? "Resultado completo:" : "Dígito:"}</label>
                      <input
                        type="number" min="0" max={isLastWithDoubleE ? "99" : "9"}
                        value={examInputs[`digit_${s.pos}`] || ""}
                        onChange={(e) => setExamInputs((prev) => ({ ...prev, [`digit_${s.pos}`]: e.target.value }))}
                        disabled={examChecked}
                        className={`w-full text-center text-2xl font-black rounded-xl border-2 py-2 mt-1 ${examChecked
                          ? stepErrors[`digit_${s.pos}`] ? "border-red-400 bg-red-50 text-red-700" : "border-green-400 bg-green-50 text-green-700"
                          : "border-gray-300 focus:border-blue-400 outline-none"}`}
                      />
                    </div>
                    {needsCarry && (
                      <div className="flex-1">
                        <label className="text-xs text-yellow-600 font-semibold">Llevo:</label>
                        <input
                          type="number" min="0" max="9"
                          value={examInputs[`carry_${s.pos}`] || ""}
                          onChange={(e) => setExamInputs((prev) => ({ ...prev, [`carry_${s.pos}`]: e.target.value }))}
                          disabled={examChecked}
                          className={`w-full text-center text-2xl font-black rounded-xl border-2 py-2 mt-1 ${examChecked
                            ? stepErrors[`carry_${s.pos}`] ? "border-red-400 bg-red-50 text-red-700" : "border-yellow-400 bg-yellow-50 text-yellow-700"
                            : "border-yellow-300 focus:border-yellow-500 outline-none bg-yellow-50"}`}
                        />
                      </div>
                    )}
                  </div>
                  {examChecked && (
                    <p className="text-xs mt-2 font-semibold">
                      {stepErrors[`digit_${s.pos}`] ? <span className="text-red-600">✗ Correcto: {expectedEx}</span> : <span className="text-green-600">✓</span>}
                      {needsCarry && " · "}
                      {needsCarry && (stepErrors[`carry_${s.pos}`] ? <span className="text-red-600">✗ Acarreo: {s.newCarry}</span> : <span className="text-green-600">✓ acarreo</span>)}
                    </p>
                  )}
                </div>
              );
            });
          })()}

          <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
            <label className="text-sm font-bold text-blue-800">Resultado final:</label>
            <input
              type="number"
              value={examInputs["result"] || ""}
              onChange={(e) => setExamInputs((prev) => ({ ...prev, result: e.target.value }))}
              disabled={examChecked}
              className={`w-full text-center text-3xl font-black rounded-xl border-2 py-3 mt-2 ${examChecked
                ? stepErrors["result"] ? "border-red-400 bg-red-50 text-red-700" : "border-green-400 bg-green-50 text-green-700"
                : "border-blue-300 focus:border-blue-500 outline-none"}`}
              placeholder="?"
            />
            {examChecked && (stepErrors["result"] ? <p className="text-red-600 text-xs mt-1 font-semibold">✗ Correcto: {result}</p> : <p className="text-green-600 text-xs mt-1 font-semibold">✓</p>)}
          </div>
        </div>

        {!examChecked ? (
          <button onClick={checkExam} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700">Verificar ✓</button>
        ) : (
          <div className="space-y-3">
            {Object.keys(stepErrors).length === 0
              ? <div className="bg-green-100 border-2 border-green-300 rounded-2xl p-3 text-center"><p className="text-green-800 font-black">🎉 ¡Sin errores! {p.a} × {p.b} = {result}</p></div>
              : <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-3 text-center"><p className="text-orange-800 font-bold">Hay {Object.keys(stepErrors).length} error(es). Correcto: {p.a} × {p.b} = {result}</p></div>
            }
            <button onClick={nextExam} className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">
              {isLast ? "Ver resultados 🏆" : "Siguiente →"}
            </button>
          </div>
        )}
      </div>
    );
  }

  // ─── Results ────────────────────────────────────────────
  if (phase === "results") {
    const total = examAnswers.length;
    const correctCount = examAnswers.filter((x) => x.correct).length;
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const stars = pct === 100 ? 3 : pct >= 66 ? 2 : 1;
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl mx-auto text-center">
        <div className="text-6xl mb-3">{pct === 100 ? "🏆" : pct >= 66 ? "🎉" : "💪"}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Examen terminado</h2>
        <div className="text-4xl mb-5">{"⭐".repeat(stars)}{"☆".repeat(3 - stars)}</div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4">
            <div className="text-4xl font-bold text-green-700">{correctCount}</div>
            <div className="text-xs text-green-600 font-semibold mt-1">✓ Correctas</div>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4">
            <div className="text-4xl font-bold" style={{ color: pct >= 80 ? "#16a34a" : pct >= 60 ? "#d97706" : "#dc2626" }}>{pct}%</div>
            <div className="text-xs text-gray-500 font-semibold mt-1">Acierto</div>
          </div>
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
            <div className="text-4xl font-bold text-red-600">{total - correctCount}</div>
            <div className="text-xs text-red-500 font-semibold mt-1">✗ Errores</div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 mb-6 text-left space-y-2">
          {examAnswers.map((ans, i) => (
            <div key={i} className={`flex justify-between items-center rounded-xl px-4 py-2 ${ans.correct ? "bg-green-50" : "bg-red-50"}`}>
              <span className="font-black text-gray-800">{ans.a} × {ans.b} = {ans.result}</span>
              <span className={`font-bold text-sm ${ans.correct ? "text-green-700" : "text-red-600"}`}>{ans.correct ? "✓" : `✗ (${ans.errors} err)`}</span>
            </div>
          ))}
        </div>

        {pct < 80 && (
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 mb-6 text-left text-sm text-amber-800">
            <p className="font-bold mb-2">💡 Consejo:</p>
            <p>Practica paso a paso con el modo "Aprende" antes de volver al examen. Recuerda: multiplica las unidades primero y lleva el acarreo.</p>
          </div>
        )}

        <div className="flex gap-3">
          <button onClick={() => startExam(difficulty)} className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">🔄 Repetir</button>
          <button onClick={() => startPractice(difficulty)} className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700">✏️ Practicar</button>
          <button onClick={() => setGameMode("menu")} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300">🏠 Inicio</button>
        </div>
      </div>
    );
  }

  // ─── Speed Select ───────────────────────────────────────
  if (phase === "speedSelect") {
    const toggleMult = (m) => setSpeedMultipliers((prev) =>
      prev.includes(m) ? (prev.length > 1 ? prev.filter((x) => x !== m) : prev) : [...prev, m]
    );
    const toggleDiff = (d) => setSpeedSelected((prev) =>
      prev.includes(d) ? (prev.length > 1 ? prev.filter((x) => x !== d) : prev) : [...prev, d]
    );
    const multSummary = speedMultipliers.length === 8
      ? "Todas las tablas"
      : speedMultipliers.map(m => `×${m}`).join(", ");
    const cifrasSummary = speedSelected.length === 2 ? "2 y 3 cifras" : speedSelected.includes(2) ? "Solo 3 cifras" : "Solo 2 cifras";
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setPhase("menu")} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">←</button>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">⚡ Contrarreloj</h2>
            <p className="text-gray-500 text-sm">Elige las tablas y la dificultad</p>
          </div>
        </div>

        {/* Multiplier selection */}
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">¿Por qué tabla?</p>
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[2,3,4,5,6,7,8,9].map((m) => {
            const sel = speedMultipliers.includes(m);
            return (
              <button
                key={m}
                onClick={() => toggleMult(m)}
                className={`py-3 rounded-2xl font-black text-xl transition-all ${
                  sel
                    ? "bg-orange-500 text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                ×{m}
              </button>
            );
          })}
        </div>

        {/* Difficulty selection */}
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">¿Cuántas cifras?</p>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {[
            { d: 1, label: "2 cifras", ex: "64 × ?" },
            { d: 2, label: "3 cifras", ex: "672 × ?" },
          ].map(({ d, label, ex }) => {
            const sel = speedSelected.includes(d);
            return (
              <button
                key={d}
                onClick={() => toggleDiff(d)}
                className={`py-3 px-4 rounded-2xl font-bold transition-all ${
                  sel
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                <span className="block text-base">{label}</span>
                <span className={`block text-xs font-normal mt-0.5 ${sel ? "text-blue-100" : "text-gray-400"}`}>{ex}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-3 mb-6 text-center text-sm text-orange-700 font-semibold">
          60 segundos · {multSummary} · {cifrasSummary}
        </div>

        <button
          onClick={startSpeed}
          disabled={speedMultipliers.length === 0 || speedSelected.length === 0}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 rounded-2xl font-black text-xl hover:scale-105 transition-transform disabled:opacity-40"
        >
          ⚡ ¡Empezar!
        </button>
      </div>
    );
  }

  // ─── Speed (Contrarreloj) ───────────────────────────────
  if (phase === "speed" && speedProblem) {
    const total = speedScore.correct + speedScore.wrong;
    const timerColor = speedTimeLeft <= 10 ? "text-red-600" : speedTimeLeft <= 20 ? "text-orange-500" : "text-gray-700";
    const multLabel = speedMultRef.current.length === 8 ? "Todas las tablas" : speedMultRef.current.map(m => `×${m}`).join(", ");
    const cifrasLabel = speedDiffsRef.current.length > 1 ? "2 y 3 cifras" : speedDiffsRef.current[0] === 2 ? "3 cifras" : "2 cifras";
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => { clearInterval(speedTimerRef.current); setPhase("menu"); }} className="text-gray-400 hover:text-gray-600 font-bold text-xl">←</button>
          <div className="text-center">
            <p className="text-xs text-gray-400 font-semibold">⚡ Contrarreloj · {multLabel} · {cifrasLabel}</p>
            <p className="text-xs text-gray-400">{speedScore.correct} ✓ · {speedScore.wrong} ✗ · {total} resueltas</p>
          </div>
          <div className={`text-4xl font-black tabular-nums ${timerColor}`}>{speedTimeLeft}s</div>
        </div>

        {/* Barra de tiempo */}
        <div className="w-full bg-gray-100 rounded-full h-3 mb-6">
          <div
            className={`h-3 rounded-full transition-all ${speedTimeLeft <= 10 ? "bg-red-500" : speedTimeLeft <= 20 ? "bg-orange-400" : "bg-green-500"}`}
            style={{ width: `${(speedTimeLeft / 60) * 100}%` }}
          />
        </div>

        {/* Problema */}
        <div className={`rounded-2xl p-6 mb-6 font-mono text-right transition-all ${
          speedFeedback === "correct" ? "bg-green-50 border-2 border-green-400" :
          speedFeedback === "wrong" ? "bg-red-50 border-2 border-red-400" :
          "bg-gray-50 border-2 border-gray-200"}`}>
          <div className="text-4xl font-black text-gray-800">{speedProblem.a}</div>
          <div className="text-4xl font-black text-gray-800">× {speedProblem.b}</div>
          <div className="border-t-4 border-gray-700 my-2"></div>
          {speedFeedback === "correct" && <div className="text-5xl font-black text-green-700">{speedProblem.a * speedProblem.b} ✓</div>}
          {speedFeedback === "wrong" && <div className="text-5xl font-black text-red-500">{speedProblem.a * speedProblem.b}</div>}
          {!speedFeedback && <div className="text-5xl font-black text-blue-300">?</div>}
        </div>

        {speedFeedback === "wrong" && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3 mb-4 text-center">
            <p className="text-red-700 font-bold">✗ Pusiste {speedInput} · Correcto: {speedProblem.a * speedProblem.b}</p>
          </div>
        )}

        {/* Input */}
        <div className="flex gap-3">
          <input
            type="number"
            value={speedInput}
            onChange={(e) => setSpeedInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitSpeed()}
            disabled={!!speedFeedback}
            placeholder="Resultado..."
            autoFocus
            className="flex-1 text-center text-3xl font-black rounded-2xl border-2 border-blue-300 py-4 focus:border-blue-500 outline-none disabled:bg-gray-50"
          />
          <button
            onClick={submitSpeed}
            disabled={!!speedFeedback || speedInput === ""}
            className="bg-blue-600 text-white px-6 rounded-2xl font-bold text-xl hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >✓</button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-3">Presiona Enter para confirmar</p>
      </div>
    );
  }

  // ─── Speed Results ──────────────────────────────────────
  if (phase === "speedResults") {
    const { correct, wrong } = speedScoreRef.current;
    const total = correct + wrong;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const stars = pct === 100 ? 3 : pct >= 70 ? 2 : 1;
    const multLabelR = speedMultRef.current.length === 8 ? "Todas las tablas" : speedMultRef.current.map(m => `×${m}`).join(", ");
    const cifrasLabelR = speedDiffsRef.current.length > 1 ? "2 y 3 cifras" : speedDiffsRef.current[0] === 2 ? "3 cifras" : "2 cifras";
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl mx-auto text-center">
        <div className="text-6xl mb-3">{pct === 100 ? "🏆" : pct >= 70 ? "🎉" : "💪"}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-0.5">⚡ Contrarreloj · {multLabelR}</h2>
        <p className="text-sm text-gray-400 mb-3">{cifrasLabelR}</p>
        <div className="text-4xl mb-5">{"⭐".repeat(stars)}{"☆".repeat(3 - stars)}</div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4">
            <div className="text-4xl font-bold text-green-700">{correct}</div>
            <div className="text-xs text-green-600 font-semibold mt-1">✓ Correctas</div>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4">
            <div className="text-4xl font-bold" style={{ color: pct >= 80 ? "#16a34a" : pct >= 60 ? "#d97706" : "#dc2626" }}>{pct}%</div>
            <div className="text-xs text-gray-500 font-semibold mt-1">Acierto</div>
          </div>
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
            <div className="text-4xl font-bold text-red-600">{wrong}</div>
            <div className="text-xs text-red-500 font-semibold mt-1">✗ Errores</div>
          </div>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-3 mb-6">
          <p className="text-orange-800 font-bold">⚡ {total} multiplicaciones en 60 segundos</p>
          {total >= 5 && <p className="text-orange-600 text-sm mt-1">¡Excelente ritmo! ¿Puedes mejorar tu marca?</p>}
          {total < 5 && <p className="text-orange-600 text-sm mt-1">Con más práctica irás más rápido 💪</p>}
        </div>

        <div className="flex gap-3">
          <button onClick={startSpeed} className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600">⚡ Repetir</button>
          <button onClick={() => setPhase("menu")} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300">Menú</button>
          <button onClick={() => setGameMode("menu")} className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-200">🏠 Inicio</button>
        </div>
      </div>
    );
  }

  return null;
};

export default PixelRobotGame;

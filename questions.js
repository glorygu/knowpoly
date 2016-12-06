var questions =
{
	web:
	[
		{
			text: 'El primer navegador web fue',
			options:
			[
				'Netscape Navigator',
				'Internet Explorer',
				'NCSA Mosaic',
				'Opera',
				'WorldWideWeb',
			],
			answer: 5,
			difficulty: 0.6,
		},
		{
			text: 'Hipertexto significa',
			options:
			[
				'Que sólo puede contener texto con formato',
				'Que puede tener fórmulas matemáticas',
				'Que puede tener enlaces',
				'Que viene de un procesador de palabras',
			],
			answer: 3,
			difficulty: 0.2,
		},
		{
			text: 'La web fue creada por un',
			options:
			[
				'matemático',
				'ingeniero eléctrico',
				'físico',
				'informático',
			],
			answer: 3,
			difficulty: 0.4,
		},
		{
			text: 'El Consorcio Web (W3C, World Wide Web Consortium) tiene sede en',
			options:
			[
				'Instituto Tecnológico de Massachusetts (MIT)',
				'Organización Europea para la Investigación Nuclear (CERN, en francés)',
				'National Center for Supercomputing Applications (NCSA)',
				'University of Illinois en Urbana-Champaign (UIUC)',
				'Sillicon Valley, California',
			],
			answer: 1,
			difficulty: 0.5,
		},
		{
			text: 'La primera guerra de navegadores termina cuando',
			options:
			[
				'Netscape libera su código fuente',
				'Firefox sale al mercado',
				'Microsoft compra a Netscape',
				'Microsoft integra a Internet Explorer con Windows',
				'Apple renuncia a usar Internet Explorer'
			],
			answer: 4,
			difficulty: 0.3,
		},
		{
			text: 'Una consecuencia negativa de la primera guerra de navegadores fue',
			options:
			[
				'Hubo un estancamiento en las innovaciones',
				'Crearon dialectos de HTML incompatibles',
				'Obligaron a un proceso de estandarización',
				'Disminuyeron la popularidad de la web',
			],
			answer: 2,
			difficulty: 0.3,
		},
		{
			text: 'Si un autor necesita validar un documento HTML4 con elementos <font>, debe usar',
			options:
			[
				'HTML 4.0 Strict',
				'HTML 4.0 Transitional',
				'HTML 4.0 Frameset',
				'HTML 4.0 CSS',
			],
			answer: 2,
			difficulty: 0.5,
		},
		{
			text: '¿Cuál de los siguientes entes NO participó en la creación de HTML5?',
			options:
			[
				'Mozilla Foundation',
				'Opera Software',
				'Apple',
				'Web Hypertext Application Technology Working Group (WHATWG)',
				'World Wide Web Consortium (W3C)',
			],
			answer: 5,
			difficulty: 0.3,
		},
		{
			text: '¿Cuál de las siguientes es verdadera?',
			options:
			[
				'HTML5 se apega a XML',
				'XHTML y HTML5 se pueden usar intercambiablemente',
				'HTML5 está orientado a aplicaciones',
				'Lo novedoso de XHTML es el API JavaScript',
			],
			answer: 3,
			difficulty: 0.3,
		},
		{
			text: '¿Cuál de las siguientes proposiciones es falsa?',
			options:
			[
				'Apple desarrolló Webkit porque Microsoft descontinuó Internet Explorer para Mac',
				'Webkit surgió adaptando el código libre de KHtml',
				'Google creó Webkit en Android para competir contra Safari en iOS',
				'Firefox no reutilizó el código fuente de Mozilla por pobre calidad de código',
				'Microsoft abandonó Internet Explorer por pobre calidad de código'
			],
			answer: 3,
			difficulty: 0.3,
		},
		{
			text: 'En la actualidad (2016) cuál es el motor HTML más usando en el mundo',
			options:
			[
				'Gecko',
				'WebKit',
				'Trident',
				'Presto',
			],
			answer: 2,
			difficulty: 0.3,
		},
		{
			text: 'Los servidores web esperan, por defecto, conexiones en el puerto TCP:',
			options:
			[
				'21',
				'23',
				'80',
				'443',
			],
			answer: 3,
			difficulty: 0.2,
		},
		{
			text: 'Para cargar una página web en un servidor remoto, el cliente necesita conocer ineludiblemente:',
			options:
			[
				'El nombre de dominio del servidor',
				'La dirección IP del servidor',
				'El puerto del servidor web',
				'La versión de HTTP que habla el servidor',
			],
			answer: 2,
			difficulty: 0.4,
		},
		{
			text: 'Cuando un usuario escribe un nombre de dominio, como www.ejemplo.com, en un navegador web',
			options:
			[
				'El navegador solicita al sistema operativo convertir www.ejemplo.com a una dirección IP',
				'El navegador conecta directamente con www.ejemplo.com',
				'El navegador contacta a un servidor de DNS para que convierta www.ejemplo.com a una dirección IP',
				'El navegador no necesita convertir el dominio, los mensajes HTTP pueden llevar dominios en su destino',
			],
			answer: 1,
			difficulty: 0.5,
		},
		{
			text: 'En terminología web "user agent" se refiere a',
			options:
			[
				'Cualquier software cliente HTTP, como un navegador',
				'El usuario en el navegador',
				'El motor de rendering que corre el navegador (Gecko, WebKit, ...)',
				'El servidor web',
			],
			answer: 1,
			difficulty: 0.3,
		},
		{
			text: 'Ha sido históricamente el servidor web con más funcionalidad y más empleado en el mundo:',
			options:
			[
				'Microsoft Internet Information Services (IIS)',
				'Google Web Server (GWS)',
				'Apache HTTP Server',
				'nginx',
			],
			answer: 3,
			difficulty: 0.3,
		},
		{
			text: 'Surgió como una alternativa más eficiente al servidor web Apache:',
			options:
			[
				'Microsoft Internet Explorer',
				'Gecko',
				'WebKit',
				'nginx',
			],
			answer: 4,
			difficulty: 0.4,
		},
		{
			text: '¿Cuál de los siguientes términos NO pertence al conjunto?',
			options:
			[
				'navegador web',
				'cliente web',
				'servidor web',
				'agente usuario',
			],
			answer: 1,
			difficulty: 0.4,
		},
		{
			text: 'Los motores de "rendering" web populares (Gecko, WebKit, Presto y EdgeHTML), están programados en:',
			options:
			[
				'Java',
				'C++',
				'PHP',
				'JavaScript',
				'Python',
				'Ruby on Rails',
			],
			answer: 2,
			difficulty: 0.4,
		},
		{
			text: '¿Cuál de los siguientes NO es un URL válido?',
			options:
			[
				'http://t.io/#s1',
				'https://Sele.CR:13/sonamos.php?#',
				'ftp://trump@miss.universe.com:8080/campaign/',
				'http://la.cueva.cr/?you@gmail.com:9000/#black&friday',
			],
			answer: 4,
			difficulty: 0.5,
		},
		{
			text: '¿Cuál de los siguientes NO es un protocolo válido en un URL?',
			options:
			[
				'mailto',
				'https',
				'file',
				'ajax',
				'news',
				'tv',
			],
			answer: 4,
			difficulty: 0.7,
		},
		{
			text: 'Al protocolo en un URL (ej: https) también se le refiere en inglés como:',
			options:
			[
				'RFC',
				'URN',
				'Standard',
				'URI Scheme',
				'Interface',
				'Service Type',
			],
			answer: 4,
			difficulty: 0.7,
		},
		{
			text: 'Se dice que un URL es un tipo especial de',
			options:
			[
				'URI',
				'URN',
				'RFC',
				'esquema',
				'protocolo',
			],
			answer: 1,
			difficulty: 0.4,
		},
		{
			text: 'Cuando un cliente web debe solicitar el recurso https://my.io/file.zip, hará una solicitud en el puerto',
			options:
			[
				'21',
				'22',
				'80',
				'443',
			],
			answer: 4,
			difficulty: 0.3,
		},
		{
			text: '¿Cuál de las siguientes partes de un URL puede ser sensible a mayúsculas o minúsculas',
			options:
			[
				'El protocolo',
				'El servidor',
				'El puerto',
				'El esquema',
				'La ruta',
			],
			answer: 5,
			difficulty: 0.4,
		},
		{
			text: 'El trozo de un URL en formato "parametro1=valor1&parametro2=valor2..." recibe en inglés el nombre de',
			options:
			[
				'Arguments',
				'Query String',
				'Fragment',
				'Path',
				'Scheme',
			],
			answer: 2,
			difficulty: 0.3,
		},
		{
			text: 'Al cargar el URL "http://file.io/#foo", el navegador:',
			options:
			[
				'Preguntará al usuario dónde descargar una copia del archivo foo',
				'Se desplazará a la sección con identificación "foo", si existe en el documento retornado',
				'Producirá un error de URL no válido',
				'Ignorará el trozo "#foo", pues es un comentario',
			],
			answer: 2,
			difficulty: 0.5,
		},
		{
			text: 'El URL "https://file.io/tesis%2075%25.docx": ',
			options:
			[
				'No es válido y producirá un error',
				'Se interpretará literalmente y tratará de conseguir el archivo "tesis%2075%25.docx"',
				'Está codificado y el servidor tratará de conseguir el archivo "tesis 75%.docx"',
				'Está codificado y el servidor lo decodifica con el cerfiticado HTTPS',
			],
			answer: 3,
			difficulty: 0.5,
		},
		{
			text: 'La principal diferencia entre HTTP/1.0 y HTTP/1.1 es',
			options:
			[
				'HTTP/1.0 es modo texto y HTTP/1.1 es binario',
				'HTTP/1.0 es orientado a documentos y HTTP/1.1 a aplicaciones',
				'HTTP/1.0 cierra la sesión por cada recurso enviado y HTTP/1.1 la mantiene',
				'HTTP/1.0 usa UDP y HTTP/1.1 usa TCP',
			],
			answer: 3,
			difficulty: 0.5,
		},
		{
			text: 'De acuerdo al protocolo HTTP, el campo "Status line" es parte de:',
			options:
			[
				'Request Header',
				'Request Message',
				'Response Header',
				'Response Message',
				'Message Body',
			],
			answer: 3,
			difficulty: 0.8,
		},
		{
			text: 'La instrucción "GET / HTTP/1.1" es un ejemplo de:',
			options:
			[
				'Request Line en el Request Message',
				'Request Header en el Request Message',
				'Status Line en el Response Message',
				'Response Header en el Response Message',
				'Response Body en el Response Message',
			],
			answer: 1,
			difficulty: 0.5,
		},
		{
			text: 'La instrucción "HTTP/1.1 200 OK" es un ejemplo de:',
			options:
			[
				'Request Line en el Request Message',
				'Request Header en el Request Message',
				'Status Line en el Response Message',
				'Response Header en el Response Message',
				'Response Body en el Response Message',
			],
			answer: 3,
			difficulty: 0.5,
		},
		{
			text: 'GET, HEAD, PUT, POST, son ejemplos de métodos que van en:',
			options:
			[
				'Request Line en el Request Message',
				'Request Header en el Request Message',
				'Status Line en el Response Message',
				'Response Header en el Response Message',
				'Response Body en el Response Message',
			],
			answer: 1,
			difficulty: 0.8,
		},
		{
			text: 'El código de estado 301 del protocolo HTTP indica',
			options:
			[
				'Que el recurso no existe',
				'Que el servidor web está ocupado',
				'Que el recurso se movió a otro lugar',
				'Que el servidor web no tiene permisos para acceder al recurso',
			],
			answer: 3,
			difficulty: 0.8,
		},
        {
			text: 'El código de estado HTTP que indica que el tipo solicitado no es de los que el cliente acepta es:',
			options:
			[
				'código 404',
				'código 304',
				'código 200',
				'código 406',
			],
			answer: 4,
			difficulty: 1.0,
		},
        {
			text: 'En HTTP, se permite al cliente proveer información adicional sobre la petición o sobre el cliente mismo al servidor, en el siguiente campo:',
			options:
			[
				'Request line',
				'Request body',
				'Status line',
				'Request header',
			],
			answer: 4,
			difficulty: 0.6,
		},
		{
			text: 'Los documentos XML constan de:',
			options:
			[
				'1 parte',
				'2 partes',
				'3 partes',
				'4 partes',
			],
			answer: 2,
			difficulty: 0.4,
		},
        {
			text: 'La definición de tipo de documento (DTD, Document Type Definition) es:',
			options:
			[
				'el conjunto de normas de XHTML para la representación de documentos de un determinado tipo',
				'el conjunto de normas XML para la representación de documentos de un determinado tipo',
				'el conjunto de normas de CSS para la representación de documentos de un determinado tipo',
				'un documento con los tipos de datos usados en JavaScript',
			],
			answer: 2,
			difficulty: 0.4,
		},
		{
			text: 'Sunponga el siguiente caso: "Una lista de html ordenada "ol" debería aparecer listada por números, pero están apareciendo viñetas de puntos, ¿Cuál propiedad de CSS está causando esto?',
			options:
			[
				'padding: 3em;',
				'list-style-position: outside;',
                'list-style-type: disc;',
				'list-style: upper-alpha outside;',
			],
			answer: 3,
			difficulty: 0.6,
		},
		{
			text: 'En javascript un arreglo asociativo se puede representar con:',
			options:
			[
				'valores especiales',
				'objetos',
				'associative-array',
				'arreglos',
			],
			answer: 2,
			difficulty: 0.8,
		},
        {
			text: 'A cuál tipo de unidad se refiere la siguiente descripción: "centímetros (cm), milímetros (mm), pulgadas (in), puntos (pt) y picas (pc)." ',
			options:
			[
				'Absolutas',
				'Relativas',
				'Notaciones',
				'Posicionadas',
			],
			answer: 1,
			difficulty: 0.5,
		},
        {
			text:'Cuál es el resultado de la siguiente línea de código en JavaScript: var product = "21" * "2" ',
			options:
			[
				'product == 42',
				'product == "21*2"',
				'product == "42"',
				'product == 0',
			],
			answer: 1,
			difficulty: 0.7,
		},
        {
			text: 'var c = Number(a);  ¿Qué valor y tipo de datos genera la anterior expresion en JavaScript?',
			options:
			[
				'Undefined',
				'true',
				'NaN',
				'0',
			],
			answer: 4,
			difficulty: 0.9,
		},
        {
			text: 'Dentro de una sección de declaración de variables (var) de JavaScript cuál de la siguientes opciones indica la creación de un objeto literal.',
			options:
			[
				'los corchetes []',
				'las llaves {}',
				'las comillas dobles ""',
				'con el operador new',
			],
			answer: 2,
			difficulty: 0.8,
		},
    	{
			text: 'En JavaScript, si un objeto aparece en un contexto string, se invocará',
			options:
			[
				'valueOf()',
				'toString()',
				'random()',
				'toInt()',
			],
			answer: 2,
			difficulty: 0.1,
		},
        {
			text: 'El valor que se utiliza en JavaScript para indicar ausencia de valor y que un valor se esperaba y no fue provisto es:',
			options:
			[
				'null',
				'NaN',
				'undefined',
				'0',
			],
			answer: 3,
			difficulty: 0.7,
		},
       	{
			text: 'Los valores primitivos (booleanos, números, strings y valores especiales) son manipulados:',
			options:
			[
				'por estructuras de datos',
				'por referencia',
				'por valor',
				'por medio de objetos',
			],
			answer: 3,
			difficulty: 0.6,
		},
        {
			text: 'La diferencia entre HTML y XHTML es que:',
			options:
			[
				'HTML es bastante liberal mientras XHTML es inherentemente estricto',
				'No hay diferencia',
				'XHTML es bastante liberal mientras HTML es inherentemente estricto',
			],
			answer: 1,
			difficulty: 0.3,
		},
		{
			text: 'Son grandes secciones de información que la componen por ejemplo encabezado del sitio, un pie de página, un menú de navegación, el contenido',
			options:
			[
				'Se conocen como estructura principal y no sirve de mucho',
				'Se conocen como conjunto de atributos y no sirve de mucho',
                'Se conocen como estructura principal y es buena práctica tenerlo',
				'Se conocen como conjunto de atributos y es buena práctica tenerlo',
			],
			answer: 3,
			difficulty: 0.4,
		},
        {
			text: 'Cuántos elementos genéricos para amoldarse y poder describir la estructura de un documento define (X)HTML5? ',
			options:
			[
				'6: header, footer, nav, aside, article y section',
				'5: header, footer, nav, article y section',
				'4: header, footer, nav y article',
                '3: header, footer y nav',
			],
			answer: 1,
			difficulty: 0.7,
		},
        {
			text: 'Cuál elemento representa el cambio del línea?',
			options:
			[
				'No es necesario usar un elemento',
				'</n>',
				'<br/>',
                '</br>',
			],
			answer: 3,
			difficulty: 0.1,
		},
        {
			text: 'El elemento <blockquote> : ',
			options:
			[
				'no usa comillas y el texto citado es en un párrafo aparte e indentado',
				'si usa comillas y el texto citado es corto',
				'si usa comillas y el texto citado es en un párrafo aparte e indentado',
				'no usa comillas y el texto citado es corto',
			],
			answer: 1,
			difficulty: 0.8,
		},
        {
			text: 'El elemento <q> :',
			options:
			[
				'no usa comillas y el texto citado es en un párrafo aparte e indentado',
				'si usa comillas y el texto citado es corto',
				'si usa comillas y el texto citado es en un párrafo aparte e indentado',
				'no usa comillas y el texto citado es corto',
			],
			answer: 2,
			difficulty: 0.8,
		},
        {
			text: 'El elemento <em> : ',
			options:
			[
				'Indica una cita o referencia a otras fuentes.',
				'Indica énfasis.',
				'Indica salida de programas informáticos.',
				'Indica un término que se está definiendo.',
                'Indica que el texto debe ser ingresado o tecleado por el usuario',
			],
			answer: 2,
			difficulty: 0.3,
		},
        {
            text: 'El elemento <kbd> : ',
			options:
			[
				'Indica una cita o referencia a otras fuentes.',
				'Indica énfasis.',
				'Indica salida de programas informáticos.',
				'Indica un término que se está definiendo.',
                'Indica que el texto debe ser ingresado o tecleado por el usuario',
			],
			answer: 5,
			difficulty: 0.7,
		},
        {
            text: 'Son listas que sirven para indicar una lista de ítemes que no siguen un orden inherente',
			options:
			[
				'<dl>',
				'<ol>',
				'<ul>',
			],
			answer: 3,
			difficulty: 0.5,
		},
		{
			text: '¿Cómo se hace para que en un enlace href se abra el enlace en una ventana o pestaña nueva del navegador?',
			options:
			[
				'no se puede',
				'lo hace por defecto',
				'target = "_blank"',
				'target = "_self"',
			],
			answer: 4,
			difficulty: 0.7,
		},
        {
			text: 'El tipo de imagen adecuado para Fotografías es',
			options:
			[
				'JPG',
				'GIF',
				'PNG o SVG',
			],
			answer: 1,
			difficulty: 0.6,
		},
        {
			text: 'El tipo de imagen adecuado para Ilustraciones es',
			options:
			[
				'JPG',
				'GIF',
				'PNG o SVG',
			],
			answer: 3,
			difficulty: 0.6,
		},
        {
			text: 'El tipo de imagen adecuado para Animaciones sencillas es',
			options:
			[
				'JPG',
				'GIF',
				'PNG o SVG',
			],
			answer: 2,
			difficulty: 0.6,
		},
		{
			text: 'En las tablas (X)HTML las filas se pueden clasificar en',
			options:
			[
				'filas que forman el encabezado de la tabla, filas que forman el cuerpo de la tabla y filas que forman el pie de tabla',
				'filas que forman el encabezado de la tabla y filas que forman el cuerpo de la tabla',
				'solo existen un tipo de filas <tbody>',
				'filas que forman el encabezado de la tabla y filas que forman el pie de tabla',
			],
			answer: 1,
			difficulty: 0.7,
		},
		{
			text: 'La cantidad de columnas que ocupa una celda se indica con el atributo: ',
			options:
			[
				'colspan',
				'rowspan',
				'abbr',
                'no hay atributo para esto',
			],
			answer: 1,
			difficulty: 0.1,
		},
        {
			text: 'La cantidad de columnas que ocupa una celda se indica con el atributo: ',
			options:
			[
				'colspan',
				'rowspan',
				'abbr',
                'no hay atributo para esto',
			],
			answer: 2,
			difficulty: 0.1,
		},
/*
		{
			text: '',
			options:
			[
				'',
				'',
				'',
				'',
			],
			answer: 0,
			difficulty: 0.,
		},
*/
	],
};

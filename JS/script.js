const personas = [
  { 
    id: 1,
    nombre: 'Juan', 
    oficio: 'Programador Front End' 
  },
  { 
    id: 2,
    nombre: 'María', 
    oficio: 'Diseñador gráfico' 
  },
  { 
    id: 3,
    nombre: 'Pedro', 
    oficio: 'Programador BackEnd' 
  },
  { 
    id: 4,
    nombre: 'Ana', 
    oficio: 'Contador' 
  }
  ,
  { 
    id: 5,
    nombre: 'Luis', 
    oficio: 'Abogado' 
  }
  ,
  { 
    id: 6,
    nombre: 'Laura', 
    oficio: 'Médico' 
  },
  { 
    id: 7,
    nombre: 'Carlos', 
    oficio: 'Cocinero' 
  },
  { 
    id: 8,
    nombre: 'Sofía', 
    oficio: 'Arquitecto' 
  },
  { 
    id: 9,
    nombre: 'Alejandro', 
    oficio: 'Periodista' 
  },
  { 
    id: 10,
    nombre: 'Elena', 
    oficio: 'Profesor' 
  }
];

// Función para crear la lista de personas disponibles
function crearListaPersonas() {
  const lista = document.getElementById('personas-lista');
  lista.innerHTML = '';

  personas.forEach(persona => {
      const li = document.createElement('li');
      li.textContent = `${persona.nombre} - ${persona.oficio}`;
      li.dataset.id = persona.id;
      
      const contratarBtn = document.createElement('button');
      contratarBtn.textContent = 'Contratar';
      contratarBtn.addEventListener('click', () => contratarPersona(persona.id));
      
      li.appendChild(contratarBtn);
      lista.appendChild(li);
  });
}

// Función para contratar a una persona
function contratarPersona(id) {
  const persona = personas.find(p => p.id === id);
  if (!persona) return;

  const contratadas = document.getElementById('personas-contratadas');
  if (contratadas.querySelector(`[data-id="${id}"]`)) {
      swal("Error", "Esta persona ya ha sido contratada.", "error");
      return;
  }

  swal({
      title: "Contratar Persona",
      text: `¿Desea contratar a ${persona.nombre} como ${persona.oficio}?`,
      icon: "info",
      buttons: ["Cancelar", "Contratar"],
  }).then((confirmar) => {
      if (confirmar) {
          const li = document.createElement('li');
          li.textContent = `${persona.nombre} - ${persona.oficio}`;
          li.dataset.id = persona.id;
          contratadas.appendChild(li);
          swal("Éxito", `${persona.nombre} contratado como ${persona.oficio}.`, "success");
      }
  });
}

// Inicialización
crearListaPersonas();
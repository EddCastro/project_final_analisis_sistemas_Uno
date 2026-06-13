# Diagramas UML - Módulo 13 Expediente médico

## Caso de uso

```mermaid
flowchart LR
    Usuario[Usuario del sistema] --> UC1[Consultar expediente médico]
    Usuario --> UC2[Seleccionar paciente]
    Usuario --> UC3[Revisar datos generales]
    Usuario --> UC4[Revisar antecedentes y alergias]
    Usuario --> UC5[Revisar consultas recientes]

    UC2 --> UC1
    UC3 --> UC1
    UC4 --> UC1
    UC5 --> UC1
```

## Diagrama de clases

```mermaid
classDiagram
    class Paciente {
        +id
        +codigo
        +nombre
        +edad
        +dpi
        +tipoSangre
        +telefono
        +estado
    }

    class ExpedienteMedico {
        +pacienteId
        +fechaActualizacion
        +estado
        +consultarResumen()
    }

    class Antecedente {
        +descripcion
    }

    class Alergia {
        +descripcion
    }

    class Consulta {
        +fecha
        +motivo
        +responsable
        +observacion
    }

    Paciente "1" --> "1" ExpedienteMedico
    ExpedienteMedico "1" --> "*" Antecedente
    ExpedienteMedico "1" --> "*" Alergia
    ExpedienteMedico "1" --> "*" Consulta
```

## Diagrama de secuencia

```mermaid
sequenceDiagram
    actor Usuario
    participant Vista as Vista ExpedienteMedicoPage
    participant Datos as Datos locales del módulo

    Usuario->>Vista: Ingresa a /expediente-medico
    Vista->>Datos: Carga listado de pacientes
    Datos-->>Vista: Devuelve pacientes disponibles
    Usuario->>Vista: Selecciona un paciente
    Vista->>Datos: Busca expediente asociado
    Datos-->>Vista: Devuelve datos generales, antecedentes, alergias y consultas
    Vista-->>Usuario: Muestra expediente médico
```

## Verificación aplicada

Se ejecutó la compilación del frontend con:

```bash
npm run build
```

El resultado fue correcto, sin errores de compilación.

## Decisión humana tomada

Se implementó el módulo como una vista frontend base porque el requerimiento asignado solicita una vista de expediente médico asociada a un paciente. No se modificó autenticación, tenant ni backend, porque no forman parte directa del módulo 13.

## Cambios realizados

- Creación del módulo `expediente-medico`.
- Creación de la vista `ExpedienteMedicoPage.vue`.
- Registro de la ruta `/expediente-medico`.
- Agregado del enlace de navegación en el layout principal.
- Implementación de selector de paciente y secciones del expediente.

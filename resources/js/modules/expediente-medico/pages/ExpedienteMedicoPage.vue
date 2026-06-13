<template>
    <section class="expediente">
        <header class="expediente__header">
            <div>
                <p class="expediente__eyebrow">
                    Módulo 13
                </p>
                <h1 class="expediente__title">
                    Expediente médico
                </h1>
                <p class="expediente__subtitle">
                    Consulta base de expediente clínico asociado a un paciente.
                </p>
            </div>

            <label class="expediente__selector">
                Paciente
                <select v-model="selectedPatientId">
                    <option
                        v-for="patient in patients"
                        :key="patient.id"
                        :value="patient.id"
                    >
                        {{ patient.code }} - {{ patient.name }}
                    </option>
                </select>
            </label>
        </header>

        <section class="expediente__summary">
            <article class="expediente__card">
                <span class="expediente__label">Código</span>
                <strong>{{ selectedPatient.code }}</strong>
            </article>

            <article class="expediente__card">
                <span class="expediente__label">Paciente</span>
                <strong>{{ selectedPatient.name }}</strong>
            </article>

            <article class="expediente__card">
                <span class="expediente__label">Edad</span>
                <strong>{{ selectedPatient.age }} años</strong>
            </article>

            <article class="expediente__card">
                <span class="expediente__label">Estado</span>
                <strong>{{ selectedPatient.status }}</strong>
            </article>
        </section>

        <section class="expediente__content">
            <article class="expediente__panel">
                <h2>Datos generales</h2>

                <dl class="expediente__grid">
                    <div>
                        <dt>DPI</dt>
                        <dd>{{ selectedPatient.dpi }}</dd>
                    </div>
                    <div>
                        <dt>Tipo de sangre</dt>
                        <dd>{{ selectedPatient.bloodType }}</dd>
                    </div>
                    <div>
                        <dt>Teléfono</dt>
                        <dd>{{ selectedPatient.phone }}</dd>
                    </div>
                    <div>
                        <dt>Última actualización</dt>
                        <dd>{{ selectedPatient.lastUpdate }}</dd>
                    </div>
                </dl>
            </article>

            <article class="expediente__panel">
                <h2>Resumen clínico</h2>

                <div class="expediente__columns">
                    <div>
                        <h3>Antecedentes</h3>
                        <ul>
                            <li
                                v-for="item in selectedPatient.history"
                                :key="item"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>Alergias</h3>
                        <ul>
                            <li
                                v-for="item in selectedPatient.allergies"
                                :key="item"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </article>

            <article class="expediente__panel">
                <h2>Consultas recientes</h2>

                <table class="expediente__table">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Motivo</th>
                            <th>Responsable</th>
                            <th>Observación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="visit in selectedPatient.visits"
                            :key="visit.date + visit.reason"
                        >
                            <td>{{ visit.date }}</td>
                            <td>{{ visit.reason }}</td>
                            <td>{{ visit.doctor }}</td>
                            <td>{{ visit.note }}</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue';

const patients = [
    {
        id: 1,
        code: 'PAC-001',
        name: 'María López',
        age: 34,
        status: 'Expediente activo',
        dpi: '2458 96325 0101',
        bloodType: 'O+',
        phone: '5550-1234',
        lastUpdate: '13/06/2026',
        history: [
            'Hipertensión controlada',
            'Cirugía menor en 2022',
            'Control médico periódico',
        ],
        allergies: [
            'Penicilina',
            'Polvo',
        ],
        visits: [
            {
                date: '10/06/2026',
                reason: 'Dolor abdominal',
                doctor: 'Dr. Ramírez',
                note: 'Se indica seguimiento.',
            },
            {
                date: '02/06/2026',
                reason: 'Control general',
                doctor: 'Dra. Morales',
                note: 'Paciente estable.',
            },
        ],
    },
    {
        id: 2,
        code: 'PAC-002',
        name: 'Carlos Méndez',
        age: 47,
        status: 'En seguimiento',
        dpi: '3012 77845 0201',
        bloodType: 'A+',
        phone: '5551-4587',
        lastUpdate: '12/06/2026',
        history: [
            'Diabetes tipo 2',
            'Tratamiento nutricional',
        ],
        allergies: [
            'Sin alergias registradas',
        ],
        visits: [
            {
                date: '11/06/2026',
                reason: 'Control de glucosa',
                doctor: 'Dr. Castillo',
                note: 'Revisar valores en próxima cita.',
            },
        ],
    },
];

const selectedPatientId = ref(1);

const selectedPatient = computed(function () {
    return patients.find(function (patient) {
        return patient.id === Number(selectedPatientId.value);
    }) ?? patients[0];
});
</script>

<style scoped>
.expediente {
    max-width: 1100px;
}

.expediente__header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.expediente__eyebrow {
    color: #2563eb;
    font-weight: 700;
    margin-bottom: 0.35rem;
}

.expediente__title {
    font-size: 1.9rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.expediente__subtitle {
    color: #475569;
    line-height: 1.6;
}

.expediente__selector {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    min-width: 260px;
    color: #334155;
    font-weight: 600;
}

.expediente__selector select {
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 0.65rem;
    background: #ffffff;
}

.expediente__summary {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
}

.expediente__card,
.expediente__panel {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.expediente__card {
    padding: 1rem;
}

.expediente__label {
    display: block;
    color: #64748b;
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
}

.expediente__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.expediente__panel {
    padding: 1.25rem;
}

.expediente__panel h2 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
}

.expediente__panel h3 {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
}

.expediente__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
}

.expediente__grid dt {
    color: #64748b;
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
}

.expediente__grid dd {
    margin: 0;
    font-weight: 600;
}

.expediente__columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
}

.expediente__columns ul {
    margin: 0;
    padding-left: 1.2rem;
    line-height: 1.8;
}

.expediente__table {
    width: 100%;
    border-collapse: collapse;
}

.expediente__table th,
.expediente__table td {
    border-bottom: 1px solid #e2e8f0;
    padding: 0.75rem;
    text-align: left;
}

.expediente__table th {
    color: #475569;
    font-size: 0.85rem;
}

@media (max-width: 800px) {
    .expediente__header {
        flex-direction: column;
    }

    .expediente__summary,
    .expediente__grid,
    .expediente__columns {
        grid-template-columns: 1fr;
    }
}
</style>

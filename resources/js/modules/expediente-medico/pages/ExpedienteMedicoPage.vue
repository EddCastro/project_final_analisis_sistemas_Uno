<template>
    <section class="expediente">
        <header class="expediente__header">
            <p class="expediente__eyebrow">
                Módulo 13
            </p>
            <h1 class="expediente__title">
                Expediente médico
            </h1>
            <p class="expediente__subtitle">
                Vista base para consultar información clínica asociada a un paciente.
            </p>
        </header>

        <article class="expediente__card">
            <h2 class="expediente__section-title">
                Paciente seleccionado
            </h2>

            <dl class="expediente__grid">
                <div>
                    <dt>Código</dt>
                    <dd>PAC-001</dd>
                </div>
                <div>
                    <dt>Nombre</dt>
                    <dd>María López</dd>
                </div>
                <div>
                    <dt>Edad</dt>
                    <dd>34 años</dd>
                </div>
                <div>
                    <dt>Estado</dt>
                    <dd>Expediente activo</dd>
                </div>
            </dl>
        </article>

        <article class="expediente__card">
            <h2 class="expediente__section-title">
                Secciones del expediente
            </h2>

            <ul class="expediente__list">
                <li>Datos generales del paciente</li>
                <li>Antecedentes médicos</li>
                <li>Consultas recientes</li>
                <li>Observaciones clínicas</li>
            </ul>
        </article>
    </section>
</template>

<script setup>
</script>

<style scoped>
.expediente {
    max-width: 960px;
}

.expediente__header {
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

.expediente__card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.25rem;
    margin-bottom: 1rem;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.expediente__section-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
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

.expediente__list {
    margin: 0;
    padding-left: 1.2rem;
    color: #334155;
    line-height: 1.8;
}

@media (max-width: 760px) {
    .expediente__grid {
        grid-template-columns: 1fr;
    }
}
</style>

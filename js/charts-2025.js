document.addEventListener('DOMContentLoaded', function () {
    // Function to determine legend position based on screen width
    function getLegendPosition() {
        return window.innerWidth < 768 ? 'bottom' : 'right';
    }

    // Common Chart Options for Professional Look
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: getLegendPosition(),
                labels: {
                    font: {
                        family: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                        size: 12
                    },
                    padding: 20,
                    boxWidth: 15
                }
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#333',
                bodyColor: '#666',
                borderColor: '#ddd',
                borderWidth: 1,
                padding: 10,
                boxPadding: 4
            }
        },
        layout: {
            padding: 20
        }
    };

    // Chart 1: Atención General de la Gestión
    const ctxAtencion = document.getElementById('chartAtencionGeneral').getContext('2d');
    const chartAtencion = new Chart(ctxAtencion, {
        type: 'pie',
        data: {
            labels: [
                'Actualizaciones',
                'Cita Saime',
                'Registro Círculos de Abuelos',
                'Registro Adulto Mayor',
                'Recuperación de Contraseña',
                'Amor Mayor',
                'Registro Carnet de la Patria',
                'Registro de Abuelos',
                'Combustible',
                'Otros (Milicia, Discapacidad, etc.)'
            ],
            datasets: [{
                data: [2090, 240, 158, 152, 94, 35, 32, 26, 25, 23], // Sum of small items in 'Otros'
                backgroundColor: [
                    '#9a0000', // Red (Brand)
                    '#0883c9', // Blue (Brand)
                    '#ffcc00', // Yellow
                    '#4caf50', // Green
                    '#9c27b0', // Purple
                    '#ff5722', // Orange
                    '#795548', // Brown
                    '#607d8b', // Blue Grey
                    '#e91e63', // Pink
                    '#9e9e9e'  // Grey
                ],
                borderWidth: 1,
                borderColor: '#ffffff'
            }]
        },
        options: {
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                title: {
                    display: true,
                    text: 'Distribución de Atención General',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20
                    }
                }
            }
        }
    });

    // Chart 2: Operaciones 2025
    const ctxOperaciones = document.getElementById('chartOperaciones').getContext('2d');
    const chartOperaciones = new Chart(ctxOperaciones, {
        type: 'doughnut', // Doughnut for variety and professional look
        data: {
            labels: ['Hernia', 'Lipomas', 'Vesícula', 'Corte de trompas', 'Oftalmología', 'Histerectomía'],
            datasets: [{
                data: [87, 57, 32, 23, 10, 6],
                backgroundColor: [
                    '#9a0000',
                    '#d32f2f',
                    '#ef5350',
                    '#0883c9',
                    '#42a5f5',
                    '#90caf9'
                ],
                borderWidth: 1,
                borderColor: '#ffffff'
            }]
        },
        options: {
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                title: {
                    display: true,
                    text: 'Tipos de Intervenciones Quirúrgicas',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20
                    }
                }
            }
        }
    });

    // Handle resize to update legend position
    window.addEventListener('resize', function () {
        const newPosition = getLegendPosition();

        if (chartAtencion.options.plugins.legend.position !== newPosition) {
            chartAtencion.options.plugins.legend.position = newPosition;
            chartAtencion.update();
        }

        if (chartOperaciones.options.plugins.legend.position !== newPosition) {
            chartOperaciones.options.plugins.legend.position = newPosition;
            chartOperaciones.update();
        }
    });
});

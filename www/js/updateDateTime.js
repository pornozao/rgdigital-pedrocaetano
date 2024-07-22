document.addEventListener("DOMContentLoaded", function() {
    var updateInfo = document.getElementById('update-info');
    var timerId;

    // Função para atualizar a data e hora
    function updateDateTime() {
        var now = new Date();
        var formattedDate = now.toLocaleDateString('pt-BR');
        var formattedTime = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        updateInfo.innerHTML = `<i class="ri-checkbox-circle-fill"></i> Atualizado em ${formattedDate} às ${formattedTime}`;
    }

    // Chamando a função para a primeira atualização
    updateDateTime();

    // Configurando um temporizador para atualizar a cada minuto
    timerId = setInterval(updateDateTime, 60000); // 60000 milissegundos = 1 minuto
});

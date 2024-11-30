hora = new Date()
horario = hora.getHours()
minutos = hora.getMinutes()

agora = document.getElementById('hora')
agora.innerHTML = `Agora sao ${horario }:${minutos } GMT`

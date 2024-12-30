export function showNotification(message) {
  const notification = document.createElement('div')
  notification.className = 'notification'
  notification.textContent = message

  document.body.appendChild(notification)

  // Força um reflow para garantir que a animação funcione
  notification.offsetHeight

  // Adiciona classe para mostrar com animação
  notification.classList.add('show')

  setTimeout(() => {
    notification.classList.remove('show')
    setTimeout(() => {
      notification.remove()
    }, 300) // Tempo da animação de saída
  }, 2000)
}
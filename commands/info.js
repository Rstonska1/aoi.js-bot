module.exports = ({
  name: "информация",
  code: `
  $title[Информация о боте]
  $description[
  **Имя бота: MiFilka Bot

  Версия бота: 0.4.1
  Версия aoi.js: 6.7.1
  Версия ядра: $nodeVersion

  Пинг бота: $pingMS
  Время работы бота: $uptime
  Оперативная память: $ram
  Нагрузка процессора: $cpu[process]
  Нагрузка системы: $cpu[os]
  Количество переменных: $variablesCount

  Прогресс переноса бота: 7%**
  ]
  $footer[Разработчик: meow <3]
  `
})
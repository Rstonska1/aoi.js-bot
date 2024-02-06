module.exports = ({
    name: "статистика",
    code: `
$title[Статистика канала]
$description[
**Статистика:

👥 | Подписчики: $getUserVar[subs]

👍 | Лайки: $getUserVar[like]

🗨️ | Комментарии: $getUserVar[comm]

💰 | Донаты: $getUserVar[donate]

Кнопки:

🥉 | Бронзовая: $getUserVar[bronze]**
]
$footer[Разработчик: meow <3]
`
});